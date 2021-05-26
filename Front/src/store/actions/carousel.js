import {
    CARREGAR_IMAGENS_CAROUSEL,
    CARREGAR_IMAGENS_CAROUSEL_START,
    CARREGAR_IMAGENS_CAROUSEL_SUCCESS,
    CARREGAR_IMAGENS_CAROUSEL_FAILURE,
    UPLOAD_IMAGENS_CAROUSEL,
    UPLOAD_IMAGENS_CAROUSEL_START,
    UPLOAD_IMAGENS_CAROUSEL_SUCCESS,
    UPLOAD_IMAGENS_CAROUSEL_FAILURE,
    REMOVER_IMAGEM_CAROUSEL_,
    REMOVER_IMAGEM_CAROUSEL_START,
    REMOVER_IMAGEM_CAROUSEL_SUCCESS,
    REMOVER_IMAGEM_CAROUSEL_FAILURE
} from '../types'

export const carregarImagensCarousel = (id, quantidade) => {
    return async dispatch => {
        dispatch({ type: CARREGAR_IMAGENS_CAROUSEL_START });

        let response = await fetch(`http://localhost:3001/carousel/`, { method: 'GET' });
        if (response.ok) {
            let data = await response.json();
            dispatch({ type: CARREGAR_IMAGENS_CAROUSEL_SUCCESS, payload: data });
        }
        else {
            dispatch({ type: CARREGAR_IMAGENS_CAROUSEL_FAILURE, payload: response.status });
            console.error(response.status);
        }
    }
}

export const uploadImagensCarousel = (e) => {
    return async dispatch => {

        dispatch({ type: UPLOAD_IMAGENS_CAROUSEL_START });

        let files = e.target.files;

        const formData = new FormData();

        const url = 'http://localhost:3001/carousel/addImages';

        [...files].forEach((file, index) => formData.append('file' + index, file));

        const config = {
            method: 'POST',
            body: formData
        }

        let response = await fetch(url, config);
        if (response.ok) {
            let data = await response.json();
            dispatch({ type: UPLOAD_IMAGENS_CAROUSEL_SUCCESS, payload: data });
        } else {
            dispatch({ type: UPLOAD_IMAGENS_CAROUSEL_FAILURE, payload: response.status });
            console.error(response.status);
        }
    }
}

export const removeImageCarousel = (waitingImageId) => {
    return async dispatch => {

        dispatch({ type: REMOVER_IMAGEM_CAROUSEL_START, deleteImageId: waitingImageId  });

        const url = 'http://localhost:3001/carousel/deleteImage/' + waitingImageId;

        const config = {
            method: 'DELETE',
        }

        let response = await fetch(url, config);
        if (response.ok) {
            let data = await response.json();
            dispatch({ type: REMOVER_IMAGEM_CAROUSEL_SUCCESS, payload:  data, deleteImageId: waitingImageId });
        } else {
            dispatch({ type: REMOVER_IMAGEM_CAROUSEL_FAILURE, payload: response.status, deleteImageId: waitingImageId });
            console.error(response.status);
        }
    }
}


