import store from '../';

export function teste() {
    console.log(store);
}

export function getState() {
    console.log(store.getState());
}

export function quantosForamAdicionadosAoCarrinho(id) {


    console.log( store.getState().carrinho);
    let registroProduto = store.getState().carrinho.produtos[id];

    if (registroProduto == undefined)
        return 0;

    return registroProduto.quantidade;
}
