import React from 'react';
import { Card } from 'react-bootstrap';
// import styled from 'styled-components';

// const Styles = styled.div`
// .navbar {
//     background-color: white;
// }
// .navbar-brand, .navbar-nav, .nav-link {
//     color: #222;
    
//     ${'' /* &:hover {
//         color: #222;
//     } */}
// }
// `;

export const CardStyle = () => (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
)