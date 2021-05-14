import { combineReducers } from 'redux';
import listaProdutos from './listaProdutos';
import produto from './produto';

export default combineReducers({
    listaProdutos,
    produto
});
