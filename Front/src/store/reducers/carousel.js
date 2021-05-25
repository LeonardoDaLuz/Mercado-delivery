import {
    CARREGAR_IMAGENS_CAROUSEL,
    CARREGAR_IMAGENS_CAROUSEL_START,
    CARREGAR_IMAGENS_CAROUSEL_SUCCESS,
    CARREGAR_IMAGENS_CAROUSEL_FAILURE,
    ADICIONAR_IMAGENS_CAROUSEL,
    ADICIONAR_IMAGENS_CAROUSEL_START,
    ADICIONAR_IMAGENS_CAROUSEL_SUCCESS,
    ADICIONAR_IMAGENS_CAROUSEL_FAILIRE,
    REMOVER_IMAGEM_CAROUSEL_,
    REMOVER_IMAGEM_CAROUSEL_START,
    REMOVER_IMAGEM_CAROUSEL_SUCCESS,
    REMOVER_IMAGEM_CAROUSEL_FAILURE

} from '../types'


const carousel = (state = [], action) => {

    switch (action.type) {
        case CARREGAR_IMAGENS_CAROUSEL_SUCCESS:

            if (Array.isArray(action.payload)) {

                return action.payload;
            } else {

                return []
            }
        default:
            return state;
    }
}

export default carousel;
