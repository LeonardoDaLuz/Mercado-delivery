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
        let quantidade = this.parent.state.carrinhoData.produtos[id];
        if(quantidade==undefined)
            return 0;
        
        return quantidade;
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