import React, { useState } from 'react';
import debounce from 'lodash.debounce';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Result from 'components/SearchResult';
import { searchMovies } from 'api';

const Parent = styled.div`
    width: 100%;
    position: absolute;
    height: auto;
    box-sizing: border-box;
    background: white;
    z-index: 3;
    overflow-x: hidden;
`

const InputParent = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 15px;
    border-bottom: 1px solid ${props => props.theme.primary};
`

const Input = styled.input`
    display: flex;
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-family: inherit;
    padding: 0 10px;
    border: none;

    :focus {
        outline: none;
    }
`

const Results = styled.div`
    height: auto;
    color: black;
    font-size: 14px;
    font-family: inherit;
    max-height: 80vh;
    overflow: scroll;
`

const Error = styled.div`
    display: flex;
    justify-content: center;
    padding: 1em;
`

/**
 * Search component - Self sufficient without redux state connection
 * @name Search
 * @component
 */
const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchQuery, setSearchQuery] = useState({}); // eslint-disable-line no-unused-vars
    const [searchData, setSearchData] = useState({});
    const [isError, setIsError] = useState(false);

    const handleChange = e => {
        const { value } = e.target;
        setSearchValue(value);

        // debounce so that we don't run too many queries
        const search = debounce(getSearchData, 500);

        setSearchQuery(prevSearch => {
            if (prevSearch.cancel) {
              prevSearch.cancel();
            }
            return search;
        });

        search(value);
    }

    const getSearchData = async value => {
        try {
            if(value.length > 1){
                const { cancelPrevQuery, data } = await searchMovies(value);
        
                if (cancelPrevQuery){
                    return;
                }
        
                setSearchData(data)
                if(isError){
                    setIsError(false)
                }
            }
        }catch(e){
            setIsError(true)
        }
    }

    return (
        <Parent>
            <InputParent>
                <FontAwesomeIcon icon="search" color='grey' size='xs' />
                <Input
                    autoFocus
                    value={searchValue}
                    onChange={handleChange}
                />
            </InputParent>
            <Results>
                {'results' in searchData && searchData.results.map(movie => (
                    <Result key={movie.id} movie={movie} />
                ))}
                {isError && (
                    <Error>Something went wrong whilst searching</Error>
                )}
            </Results>
        </ Parent>
)}

export default Search;