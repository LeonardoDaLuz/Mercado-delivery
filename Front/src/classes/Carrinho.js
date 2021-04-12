export default class Carrinho {
    constructor(parent) {
        parent.state = {
            ...parent.state,
            carrinhoData: {
                produtos: []
            }
        };

        this.setState = parent.setState.bind(parent);
        this.parent = parent;
        this.carregarDadosRemotos();

    }

    async carregarDadosRemotos() {
        let resp = await fetch("http://localhost:3001/carrinho");

        if (resp.ok) {
            resp = await resp.json();
            this.setState({ carrinhoData: resp });
        }
        else {
            console.error(resp.status);
        }
    }

    quantosForamAdicionadosAoCarrinho(id) {

        let registroProduto = this.parent.state.carrinhoData.produtos[id];

        if (registroProduto == undefined)
            return 0;

        return registroProduto.quantidade;
    }

    custoTotalNoCarrinho() {
        let custo = 0;
        for (var key in this.parent.state.carrinhoData.produtos) {
            let prod = this.parent.state.carrinhoData.produtos[key];
            custo += (prod.data.preco * prod.quantidade);
        }
        return custo.toFixed(2);
    }

    quantosTemProdutosNoCarrinho() {
        let qty = 0;
        for (var key in this.parent.state.carrinhoData.produtos) {
            qty += this.parent.state.carrinhoData.produtos[key].quantidade;
        }
        return qty;
    }

    async adicionarAoCarrinho(id, quantidade) {

        let resp = await fetch(`http://localhost:3001/carrinho/addproduto/${id}/${quantidade}`, { method: 'POST' });
        if (resp.ok) {
            resp = await resp.json();
            this.setState({ carrinhoData: resp });
            console.log("deu");
            console.log(this.parent.state.carrinhoData);
        }
        else {
            console.error(resp.status);
        }
    }

    async editarQuantidadeDoProdutoAoCarrinho(id, quantidade) {

        console.log("aki");
        quantidade = parseInt(quantidade);
        if (isNaN(quantidade))
            quantidade = 0;

        let carrinhoData = this.parent.state.carrinhoData;

        if (carrinhoData.produtos[id] === undefined)
            carrinhoData.produtos[id] = {
                quantidade: quantidade,
                preco: 25,
                data: { preco: 0 }
            }
        else
            carrinhoData.produtos[id].quantidade = quantidade;

        this.setState({ carrinhoData });

        let resp = await fetch(`http://localhost:3001/carrinho/modificarQuantidadeProduto/${id}/${quantidade}`, { method: 'POST' });
        if (resp.ok) {
            resp = await resp.json();
            this.setState({ carrinhoData: resp });
            console.log("deu");
            console.log(this.parent.state.carrinhoData);
        }
        else {
            console.error(resp.status);
        }
    }
}