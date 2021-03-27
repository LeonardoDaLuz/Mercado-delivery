const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost", {useUnifiedTopology: true })
    .then(conn => global.conn = conn.db("mercado-delivery-db"))
    .catch(err => console.log(err)); 

function findAll(collection, callback){  
    global.conn.collection(collection).find({}).toArray(callback);
}

function insert(collection, obj, callback){  
    global.conn.collection(collection).insert(obj,callback);
}

module.exports = { findAll, insert }