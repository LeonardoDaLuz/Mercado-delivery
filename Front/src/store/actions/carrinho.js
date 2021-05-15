import { ADICIONAR_PRODUTO_AO_CARRINHO_START, ADICIONAR_PRODUTO_AO_CARRINHO_SUCCESS } from '../types'


export const adicionarProdutoAoCarrinho = (id, quantidade) => {

    return async dispatch => {
        dispatch({ type: ADICIONAR_PRODUTO_AO_CARRINHO_START });
        console.log("Dey certi 0");
        let response = await fetch(`http://localhost:3001/carrinho/addproduto/${id}/${quantidade}`, { method: 'POST' });
        if (response.ok) {
            let data = await response.json();
            console.log("Dey certi");
            dispatch({ type: ADICIONAR_PRODUTO_AO_CARRINHO_SUCCESS }, data);
        }
        else {
            console.error(response.status);
        }
    }
}

