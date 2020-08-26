import React from 'react';
import styled from 'styled-components';

const ErrorWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.secondary};
    font-size: 1.5em;
`

const Error = ({ text }) => (
    <ErrorWrapper>
        {text}
    </ErrorWrapper>
)

export default Error;