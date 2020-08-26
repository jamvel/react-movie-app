import React, { useEffect } from 'react';
import styled from 'styled-components';
import Card from 'components/MovieCard';

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

/**
 * Movie List Component that fetches data and then displays a MovieCard list
 * 
 * @component
 * @param {Object} listObject - List Object containing different properties
 * @param {boolean} listObject.isLoading - ListObject property that shows whether data for a given list is being fetched
 * @param {boolean} listObject.isError - ListObject property that shows whether or not there was an error during data fetch
 * @param {number[]} listObject.list - ListObject property that contains a list of movie ids
 * @param {Object} config - Config Object containing different properties
 * @param {boolean} config.isLoading - Config property that shows whether the config data is being fetched
 * @param {Function} fetchDataCallback - Redux Action that performs the data fetch for a given list
 */
const MovieList = ({ listObject, fetchDataCallback, config, title }) => {
    /**
     * Initialise data on mount by calling fetchDataCallback action
     */
    useEffect(() => {
        // only dispatch action if list object is not in store
        if(!listObject){
            fetchDataCallback()
        }
    }, [])

    const handleClick = () => {
        fetchDataCallback();
    }
    
    return (
        <>
            <div>{title}</div>
            {listObject && 'list' in listObject && config && !config.isLoading && listObject.list.length > 0 &&(
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

            {listObject && config && (listObject.isLoading || config.isLoading) && (
                <div>Loading</div>
            )}

            {listObject && config && !listObject.isLoading && !config.isLoading && (
                <div>List Not Found</div>
            )}

            {listObject && listObject.isError && (
                <div>Something went wrong :(</div>
            )}
        </>
)}

export default MovieList;