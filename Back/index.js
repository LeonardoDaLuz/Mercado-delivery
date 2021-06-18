var express = require('express');
var bodyParser = require('body-parser');

var produtosColecao = null //require('./produtos.json');
const { NetworkAuthenticationRequire } = require('http-errors');
const cors = require('cors');
var consign = require('consign');


main();

async function main() {

    global.db = await require('./db')();
    global.logErrorToFront = await require('./utilities/logErrorToFront');
    var app = express();

    app.use(express.static('public'));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', /*req.get('Origin') || */'*');
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
        res.header('Access-Control-Expose-Headers', 'Content-Length');
        res.header('Access-Control-Allow-Headers', '*');
        res.header('Access-Control-Max-Age', 86400); //preflight é necessario para  alguns recursos, como por exemplo o cliente mandar jsons.
        next();
    });

    consign()
        .include('routes') //incorpora todo codigo dentro dessa pasta, para dentro do app.
        .into(app);

        /*
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
    })*/
   

    app.listen(3001, () => console.log("Servidor rodando"));
}