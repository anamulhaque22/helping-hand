import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Logo from '../../../logos/logo.png';
import Hero from '../../Home/Hero/Hero';
import "./Header.css";

const Header = () => {
    /*  const [user] = useAuthState(auth);
     const logout = () => {
         signOut(auth);
     }; */
    const location = useLocation();
    return (
        <div className='header' style={location.pathname !== '/'? {"height":"100px"}: {"height":"auto"}}>
            <div className="main-menu">
                <Navbar collapseOnSelect expand="lg">
                    <Container className='custom-class'>
                        <Link className='logo' to="/"><img src={Logo} alt="Logo" /></Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='custom-toggler' />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/donation">Donation</Link></li>
                                    <li><Link to="/events">Events</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/singup" className='register btn'>Register</Link></li>
                                    <li><Link to='/admin' className='admin btn' >Admin</Link></li>
                                    {/* onClick={logout} */}
                                </ul>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            {
                location.pathname === '/' ? <Hero /> : null
            }
        </div>

    );
};

export default Header;