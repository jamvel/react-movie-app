import { getTopRatedList } from 'stores/movies/actions';
import connectMovieList from 'helpers/connectMovieList';

export default connectMovieList({ 
    id: 'topRated',
    title: 'Top Rated Movies',
    fetchDataCallback: getTopRatedList 
})