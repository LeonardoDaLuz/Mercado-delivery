const ObjectId = require("mongodb").ObjectID;
const waitForSeconds = require('../utilities/waitForSeconds');

class OfferController {


    static async updateOrCreateOffer(req, resp) {

        let receivedOffer = req.body;

        if (Object.keys(receivedOffer).length === 0) {
            resp.status(400).send('error, missing body')
            return;
        }

        let filteredOffer = {
            name: receivedOffer.name,
            description: receivedOffer.description,
            start_time: receivedOffer.start_time,
            end_time: receivedOffer.end_time,
            thumbnail: receivedOffer.thumbnail,
            banner: receivedOffer.banner
        }

        let result;

        if (req.params.id) {
            result = await global.conn.collection('offers').updateOne({ _id: new ObjectId(req.params.id) }, { $set: filteredOffer });
        }
        else {
            result = await global.conn.collection('offers').insertOne(filteredOffer);
        }

        console.log('result', result);

        let offers = await global.conn.collection('offers').find({}).toArray();

        resp.json({ result, data: offers });
    }

    static async deleteOffer(req, resp) {

    }

    static async listOffers(req, resp) {
        let offers = await global.conn.collection('offers').find({}).toArray();

        resp.json({ data: offers });

    }

}

module.exports = OfferController;