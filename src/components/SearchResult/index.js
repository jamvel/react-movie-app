import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from "react-router-dom";
import get from 'lodash.get';

import { toggleSearch } from 'stores/ui/actions'

const ResultParent = styled.div`
    display: flex;
    flex-direction: row;
    max-height: 68px;
    border-bottom: 1px solid lightgrey;
    cursor: pointer;
    transition: transform 0.3s ease;

    :hover {
        transform: scale(1.008);
        z-index: 2;
    }
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
/**
 * Component that displays a single search result
 * @name Result
 * @component
 * @param {Object} movie - The movie object containing the data
 * @param {string} secureBaseUrl - URL to fetch the asset from
 * @param {string} posterSize - Size of poster image 
 * @param {Function} toggleSearchRx - Function that dispatches an action to toggle the Search bar 
 */
const Result = ({ movie, secureBaseUrl, posterSize, toggleSearchRx }) => {
    const history = useHistory();
    return (
        <ResultParent 
            onClick={() => {
                toggleSearchRx(false)
                history.push(`/movie/${movie.id}`)
            }}
        >
            <PosterImagePlaceHolder>
                {movie.poster_path ? (
                    <img src={`${secureBaseUrl}${posterSize}/${movie.poster_path}`} alt="Poster" />
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
}

const mapStateToProps = state => {
    const imagesConfig = get(state, 'config.images');
    return {
        showSearch: state.ui.showSearch,
        secureBaseUrl: get(imagesConfig, 'secure_base_url'),
        posterSize: get(imagesConfig, 'logo_sizes[3]')
    }
}
  
const mapDispatchToProps = dispatch => ({
    toggleSearchRx: toggle => dispatch(toggleSearch(toggle))
})

export default connect(mapStateToProps, mapDispatchToProps)(Result);