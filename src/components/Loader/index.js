import React from 'react';
import styled from 'styled-components';
import { Ellipsis } from 'react-awesome-spinners';

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`
/**
 * Loader Component
 * @name Loader
 * @component
 * @param {...Object} props 
 */
const Loader = ({ ...props }) => (
    <LoaderWrapper>
        <Ellipsis
            {...props}
        />
    </LoaderWrapper>
)

export default Loader;