export default class Carrinho {
    constructor(parent) {
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

        if(registroProduto==undefined)
            return 0;
        
        return registroProduto.quantidade;
    }

    custoTotalNoCarrinho() {
        let custo = 0;
        for(var key in this.parent.state.carrinhoData.produtos) {
            let prod = this.parent.state.carrinhoData.produtos[key];
            custo += (prod.data.preco*prod.quantidade);
        }
        return custo.toFixed(2);
    }
    
    quantosTemProdutosNoCarrinho() {
        let qty = 0;
        for(var key in this.parent.state.carrinhoData.produtos) {
            qty += this.parent.state.carrinhoData.produtos[key].quantidade;
        }
        return qty;
    }

    async adicionarAoCarrinho(id, quantidade) {

        let resp = await fetch(`http://localhost:3001/carrinho/addproduto/${id}/${quantidade}`, { method: 'POST'});
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