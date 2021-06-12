const ObjectId = require("mongodb").ObjectID;
const waitForSeconds = require('../utilities/waitForSeconds');

class ProductsController {
    static async listProducts(req, resp) {
        //obtem lista com os produtos, filtrado por categorias 

        let query = {};


        let min = filtraFloat(req.query.menorPreco);
        let max = filtraFloat(req.query.maiorPreco);
        let busca = filtraString(req.query.busca);
        let offer = filtraString(req.query.offer);

        query.preco = { $gte: 0.01 };

        if (busca != '') {
            query.$or =
                [
                    { titulo: { $regex: busca, $options: 'i' } },
                    { descricao: { $regex: busca, $options: 'i' } },
                ]
        }

        if (min !== 0 && max !== 0) {
            query.preco = { $gte: filtraFloat(req.query.menorPreco), $lte: filtraFloat(req.query.maiorPreco) }
        }
        else if (min !== 0) {
            query.preco = { $gte: filtraFloat(req.query.menorPreco) }
        }
        else if (max !== 0) {
            query.preco = { $lte: filtraFloat(req.query.maiorPreco) }
        }

        let sort = {};
        if (req.query.sort !== undefined) {
            if (req.query.sort == "maiorPreco")
                sort = { preco: -1 };
            if (req.query.sort == "menorPreco")
                sort = { preco: 1 };
        }


        if (offer != '') {
            let now = new Date();
            let timeZoneOffset = now.getTimezoneOffset();
            now.setMinutes(now.getMinutes() - timeZoneOffset); //Ajuste devido ao fuso horário. o TimezoneOffset vale 180, oq significa 3 horas no fuso horário.
            query['offer.time_range.starts'] = { $lt: now }
            query['offer.time_range.ends'] = { $gt: now }
            query['offer.type'] = offer;
        }

        let keys = Object.keys(req.params);
        keys.forEach((key, index) => { //Cria filtro por categorias
            if (index < keys.length - 2) {
                if (req.params[key] !== undefined) {
                    query["categorias." + (index)] = req.params[key];
                }
            }
        })



        console.log("Seleting products from query:");
        console.log(query);
        let fullProductList = await global.conn.collection("produtos").find(query).sort(sort).toArray();
        let slicedProductList = fullProductList.slice(req.params.from, req.params.to);

        slicedProductList.map(item => { //Isto mantém compatibilidade entre o modelo antigo e o novo de dados.
            if (item.imgs === undefined)
                item.imgs = [item.img];
        })

        let statusCode = slicedProductList.length == 0 ? 204 : 200;

        resp.status(200).json(slicedProductList);
    }

    static async createOffer(req, resp) {

    }
    static async getProduct(req, resp) {
        let produto = await global.db.getProduto(req.params.id);

        if (produto.imgs === undefined) //Para manter a compatibilidade entre modelos.
            produto.imgs = [produto.img];

        console.log(produto)
        resp.json(produto);
    }

    static async getProduct2(req, resp) {
        let produto = await global.db.getProdutoPorObjId(req.params.id);

        if (produto.imgs === undefined)  //Para manter a compatibilidade entre modelos.
            produto.imgs = [produto.img];

        let delay = req.query.delay;
        if(delay) {
            console.log("proposeful delay...");   
            await waitForSeconds(delay); 
        }

        console.log('Loaded product: ', produto);     

        resp.json(produto);
    }

    static async updateProduct(req, resp) {

        let product = req.body;
   
        if(Object.keys(product).length==0) {
            resp.json({ result: "error, missing the body" });
        }
        
        delete product._id;

        let result = await global.conn.collection('produtos').updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
        )

        product._id = req.params.id;

        if(req.query.delay) {
            console.log("proposeful delay...");   
            await waitForSeconds(req.query.delay); 
        }

        //result.product = product;
        resp.json({ result: result.result, product: product });
    }
}


function filtraFloat(valor) {
    let val = parseFloat(valor);
    return isNaN(val) ? 0 : val;
}
function filtraString(valor) {
    let val = valor;
    return val === null || val === undefined ? "" : val;
}

module.exports = ProductsController;