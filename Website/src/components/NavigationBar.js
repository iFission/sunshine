import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
    background-color: white;
    z-index: relative;
    height: 75px;
}
.navbar-brand, .navbar-nav, .nav-link {
    color: #222;
    
    ${'' /* &:hover {
        color: #222;
    } */}
}
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg" style={{width: '100%'}}>
            <Navbar.Brand href="/">Sunshine</Navbar.Brand>
            <Navbar.Toggle area-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link id="home" href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link id="about" href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link id="contact" href="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)