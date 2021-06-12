
var express = require('express');
const ProductsController = require('../controllers/Products');

module.exports = (app) => {

    app.get("/produtos/", ProductsController.listProducts);

    app.get("/produtos/:cat1?/:cat2?/:cat3?/:cat4?/:cat5?/:from/:to", ProductsController.listProducts);

    app.get("/produtos/:cat1?/:cat2?/:cat3?/:cat4?/:cat5?/:to", ProductsController.listProducts);

    app.put("/produto/", ProductsController.updateProduct);

    app.get("/produto/:id", ProductsController.getProduct);    
    
    app.put("/produto/:id", ProductsController.updateProduct);

    app.get("/produto2/:id", ProductsController.getProduct2);

    app.post("/produto2/:id", ProductsController.updateProduct);
    app.put("/produto2/:id", ProductsController.updateProduct);
}