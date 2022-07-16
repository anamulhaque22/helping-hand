import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Events from './Pages/Events/Events';
import Admin from './Pages/Admin/Admin/Admin';
import VolunteerList from './Pages/Admin/VolunteerList/VolunteerList';
import AddEvent from './Pages/Admin/AddEvent/AddEvent';
function App() {
  const location = useLocation();
  return (
    <div className="App">
      {
        location.pathname.includes('/admin') ? null : <Header />
      }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<SignUp />} />
        <Route path='/admin/' element={<Admin />}>
          <Route path='/admin/volunteerlist' element={<VolunteerList />} />
          <Route path='/admin/addevent' element={<AddEvent />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
