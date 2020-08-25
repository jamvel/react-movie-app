import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ResultParent = styled.div`
    display: flex;
    flex-direction: row;
    max-height: 68px;
    border-bottom: 1px solid lightgrey;
`

const PosterImagePlaceHolder = styled.div`
    width: 45px;
    height: 68px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.primary};

    > img {
        width: 45px;
        height: 68px;
    }
`

const ResultInfoParent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: calc(100% - 50px);
    overflow: hidden;
    padding: 0 5px;
`
const ResultTitle = styled.div`
    font-weight: bold;
`

const ResultDesc = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
`

const Result = ({ movie }) => (
    <ResultParent onClick={() => console.log(movie)}>
        <PosterImagePlaceHolder>
            {movie.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w45/${movie.poster_path}`} />
            ) : (
                <FontAwesomeIcon icon="film" color='white' />
            )}
        </PosterImagePlaceHolder>
        <ResultInfoParent>
            <ResultTitle>{movie.title} ({new Date(movie.release_date).getFullYear()})</ResultTitle>
            <ResultDesc>
                {movie.overview}
            </ResultDesc>
        </ResultInfoParent>
    </ResultParent>
)

export default Result;