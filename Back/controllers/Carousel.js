const formidable = require('formidable');
const ObjectId = require("mongodb").ObjectID;
const fs = require('fs');
const path = require('path');

class CarouselController {

    static adicionaImagem(req, res, next) {
        saveFilesFromRequisitionOnDisk(req, 'public/img/uploads/carousel/', Date.now())
            .then(async filePathList => {
                await saveFilePathsOnDb(filePathList);
                CarouselController.obterImagens(req, res);
            }).catch(err => {
                res.status(400).send('error');
            })

    }

    static async obterImagens(req, res) {
        let listaImagens = await global.conn.collection('imagens_carrossel').find({}).toArray();

        res.json({ images: listaImagens })

    }

    static async deletarImagens(req, res, next) {
        let _id = new ObjectId(req.params.id);
        let image = await global.conn.collection("imagens_carrossel").findOneAndDelete({ _id });
        deleteFile("public/" + image.value.path);
        CarouselController.obterImagens(req, res, next);
    }
}

function saveFilesFromRequisitionOnDisk(req, destination, sufix = '') {
    return new Promise((resolve, reject) => {

        const form = formidable();

        let fileList = [];
        form.parse(req, (err, fields, files) => {
            Object.keys(files).forEach(key => {
                let file = files[key];
                if (file.type.includes("image")) {

                    let oldPath = file.path;
                    //console.log(file);
                    let ext = path.extname(file.name);
                    let fileNameWithoutExt = file.name.replace(ext, '');
                    const newPath = `${destination}${fileNameWithoutExt}-${sufix}${ext}`;

                    fs.renameSync(oldPath, newPath);
                    fileList.push(newPath);
                } else {

                }
            })
            resolve(fileList);
        });
    });
}

function deleteFile(path) {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path, (err) => console.log(err));
    }
}

async function saveFilePathsOnDb(paths) {
    await paths.forEach(async (filePath) => {
        filePath = filePath.replace("public/", "");
        await global.conn.collection('imagens_carrossel').insertOne({ path: filePath });
    });
}

module.exports = CarouselController;