import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/Logo/doctor point .png'
import useAuth from '../Hooks/useAuth';
import './Header.css'
const Header = () => {
    const { users, hendelSignOut } = useAuth()
    return (
        <Navbar bg="dark" sticky="top" variant="dark" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand className='d-flex align-items-center' href="#home">
                    <img
                        src={logo}
                        width="100px"
                        height="50px"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    /><span className='heading'>Doctor's Point</span></Navbar.Brand>
                <Nav className="ms-auto menu-bar">
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/services'>Services</NavLink>
                    <NavLink to='/doctor'>Find Doctor</NavLink>
                    <NavLink to='/about'>About us</NavLink>
                    {users.email && <span className='name'>{users.displayName}</span>}
                    {!users?.email ?
                        <NavLink to='/login'>Log in</NavLink> :
                        <button className='btn btn-danger' onClick={hendelSignOut}>Log out</button>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;