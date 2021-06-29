import {
    LOAD_CATEGORY,
    LOAD_CATEGORY_START,
    LOAD_CATEGORY_SUCCESS,
    LOAD_CATEGORY_FAILURE,
    RENAME_CATEGORY_START,
    RENAME_CATEGORY_SUCCESS,
    RENAME_CATEGORY_FAILURE,
} from '../types'



export const loadCategories = () => {
    return async (dispatch, getState) => {

        let url = `http://localhost:3001/GetCategories`;

        dispatch({ type: LOAD_CATEGORY_START, url });

        fetch(url)
            .then(body => body.json())
            .then(data => {
                dispatch({ type: LOAD_CATEGORY_SUCCESS, url, payload: data });
            })
            .catch(err => {
                dispatch({ type: RENAME_CATEGORY_FAILURE, url, payload: err.message })
            });
    }
}

export const carregaCategorias = loadCategories;

export const categoryRename = (fieldToRename, newName) => {
    return async (dispatch, getState) => {

        console.log(fieldToRename);

        let url = `http://localhost:3001/RenameCategory/${fieldToRename}/${newName}`;

        dispatch({ type: RENAME_CATEGORY_START, url, fieldToRename, newName });
        
        fetch(url)
            .then(body => body.json())
            .then(data => {
                dispatch({ type: RENAME_CATEGORY_SUCCESS, url, payload: data });
            })
            .catch(err => {
                dispatch({ type: RENAME_CATEGORY_FAILURE, url, payload: err.message })
            });
    }
}

