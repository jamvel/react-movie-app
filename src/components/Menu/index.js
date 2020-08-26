import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import get from 'lodash.get';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import { toggleMenu } from 'stores/ui/actions';

import routeMap from 'helpers/routeMap';

const MenuWrapper = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    background: #1f262d;
    width: 350px;
    color: ${({ theme }) => theme.secondary};
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    height: 100%;
    text-align: left;
    transition: transform 0.4s ease-in-out;
    z-index: 99;
    overflow-y: scroll;
    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
        width: 100%;
    }
`;

const HeaderElement = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4em;
    padding: .8em;

    span {
        margin-left: 5px;
    }

    > svg {
        font-size: 1.1em;
        cursor: pointer;

        :hover {
            transition: all .4s ease;
            transform: scale(1.1);
        }
    }
`

const MenuElement = styled.div`
    font-size: .95em;
    border-color: blue;
    border-top: 1px solid;
    border-bottom: 1px solid;
    padding: 1em;
    
    :hover {
        cursor: pointer;
    }
`

const Menu = ({ showMenu, items, closeMenuRx }) => {
    const history = useHistory();

    const handleElementClick = route => {
        if(route){
            closeMenuRx(false);
            history.push(route)
        }
    }

    return (
        <MenuWrapper 
            open={showMenu}
        >
            <HeaderElement>
                <span>
                    <FontAwesomeIcon icon="film" />
                    <span>React Movies</span>
                </span>
                <FontAwesomeIcon
                    onClick={() => closeMenuRx()}
                    icon="times" 
                />
            </HeaderElement>
            {items.map(item => (
                <MenuElement
                    onClick={() => handleElementClick(item.route)}
                    key={item.route}
                >
                    {item.title}
                </MenuElement>
            ))}
        </MenuWrapper>
    )
}

const mapStateToProps = state => {
    const genres = get(state, 'config.genres') || []
    const genresRoutes = genres.map(g => {
        return {
            title: `Genre: ${g.name}`,
            route: `/genre/${g.id}`
        }
    }) 
    
    return {
        items: routeMap.concat(genresRoutes),
        showMenu: get(state, 'ui.showMenu')
    }
}
  
const mapDispatchToProps = dispatch => ({
    closeMenuRx: () => dispatch(toggleMenu(false))
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu);