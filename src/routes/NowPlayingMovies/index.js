import { getNowPlayingList } from 'stores/movies/actions';
import connectMovieList from 'helpers/connectMovieList';

export default connectMovieList({ 
    id: 'nowPlaying', 
    title: 'Now Playing',
    fetchDataCallback: getNowPlayingList 
})