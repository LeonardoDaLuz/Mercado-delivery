import {
    CARREGA_PRODUTO_START,
    CARREGA_PRODUTO_SUCCESS,
    CARREGA_PRODUTO_FAILURE,
    LIKE_PRODUTO_START,
    LIKE_PRODUTO_SUCCESS,
    LIKE_PRODUTO_FAILURE,
    CARREGA_MAIS_PRODUTOS_START,
    CARREGA_MAIS_PRODUTOS_SUCCESS,
    CARREGA_MAIS_PRODUTOS_FAILURE,
    RESETA_LISTA_PRODUTOS
} from '../types'


const initialState = {
    ofertasDoDia: [],
    ofertasDaSemana: [],
    ofertasDoMes: [],
    maisVendidos: [],
    menosvendidos: [],
};

const Ofertas = (state = initialState, action) => {
    switch (action.type) {
        case CARREGA_MAIS_PRODUTOS_SUCCESS:
            return state.concat(action.payload);
        case RESETA_LISTA_PRODUTOS:
            return [];
        default:
            return state;
    }
}

export default produtos;