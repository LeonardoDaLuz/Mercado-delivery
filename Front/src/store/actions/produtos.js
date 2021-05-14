import { CARREGA_PRODUTOS_START, CARREGA_PRODUTOS_SUCCESS, CARREGA_PRODUTOS_FAILURE } from '../types'

export const carregaProdutosStart = id => ({
    type: CARREGA_PRODUTOS_START,
    payload: id
})

export const carregaProdutosSuccess = id => ({
    type: CARREGA_PRODUTOS_SUCCESS,
    payload: id
})

export const carregaProdutosFailure = id => ({
    type: CARREGA_PRODUTOS_FAILURE,
    payload: id
})

export const carregaProduto = (id) => {
    console.log("AKI PORRA");
    return dispatch => {
        dispatch(carregaProdutosStart());
        console.log("AKI PORRA 2");
        fetch('http://localhost:3001/produto2/' + id)
            .then(body => body.json())
            .then(data => {
                //this.setState({ produtoCarregado: p })
                console.log("PRODUTO CARREGADO PELO REDUX");
                dispatch(carregaProdutosSuccess(data));
            })
            .catch(err => {
                console.log("ERRO");
                dispatch(carregaProdutosFailure(err.message));
            })
    }
}
