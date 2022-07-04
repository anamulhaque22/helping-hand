import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [validated, setValidated] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [acceptTrams, setAcceptTrams] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const handleMatch = (conPass) => {
        if (password === conPass){
            setPasswordMatch(true);
        }else{
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
        const name = event.target.text.value;
        const email = event.target.email.value;
        console.log(name, email, password);
        if (name !== '' && email !== '' && password !== '') {
            createUserWithEmailAndPassword(email, password);
            console.log(user);
        }
    };
    console.log(!passwordMatch, !acceptTrams);
    return (
        <div className='login-area'>
            <PageTitle title={'Login'}></PageTitle>
            <Container>
                <Row>
                    <Col md={2} lg={3} sm={0}></Col>
                    <Col md={8} lg={6} sm={12}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-12">
                                <Form.Group as={Col} className='mb-3' md="12" controlId="validationCustom01">
                                    <Form.Label>Full name</Form.Label>
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
                                        type="email"
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
                                <Form.Group as={Col} md="12" className='' controlId="validationCustom03">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Confirm Password"
                                        onChange={(e) => {
                                            handleMatch(e.target.value);
                                        }}
                                    />
                                    <Form.Label>
                                        {(!passwordMatch) ? "Passwords isn't match" : ''}
                                    </Form.Label>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    onChange={(e) => {
                                        setAcceptTrams(e.target.checked)
                                    }}
                                    required
                                    label="Agree to terms and conditions"
                                    feedback="You must agree before submitting."
                                    feedbackType="invalid"
                                />
                            </Form.Group>
                            <div className="hvae-account mb-2">
                                <Link to={'/login'}>Already Have an account</Link>
                            </div>
                            {/* disabled={(passwordMatch && !acceptTrams)} */}
                            <Button type="submit" >Sign Up</Button>
                        </Form>
                    </Col>
                    <Col md={2} lg={3} sm={0}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignUp;