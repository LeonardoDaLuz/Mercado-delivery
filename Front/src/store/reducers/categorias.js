import { CARREGA_CATEGORIA_SUCCESS } from '../types'

const initialState = {

};

const categorias = (state = initialState, action) => {
    switch (action.type) {
        case CARREGA_CATEGORIA_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}

export default categorias;