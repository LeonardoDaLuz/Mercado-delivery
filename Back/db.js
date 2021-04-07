const MongoClient = require("mongodb").MongoClient;

function findAll(collection, callback) {
    global.conn.collection(collection).find({}).toArray(callback);
}

async function GetAutoIncrementIndex(collection) {
    let obj = await global.conn.collection("autoIncrementCounters").findOne({ "collection_name": collection });
    console.log(obj);
    return obj;
}
async function AddAutoIncrementIndex(collection) {
    let obj = await global.conn.collection("autoIncrementCounters").update({ "collection_name": collection }, { $inc: { countIndex: 1 } });
    return obj;
}

async function getProduto(codigo) {
    let produto = await global.conn.collection("produtos").findOne({ codigo: parseInt(codigo) });
    return produto;
}

async function listaProdutos(from, to, criterio = {}) {
    let produtos = await global.conn.collection("produtos").find(criterio).toArray();
    return produtos.slice(from, to);
}

async function insertOne(collection, obj, callback) {
    //console.log("insert into "+collection+": "+JSON.stringify(obj));
    return await global.conn.collection(collection).insertOne(obj, callback);
}

async function insertMany(collection, objs, callback) {
    await global.conn.collection(collection).insert(objs, callback);
}

module.exports = (async () => {

    console.log("Conectando com db...");

    await MongoClient.connect("mongodb://localhost", { useUnifiedTopology: true })
        .then(conn => {
            global.conn = conn.db("mercado-delivery-db");
            console.log("Conectado.");
        })
        .catch(err => {
            console.error("não conseguiu conectar com o db\n");
            console.log(err);
            process.exit();
        });

    return { findAll, insertOne, insertMany, GetAutoIncrementIndex, AddAutoIncrementIndex, getProduto, listaProdutos }
});