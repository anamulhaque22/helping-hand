import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Logo from '../../../logos/logo.png';
import "./Header.css";

const Header = () => {
    /*  const [user] = useAuthState(auth);
     const logout = () => {
         signOut(auth);
     }; */
    return (
        <div className='header'>
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
                                <li><Link to="/register" className='register btn'>Register</Link></li>
                                <li><Link to='/admin' >Admin</Link></li>
                                {/* onClick={logout} */}
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;