import React from 'react'
import leaf from '../assets/leaf.jpg'
import styled from 'styled-components'


const Styles = styled.div`


.carousel-item {
    background: url(${leaf}) no-repeat fixed bottom;
    background-size: cover;
}
`;



export const Carousel = () => (
    <Styles>
    <React.Fragment>
    <div id="carouselExampleIndicators"class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img class="d-block w-100" src="leaf" alt="First slide"/>
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src="leaf" alt="Second slide"/>
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src="leaf" alt="Third slide"/>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
</div>
    </React.Fragment>
    </Styles>
)