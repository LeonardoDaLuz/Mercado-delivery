import {
    LOAD_OFFERS,
    LOAD_OFFERS_START,
    LOAD_OFFERS_SUCCESS,
    LOAD_OFFERS_FAILURE,
    SAVE_OFFERS_SUCCESS,
} from '../types'


const initialState = {
    data: []
};

const offers = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_OFFERS_SUCCESS:
            return { ...state, data: action.payload }
        case SAVE_OFFERS_SUCCESS:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}

export default offers;