import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    const history = useHistory();

    return (
        <Navbar bg="light" expand="xl" className="header">
            <Container>
                <Navbar.Brand>
                    <NavLink to="/" className="cursive-text text-decoration-none text-info fs-3">
                        apartment
                    </NavLink>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="btn" to="/">Home</NavLink>
                        <NavLink className="btn" to="/explore">Explore</NavLink>
                        <NavLink className="btn" to="/about">About</NavLink>
                        <NavLink className="btn" to="/careers">Careers</NavLink>
                        {
                            user.email
                                ?
                                <>
                                    <NavLink className="btn fw-bold text-info" to="/dashboard">
                                        {user.displayName}
                                    </NavLink>

                                    <NavLink className="btn btn-info px-4 text-white" to="/dashboard">
                                        Dashboard
                                    </NavLink>

                                    <button onClick={() => logout(history)} className="btn btn-secondary btn-padding">
                                        Logout
                                    </button>
                                </>
                                :
                                <NavLink className="btn btn-info text-white fw-bold px-5" to="/login">
                                    Login
                                </NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;