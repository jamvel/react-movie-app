import { getNowPlayingList } from 'stores/movies/actions';
import connectMovieList from 'helpers/connectMovieList';

/**
 * HOC to show Movies that are Now Playing
 * - Connected Component returned by connectMovieList function
 * @name Route/Now
 * @component
 */
export default connectMovieList({ 
    id: 'nowPlaying', 
    title: 'Now Playing',
    fetchDataCallback: getNowPlayingList 
})