import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    const history = useHistory();

    return (
        <Navbar bg="danger" expand="xl" className="header text-white">
            <Container>
                <Navbar.Brand>
                    <NavLink to="/" className="text-decoration-none text-white fs-3">
                        Apartment Website
                    </NavLink>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="btn text-white" to="/">Home</NavLink>
                        <NavLink className="btn text-white" to="/explore">Explore</NavLink>
                        {
                            user.email
                                ?
                                <>
                                    <NavLink className="btn fw-bold text-white" to="/dashboard">
                                        {user.displayName}
                                    </NavLink>

                                    <NavLink className="btn px-4 text-white" to="/dashboard">
                                        Dashboard
                                    </NavLink>

                                    <button onClick={() => logout(history)} className="btn text-white btn-padding">
                                        Logout
                                    </button>
                                </>
                                :
                                <NavLink className="btn btn-success text-white fw-bold px-5" to="/login">
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