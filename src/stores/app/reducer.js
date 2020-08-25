import { TOGGLE_SEARCH } from './types';

const initialState = {
    showSearch: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SEARCH: {
            return {
                ...state,
                showSearch: action.payload === null ? !state.showSearch : action.payload
            }
        }
        default:
            return state;
    }
};