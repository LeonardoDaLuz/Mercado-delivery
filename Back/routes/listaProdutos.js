
const { resolveInclude } = require('ejs');
var express = require('express');

module.exports = (app) => {

    /*
    app.get("/produtos/:from/:to", async function (req, resp) {
        produtosColecao = await global.db.listaProdutos(req.params.from, req.params.to);
        resp.json(produtosColecao);
    });*/

    app.get("/produtos/:cat1?/:cat2?/:cat3?/:cat4?/:cat5?/:from/:to", async function (req, resp) { //obtem lista com os produtos, filtrado por categorias

        console.log(req.params);
        let query = {}

        let keys = Object.keys(req.params);
        keys.forEach((key, index)=> {
            if(index< keys.length-2) {
                if(req.params[key]!==undefined) {
                    query["categorias."+(index)] = req.params[key];
                }
            }
        })

        produtosColecao = await global.db.listaProdutos(req.params.from, req.params.to, query);
        resp.json(produtosColecao);
    });

    app.get("/produto/:id", async function (req, resp) {
        let produto = await global.db.getProduto(req.params.id);
        console.log(produto)
        resp.json(produto);
    });
    //http://localhost:3001/carrinho/modificarQuantidadeProduto/
    app.get("/produto2/:id", async function (req, resp) {
        let produto = await global.db.getProdutoPorObjId(req.params.id);
        console.log(produto)
        resp.json(produto);
    });
}