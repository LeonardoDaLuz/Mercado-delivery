import {
    CARREGA_MAIS_PRODUTOS_START,
    CARREGA_MAIS_PRODUTOS_SUCCESS,
    CARREGA_MAIS_PRODUTOS_FAILURE,
    RESETA_LISTA_PRODUTOS,
    RESET_PRODUCT_LIST,
} from '../types'



export const loadMoreProducts = (path, query, quantity) => {
    return async (dispatch, getState) => {
        //se usar o location.search ou o URLSearchParams ele começa ou não com '?', então este trecho normaliza esta diferença.




        if (path.charAt(path.length - 1) === '?') {
            path = path.replace('?', '')
        }

        if (path[path.length - 1] !== "/")
            path += "/";

        query = query.toString();
        if (!query.startsWith('?'))
            query = '?' + query;

        let produtos = getState().products[path + query];

        if(produtos===undefined)
            produtos = [];

        const aPartirDe = produtos.length;

        //Montando a url de pesquisa q será interpretada pelo backend.
        let url = "http://localhost:3001" + path + aPartirDe + "/" + (aPartirDe + quantity) + query;

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
                dispatch({ type: CARREGA_MAIS_PRODUTOS_SUCCESS, payload: data, path, query });
            })
            .catch(err => {
                dispatch({ type: CARREGA_MAIS_PRODUTOS_FAILURE, payload: err.message });
            })

    }
}

export const reloadProductList = (path, query, quantidade) => {
    return async (dispatch, getState) => {
        dispatch({ type: RESETA_LISTA_PRODUTOS });
        dispatch(loadMoreProducts(path, query, quantidade));
    }
}

export const resetProductList = (path, query, quantidade) => {
    return async (dispatch, getState) => {
        dispatch({ type: RESET_PRODUCT_LIST });       
    }
}


