const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img/uploads/carousel');
    },
    filename: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        let name = file.originalname.replace(ext, "");
        cb(null, `${name}-${Date.now()}.${ext}`)
    }
})
const upload = multer({ storage });

module.exports = (app) => {

    app.post("/carousel/addImages", upload.single('file'), async function (req, resp) {

        console.log(req);
        //tem que colocar um filtro aqui pra ele n deixar add um produto com id invalido senao vai crashar
        console.log("kct");
        resp.send("Upload realizado com sucesso");
    });
}