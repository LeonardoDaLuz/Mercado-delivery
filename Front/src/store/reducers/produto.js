import { CARREGA_PRODUTO_START, CARREGA_PRODUTO_SUCCESS, UPDATE_PRODUCT_SUCCESS } from '../types'

const initialState = {
    _id: '',
    titulo: '',
    categorias: [],
    descricao: '',
    imgs: [],
    preco: 0,
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

const produto = (state = initialState, action) => {
    switch (action.type) {
        case CARREGA_PRODUTO_SUCCESS:
            return { ...action.payload };
        case UPDATE_PRODUCT_SUCCESS:
            return { ...action.payload };
        default:
            return state;
    }
}

export default produto;
