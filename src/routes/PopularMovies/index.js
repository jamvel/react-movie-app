import { getPopularList } from 'stores/movies/actions';
import connectMovieList from 'helpers/connectMovieList';

/**
 * HOC to show Movies that are Popular
 * - Connected Component returned by connectMovieList function
 * @name Route/Popular
 * @component
 */
export default connectMovieList({ 
    id: 'popular',
    title: 'Popular Movies',
    fetchDataCallback: getPopularList 
})