import get from 'lodash.get';
import { SET_MOVIE, SET_MOVIES, SET_LIST, ERROR_FETCH_LIST, INIT_FETCH_LIST } from './types';

const initialState = {
    lists: {},
    data: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIE: {
            return {
                ...state,
                [action.payload.id]: {
                    ...action.payload
                }
            }
        }
        case SET_MOVIES: {
            const movies = {}
            action.payload.movies.forEach(movie => {
                // do not overwrite any movies already in state
                if(!(movie.id in state.data)){
                    movies[movie.id] = { ...movie };
                }else{
                    console.log(`Movie ID: ${movie.id} already in state... Skipping`)
                }
            });
            return {
                ...state,
                data: {
                    ...state.data,
                    ...movies
                }
            }
        }
        case INIT_FETCH_LIST: {
            const id = action.payload.id
            const listObject = get(state.lists, id);

            return {
                ...state,
                lists: {
                    ...state.lists,
                    [action.payload.id]: {
                        ...listObject,
                        isLoading: true
                    }
                }
            }
        }
        case ERROR_FETCH_LIST: {
            const id = action.payload.id
            const listObject = get(state.lists, id);

            return {
                ...state,
                lists: {
                    ...state.lists,
                    [action.payload.id]: {
                        ...listObject,
                        isLoading: false,
                        index: action.payload.index,
                    }
                }
            }
        }
        case SET_LIST: {
            const id = action.payload.id;
            let list = get(get(state.lists, id), 'list') // list inside list object

            return {
                ...state,
                lists: {
                    ...state.lists,
                    [action.payload.id]:{
                        isLoading: false,
                        index: action.payload.index,
                        list: list ? list.concat(action.payload.list) : action.payload.list
                    }
                }
            }
        }
        // case UPDATE_LIST: {
        //     const id = action.payload.id;
        //     const listObject = get(state.lists, id);
        //     const list = get(listObject, 'list');

        //     return {
        //         ...state,
        //         lists: {
        //             ...state.lists,
        //             [id]:{
        //                 index: action.payload.index,
        //                 list: list.concat(action.payload.list)
        //             }
        //         }
        //     }
        // }
        default:
            return state;
    }
};