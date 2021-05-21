
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
    function filtraString(valor) {
        let val = valor;
        return val === null || isNaN(val) ? 0 : val;
    }

    app.get("/produtos/:cat1?/:cat2?/:cat3?/:cat4?/:cat5?/:from/:to", async function (req, resp) { //obtem lista com os produtos, filtrado por categorias 

        let query = {};


        let min = filtraFloat(req.query.menorPreco);
        let max = filtraFloat(req.query.maiorPreco);
        let busca = filtraString(req.query.busca);
        query.preco = { $gte: 0.01 };

        if (req.query.busca != '') {
            query.$or = 
            [
                { titulo: { $regex: req.query.busca, $options: 'i' }},
                { descricao: { $regex: req.query.busca, $options: 'i' }},
            ]
        }

        if (min !== 0 && max !== 0) {
            query.preco = { $gte: filtraFloat(req.query.menorPreco), $lte: filtraFloat(req.query.maiorPreco) }
        }
        else if (min !== 0) {
            query.preco = { $gte: filtraFloat(req.query.menorPreco) }
        }
        else if (max !== 0) {
            query.preco = { $lte: filtraFloat(req.query.maiorPreco) }
        }

        let sort = {};
        if (req.query.sort !== undefined) {
            if (req.query.sort == "maiorPreco")
                sort = { preco: -1 };
            if (req.query.sort == "menorPreco")
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

        let statusCode = produtosColecao.length == 0 ? 204 : 200;

        resp.status(statusCode).json(produtosColecao);
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