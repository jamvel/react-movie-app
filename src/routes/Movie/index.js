import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import get from 'lodash.get';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { getMovieDetails } from 'api';
import theme from 'helpers/theme';
import Error from 'components/Error';
import Loader from 'components/Loader';
import MovieCard from 'components/MovieCard'

const Background = styled.div`
    position: fixed;
    top: 0;
    opacity: 0.2;
    width: 100%;
    max-width: 100%;
    height: 100%;
    background: url('${props => props.secureBaseUrl}original/${props => props.background}') no-repeat center center fixed;;
    background-size: cover;
    background-repeat: no-repeat;
    filter: saturate(0.4);
    z-index: -1;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.secondary};
    padding: 1em;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding: 0 .7em;
    }
`

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        flex-direction: column;
    }
`

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        flex-direction: column;
    }
`

const Title = styled.div`
    display: flex;
    align-items: center;
    font-size: 2em;
    font-weight: bold;
    flex-wrap: wrap;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 1.6em;
    }

    > span:first-child {
        margin-left: 0.2em;
        font-size: 0.5em;
    }
`

const Genres = styled.div`
    display: flex;
    margin-left: .4em;
    flex-wrap: wrap;

    > div {
        font-size: 0.65em;
        margin: 0.3em;
        border: 1px solid ${({ theme }) => theme.secondary};
        padding: .3em;
        border-radius: .5em;
        font-weight: 300;

        :hover {
            cursor: pointer
        }

        @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
            font-size: .9em;
            justify-content: center;
            margin-bottom: .5em;
        }
    }
`

const InfoTitle = styled.div`
    display: flex;
    flex-wrap: wrap;
    span {
        :first-child{
            margin-right: 1em;
        }

        svg:first-child{
            margin-right: 0.3em;
        }

        > span {
            font-size: .6em;
            margin-left: .2em;
        }
    }
`

const TagLine = styled.div`
    font-weight: 300;
    font-size: 1em;
    font-style: italic;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-top: 1em;
        text-align: center;
        font-size: 1em;
    }
`
const InfoWrapper = styled.div`
    margin-top: 1em;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
       font-size: 0.8em;
    }

    * > a {
        color: skyblue;
    }

    > div:last-child {
        display: flex;
        overflow: hidden;
        flex-wrap: wrap;
    }
`

const Overview = styled.div`
    margin-top: 1em;
    font-size: .9em;
    text-align: justify;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 0.8em;
    }
`

const VideoWrapper = styled.div`
    width: 640px;
    position:relative;
    overflow:hidden;
    margin: 1em auto 0 auto;

    @media (max-width: 639px) {
        width: 100%;
    }
`

const Similar = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding: 0.1em;
    justify-content: center;
`
/**
 * HOC component to show Movie info
 * - This HOC will fetch data from the API each time the /movie/:id route is hit
 * - Data from redux will be re written by the components internal state
 * - Component does not dispatch any actions to redux when a movie is fetched to limit the amount of data stored in redux
 * 
 * @name Route/Movie
 * @component
 * @param {string} id - The movie id
 * @param {Object} movieRx - The movie data from redux
 * @param {string} secureBaseUrl - URL to fetch the asset from 
 */
const Movie = ({ id, movieRx, secureBaseUrl }) => {
    const [movieData, setMovieData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const history = useHistory();

    /* 
        Use this effect to load data already in redux
        Data will be replaced by api call but if is Client routed, background will load before data is fetched
    */
    useEffect(() => {
        if(movieRx){
            setMovieData(movieRx)
        }
    }, [movieRx])

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true)
                const data = await getMovieDetails(id);
                setMovieData(data)
                setIsLoading(false)
            } catch(e){
                setIsLoading(false)
                setIsError(true);
            }
        }

        getData()
    }, [id, movieRx])


    return (
        <>
            {isError && (
                <Error text={'Could not find movie'} />
            )}
            {/* Check that the id matches the id inside the data so that a re render occurs */}
            {movieData && movieData.id.toString() === id && !isError &&(
                <>
                    <Background background={movieData.backdrop_path} secureBaseUrl={secureBaseUrl} />
                    <Wrapper>
                        {!isLoading && (
                            <>
                                <HeaderWrapper>
                                    <TitleWrapper>
                                        <Title>
                                            {movieData.title}
                                            <span>({new Date(movieData.release_date).getFullYear()})</span>
                                        </Title>
                                        <Genres>
                                            {movieData.genres.map(g => (
                                                <div key={g.id} onClick={() => history.push(`/genre/${g.id}`)}>
                                                    {g.name}
                                                </div>
                                            ))}
                                        </Genres>
                                    </TitleWrapper>
                                    <InfoTitle>
                                        <span><FontAwesomeIcon icon="clock" />{movieData.runtime}mins</span>
                                        <span>
                                            <FontAwesomeIcon icon="star" />
                                            {movieData.vote_average}
                                            <span>
                                                ({movieData.vote_count} votes)
                                            </span>
                                        </span>
                                    </InfoTitle>
                                </HeaderWrapper>
                                <TagLine>
                                    {movieData.tagline}
                                </TagLine>
                                <InfoWrapper>
                                    <div>
                                        Release Date: {movieData.release_date}
                                    </div>
                                    <div>
                                        Homepage: {movieData.homepage && <a href={movieData.homepage} target="_blank" rel="noopener noreferrer">{movieData.homepage}</a>}
                                    </div>
                                </InfoWrapper>
                                <Overview>
                                    {movieData.overview}
                                </Overview>
                                <VideoWrapper>
                                    {movieData.videos && movieData.videos.results.length > 1 && movieData.videos.results[0].site === 'YouTube' && (
                                        <ReactPlayer 
                                            url={`https://www.youtube.com/embed/${get(get(movieData, 'videos.results[0]'), 'key')}`} 
                                            playing={true}
                                            width="100%" 
                                            controls={true} 
                                        />
                                    )}
                                </VideoWrapper>
                                {movieData.similar && movieData.similar.results.length > 0 && (
                                    <>
                                        <h2>You may also be interested in</h2>
                                        <Similar>
                                            {movieData.similar.results.map(movie => (
                                                <MovieCard movie={movie} key={movie.id} />
                                            ))}
                                        </Similar>
                                    </>
                                )}
                            </>
                        )}
                    </Wrapper>
                </>
            )}
            {isLoading && (
                <Loader color={theme.secondary} />
            )}
        </>
    )
}

const mapStateToProps = (state, props) => {
    const data = get(state, 'movies.data');
    const imagesConfig = get(state, 'config.images');
    
    return {
        movieRx: data[props.id] || null,
        secureBaseUrl: get(imagesConfig, 'secure_base_url')
    }
}

export default connect(mapStateToProps, null)(Movie)