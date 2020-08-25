import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Search from 'components/Search';

const HeaderWrapper = styled.div`
    width: 100%;
    height: auto;
    color: white;
    font-size: 1.5em;
`

const BrandWrapper = styled.div`
    margin: 0 10px;
`

const Header = () => (
    <HeaderWrapper>
        <BrandWrapper>
            <FontAwesomeIcon icon="film" /> React <span>Movies</span>
        </BrandWrapper>
        <Search />
    </HeaderWrapper>
)

export default Header;