import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Hero.css';
const Hero = () => {
    return (
        <div className='hero-area text-center'>
            <Container>
                <Row className='align-items-center'>
                    <Col lg="12">
                        <h2 className='mb-3'>I grow by helping people in need.</h2>
                        <Row>
                            <Col lg="4"></Col>
                            <Col lg="4">
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Search..."
                                        aria-label="Search..."
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Text as={Button} id="basic-addon2">Search</InputGroup.Text>
                                </InputGroup>
                            </Col>
                            <Col lg="4"></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;