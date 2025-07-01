import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProfileList from '../components/ProfileList'; // Assuming you have a ProfileList component

export default function LearnPage() {
    // const navigate = useNavigate();
    const [profiles, setProfiles] = React.useState([]);
    useEffect(() => {
        // Check if the user is authenticated

        // redirect to login if not authenticated


        // get profiles data related to leaning skills
        axios.get('http://localhost:8080/api/profiles/public/all')
        .then( response => setProfiles(response.data))
        .catch(error => console.error("Error fetching profile data:", error));
    },[]);

  return (
    // <div>
    //   <h1>Learn Page</h1>
    //   <p>This is the Learn page where you can find resources to learn new skills.</p>
    //   {/* Add more content or components related to learning here */}
    // </div>

    <div className='flex flex-col justify-center items-center mt-12 p-6 '>
        <div>
            {profiles.map(profile => (
            <ProfileList key={profile._id} profile={profile} />))}
        </div>
        
    </div>
  );
}