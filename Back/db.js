const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

async function findAll(collection) {
    return await global.conn.collection(collection).find({}).toArray();
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

async function getProdutoPorObjId(objectId) {

    let produto = await global.conn.collection("produtos").findOne({ _id: new ObjectId(objectId) });
    return produto;
}

async function getCarrinho(conta) {
    let produto = await global.conn.collection("carrinhos").findOne({ conta: parseInt(conta) });
    return produto;
}

async function updateProduto(objectId, doc) {
   
    let resp = await global.conn.collection("produtos").updateOne({ _id: new ObjectId(objectId) }, { $set: doc });
    return resp.result.nModified == 1;
}

async function addProdutoNoCarrinho(conta, produto, quantidade, callback) {
    quantidade = parseInt(quantidade);
    if (isNaN(quantidade))
        quantidade = 0;

    let carrinho = await global.conn.collection("carrinhos").findOne({ conta: parseInt(conta) });

    if (carrinho == null)
        return null;

    let produtos = carrinho.produtos;

    if (produtos[produto] === undefined) {
        produtos[produto] = { quantidade: quantidade, preco: 25 }
    } else {
        produtos[produto].quantidade += quantidade;
    }

    if (produtos[produto].quantidade < 1)
        delete produtos[produto];

    let resp = await global.conn.collection("carrinhos").updateOne({ conta: parseInt(conta) },
        {
            $set: { produtos: produtos }
        }
    );

    if (resp.result.nModified == 0)
        return null;

    return carrinho;
}

async function editarQuantidadeDoProdutoAoCarrinho(conta, produto, quantidade, callback) {
    quantidade = parseInt(quantidade);
    if (isNaN(quantidade))
        quantidade = 0;

    let carrinho = await global.conn.collection("carrinhos").findOne({ conta });

    if (carrinho == null)
        return null;

    let produtos = carrinho.produtos;

    if (quantidade > 0) {
        if (produtos[produto] === undefined) {
            produtos[produto] = { quantidade, preco: 25 }
        } else {
            produtos[produto].quantidade = quantidade;
        }
    } else {
        delete produtos[produto];
    }

    let resp = await global.conn.collection("carrinhos").updateOne({ conta },
        {
            $set: { produtos: produtos }
        }
    );

    if (resp.result.nModified == 0)
        return null;

    return carrinho;
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

    return {
        findAll, insertOne, insertMany, GetAutoIncrementIndex, AddAutoIncrementIndex, getProduto, listaProdutos, getCarrinho, addProdutoNoCarrinho, getProdutoPorObjId,
        editarQuantidadeDoProdutoAoCarrinho, updateProduto
    }
});