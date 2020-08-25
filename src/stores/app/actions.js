import { TOGGLE_SEARCH } from './types';

export const toggleSearch = (value = null) => dispatch => {
    dispatch({
        type: TOGGLE_SEARCH,
        payload: value,
    })
};