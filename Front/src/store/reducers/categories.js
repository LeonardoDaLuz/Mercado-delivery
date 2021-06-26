import {
    LOAD_CATEGORY_START,
    LOAD_CATEGORY_SUCCESS,
    LOAD_CATEGORY_FAILURE,
    RENAME_CATEGORY_START,
    RENAME_CATEGORY_SUCCESS,
    RENAME_CATEGORY_FAILURE,
} from '../types'
import { nestedPropertySeletor } from '../../utils/nestedPropertySelector';
import { produce } from 'immer';
const initialState = {
    isFetching: false,
    result: 'none',
    data: {} //As propriedades __thumb correspondem ao thumbnail da propriedade, que será usado na interface em alguns casos.
};

const categories = produce((state, action) => {
    switch (action.type) {
        case LOAD_CATEGORY_START:
            state.isFetching = true;
            break;
        case LOAD_CATEGORY_SUCCESS:
            state.data =  action.payload.data;
            state.isFetching = false;
            state.result= 'ok';
            break;
        case LOAD_CATEGORY_FAILURE:
            state.isFetching = false;
            state.result = 'error';
            break;
        case RENAME_CATEGORY_START:
            nestedPropertySeletor(state.data, action.fieldToRename).renameTo( action.newName);
            break;
        case RENAME_CATEGORY_SUCCESS:
            state.data = action.payload.data;
            state.isFetching = false;
            state.result= 'ok';
            break;
        case RENAME_CATEGORY_FAILURE:
            state.isFetching = false;
            state.result = 'error';
            break;
    }
}, initialState);

export default categories;