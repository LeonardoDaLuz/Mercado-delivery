import { ADICIONAR_PRODUTO_AO_CARRINHO_START, ADICIONAR_PRODUTO_AO_CARRINHO_SUCCESS } from '../types'

const initialState = {
    produtos: []
};

const carrinho = (state = initialState, action) => {
    switch (action.type) {
        case ADICIONAR_PRODUTO_AO_CARRINHO_SUCCESS:
            return { ...action.payload };
        default:
            return state;
    }
}

export default carrinho;