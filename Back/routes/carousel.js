const formidable = require('formidable');
const fs = require('fs');
const path = require('path');


module.exports = (app) => {

    app.post("/carousel/addImages", (req, res, next) => {

        saveFilesFromRequisition(req, 'public/img/uploads/carousel/', Date.now())
            .then(fileList => {
                console.log(fileList);
                res.send('file uploaded');
            })

        res.status(400).send('error');
    });
}

function saveFilesFromRequisition(req, destination, sufix = '') {
    return new Promise((resolve, reject) => {
        const form = new formidable.IncomingForm();
        let fileList = [];
        form.parse(req, (err, fields, files) => {
            Object.keys(files).forEach(key => {
                let file = files[key];

                let oldPath = file.path;
                let ext = path.extname(file.name);
                let fileNameWithoutExt = file.name.replace(ext, '');

                const newPath = `${destination}${fileNameWithoutExt}-${sufix}${ext}`;

                fs.renameSync(oldPath, newPath);

                fileList.push(newPath);
            })
            resolve(fileList);
        });
    });

}