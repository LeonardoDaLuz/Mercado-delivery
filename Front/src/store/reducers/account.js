import { arrayRemove } from '../../utils/arrayUtils';
import produce from "immer";
import {
    CARREGAR_IMAGENS_CAROUSEL,

} from '../types'

const initialState = {
    permissions: 'admin'
}

const account = produce((state, action) => {

    switch (action.type) {
        case "LOGIN":
            break;    
    }
}, initialState)

export default account;
