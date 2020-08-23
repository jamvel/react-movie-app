import { SET_CONFIG, ERROR_SET_CONFIG } from './types';

const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CONFIG: {
            return {
                ...action.payload
            }
        }
        case ERROR_SET_CONFIG: {
            return null
        }
        default:
            return state;
    }
};