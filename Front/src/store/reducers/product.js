import { CARREGA_PRODUTO_START, CARREGA_PRODUTO_SUCCESS, UPDATE_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS } from '../types'

const initialState = {
    _id: '',
    title: '',
    categories: [],
    description: '',
    imgs: [],
    price: 0,
    stock: 1,
    offer: {
        time_range: {
            starts: 0,
            ends: 0
        },
        off_price: 0,
        enabled: false
    }

};

const product = (state = initialState, action) => {
    switch (action.type) {
        case CARREGA_PRODUTO_SUCCESS:
            return { ...action.payload };
        case UPDATE_PRODUCT_SUCCESS:
            return { ...action.payload }; 
        case DELETE_PRODUCT_SUCCESS:
            return { ...initialState };
        default:
            return state;
    }
}

export default product;
