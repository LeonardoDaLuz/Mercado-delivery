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
    RESETA_LISTA_PRODUTOS,
    RESET_PRODUCT_LIST
} from '../types'
import produce from 'immer';

const initialState = {
    mainSearch: [],
};

const products = produce((draftState, action) => {
    switch (action.type) {
        case CARREGA_MAIS_PRODUTOS_SUCCESS:
            let previous = draftState[action.path + action.query];
            previous = previous === undefined ? [] : previous;
            draftState[action.path + action.query] = previous.concat(action.payload);
            break
        case RESETA_LISTA_PRODUTOS:
            draftState.mainSearch = [];
            break;
        case RESET_PRODUCT_LIST:
            Object.keys(draftState).forEach(key=>draftState[key]=[]);
            break;
        default:
            return draftState;
    }
}, initialState);

export default products;