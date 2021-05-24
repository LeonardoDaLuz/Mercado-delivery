const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const CarouselDAO = require('../infra/CarouselDAO');
const carouselDAO = new CarouselDAO(global.conn);

class CarouselController {

    static adicionaImagem(req, res, next) {
        saveFilesFromRequisitionOnDisk(req, 'public/img/uploads/carousel/', Date.now())
            .then(filePathList => {
                saveFilePathsOnDb(filePathList);
                res.send('file Fuploaded');
            }).catch(err => {
                res.status(400).send('error');
            })
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
                    console.log(file);
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

function isCorrectType(file) {

}

function saveFilePathsOnDb(paths) {
    paths.forEach(filePath => {
        global.conn.collection('imagens_carrosel').insertOne({ path: filePath });
    });
}
module.exports = CarouselController;