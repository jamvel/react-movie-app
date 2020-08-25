import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import get from 'lodash.get'
import styled from 'styled-components';

import Card from 'components/MovieCard'
import { getPopularList } from 'stores/movies/actions'

const MovieCardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 0.1em;
  // height: 100%;
  // overflow: scroll;

  :focus {
    outline: none;
    border: none;
  }
  @media screen and (max-width: 1140px) {
    padding: 1.5em;
  }
  @media screen and (max-width: 992px) {
    padding: 1em 0.65em;
  }
  @media screen and (max-width: 768px) {
    padding: 0.35em;
  }
  @media screen and (max-width: 576px) {
    padding: 0.25em;
  }
`;

const MovieList = ({ listObject, fetchDataCallback }) => {
    const handleClick = () => {
        fetchDataCallback();
    }
    
  return (
    <>
        {listObject && 'list' in listObject && (
            <>
                <MovieCardContainer>
                    {listObject.list && listObject.list.map(id => (
                        <Card id={id} key={id} />
                    ))}
                </MovieCardContainer>
                <button onClick={() => handleClick()} disabled={listObject.isLoading}>
                    Get More
                </button>
            </>
        )}

        {listObject && listObject.isLoading && (
            <div>Loading</div>
        )}

        {listObject && listObject.isError && (
            <div>Something went wrong :(</div>
        )}
    </>
)}

const mapStateToProps = state => {
    const popularList = get(state, 'movies.lists.popular');
    return {
        listObject: popularList || null
    }
}

const mapDispatchToProps = dispatch => ({
    fetchDataCallback: () => dispatch(getPopularList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)