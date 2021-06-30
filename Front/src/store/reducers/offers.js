import {
    LOAD_OFFERS,
    LOAD_OFFERS_START,
    LOAD_OFFERS_SUCCESS,
    LOAD_OFFERS_FAILURE
} from '../types'


const initialState = {
    data: []
};

const offers = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_OFFERS_SUCCESS:
            return { data: action.payload.data }
        default:
            return state;
    }
}

export default offers;