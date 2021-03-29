var express = require('express');
var bodyParser = require('body-parser');
const { response } = require('./app2');
var produtosColecao = require('./produtos.json');
const { NetworkAuthenticationRequire } = require('http-errors');
const cors = require('cors');
global.db = require('./db');

//Load json

var app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use ((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*" );
    app.use(cors());
    next();
});
app.get("/", function (req, resp) {
    global.db.findAll("customers", (err, doc)=> resp.json(doc));
});

app.get("/produtos", function (req, resp) {
    console.log(produtosColecao[803])
    resp.json(produtosColecao);
});

app.get("/produto/:id", function (req, resp) {
    console.log(produtosColecao[req.params.id].descricao)
    resp.json(produtosColecao[req.params.id]);
});

app.post('/insert', (req, res)=> {
    res.json(req.body);
})

app.listen(3001, () => console.log("Servidor rodando"));