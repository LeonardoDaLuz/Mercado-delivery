import {
    LOAD_HOME_DATA,
    LOAD_HOME_DATA_START,
    LOAD_HOME_DATA_SUCCESS,
    LOAD_HOME_DATA_FAILURE
} from '../types'


const initialState = {
    ofertasDoDia: [],
    ofertasDaSemana: [],
    ofertasDoMes: [],
    maisVendidos: [],
    menosvendidos: [],
};

const home = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_HOME_DATA_SUCCESS:
            return { ...action.payload }
        default:
            return state;
    }
}

export default home;