
const { resolveInclude } = require('ejs');
var express = require('express');
let Categories = require('../controllers/Categories');

module.exports = (app) => {
    app.get("/CalculateCategory", Categories.calculateCategory);   

    app.get("/GetCategories", Categories.getCategories);

    app.get("/RenameCategory/:from/:to", Categories.renameCategory);
}