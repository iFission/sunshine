import React from 'react';
import {Jumbotron as Jumbo, Container } from 'react-bootstrap'
import styled from 'styled-components';
import leaf from '../assets/leaf.jpg'

const Styles = styled.div`

.jumbo {
    background: url(${leaf}) no-repeat fixed bottom;
    background-size: cover;
    color: white;
    height: 300px;
    position: relative;
    z-index: -2;
}
.overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}

.container {
    position:
}
`;

export const Jumbotron = () => (
    <Styles>
    <Jumbo fluid className = 'jumbo'>
        <div className='overlay'></div>
        <Container>
            <h1 class="text-center">Welcome</h1>
            <p class="text-center">Learn how to code yay</p>
        </Container>   
    </Jumbo>
    </Styles>
)