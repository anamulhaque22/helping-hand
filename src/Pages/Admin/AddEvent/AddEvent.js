import React from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import './AddEvent.css';
const AddEvent = () => {
    const addEvent = () => {

    }
    return (
        <div className="volunteer-container">
            <div className="volunder-header">
                <h3>Add event</h3>
            </div>
            <div className="volunder-data-table">
                <Form onSubmit={addEvent}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>Event Title</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Title"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Event Date</Form.Label>
                            <Form.Control
                                required
                                type="date"
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter Description" required />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom04">
                            <Form.Label>Banner</Form.Label>
                            <Form.Control type="text" placeholder="Enter Banner Link" required />
                        </Form.Group>
                    </Row>
                    <Button type="submit" className='add-event'>Submit form</Button>
                </Form>
            </div>
        </div>
    );
};

export default AddEvent;