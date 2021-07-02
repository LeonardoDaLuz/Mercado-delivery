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

        query.price = { $gte: 0.01 };

        if (busca != '') {
            query.$or =
                [
                    { title: { $regex: busca, $options: 'i' } },
                    { description: { $regex: busca, $options: 'i' } },
                ]
        }

        if (min !== 0 && max !== 0) {
            query.price = { $gte: filtraFloat(req.query.menorPreco), $lte: filtraFloat(req.query.maiorPreco) }
        }
        else if (min !== 0) {
            query.price = { $gte: filtraFloat(req.query.menorPreco) }
        }
        else if (max !== 0) {
            query.price = { $lte: filtraFloat(req.query.maiorPreco) }
        }

        let sort = {};
        if (req.query.sort !== undefined) {
            if (req.query.sort == "maiorPreco")
                sort = { price: -1 };
            if (req.query.sort == "menorPreco")
                sort = { price: 1 };
        }


        if (offer != '') {
            let now = new Date();
            let timeZoneOffset = now.getTimezoneOffset();
            now.setMinutes(now.getMinutes() - timeZoneOffset); //Ajuste devido ao fuso horário. o TimezoneOffset vale 180, oq significa 3 horas no fuso horário.
            query['offer.time_range.starts'] = { $lt: now.toISOString() }
            query['offer.time_range.ends'] = { $gt: now.toISOString() }
            query['offer.type'] = offer;
            query['offer.enabled'] = true;
            query['$where'] = "this.price > this.offer.off_price";
        }

        let keys = Object.keys(req.params);
        keys.forEach((key, index) => { //Cria filtro por categorias
            if (index < keys.length - 2) {
                if (req.params[key] !== undefined) {
                    query["categories." + (index)] = req.params[key];
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

    static async getProduct(req, resp) {
        let produto = await global.db.getProdutoPorObjId(req.params.id);

        if (produto)
            console.log('Loaded product: ', produto.title);
        else
            console.log('Product not found: ', req.params.id);



        resp.json(produto);
    }

    static async updateProduct(req, resp) {

        let product = req.body;

        if (Object.keys(product).length == 0) {
            resp.json({ result: "error, missing the body" });
        }

        let productInDb = global.conn.collection('produtos').findOne(
            { _id: new ObjectId(req.params.id) });

        let newProduct = {
            ...productInDb,
            title: product.title,
            categories: product.categories,
            stock: product.stock,
            description: product.description,
            price: parseFloat(product.price),
            imgs: product.imgs,
            offer: {
                ...product.offer,
                time_range: {
                    starts: product.offer.time_range.starts,
                    ends: product.offer.time_range.ends.replace('T00:00:00.000Z', 'T23:59:59.999Z'),
                },

                enabled: product.offer.enabled,
                off_price: parseFloat(product.offer.off_price),
            }
        }

        let result = await global.conn.collection('produtos').updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: newProduct }
        )

        product._id = req.params.id;

        if (req.query.delay) {
            console.log("proposeful delay...");
            await waitForSeconds(req.query.delay);
        }

        //result.product = product;
        resp.json({ result: result.result, product: newProduct });
    }

    static async deleteProduct(req, resp) {


        let result = await global.conn.collection('produtos').deleteOne(
            { _id: new ObjectId(req.params.id) },
        )

        resp.json(result);
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