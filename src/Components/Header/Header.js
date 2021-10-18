import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="ms-auto menu-bar">
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/services'>Services</NavLink>
                    <NavLink to='/doctor'>Find Doctor</NavLink>
                    <NavLink to='/about'>About us</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;