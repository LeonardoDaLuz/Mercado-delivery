import {
    LOAD_HOME_DATA,
    LOAD_HOME_DATA_START,
    LOAD_HOME_DATA_SUCCESS,
    LOAD_HOME_DATA_FAILURE

} from '../types'


export const loadHome = (id, callback) => {

    return dispatch => {
        dispatch({ type: LOAD_HOME_DATA_START });
        fetch('http://localhost:3001/home/')
            .then(body => body.json())
            .then(data => {
                console.log("Dados da home carregados");
                dispatch({ type: LOAD_HOME_DATA_SUCCESS, payload: data });
            })
            .catch(err => {
                console.log("Não foi possível carregar dados da home");
                dispatch({ type: LOAD_HOME_DATA_FAILURE, payload: err.message });
            })
    }
}
