import {
    EDITAR_QUANTIDADE_NO_CARRINHO,
    EDITAR_QUANTIDADE_NO_CARRINHO_FAILURE,
    EDITAR_QUANTIDADE_NO_CARRINHO_START,
    EDITAR_QUANTIDADE_NO_CARRINHO_SUCCESS,
    CARREGAR_CARRINHO,
    CARREGAR_CARRINHO_FAILURE,
    CARREGAR_CARRINHO_START,
    CARREGAR_CARRINHO_SUCCESS,
    ADICIONAR_PRODUTO_AO_CARRINHO_START,
    ADICIONAR_PRODUTO_AO_CARRINHO_SUCCESS
} from '../types'

export const carregarCarrinho = (id, quantidade) => {

    
    return async dispatch => {
        dispatch({ type: CARREGAR_CARRINHO_START });

        let response = await fetch(`http://localhost:3001/carrinho/`, { method: 'GET' });
        if (response.ok) {
            let data = await response.json();
            dispatch({ type: CARREGAR_CARRINHO_SUCCESS, payload: data });
        }
        else {
            console.error(response.status);
        }
    }
}

export const adicionarProdutoAoCarrinho = (id, quantidade) => {

    return async dispatch => {
        dispatch({ type: ADICIONAR_PRODUTO_AO_CARRINHO_START });

        let response = await fetch(`http://localhost:3001/carrinho/addproduto/${id}/${quantidade}`, { method: 'POST' });
        if (response.ok) {
            let data = await response.json();
            dispatch({ type: ADICIONAR_PRODUTO_AO_CARRINHO_SUCCESS });
            dispatch({ type: CARREGAR_CARRINHO_SUCCESS, payload: data });
        }
        else {
            console.error(response.status);
        }
    }
}

export const editarQuantidadeDoProdutoAoCarrinho = (id, quantidade) => {

    return async (dispatch, getState) => {
   
        quantidade = parseInt(quantidade);
        if (isNaN(quantidade))
            quantidade = 0;

        let carrinhoData = getState().carrinho;

        if (carrinhoData.produtos[id] === undefined)
            carrinhoData.produtos[id] = {
                quantidade: quantidade,
                preco: 25,
                data: { preco: 0 }
            }
        else
            carrinhoData.produtos[id].quantidade = quantidade;

        dispatch({ type: EDITAR_QUANTIDADE_NO_CARRINHO_START, payload: carrinhoData });

        let response = await fetch(`http://localhost:3001/carrinho/modificarQuantidadeProduto/${id}/${quantidade}`, { method: 'POST' });
        if (response.ok) {
            let data = await response.json();
            dispatch({ type: ADICIONAR_PRODUTO_AO_CARRINHO_SUCCESS });
            dispatch({ type: CARREGAR_CARRINHO_SUCCESS, payload: data });
        }
        else {
            console.error(response.status);
        }
    }
}

