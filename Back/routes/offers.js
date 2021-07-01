
const OffersController = require('../controllers/Offers');

module.exports = (app) => {


    app.get("/Offers/", OffersController.listOffers);
    app.post("/Offer/", OffersController.updateOrCreateOffer);
    app.put("/Offer/:id?", OffersController.updateOrCreateOffer);
    app.delete("/Offer/:id", OffersController.deleteOffer);

}