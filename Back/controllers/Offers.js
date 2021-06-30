const ObjectId = require("mongodb").ObjectID;
const waitForSeconds = require('../utilities/waitForSeconds');

class OfferController {
    
    static async createOffer(req, resp) {

    }

    static async listOffers(req, resp) {
        let offers = await global.conn.collection('offers').find({}).toArray();

        resp.json({ data: offers });

    }

}

module.exports = OfferController;