const CarouselController = require('../controllers/Carousel');
console.log(CarouselController)

module.exports = (app) => {

    app.post("/carousel/addImages", CarouselController.adicionaImagem);
}

