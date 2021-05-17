import store from '../';

export function teste() {
    console.log(store);
}

export function getState() {
    console.log(store.getState());
}

export function quantosDesseForamAdicionadosAoCarrinho(id) {

    console.log( store.getState().carrinho);
    let registroProduto = store.getState().carrinho.produtos[id];

    if (registroProduto == undefined)
        return 0;

    return registroProduto.quantidade;
}

export function custoTotalNoCarrinho() {
    let custo = 0;
    let {carrinho} = store.getState(); 
    for (var key in carrinho.produtos) {
        let prod = carrinho.produtos[key];
        custo += (prod.data.preco * prod.quantidade);
    }
    return custo.toFixed(2);
}

export function quantosProdutosTemNoCarrinho() {
    let qty = 0;
    for (var key in store.getState().carrinho.produtos) {
        qty += store.getState().carrinho.produtos[key].quantidade;
    }
    return qty;
}

