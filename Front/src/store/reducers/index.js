import { combineReducers } from 'redux';
import produtos from './produtos';
import produto from './produto';
import carrinho from './carrinho';
import categorias from './categorias';
import carousel from './carousel';
import account from './account';
import home from './home';

export default combineReducers({
    produtos,
    produto,
    carrinho,
    categorias,
    carousel,
    account,
    home
});
