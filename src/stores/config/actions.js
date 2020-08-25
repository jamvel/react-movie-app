import { SET_CONFIG, ERROR_SET_CONFIG, INIT_SET_CONFIG } from './types';
import { getConfiguration, getGenres } from 'api';

export const initConfig = () => async dispatch => {
    try {
        dispatch({ type: INIT_SET_CONFIG })

        const config = await getConfiguration()
        const genres = await getGenres()
    
        dispatch({
            type: SET_CONFIG,
            payload: {
                ...config,
                ...genres
            },
        })
    } catch(e){
        dispatch({
            type: ERROR_SET_CONFIG
        })
    }
};