import { CARREGA_PRODUTO_START, CARREGA_PRODUTO_SUCCESS, CARREGA_PRODUTO_FAILURE } from '../types'

const initialState = {
    _id: 5,
    titulo: '',
    categorias: [],
    descricao: '',
    imgs: []

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