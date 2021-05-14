import { CARREGA_PRODUTOS_START, CARREGA_PRODUTOS_SUCCESS, CARREGA_PRODUTOS_FAILURE } from '../types'

const initialState = {
    _id: 5,
    titulo: '',
    categorias: [],
    descricao: '',

};

const produto = (state = initialState, action) => {
    switch (action.type) {
        case CARREGA_PRODUTOS_SUCCESS:
            return { ...action.payload};
        default:
            return state;
    }
}

export default produto;