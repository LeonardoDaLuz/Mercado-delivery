import { combineReducers } from 'redux';
import listaProdutos from './listaProdutos';
import produto from './produto';
import carrinho from './carrinho';

export default combineReducers({
    listaProdutos,
    produto,
    carrinho
});
