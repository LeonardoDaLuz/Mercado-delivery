var express = require('express');
var bodyParser = require('body-parser');
const { response } = require('./app2');

global.db = require('./db');

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, resp) {
    global.db.findAll("customers", (err, doc)=> resp.json(doc));
});

app.post('/insert', (req, res)=> {
    res.json(req.body);
})

app.listen(3001, () => console.log("Servidor rodando"));