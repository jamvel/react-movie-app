import { INIT_SET_CONFIG, SET_CONFIG, ERROR_SET_CONFIG } from './types';

const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case INIT_SET_CONFIG: {
            return {
                isLoading: true
            }
        }
        case SET_CONFIG: {
            return {
                isLoading: false,
                ...action.payload
            }
        }
        case ERROR_SET_CONFIG: {
            return null;
        }
        default:
            return state;
    }
};