import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Event = ({ event }) => {
    const { id, name, img } = event;
    return (
        <Col md={3} className="mb-3">
            <div className="single-event">
                <img src={img} alt="" />
                <h4 className='d-flex flex-row align-items-center justify-content-center'>{name}</h4>
            </div>
        </Col>
    );
};

export default Event;