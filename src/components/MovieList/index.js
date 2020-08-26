import React, { useEffect } from 'react';
import styled from 'styled-components';
import theme from 'helpers/theme';
import Card from 'components/MovieCard';
import Loader from 'components/Loader';
import Error from 'components/Error';

const MovieCardContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding: 0.1em;
    justify-content: center;

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
        padding: 0.1em;
    }
`;

const TitleContainer = styled.div`
    color: ${({ theme }) => theme.secondary};
    font-size: 1.6em;
    padding-left: 0.6em;
    width: 100%;
    font-weight: bold;
    border-bottom: 1px solid ${({ theme }) => theme.secondary};
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const Button = styled.button`
    display: flex;
    height: 60px;
    align-items: center;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.secondary};
    padding: 1.3em;
    margin: 1em 0 3em 0;
    color: white;
    border-radius: 1em;
    font-weight: bold;
    cursor: pointer;
`

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
    }, [listObject, fetchDataCallback])

    const handleClick = () => {
        fetchDataCallback();
    }
    
    return (
        <>
            <TitleContainer>{title}</TitleContainer>
            {listObject && 'list' in listObject && config && !config.isLoading && listObject.list.length > 0 &&(
                <>
                    <MovieCardContainer>
                        {listObject.list && listObject.list.map(id => (
                            <Card id={id} key={id} />
                        ))}
                    </MovieCardContainer>
                    <ButtonWrapper>
                        <Button onClick={() => handleClick()} disabled={listObject.isLoading}>
                            {listObject.isLoading ? <Loader color={theme.secondary} /> : 'Fetch More'}
                        </Button>
                    </ButtonWrapper>
                </>
            )}

            {listObject && config && (listObject.isLoading || config.isLoading) && !listObject.list &&(
                <Loader color={theme.secondary} />
            )}

            {listObject && config && !listObject.isLoading && !config.isLoading && listObject.list.length <= 0 && (
                <Error text={'Could Not Find List'} />
            )}

            {listObject && listObject.isError && (
                <Error text={'Something went wrong :('} />
            )}
        </>
)}

export default MovieList;