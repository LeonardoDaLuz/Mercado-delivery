import { arrayRemove } from '../../utils/arrayUtils';
import produce from "immer";
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
    waitingImageList: []
}
const carousel = produce((state, action) => {

    switch (action.type) {
        case CARREGAR_IMAGENS_CAROUSEL_START:
            state.status = 'loading';
            break;
        case UPLOAD_IMAGENS_CAROUSEL_START:
            state.status = 'loading';
            break;
        case REMOVER_IMAGEM_CAROUSEL_START:
            state.status = 'deleting';
            console.log(action);
            let deletingImage = state.images.find((image)=>image._id==action.deleteImageId);
            deletingImage.status = 'deleting';
            state.deletionList =  [...state.waitingImageList, action.deleteImageId];
            break;
        case CARREGAR_IMAGENS_CAROUSEL_SUCCESS:
            state.status = 'done';
            state.images = action.payload.images;
            break
        case UPLOAD_IMAGENS_CAROUSEL_SUCCESS:
            state.status = 'done';
            state.images = action.payload.images;
            break
        case REMOVER_IMAGEM_CAROUSEL_SUCCESS:
            state.deletionList = arrayRemove(state.deletionList, action.deleteImageId);
            state.status = state.deletionList.length === 0 ? 'done' : 'deleting';
            state.images = action.payload.images;
            break
    }
}, initialState)

export default carousel;
