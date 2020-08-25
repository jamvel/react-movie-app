import { getPopularList } from 'stores/movies/actions';
import connectMovieList from 'helpers/connectMovieList';

export default connectMovieList({ 
    id: 'popular', 
    fetchDataCallback: getPopularList 
})