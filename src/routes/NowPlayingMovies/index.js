import { getNowPlayingList } from 'stores/movies/actions';
import connectMovieList from 'helpers/connectMovieList';

export default connectMovieList({ 
    id: 'nowPlaying', 
    fetchDataCallback: getNowPlayingList 
})