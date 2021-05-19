import {
    CARREGA_PRODUTO_START,
    CARREGA_PRODUTO_SUCCESS,
    CARREGA_PRODUTO_FAILURE,
    LIKE_PRODUTO_START,
    LIKE_PRODUTO_SUCCESS,
    LIKE_PRODUTO_FAILURE,
    CARREGA_MAIS_PRODUTOS_START,
    CARREGA_MAIS_PRODUTOS_SUCCESS,
    CARREGA_MAIS_PRODUTOS_FAILURE,
    RESETA_LISTA_PRODUTOS
} from '../types'



export const carregaMaisProdutos = (path, quantidade) => {
    return async (dispatch, getState) => {

        dispatch({ type: CARREGA_MAIS_PRODUTOS_START });

        const { produtos } = getState();
        const aPartirDe = produtos.length;
        if (path[path.length - 1] !== "/")
            path += "/";

        // let seletor = this.state.seletorListaDeProdutos;
        //   let query = "?minPrice=" + seletor.faixaPreco.min + "&maxPrice=" + seletor.faixaPreco.max;

        let url = "http://localhost:3001" + path + aPartirDe + "/" + (aPartirDe + quantidade) /*+ query*/;
        await fetch(url)
            .then(x => x.json())
            .then(data => {
                dispatch({ type: CARREGA_MAIS_PRODUTOS_SUCCESS, payload: data });
            })
            .catch(err => {
                dispatch({ type: CARREGA_MAIS_PRODUTOS_FAILURE, payload: err.message });
            })

    }
}

export const reiniciaListaDeProdutos = (path, quantidade) => {
    return async (dispatch, getState) => {
        dispatch({ type: RESETA_LISTA_PRODUTOS });
        dispatch(carregaMaisProdutos(path, quantidade));
    }
}
