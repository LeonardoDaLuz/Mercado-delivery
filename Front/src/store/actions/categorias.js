import {
    LOAD_CATEGORY,
    LOAD_CATEGORY_START,
    LOAD_CATEGORY_SUCCESS,
    LOAD_CATEGORY_FAILURE,
    RENAME_CATEGORY_START,
    RENAME_CATEGORY_SUCCESS,
    RENAME_CATEGORY_FAILURE,
} from '../types'



export const carregaCategorias = () => {
    return async (dispatch, getState) => {

        dispatch({ type: LOAD_CATEGORY_START });

        fetch(`http://localhost:3001/GetCategories`)
            .then(body => body.json())
            .then(data => {
                dispatch({ type: LOAD_CATEGORY_SUCCESS, payload: data });
            })
            .catch(err => {
                dispatch({ type: RENAME_CATEGORY_FAILURE, payload: err.message })
            });
    }
}

export const categoryRename = () => {
    return async (dispatch, getState) => {

        dispatch({ type: RENAME_CATEGORY_START });

        fetch(`http://localhost:3001/CalculateCategory`)
            .then(body => body.json())
            .then(data => {
                dispatch({ type: RENAME_CATEGORY_SUCCESS, payload: data });
            })
            .catch(err => {
                dispatch({ type: RENAME_CATEGORY_FAILURE, payload: err.message })
            });
    }
}

