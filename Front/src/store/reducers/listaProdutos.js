const initialState = [];

const listaProdutosReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_PRODUTOS_SUCCESS":
            return state;
        default:
            return state;
    }
}

export default listaProdutosReducer;