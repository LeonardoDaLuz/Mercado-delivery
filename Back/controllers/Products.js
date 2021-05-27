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
            now.setMinutes(now.getMinutes() - timeZoneOffset);
            query['offer.time_range.starts'] = { $lt: now }
            query['offer.time_range.ends'] = { $gt: now }
            query['offer.type'] = offer;          
        }

        let keys = Object.keys(req.params);
        keys.forEach((key, index) => {
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

        let statusCode = slicedProductList.length == 0 ? 204 : 200;

        resp.status(200).json(slicedProductList);
    }

    static async updateProduct(req, resp) {
        produtosColecao = await global.db.listaProdutos(req.params.from, req.params.to);
        produtosColecao.forEach(p => {
            p.preco = parseFloat(p.preco);
            global.db.updateProduto(p._id, p)
        })
        let produto = await global.db.getProduto(req.params.id);
        console.log(produto)
        resp.json(produto);
    }

    static async getProduct(req, resp) {
        let produto = await global.db.getProduto(req.params.id);
        console.log(produto)
        resp.json(produto);
    }

    static async getProduct2(req, resp) {
        let produto = await global.db.getProdutoPorObjId(req.params.id);
        console.log(produto)
        resp.json(produto);
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