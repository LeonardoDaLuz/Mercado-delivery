
const OffersController = require('../controllers/Offers');

module.exports = (app) => {


    app.get("/Offers/", OffersController.listOffers);

   
    
}