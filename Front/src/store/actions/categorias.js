import {
    CARREGA_CATEGORIA,
    CARREGA_CATEGORIA_START,
    CARREGA_CATEGORIA_SUCCESS,
    CARREGA_CATEGORIA_FAILURE
} from '../types'



export const carregaCategorias = () => {
    return async (dispatch, getState) => {

        dispatch({ type: CARREGA_CATEGORIA_START });

        fetch(`http://localhost:3001/calculaCategoria`)
            .then(body => body.json())
            .then(data => {
                dispatch({ type: CARREGA_CATEGORIA_SUCCESS, payload: data });
            })
            .catch(err => {
                dispatch({ type: CARREGA_CATEGORIA_FAILURE, payload: err.message })
            });
    }
}

