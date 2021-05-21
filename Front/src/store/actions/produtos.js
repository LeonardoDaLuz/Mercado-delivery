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



export const carregaMaisProdutos = (path, query, quantidade) => {
    return async (dispatch, getState) => {
        //se usar o location.search ou o URLSearchParams ele começa ou não com '?', então este trecho normaliza esta diferença.
        query = query.toString();
        if (!query.startsWith('?'))
            query = '?' + query;

        const { produtos } = getState();
        const aPartirDe = produtos.length;
        if (path[path.length - 1] !== "/")
            path += "/";

        //Montando a url de pesquisa q será interpretada pelo backend.
        let url = "http://localhost:3001" + path + aPartirDe + "/" + (aPartirDe + quantidade) + query;

        //fazendo as requisições e a emissão os actions.
        dispatch({ type: CARREGA_MAIS_PRODUTOS_START, payload: url });
        await fetch(url)
            .then(r => {
                if (r.status === 204)
                    console.log("nenhum produto encontrado: " + url);

                return r.json()
            }
            )
            .then(data => {
                dispatch({ type: CARREGA_MAIS_PRODUTOS_SUCCESS, payload: data });
            })
            .catch(err => {
                dispatch({ type: CARREGA_MAIS_PRODUTOS_FAILURE, payload: err.message });
            })

    }
}

export const reiniciaListaDeProdutos = (path, query, quantidade) => {
    return async (dispatch, getState) => {
        dispatch({ type: RESETA_LISTA_PRODUTOS });
        dispatch(carregaMaisProdutos(path, query, quantidade));
    }
}
