import axios from "axios";
import { useEffect, useState } from "react";

const useVolunteer = () => {
    const [volunteers, setVolunteers] = useState([]);
    
    useEffect(() => {
        axios.get("/volunteerList.json")
        .then(res => setVolunteers(res.data))
    }, []);
    
    return { volunteers };
}
export default useVolunteer;