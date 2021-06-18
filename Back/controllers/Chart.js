class ChartController {

    static async getChart(req, resp) {
        let carrinho = await global.db.getCarrinho(0);
        await ChartController.loadCarrinhoProductDatas(carrinho);
        resp.json(carrinho);
    }

    static async loadCarrinhoProductDatas(carrinho) {

        for (var key in carrinho.produtos) {
            let prod = carrinho.produtos[key];
            prod.data = await global.db.getProdutoPorObjId(key);
        }

        return carrinho;
    }

    static async addProductInChart(req, resp) {

        var { id, quantidade } = req.params;
        quantidade = parseInt(quantidade);
        id = parseInt(id);

        if (isNaN(quantidade))
            quantidade = 0;

        let conta = 0;

        let carrinho = await global.conn.collection("carrinhos").findOne({ conta });

        if (carrinho == null) {
            resp.status(400).json({ error: 'Chart not found' });
            return;
        }

        let produtos = carrinho.produtos;

        if (produtos[id] === undefined) {
            produtos[id] = { quantidade: quantidade, preco: 25 }
        } else {
            produtos[id].quantidade += quantidade;
        }

        if (produtos[id].quantidade < 1)
            delete produtos[id];

        let result = await global.conn.collection("carrinhos").updateOne({ conta: conta },
            {
                $set: { produtos: produtos }
            }
        );

        if (result.result.nModified == 0)
            resp.status(400).json({ error: 'Unable to update cart' });


        await ChartController.loadCarrinhoProductDatas(carrinho);
        resp.json(carrinho);

    }



    static async modifyQuantityOnChart(req, resp) {

        //tem que colocar um filtro aqui pra ele n deixar add um produto com id invalido senao vai crashar
        let carrinho = await ChartController.editarQuantidadeDoProdutoAoCarrinho(0, req.params.objId, req.params.quantidade);

        if (carrinho == null) {
            resp.status(400).send('failed');
            return;
        }

        await loadCarrinhoProductDatas(carrinho);
        resp.json(carrinho);
    }

    static async editarQuantidadeDoProdutoAoCarrinho(conta, produto, quantidade, callback) {
        quantidade = parseInt(quantidade);
        if (isNaN(quantidade))
            quantidade = 0;

        let carrinho = await global.conn.collection("carrinhos").findOne({ conta });

        if (carrinho == null)
            return null;

        let produtos = carrinho.produtos;

        if (quantidade > 0) {
            if (produtos[produto] === undefined) {
                produtos[produto] = { quantidade, preco: 25 }
            } else {
                produtos[produto].quantidade = quantidade;
            }
        } else {
            delete produtos[produto];
        }

        let resp = await global.conn.collection("carrinhos").updateOne({ conta },
            {
                $set: { produtos: produtos }
            }
        );

        if (resp.result.nModified == 0)
            return null;

        return carrinho;
    }
}

module.exports = ChartController;