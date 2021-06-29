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
    UPDATE_PRODUCT_START,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_START,
    DELETE_PRODUCT_FAILURE

} from '../types'


export const loadProduct = (id, callback) => {

    return dispatch => {
        dispatch({ type: CARREGA_PRODUTO_START });
        fetch('http://localhost:3001/product/' + id + "")
            .then(body => body.json())
            .then(data => {
                console.log("PRODUTO CARREGADO PELO REDUX");
                dispatch({ type: CARREGA_PRODUTO_SUCCESS, payload: data });
            })
            .catch(err => {
                console.log("ERRO");
                dispatch({ type: CARREGA_PRODUTO_FAILURE, payload: err.message });
            })
    }
}

export const likeProduct = (id) => {

    return dispatch => {
        dispatch({ type: LIKE_PRODUTO_START });

        const conta = 0;
        fetch(`http://localhost:3001/like/${conta}/${id}`, { method: 'POST' })
            .then(body => body.json())
            .then(data => {
                dispatch({ type: LIKE_PRODUTO_SUCCESS });
                dispatch({ type: CARREGA_PRODUTO_SUCCESS, payload: data });
            });
    }
}

export const updateProduct = (editedProduct, callBackOnSuccess, callbackOnFail) => {
    return async dispatch => {

        dispatch({ type: UPDATE_PRODUCT_START });

        const url = 'http://localhost:3001/product/' + editedProduct._id;

        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000',

            },
            body: JSON.stringify(editedProduct)
        });
        if (response.ok) {
            let data = await response.json();
            if (data.result && data.result.ok) {
                dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data.product });
                if (callBackOnSuccess)
                    callBackOnSuccess();
            } else {
                dispatch({ type: UPDATE_PRODUCT_FAILURE, payload: data.product });
                console.error(UPDATE_PRODUCT_FAILURE, data.result);
                if (callBackOnSuccess)
                    callBackOnSuccess();
            }

        } else {
            dispatch({ type: UPDATE_PRODUCT_FAILURE, payload: response.status });
            console.error(response.status);
            if (callbackOnFail)
                callBackOnSuccess();
        }
    }
}


export const deleteProduct = (product, callBackOnSuccess, callbackOnFail) => {
    return async dispatch => {

        dispatch({ type: DELETE_PRODUCT_START });

        const url = 'http://localhost:3001/product/' + product._id;

        let response = await fetch(url, { method: 'DELETE' });

        if (response.ok) {
            let data = await response.json();
            if (data.result && data.result.ok) {
                dispatch({ type: DELETE_PRODUCT_SUCCESS });
                if (callBackOnSuccess)
                    callBackOnSuccess();
            } else {
                dispatch({ type: UPDATE_PRODUCT_FAILURE, payload: data.product });
                console.error(UPDATE_PRODUCT_FAILURE, data.result);
                if (callBackOnSuccess)
                    callBackOnSuccess();
            }

        } else {
            dispatch({ type: DELETE_PRODUCT_FAILURE, payload: response.status });
            console.error(response.status);
            if (callbackOnFail)
                callBackOnSuccess();
        }
    }
}
