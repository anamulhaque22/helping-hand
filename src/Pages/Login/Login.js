import React, { useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import './Login.css'
const Login = () => {
    const [validated, setValidated] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);

    const handleMatch = () => {
        console.log(confirmPassword)
        console.log(password)
        if (password === confirmPassword) {
            setPasswordMatch(true);
        } else {
            setPasswordMatch(false);
        }
    }
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
                    <Col md={3} sm={0}></Col>
                    <Col md={6} sm={12}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-12">
                                <Form.Group as={Col} className='mb-3' md="12" controlId="validationCustom01">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Full Name"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
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
                                <Form.Group as={Col} md="12" className='mb-3' controlId="validationCustom03">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Confirm Password"
                                        onChange={(e) => {
                                            setConfirmPassword(e.target.value);
                                            handleMatch();
                                        }}
                                    />
                                    <Form.Label>
                                        {(!passwordMatch) ? 'Passwords do not match' : ''}
                                    </Form.Label>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    required
                                    label="Agree to terms and conditions"
                                    feedback="You must agree before submitting."
                                    feedbackType="invalid"
                                />
                            </Form.Group>
                            <Button type="submit">Submit form</Button>
                        </Form>
                    </Col>
                    <Col md={3} sm={0}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;