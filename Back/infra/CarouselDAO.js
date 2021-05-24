

class CarouselDAO {
    constructor(_db) {
        this.db = _db;
    }

    lista() {

    }

    adicionaImagem(path, callback) {
        this.db.collection('carousel').insertOne(path, callback);
    }
}

module.exports = CarouselDAO;