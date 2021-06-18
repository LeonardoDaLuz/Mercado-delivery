var env = process.argv[2] || 'dev';
require('express-async-errors');
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
        res.header('Access-Control-Allow-Origin', '*');
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


    app.use((error, req, resp, next) => {
        console.log("\x1b[31m", error.stack);

        if (env === 'dev') {
            resp.status(500).send("INTERNAL SERVER ERROR: \n\n" + error.stack);
        } else {
            resp.status(500).send("Internal server Error...");
        }
    })

    app.listen(3001, () => console.log("Servidor rodando"));


}