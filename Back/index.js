var express = require('express');
var bodyParser = require('body-parser');

var produtosColecao = null //require('./produtos.json');
const { NetworkAuthenticationRequire } = require('http-errors');
const cors = require('cors');
var consign = require('consign');

main();

async function main() {

    global.db = await require('./db')();
    var app = express();

    app.use(express.static('public'));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
        res.header('Access-Control-Expose-Headers', 'Content-Length');
        res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');

        next();
    });

    consign()
        .include('routes') //incorpora todo codigo dentro dessa pasta, para dentro do app.
        .into(app);

    app.get('/importaprodutosjson', (req, resp) => {
        (async () => {

            let algunsProd = produtosColecao;
            let result = null;
            for (let prod of algunsProd) {
                let newIndex = await global.db.GetAutoIncrementIndex("produtos");
                let bosta = newIndex.countIndex + 1;
                prod.codigo = bosta;
                console.log(prod.codigo)
                result = await global.db.insert("produtos", prod);
                await global.db.AddAutoIncrementIndex("produtos");
            }

            resp.json(result);
        }
        )();
    })

    app.get("/carrinho", async function (req, resp) {
        try {
            let carrinho = await global.db.getCarrinho(0);
            await loadCarrinhoProductDatas(carrinho);
            resp.json(carrinho);
        } catch (e) {
            resp.stats(400).send(e);
        }
    });

    async function loadCarrinhoProductDatas(carrinho) {

        for (var key in carrinho.produtos) {
            let prod = carrinho.produtos[key];
            prod.data = await global.db.getProdutoPorObjId(key);
        }

        return carrinho;
    }

    app.post("/carrinho/addproduto/:id/:quantidade", async function (req, resp) {

        //tem que colocar um filtro aqui pra ele n deixar add um produto com id invalido senao vai crashar
        let carrinho = await global.db.addProdutoNoCarrinho(0, req.params.id, req.params.quantidade);

        if (carrinho == null) {
            resp.status(400).send('failed');
            return;
        }

        await loadCarrinhoProductDatas(carrinho);
        resp.json(carrinho);
    });

    app.post("/carrinho/modificarQuantidadeProduto/:objId/:quantidade", async function (req, resp) {

        //tem que colocar um filtro aqui pra ele n deixar add um produto com id invalido senao vai crashar
        let carrinho = await global.db.editarQuantidadeDoProdutoAoCarrinho(0, req.params.objId, req.params.quantidade);

        if (carrinho == null) {
            resp.status(400).send('failed');
            return;
        }

        await loadCarrinhoProductDatas(carrinho);
        resp.json(carrinho);
    });


    app.get("/:teste?/", async function (req, resp) {
        console.log(req.query.name);
        resp.json(req.query)
    });

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

    app.listen(3001, () => console.log("Servidor rodando"));
}