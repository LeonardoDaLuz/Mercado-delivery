
const { resolveInclude } = require('ejs');
var express = require('express');

module.exports = (app) => {

    /*
    app.get("/produtos/:from/:to", async function (req, resp) {
        produtosColecao = await global.db.listaProdutos(req.params.from, req.params.to);
        resp.json(produtosColecao);
    });*/

    function filtraFloat(valor) {
        let val = parseFloat(valor);
        return isNaN(val) ? 0 : val;
    }

    app.get("/produtos/:cat1?/:cat2?/:cat3?/:cat4?/:cat5?/:from/:to", async function (req, resp) { //obtem lista com os produtos, filtrado por categorias

        let query = {};


        let min = filtraFloat(req.query.minPrice);
        let max = filtraFloat(req.query.maxPrice);

        if (min !== 0 && max !== 0) {
            query.preco = { $gte: filtraFloat(req.query.minPrice), $lte: filtraFloat(req.query.maxPrice) }
        }
        else if (min !== 0) {
            query.preco = { $gte: filtraFloat(req.query.minPrice) }
        }
        else if (max !== 0) {
            query.preco = { $lte: filtraFloat(req.query.maxPrice) }
        }

        let sort = {};
        if (req.query.order !== undefined) {
            if (req.query.order == "maiorPreco")
                sort = { preco: -1 };
            if (req.query.order == "menorPreco")
                sort = { preco: 1 };
        }

        let keys = Object.keys(req.params);
        keys.forEach((key, index) => {
            if (index < keys.length - 2) {
                if (req.params[key] !== undefined) {
                    query["categorias." + (index)] = req.params[key];
                }
            }
        })

        console.log(query);
        produtosColecao = await global.db.listaProdutos(req.params.from, req.params.to, query, sort);
        resp.json(produtosColecao);
    });

    app.get("/atualiza-produtos/", async function (req, resp) {
        produtosColecao = await global.db.listaProdutos(req.params.from, req.params.to);
        produtosColecao.forEach(p => {
            p.preco = parseFloat(p.preco);
            global.db.updateProduto(p._id, p)
        })
        let produto = await global.db.getProduto(req.params.id);
        console.log(produto)
        resp.json(produto);
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