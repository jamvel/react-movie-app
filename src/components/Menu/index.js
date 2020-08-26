import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import { toggleMenu } from 'stores/ui/actions';

const MenuWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    background: #1f262d;
    color: white;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    height: 100%;
    text-align: left;
    position: fixed;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 99;
    width: 350px;
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

const Menu = ({ open, items, closeMenuRx }) => {
    const history = useHistory();

    const handleElementClick = route => {
        if(route){
            history.push(route)
        }
    }

    return (
        <MenuWrapper open={open}>
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
                >
                    {item.title}
                </MenuElement>
            ))}
        </MenuWrapper>
    )
}

const mapStateToProps = state => {
    return {
        genres: null
    }
}
  
const mapDispatchToProps = dispatch => ({
    closeMenuRx: () => dispatch(toggleMenu(false))
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu);