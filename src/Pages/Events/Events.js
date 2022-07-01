import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useEvents from '../../hooks/useEvents';
import Event from './Event';
import './Events.css';
const Events = () => {
    const [events, setEvents] = useEvents();
    return (
        <div className='events-area'>
            <Container>
                <Row>
                    {events.map(event => <Event key={event.id} event={event}></Event>)}
                </Row>
            </Container>
        </div>
    );
};

export default Events;