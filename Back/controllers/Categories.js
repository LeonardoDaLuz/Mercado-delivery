const ObjectId = require("mongodb").ObjectID;
let nestedPropertySeletor = require('./../utilities/nestedPropertySelector');

class Categories {
    static async calculateCategory(req, resp) {
        console.log("calculando categorias");

        let produtosColecao = await global.db.findAll("produtos");

        let hierarquia = {};

        produtosColecao.forEach(p => {
            hierarquia = Categories.inclui(p.categories, 0, hierarquia);

        });

        Categories.calculateCategoryProductQuantities();

        resp.json({ result: 'ok', data: hierarquia });
    }

    static inclui(listaCategorias, index, hierarquia) {
        if (listaCategorias[index] === undefined) {
            return hierarquia;
        }

        if (hierarquia[listaCategorias[index]] == undefined) {
            hierarquia[listaCategorias[index]] = Categories.inclui(listaCategorias, index + 1, {});
        } else {
            hierarquia[listaCategorias[index]] = Categories.inclui(listaCategorias, index + 1, hierarquia[listaCategorias[index]]);
        }

        return hierarquia;
    }

    static async getCategories(req, resp) {
        console.log("obtendo categorias");

        let categories = await global.conn.collection("categories").findOne({});

        delete categories._id;

        resp.json({ result: 'ok', data: categories });
    }

    static async renameCategory(req, resp) {
        console.log("obtendo categorias");

        let categories = await global.conn.collection("categories").findOne({});

        nestedPropertySeletor(categories, req.params.from).renameTo(req.params.to);

        let _id = categories._id;
        delete categories._id;

        let result = await global.conn.collection("categories").updateOne({ _id: new ObjectId(_id) }, { $set: categories });

        let modifiedProducts = await Categories.renameProductsCategories(req.params.from, req.params.to);

        resp.json({ result: 'ok', data: categories, modifiedProducts });

        Categories.calculateCategoryProductQuantities();
    }

    static async renameProductsCategories(oldCategoryFullName, newCategoryName) {
        let categoriesSplited = oldCategoryFullName.split('.');
        let index = categoriesSplited.length - 1;
        let categoryOldName = categoriesSplited[index];

        if (index === -1)
            return;
        let indexPath = 'categories.' + index;

        //let query = {}
        //query[indexPath] = categoryName;

        let collection = global.conn.collection('produtos');
        let modifications = 0;

        let result = await collection.find({ [indexPath]: categoryOldName }).forEach((doc) => {

            collection.updateOne({ _id: doc._id }, { $set: { [indexPath]: newCategoryName } })
            modifications++;
        });

        return modifications;
    }

    static async calculateCategoryProductQuantities() {
        // realiza o calculo da quantidade de produtos de cada categoria, só nao faz isso toda hora porque consumiria muito recurso. Isto apenas deverá ser chamado quando a quantidade de produtos mudar, ou algum produto for modificado.

        let categories = await global.conn.collection('categories').findOne({});

        async function calculateForEachField(categoryObj, depth) {

            let keys = Object.keys(categoryObj).filter(key => key.charAt(0) !== '_');

            for (let i = 0; i < keys.length; i++) {
                //console.log('key', keys[i]);
                let cont = await global.conn.collection('produtos').countDocuments({ ['categories.' + depth]: keys[i] });
                categoryObj[keys[i]]._quantity = cont;
                //console.log('cont', cont);
                await calculateForEachField(categoryObj[keys[i]], depth + 1);

            }

        }

        await calculateForEachField(categories, 0);

        let _id = categories._id;

        delete categories.id;

        let result = await global.conn.collection("categories").updateOne({ _id: new ObjectId(_id) }, { $set: categories }); 
    }


}

module.exports = Categories;