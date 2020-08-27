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
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 0.9em
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
        font-size: 0.7em
    }
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

const RightSectionWrapper = styled.div`
    display: flex;
    align-items: center;

    > a {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1.5em;
        font-size: 7px;
        width: 50px;
        color: ${({ theme }) => theme.secondary};
        text-decoration: none;

        #tmdb {
            width: 90%;
            margin-right: .5em;
        }

        #github {
            width: 70%;
            filter: invert(1);
        }

        @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
            margin-right: 0;

            #tmdb {
                width: 70%
            }

            #github {
                width: 50%;
            }
        }
    }

    :last-child {
        margin-right: .6em;
    }
`

const IconWrapper = styled.span`
    width: 40px;
    margin-right: .4em;
    > svg {
        margin-left: 0.7em;
        cursor: pointer;
    }
`

/**
 * @component
 * @param {bool} showSearch - Determines whether or not SearchBar is shown
 * @param {Function} toggleSearchRx - Function that dispatches an an action to toggle the SearchBar
 * @param {Function} openMenuRx - Function that dispatched an action to open the side menu
 */
const Header = ({ showSearch, toggleSearchRx, openMenuRx }) => {
    const history = useHistory();
    return (
        <HeaderParent>
            <HeaderWrapper>
                <BrandWrapper onClick={() => history.push('/')}>
                    <FontAwesomeIcon icon="film" /> React <span>Movies</span>
                </BrandWrapper>
                <RightSectionWrapper>
                    <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
                        <img id='tmdb' src={`${process.env.PUBLIC_URL}/tmdb-logo.svg`} alt="tmdb logo"/>
                    </a>
                    <a href="https://github.com/jamvel/react-movie-app" target="_blank" rel="noopener noreferrer">
                        <img id='github' src={`${process.env.PUBLIC_URL}/github-logo.png`} alt="github logo" />
                    </a>
                    <IconWrapper>
                        <FontAwesomeIcon 
                            icon={showSearch ? 'times' : 'search'}
                            onClick={() => toggleSearchRx()}
                        />
                    </IconWrapper>
                    <IconWrapper>
                        <FontAwesomeIcon 
                            icon='bars'
                            onClick={() => openMenuRx()}
                        />
                    </IconWrapper>
                </RightSectionWrapper>
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