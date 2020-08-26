import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import get from 'lodash.get';
import styled from 'styled-components';
import { getMovieDetails } from 'api';

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

// const Desription

const Movie = ({ id, movieRx }) => {
    const [movieData, setMovieData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const data = await getMovieDetails(id);

            if(movieRx){
                // perform a merge with redux state
                setMovieData({
                    ...movieRx,
                    videos: { ...data.videos },
                    similar: { ...data.similar }
                })
            }else{
                setMovieData(data)
            }
        }

        if(movieRx){
            setMovieData(movieRx)
            getData()
        }else{
            getData()
        }

    }, [id])

    useEffect(() => {
        if(movieData){
            console.log(movieData)
        }
    }, [movieData])

    return (
        <>
            {movieData && movieData.id == id && (
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