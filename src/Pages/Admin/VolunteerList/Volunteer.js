import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import './Volunteer.css';
const Volunteer = ({volunteer}) => {
    console.log(volunteer);
    const {name, email, registatingDate, eventName} = volunteer;
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{registatingDate}</td>
            <td>{eventName}</td>
            <td><button className='delete-btn'><FaTrashAlt /></button></td>
        </tr>
    );
};

export default Volunteer;