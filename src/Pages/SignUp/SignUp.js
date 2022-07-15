import React, { useRef, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const SignUp = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const [validated, setValidated] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [acceptTrams, setAcceptTrams] = useState(false);
    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});


    //confirm password check
    const handleMatch = (conPass) => {
        if (password === conPass) {
            setPasswordMatch(true);
        } else {
            setPasswordMatch(false);
        }
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        const name = event.target.name.value;
        const email = event.target.email.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name});
        if(user){
            toast("Account Created Successfully");
            event.target.reset();
        }else{
            toast("Error Creating Account");
        }
    };
    console.log(user);
    return (
        <div className='login-container'>

            <PageTitle title={'Register'}></PageTitle>
            <Container>
                <div className='login-area'>
                    <Row>
                        <Col md={12}>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-12">
                                    <Form.Group as={Col} className='mb-3' md="12" controlId="validationCustom01">
                                        <Form.Label>Full name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name='name'
                                            placeholder="Full Name"
                                            ref={nameRef}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" className='mb-3' controlId="validationCustom02">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            required
                                            type="email"
                                            placeholder="Email"
                                            ref={emailRef}
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
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default SignUp;