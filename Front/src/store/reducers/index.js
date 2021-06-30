import { combineReducers } from 'redux';
import products from './products';
import product from './product';
import carrinho from './carrinho';
import categories from './categories';
import carousel from './carousel';
import account from './account';
import home from './home';
import offers from './offers';

export default combineReducers({
    products,
    product,
    carrinho,
    categories,
    carousel,
    account,
    home,
    offers
});
