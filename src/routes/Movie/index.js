import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import get from 'lodash.get';
import styled from 'styled-components';
import { getMovieDetails } from 'api';
import Error from 'components/Error';

const Background = styled.div`
    position: fixed;
    top: 0;
    opacity: 0.2;
    width: 100%;
    max-width: 100%;
    height: 100%;
    background: url('https://image.tmdb.org/t/p/original/${props => props.background}') no-repeat center center fixed;;
    background-size: cover;
    background-repeat: no-repeat;
    filter: saturate(0.4);
    z-index: -1;
`

const Wrapper = styled.div`
    display: flex;
    color: ${({ theme }) => theme.secondary};
    padding: 1em;
`

const Title = styled.div`
    font-size: 2em;
    font-weight: bold;

    > span:first-child {
        margin-left: 0.2em;
        font-size: 0.5em;
    }

    > div {
        font-weight: normal;
        font-size: .5em;
    }
`

const Movie = ({ id, movieRx }) => {
    const [movieData, setMovieData] = useState(null);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getMovieDetails(id);
                if(movieRx){
                    // perform a merge with redux state
                    setMovieData({
                        ...movieRx,
                        videos: { ...data.videos },
                        similar: { ...data.similar }
                    })
                }else {
                    setMovieData(data)
                }
            } catch(e){
                setIsError(true);
            }
        }

        getData()
    }, [id])

    useEffect(() => {
        if(movieData){
            console.log(movieData)
        }
    }, [movieData])

    return (
        <>
            {isError && (
                <Error text={'Could not find movie'} />
            )}
            {movieData && movieData.id == id && !isError &&(
                <>
                    <Background background={movieData.backdrop_path} />
                    <Wrapper>
                        <Title>
                            {movieData.title}
                            <span>({new Date(movieData.release_date).getFullYear()})</span>
                            <div>{movieData.tagline}</div>
                        </Title>
                    </Wrapper>
                </>
            )}
        </>
    )
}

const mapStateToProps = (state, props) => {
    const data = get(state, 'movies.data');
    const config = get(state, 'config');
    
    return {
        movieRx: data[props.id] || null,
        config: config,
        // secureBaseUrl: get(imagesConfig, 'secure_base_url'),
        // posterSize: get(imagesConfig, 'poster_sizes[3]')
    }
}

export default connect(mapStateToProps, null)(Movie)