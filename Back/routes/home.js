const HomeController = require('../controllers/Home');

module.exports = (app) => {

    app.get("/home", HomeController.getHomeData);

}
