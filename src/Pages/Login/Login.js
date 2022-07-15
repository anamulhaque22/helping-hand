import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import './Login.css';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
const Login = () => {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        signInError,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
        event.preventDefault();
    };
    if (user) {
        navigate('/');
    }
    if (signInError) {
        
    }
    return (
        <div className='login-container'>
            <Container>
                <div className='login-area'>
                    <Row>
                        <Col md={12}>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-12">
                                    <Form.Group as={Col} md="12" className='mb-3' controlId="validationCustom02">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            required
                                            type="email"
                                            placeholder="Email"
                                            name='email'
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" className='mb-3' controlId="validationCustom03">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            required
                                            type="password"
                                            placeholder="Password"
                                            name='password'
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <div className="dont-have-account mb-2">
                                    <Link to={'/singup'}>Dont't have an Account</Link>
                                </div>
                                {signInError && <div className="error-message">{signInError.message}</div>}
                                <Button type="submit">Login</Button>
                            </Form>
                            <Row>
                                <Col className="mb-12">
                                    <div className="social-login-area">
                                        <p className='or'>Or</p>
                                        <p>Login with your social medai account</p>
                                        <div className="login-social">
                                            <button onClick={() => signInWithGoogle()} className='login-btn'><AiFillGoogleCircle /><span> Continue With Google</span></button>
                                            <button className='login-btn'><AiOutlineGithub /><span> Continue With Github</span></button>
                                        </div>
                                        {gError && <p className='error'>{gError.message}</p>}
                                        {githubError && <p className='error'>{githubError.message}</p>}
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Login;