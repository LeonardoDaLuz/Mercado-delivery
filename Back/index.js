var express = require('express');
var bodyParser = require('body-parser');
const { response } = require('./app2');
var produtosColecao = null //require('./produtos.json');
const { NetworkAuthenticationRequire } = require('http-errors');
const cors = require('cors');

main();

async function main() {

    global.db = await require('./db')();
    var app = express();

    app.use(express.static('public'));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
        res.header('Access-Control-Expose-Headers', 'Content-Length');
        res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
        
        next();
      });

      /*

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        app.use(cors());
        next();
    });*/

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

    app.get("/produtos/:from/:to", async function (req, resp) {
        produtosColecao = await global.db.listaProdutos(req.params.from,req.params.to);
        resp.json(produtosColecao);
    });

    app.get("/produto/:id", async function (req, resp) {
        let produto = await global.db.getProduto(req.params.id);
        console.log(produto)
        resp.json(produto);
    });

    app.post('/insert', (req, res) => {
        res.json(req.body);
    })

    app.listen(3001, () => console.log("Servidor rodando"));
}