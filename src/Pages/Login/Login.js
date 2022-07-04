import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import './Login.css';
const Login = () => {
    const [validated, setValidated] = useState(false);
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <div className='login-area'>
            <Container>
                <Row>
                    <Col md={2} lg={3} sm={0}></Col>
                    <Col md={8} lg={6} sm={12}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-12">
                                <Form.Group as={Col} md="12" className='mb-3' controlId="validationCustom02">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        required
                                        type="Email"
                                        placeholder="Email"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" className='mb-3' controlId="validationCustom03">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <div className="dont-have-account mb-2">
                                <Link to={'/login'}>Dont't have an Account</Link>
                            </div>
                            <Button type="submit">Login</Button>
                        </Form>
                        <Row>
                            <Col className="mb-12">
                                <div className="social-login-area">
                                    <p className='or'>Or</p>
                                    <p>Login with your social medai account</p>
                                    <div className="login-social">
                                        <button className='login-btn'><AiFillGoogleCircle /><span> Continue With Google</span></button>
                                        <button className='login-btn'><AiOutlineGithub /><span> Continue With Github</span></button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={2} lg={3} sm={0}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;