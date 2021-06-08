import { CARREGA_PRODUTO_START, CARREGA_PRODUTO_SUCCESS, CARREGA_PRODUTO_FAILURE } from '../types'

const initialState = {
    _id: 5,
    titulo: 'Loading...',
    categorias: [],
    descricao: '',
    imgs: [],
    preco: 0,

};

const produto = (state = initialState, action) => {
    switch (action.type) {
        case CARREGA_PRODUTO_SUCCESS:
            return { ...action.payload};
        default:
            return state;
    }
}

export default produto;