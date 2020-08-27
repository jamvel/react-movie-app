import React from 'react';
import { connect } from 'react-redux';
import get from 'lodash.get';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const GenreListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    background: transparent;
    overflow-x: overlay;
    padding: 1em 0;
    :hover {
        cursor: url(${process.env.PUBLIC_URL}/scroll.png) 32 15, auto;
    }	
`

const Genre = styled.div`
    background: transparent;
    color: ${({ theme }) => theme.secondary};
    border: 1px solid ${({ theme }) => theme.secondary};
    border-radius: 1em;
    display: flex;
    align-items: center;
    flex-basis: 200px;
    flex-grow: 0;
    flex-shrink: 0;
    justify-content: center;
    margin: 0 1em;
    padding: .5em 0;

    :hover {
        background: maroon;
    }
`
/**
 * Displays a list of genres
 * @name GenreList
 * @component
 * @param {Object[]} genres 
 */
const GenreList = ({ genres }) => {
    const history = useHistory();
    const handleClick = id => {
        history.push(`/genre/${id}`)
    }
    return (
        <>
            {genres.length > 0 && (
                <GenreListWrapper>
                    {genres.map(genre => (
                        <Genre
                            key={genre.id}
                            onClick={() => handleClick(genre.id)}
                        >
                            {genre.name}
                        </Genre>
                    ))}
                </GenreListWrapper>
            )}
        </>
    )
}

const mapStateToProps = state => {
    return {
        genres: get(state, 'config.genres') || []
    }
}

export default connect(mapStateToProps, null)(GenreList);