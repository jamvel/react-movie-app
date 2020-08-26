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

const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchQuery, setSearchQuery] = useState({});
    const [searchData, setSearchData] = useState({});

    const handleChange = e => {
        const { value } = e.target;
        setSearchValue(value);

        const search = debounce(getSearchData, 1000);

        setSearchQuery(prevSearch => {
            if (prevSearch.cancel) {
              prevSearch.cancel();
            }
            return search;
        });

        search(value);
    }

    const getSearchData = async value => {
        const { cancelPrevQuery, data } = await searchMovies(value);
        
        if (cancelPrevQuery){
            console.log('QUERY CANCELLED')
            return;
        }

        setSearchData(data)
    }

    return (
        <Parent 
            onBlur={() => {
                console.log('blur event')
            }}
        >
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
                    <Result movie={movie} />
                ))}
            </Results>
        </ Parent>
)}

export default Search;