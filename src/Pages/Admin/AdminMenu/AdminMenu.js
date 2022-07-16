import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import './AdminMenu.css'
const AdminMenu = () => {
    return (
        <div className="admin-menu">
            <div className="logo">
                <a as={Link}>
                    <img src={require('../../../logos/logo.png')} alt="Logo" />
                </a>
            </div>
            <Nav className="flex-column">
                <Nav.Link as={Link} to="/admin/volunteerlist"><FaUser /> Volunteer Register List</Nav.Link>
                <Nav.Link as={Link} to="/admin/addevent">+ Add Event</Nav.Link>
            </Nav>
        </div>
    );
};

export default AdminMenu;