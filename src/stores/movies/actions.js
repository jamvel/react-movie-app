import get from 'lodash.get';
import { SET_MOVIE, SET_MOVIES, INIT_FETCH_LIST, SET_LIST, ERROR_FETCH_LIST } from './types';
import { getPopular, getTopRated, getNowPlaying, getFromGenre } from 'api';

export const setMovie = movie => dispatch => {
    dispatch({
        type: SET_MOVIE,
        payload: {
            ...movie
        },
    })
}

export const setMovies = movies => dispatch => {
    dispatch({
        type: SET_MOVIES,
        payload: {
            movies: movies
        },
    })
}


export const getList = ({ id, fetchDataCallback, isGenre } = {}) => async (dispatch, getState) => {
    // PARAMS must be provided - throw error outside catch as an unrecoverable error
    if(id === undefined){
        throw new Error('Missing List ID in getList Action')
    }

    if(fetchDataCallback === undefined){
        throw new Error('Missing List callback in getList Action')
    }

    const state = getState().movies;
    const listObject = isGenre ? get(state.lists, `genre/${id}`) : get(state.lists, id) 
    const currentPageIndex = listObject ? listObject.index : 0

    const listId = isGenre ? `genre/${id}` : id;

    try {
        dispatch({
            type: INIT_FETCH_LIST,
            payload:{
                id: listId
            }
        })

        const data = await fetchDataCallback({
            ...isGenre && { genre: id },
            pageIndex: currentPageIndex + 1
        })

        const list = data.results.map(movie => movie.id)

        dispatch({
            type: SET_LIST,
            payload: {
                id: listId,
                list: list,
                index: data.page
            },
        })

        dispatch({
            type: SET_MOVIES,
            payload: {
                movies: data.results
            }
        })
    } catch(e){
        console.log(e)
        dispatch({
            type: ERROR_FETCH_LIST,
            payload: {
                id: listId,
                index: currentPageIndex
            }
        })
    }
};

export const getPopularList = () => getList({ id: 'popular', fetchDataCallback: getPopular })
export const getTopRatedList = () => getList({ id: 'topRated', fetchDataCallback: getTopRated })
export const getNowPlayingList = () => getList({ id: 'nowPlaying', fetchDataCallback: getNowPlaying })

export const getGenreMovieList = genreId => getList({ isGenre: true, id: genreId, fetchDataCallback: getFromGenre })