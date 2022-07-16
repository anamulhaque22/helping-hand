import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import AdminMenu from '../AdminMenu/AdminMenu';
import './Admin.css';
const Admin = () => {
    return (
        <div className='admin container-fluid'>
            <Row>
                <Col md={4} lg={3}>
                    <AdminMenu></AdminMenu>
                </Col>
                <Col md={8} lg={9}>
                    <Outlet />
                </Col>
            </Row>
        </div>
    );
};

export default Admin;