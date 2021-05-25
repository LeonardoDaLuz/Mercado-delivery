import {
    CARREGAR_IMAGENS_CAROUSEL,
    CARREGAR_IMAGENS_CAROUSEL_START,
    CARREGAR_IMAGENS_CAROUSEL_SUCCESS,
    CARREGAR_IMAGENS_CAROUSEL_FAILURE,
    UPLOAD_IMAGENS_CAROUSEL,
    UPLOAD_IMAGENS_CAROUSEL_START,
    UPLOAD_IMAGENS_CAROUSEL_SUCCESS,
    UPLOAD_IMAGENS_CAROUSEL_FAILIRE,
    REMOVER_IMAGEM_CAROUSEL_,
    REMOVER_IMAGEM_CAROUSEL_START,
    REMOVER_IMAGEM_CAROUSEL_SUCCESS,
    REMOVER_IMAGEM_CAROUSEL_FAILURE

} from '../types'

const initialState = {
    status: 'idle',
    images: [],
    deletionList: []
}
const carousel = (state = initialState, action) => {

    switch (action.type) {
        case CARREGAR_IMAGENS_CAROUSEL_START:
            return { ...state, status: 'loading' }
        case UPLOAD_IMAGENS_CAROUSEL_START:
            return { ...state, status: 'loading' }
        case REMOVER_IMAGEM_CAROUSEL_START:
            return { ...state, status: 'loading', deletionList: [...state.deletionList, action.deleteImageId] }
        case CARREGAR_IMAGENS_CAROUSEL_SUCCESS:
            return { ...state, ...action.payload, status: 'done' }
        case UPLOAD_IMAGENS_CAROUSEL_SUCCESS:
            return { ...state, ...action.payload, status: 'done' }
        case REMOVER_IMAGEM_CAROUSEL_SUCCESS:
            let newDeletionList = [...state.deletionList];
            
            return { ...state, ...action.payload, status: 'done', deletionList: newDeletionList }
        default:
            return state;
    }
}

export default carousel;
