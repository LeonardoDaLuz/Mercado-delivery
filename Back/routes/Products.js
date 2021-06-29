
var express = require('express');
const ProductsController = require('../controllers/Products');

module.exports = (app) => {

    //app.get("/produtos/", ProductsController.listProducts);

    //app.get("/produtos/:cat1?/:cat2?/:cat3?/:cat4?/:cat5?/:from/:to", ProductsController.listProducts);

    //app.get("/produtos/:cat1?/:cat2?/:cat3?/:cat4?/:cat5?/:to", ProductsController.listProducts);

    app.get("/SearchProducts/", ProductsController.listProducts);

    app.get("/SearchProducts/:cat1?/:cat2?/:cat3?/:cat4?/:cat5?/:from/:to", ProductsController.listProducts);
    
    app.get("/SearchProducts/:cat1?/:cat2?/:cat3?/:cat4?/:cat5?/:to", ProductsController.listProducts);

    app.get("/product/:id", ProductsController.getProduct);

    app.delete("/product/:id", ProductsController.deleteProduct);

    app.post("/product/:id", ProductsController.updateProduct);
    
    app.put("/product/:id", ProductsController.updateProduct);
    
    app.post('/like/:conta/:objId', async (req, res) => {

        let conta = parseInt(req.params.conta)
        let produto = await global.db.getProdutoPorObjId(req.params.objId);

        if (produto.likes === undefined) {
            produto.likes = [];
        }

        let index = produto.likes.indexOf(conta);
        if (index == -1) {
            produto.likes.push(conta)
        } else {
            produto.likes.splice(index, 1);
        }

        let update = await global.db.updateProduto(req.params.objId, produto);

        if (update)
            res.json(produto)
        else
            res.status(400).send('failed');

    })
    
}