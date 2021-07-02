const ObjectId = require("mongodb").ObjectID;
const waitForSeconds = require('../utilities/waitForSeconds');

class OfferController {


    static async saveOffers(req, resp) {

        let receivedOffers = req.body;

        if (Object.keys(receivedOffers.list).length === 0) {
            resp.status(400).send('error, missing body')
            return;
        }

        let filteredOffers = {
            list: receivedOffers.list.map(offer => {
                return {
                    name: offer.name,
                    description: offer.description,
                    start_time: offer.start_time,
                    end_time: offer.end_time,
                    thumbnail: offer.thumbnail,
                    banner: offer.banner
                }
            })
        }

        let result = await global.conn.collection('offers').updateOne({}, { $set: filteredOffers });

        resp.json({ result: result.result, data: filteredOffers });
    }

    static async listOffers(req, resp) {

        let offers = await global.conn.collection('offers').findOne({});

        resp.json({ data: offers });

    }

}

module.exports = OfferController;