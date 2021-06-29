const formidable = require('formidable');
const ObjectId = require("mongodb").ObjectID;
const fs = require('fs');
const path = require('path');

class HomeController {


    static async getHomeData(req, res) {
        
        let listaImagens = await global.conn.collection('imagens_carrossel').find({}).toArray();


        res.json({
            offerDay: await HomeController.getOfferProducts('day'),
            offerWeek: await HomeController.getOfferProducts('week'),
            offerMonth: await HomeController.getOfferProducts('month'),
        })

    }

    static async getOfferProducts(type) {

        let query = {
            'offer.enabled': true,
            'offer.type': type,
        }

        let products = await global.conn.collection('produtos').aggregate([{ $match: query }, { $sample: { size:12 } }]).toArray();

        return products;

    }

}

module.exports = HomeController;