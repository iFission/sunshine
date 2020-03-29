import React from 'react';
import { Jumbotron as Jumbo, Button } from 'react-bootstrap'
import styled from 'styled-components';
import kayak from '../assets/kayak.jpg'

const Styles = styled.div`

.jumbo {
    background: url(${kayak}) no-repeat fixed bottom;
    background-size: cover;
    color: white;
    height: 500px;
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

.welcome {
    font-family: "Bradley Hand", cursive;
    font-style: italic;
}

.sunshine {
    font-family: "Marker Felt", Gerogia;
    font-size: 5rem;
}

.adventure {
    font-family: Arial, Helvetica, sans-serif;
}
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className='jumbo'>
            {/* <div className='overlay'></div> */}
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 btn-holder">
                    </div>
                    <div className="col-sm-6 text-center">
                        <h2 className='welcome'>Welcome To</h2>
                        <h1 className='sunshine'>Sunshine Tours</h1>
                        <p className='adventure'>Where The Adventure Begins!</p>
                        <Button href="#" variant="info">View Our Tours</Button>
                    </div>
                </div>
            </div>
        </Jumbo>
    </Styles>
)