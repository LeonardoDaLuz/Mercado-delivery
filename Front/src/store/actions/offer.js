import {
    LOAD_OFFERS,
    LOAD_OFFERS_START,
    LOAD_OFFERS_SUCCESS,
    LOAD_OFFERS_FAILURE,
    SAVE_OFFERS_START,
    SAVE_OFFERS_SUCCESS,
    SAVE_OFFERS_FAILURE,
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

export const saveOffers = (offers) => {
    return async dispatch => {

        dispatch({ type: SAVE_OFFERS_START });

        const url = 'http://localhost:3001/Offers/';

        let response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            },
            body: JSON.stringify(offers)
        });

        if (response.ok) {
            let data = await response.json();
            if (data.result && data.result.ok) {
                dispatch({ type: SAVE_OFFERS_SUCCESS, payload: data });
            } else {
                dispatch({ type: SAVE_OFFERS_FAILURE, payload: data });                
            }

        } else {
            dispatch({ type: SAVE_OFFERS_FAILURE, payload: response.status });
        }
    }
}
