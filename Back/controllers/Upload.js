const formidable = require('formidable');
const ObjectId = require("mongodb").ObjectID;
const fs = require('fs');
const path = require('path');

class UploadController {

    static uploadImages(req, res, next) {
        let now = new Date();
        UploadController.saveImagesFromRequisitionOnDisk(req, 'public/img/uploads/' + now.getMonth() + '-' + now.getFullYear() + '/', now.getTime())
            .then(async filePathList => {
                res.json(filePathList);
            }).catch(err => {
                res.status(400).send('error'); 
            })
    }


    static saveImagesFromRequisitionOnDisk(req, destination, sufix = '') {
        return new Promise((resolve, reject) => {

            const form = formidable();

            let fileList = [];
            console.log('1');
            form.parse(req, (err, fields, files) => {
                console.log('2');
                Object.keys(files).forEach(key => {
                    let file = files[key];
                    if (file.type.includes("image")) {

                        let oldPath = file.path;
                        //console.log(file);
                        let ext = path.extname(file.name);
                        let fileNameWithoutExt = file.name.replace(ext, '');

                        if (!fs.existsSync(destination)){
                            fs.mkdirSync(destination);
                        }

                        const newPath = `${destination}${fileNameWithoutExt}-${sufix}${ext}`;

                        fs.renameSync(oldPath, newPath);
                        fileList.push(newPath.replace('public/',''));
                    } else {

                    }
                })
                resolve(fileList);
            });
        });
    }
}

module.exports = UploadController;