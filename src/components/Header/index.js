import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

import { toggleSearch } from 'stores/app/actions'

import Search from 'components/Search';

const HeaderParent = styled.div`
    width: 100%;
    height: auto;
    color: white;
    font-size: 1.5em;
`

const BrandWrapper = styled.div`
    margin: 0 20px;
    user-select: none;
    cursor: pointer;
`

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > svg {
        margin-right: 20px;
        font-size: 20px;
        cursor: pointer;
    }
`

const Header = ({ showSearch, toggleSearchRx }) => {
    const history = useHistory();
    return (
        <HeaderParent>
            <HeaderWrapper>
                <BrandWrapper onClick={() => history.push('/')}>
                    <FontAwesomeIcon icon="film" /> React <span>Movies</span>
                </BrandWrapper>
                <FontAwesomeIcon 
                    icon={showSearch ? 'times' : 'search'}
                    onClick={() => toggleSearchRx()}
                />
            </HeaderWrapper>
            {showSearch && (
                <Search />
            )}
        </HeaderParent>
    )
}

const mapStateToProps = state => {
    return {
        showSearch: state.app.showSearch
    }
}
  
const mapDispatchToProps = dispatch => ({
    toggleSearchRx: (toggle = null) => dispatch(toggleSearch(toggle))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);