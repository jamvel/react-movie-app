import { getTopRatedList } from 'stores/movies/actions';
import connectMovieList from 'helpers/connectMovieList';

/**
 * HOC to show Movies that are TopRated
 * - Connected Component returned by connectMovieList function
 * @name Route/Popular
 * @component
 */
export default connectMovieList({ 
    id: 'topRated',
    title: 'Top Rated Movies',
    fetchDataCallback: getTopRatedList 
})