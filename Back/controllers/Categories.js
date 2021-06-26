let nestedPropertySeletor  = require('./../utilities/nestedPropertySelector');

class Categories {
    static async calculateCategory(req, resp) {
        console.log("calculando categorias");

        let produtosColecao = await global.db.findAll("produtos");

        let hierarquia = {};

        produtosColecao.forEach(p => {
            hierarquia = Categories.inclui(p.categories, 0, hierarquia);

        });
        resp.json(hierarquia);
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

        resp.json(categories);
    }

    static async renameCategory(req, resp) {
        console.log("obtendo categorias");

        let categories = await global.conn.collection("categories").findOne({});   

        nestedPropertySeletor(categories, req.params.from).renameTo(req.params.to);

        delete categories._id;
        
        resp.json(categories);
    }
}

module.exports = Categories;