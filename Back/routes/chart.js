const ChartController = require('../controllers/Chart');

module.exports = (app) => {

    app.get("/carrinho", ChartController.getChart);

    app.post("/carrinho/addproduto/:id/:quantidade", ChartController.addProductInChart);

    app.post("/carrinho/modificarQuantidadeProduto/:objId/:quantidade", ChartController.modifyQuantityOnChart);

}
