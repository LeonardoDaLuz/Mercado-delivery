import {
    LOAD_OFFERS,
    LOAD_OFFERS_START,
    LOAD_OFFERS_SUCCESS,
    LOAD_OFFERS_FAILURE,
    UPDATE_OFFER_START,
    UPDATE_OFFER_SUCCESS,
    UPDATE_OFFER_FAILURE,
    DELETE_OFFER,
    DELETE_OFFER_START,
    DELETE_OFFER_SUCCESS,
    DELETE_OFFER_FAILURE

} from '../types'


export const loadOffers = (id, callback) => {

    return dispatch => {
        dispatch({ type: LOAD_OFFERS_START });
        fetch('http://localhost:3001/Offers/')
            .then(body => body.json())
            .then(data => {
                dispatch({ type: LOAD_OFFERS_SUCCESS, payload: data });
            })
            .catch(err => {
                dispatch({ type: LOAD_OFFERS_FAILURE, payload: err.message });
            })
    }
}

export const updateOffer = (editedProduct, callBackOnSuccess, callbackOnFail) => {
    return async dispatch => {

        dispatch({ type: UPDATE_OFFER_START });

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
                dispatch({ type: UPDATE_OFFER_SUCCESS, payload: data.product });
                if (callBackOnSuccess)
                    callBackOnSuccess();
            } else {
                dispatch({ type: UPDATE_OFFER_FAILURE, payload: data.product });
                console.error(UPDATE_OFFER_FAILURE, data.result);
                if (callBackOnSuccess)
                    callBackOnSuccess();
            }

        } else {
            dispatch({ type: UPDATE_OFFER_FAILURE, payload: response.status });
            console.error(response.status);
            if (callbackOnFail)
                callBackOnSuccess();
        }
    }
}


export const deleteOffer = (product, callBackOnSuccess, callbackOnFail) => {
    return async dispatch => {

        dispatch({ type: DELETE_OFFER_START });

        const url = 'http://localhost:3001/product/' + product._id;

        let response = await fetch(url, { method: 'DELETE' });

        if (response.ok) {
            let data = await response.json();
            if (data.result && data.result.ok) {
                dispatch({ type: DELETE_OFFER_SUCCESS });
                if (callBackOnSuccess)
                    callBackOnSuccess();
            } else {
                dispatch({ type: DELETE_OFFER_FAILURE, payload: data.product });
                console.error(DELETE_OFFER_FAILURE, data.result);
                if (callBackOnSuccess)
                    callBackOnSuccess();
            }

        } else {
            dispatch({ type: DELETE_OFFER_FAILURE, payload: response.status });
            console.error(response.status);
            if (callbackOnFail)
                callBackOnSuccess();
        }
    }
}
