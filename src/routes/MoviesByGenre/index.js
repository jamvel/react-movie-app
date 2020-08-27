import React from 'react'
import { connect } from 'react-redux';
import get from 'lodash.get';
import MovieList from 'components/MovieList';
import { getGenreMovieList } from 'stores/movies/actions';

/**
 * HOC component to show a Genre
 * @name Route/Genre
 * @component
 * @param {...Object} props - Same props as MovieList component since this is just a Wrapper 
 */
const Genre = props => (
    <MovieList {...props} />
)

export default connect((state, ownProps) => {
    const listObject = get(state, `movies.lists.genre/${ownProps.id}`);
    const config = get(state, 'config');

    // fetch the title from config after config is loaded
    let title = null;
    if(config && 'genres' in config){
        title = get(config['genres'].find(g => g.id.toString() === ownProps.id), 'name') || null
        if(title){
            title = `${title} Genre`
        }
    }

    return {
        listObject: listObject || null,
        config,
        title,
    }
}, (dispatch, ownProps) => ({
    fetchDataCallback: () => dispatch(getGenreMovieList(ownProps.id)),
}))(Genre);;