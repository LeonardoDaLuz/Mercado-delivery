import { 
    CARREGA_PRODUTO_START, 
    CARREGA_PRODUTO_SUCCESS, 
    CARREGA_PRODUTO_FAILURE,
    LIKE_PRODUTO_START,
    LIKE_PRODUTO_SUCCESS,
    LIKE_PRODUTO_FAILURE
} from '../types'

export const carregaProduto = (id) => {

    return dispatch => {
        dispatch({ type: CARREGA_PRODUTO_START });
        fetch('http://localhost:3001/produto2/' + id)
            .then(body => body.json())
            .then(data => {           
                console.log("PRODUTO CARREGADO PELO REDUX");
                dispatch({ type: CARREGA_PRODUTO_SUCCESS, payload: data });
            })
            .catch(err => {
                console.log("ERRO");
                dispatch({ type: CARREGA_PRODUTO_FAILURE, payload: err.message });
            })
    }
}

export const likeProduto = (id) => {

    return dispatch => {
        dispatch({ type: LIKE_PRODUTO_START});

        const conta=0;
        fetch(`http://localhost:3001/like/${conta}/${id}`, { method: 'POST' })
            .then(body => body.json())
            .then(data => {
                dispatch({ type: LIKE_PRODUTO_SUCCESS});
                dispatch({ type: CARREGA_PRODUTO_SUCCESS, payload: data });
            });
    }
}
