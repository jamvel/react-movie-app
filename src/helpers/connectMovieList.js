import { connect } from 'react-redux';
import get from 'lodash.get';
import MovieList from 'components/MovieList';

/**
 * @function connectMovieList - Connects a list to a MovieList Component
 * @param {string} id - The List id
 * @param {string} title - Movie list title
 * @param {Function} fetchDataCallback - Redux Action that performs the data fetch
 */
const connectMovieList = ({ id, title, fetchDataCallback }) => {
    return connect(state => {
        const listObject = get(state, `movies.lists.${id}`);
        return {
            listObject: listObject || null,
            config: get(state, 'config'),
            title: title || ''
        }
    }, dispatch => ({
        fetchDataCallback: () => dispatch(fetchDataCallback()),
    }))(MovieList);
}

export default connectMovieList;