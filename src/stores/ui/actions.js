import { TOGGLE_SEARCH, TOGGLE_MENU } from './types';

export const toggleSearch = (value = null) => dispatch => {
    dispatch({
        type: TOGGLE_SEARCH,
        payload: value,
    })
};

export const toggleMenu = (value = null) => dispatch => {
    dispatch({
        type: TOGGLE_MENU,
        payload: value,
    })
};