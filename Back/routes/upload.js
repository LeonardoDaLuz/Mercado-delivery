
var express = require('express');
const UploadController = require('../controllers/Upload.js');

module.exports = (app) => {

    app.post("/imageUpload/", UploadController.uploadImages);
}