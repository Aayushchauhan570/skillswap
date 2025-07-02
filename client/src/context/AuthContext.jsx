import { Routes, Route } from 'react-router-dom';
import Signup from "../Pages/Signup.jsx";
import Login from "../Pages/Login.jsx";
import Logout from "../pages/Logout.jsx";
// Assuming you have a sample data file
// Assuming you have a sample profiles file
import ProfileCard from '../components/ProfileCard'; // Assuming you have a ProfileCard component
import HomePage from '../pages/HomePage.jsx';
import LearnPage from '../pages/LearnPage.jsx';

export default function AuthContext() {
    
//  <Route path='/profile' element={<ProfileCard /> } />
    return (
        <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
           
            <Route path="/" element={<HomePage/>}  />
            <Route path="/toLearn" element={<LearnPage/>} />
        </Routes>
    )
}