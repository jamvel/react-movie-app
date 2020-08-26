import { TOGGLE_SEARCH, TOGGLE_MENU } from './types';

const initialState = {
    showSearch: false,
    showMenu: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SEARCH: {
            return {
                ...state,
                showSearch: action.payload === null ? !state.showSearch : action.payload
            }
        }
        case TOGGLE_MENU: {
            return {
                ...state,
                showMenu: action.payload === null ? !state.showMenu : action.payload
            }
        }
        default:
            return state;
    }
};