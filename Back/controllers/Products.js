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
            if (offer == "day") {
                let now = new Date();
                let timeZoneOffset = now.getTimezoneOffset();
                now.setMinutes(now.getMinutes()-timeZoneOffset);
                let minTime = new Date(
                    now.getFullYear(),
                    now.getMonth(),
                    now.getDate(),
                    0, -timeZoneOffset, 0, 0 //é preciso usar esse timeZoneOffset para ajustar o fuso-horário. O valor de date que está no mongo DB está com o fuso horario já ajustado).
                );
                let maxTime = new Date(
                    now.getFullYear(),
                    now.getMonth(),
                    now.getDate(),
                    23, 59 - timeZoneOffset, 59, 999
                );

                console.log(now);
                console.log(minTime);
                console.log(maxTime);

                query['offer.time_range.min'] = { $lt: now }
                query['offer.time_range.max'] = { $gt: now }
            }
        }

        let keys = Object.keys(req.params);
        keys.forEach((key, index) => {
            if (index < keys.length - 2) {
                if (req.params[key] !== undefined) {
                    query["categorias." + (index)] = req.params[key];
                }
            }
        })



        console.log("sd");
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