import { Table } from 'react-bootstrap';
import useVolunteer from '../../../hooks/useVolunteer';
import Volunteer from './Volunteer';
import './VolunteerList.css';
const VolunteerList = () => {
    const {volunteers} = useVolunteer();
    return (
        <div className="volunteer-container">
            <div className="volunder-header">
                <h3>Volunteer register list</h3>
            </div>
            <div className="volunder-data-table">
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email Id</th>
                            <th>Registating Date</th>
                            <th>Volunteer List</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {volunteers.map(volunteer => <Volunteer key={volunteer.id} volunteer={volunteer}></Volunteer>)}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default VolunteerList;