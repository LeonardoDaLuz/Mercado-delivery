import {
    CARREGAR_CARRINHO_SUCCESS,
    ADICIONAR_PRODUTO_AO_CARRINHO_START,
    ADICIONAR_PRODUTO_AO_CARRINHO_SUCCESS,
    EDITAR_QUANTIDADE_NO_CARRINHO_START
} from '../types'

const initialState = {
    produtos: []
};

const carrinho = (state = initialState, action) => {
    switch (action.type) {
        case EDITAR_QUANTIDADE_NO_CARRINHO_START:
            return { ...action.payload };
        case CARREGAR_CARRINHO_SUCCESS:
            return { ...action.payload };
        default:
            return state;
    }
}

export default carrinho;
