import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

import { toggleSearch, toggleMenu } from 'stores/ui/actions'

import Search from 'components/Search';

const HeaderParent = styled.div`
    width: 100%;
    height: 50px;
    color: white;
    font-size: 1.5em;
    padding-top: .3em;
`

const BrandWrapper = styled.div`
    margin-left: 1em;
    user-select: none;
    cursor: pointer;
`

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > svg {
        font-size: 20px;
        cursor: pointer;
    }
`

const IconWrapper = styled.div`
    svg {
        margin-left: 0.7em;
        cursor: pointer;

        :last-child {
            margin-right: 1em;
        }
    }
`

const Header = ({ showSearch, toggleSearchRx, openMenuRx }) => {
    const history = useHistory();
    return (
        <HeaderParent>
            <HeaderWrapper>
                <BrandWrapper onClick={() => history.push('/')}>
                    <FontAwesomeIcon icon="film" /> React <span>Movies</span>
                </BrandWrapper>
                <IconWrapper>
                    <FontAwesomeIcon 
                        icon={showSearch ? 'times' : 'search'}
                        onClick={() => toggleSearchRx()}
                    />
                    <FontAwesomeIcon 
                        icon='bars'
                        onClick={() => openMenuRx()}
                    />
                </IconWrapper>
            </HeaderWrapper>
            {showSearch && (
                <Search />
            )}
        </HeaderParent>
    )
}

const mapStateToProps = state => {
    return {
        showSearch: state.ui.showSearch
    }
}
  
const mapDispatchToProps = dispatch => ({
    toggleSearchRx: (toggle = null) => dispatch(toggleSearch(toggle)),
    openMenuRx: () => dispatch(toggleMenu(true))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);