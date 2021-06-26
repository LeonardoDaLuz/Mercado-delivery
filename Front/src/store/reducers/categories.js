import {
    LOAD_CATEGORY_START,
    LOAD_CATEGORY_SUCCESS,
    LOAD_CATEGORY_FAILURE,
    RENAME_CATEGORY_START,
    RENAME_CATEGORY_SUCCESS,
    RENAME_CATEGORY_FAILURE,
} from '../types'

const initialState = {
    isFetching: false,
    result: 'none',
    data: {}
};

const categories = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CATEGORY_START:
            return { ...state, isFetching: true };
        case LOAD_CATEGORY_SUCCESS:
            return { ...state, data: action.payload, isFetching: false, result: 'ok' };
        case LOAD_CATEGORY_FAILURE:
            return { ...state, isFetching: false, result: 'error' };
        case RENAME_CATEGORY_START:
            return { ...state, isFetching: true };
        case RENAME_CATEGORY_SUCCESS:
            return { ...state, data: action.payload, isFetching: false, result: 'ok' };
        case RENAME_CATEGORY_FAILURE:
            return { ...state, isFetching: false, result: 'error' }; 
        default:
            return state;
    }
}

export default categories;