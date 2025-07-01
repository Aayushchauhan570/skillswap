import React from "react";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import axios from "axios";
import SampleProfiles from "../assets/sample_profiles.json";
import HomePageCard from "../components/HomePageCard";


export default function HomePage(){
    const [profiles, setProfiles] = useState([]);
    // const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/api/profiles/public/all')
        .then(response => setProfiles(response.data))
        .catch(error => console.error("Error fetching profile data:", error));
    },[]);



    return(
        <>
            <div className="App">
                <h1 className="text-3xl font-bold underline">Welcome to the App</h1>
            </div>
            <div className="flex flex-col justify-center items-center mt-6 gap-16 p-6 bg-gray-600">
                {profiles.map(profile => (
                <HomePageCard key={profile._id} profile={profile} />
                ))}
                {/* {SampleProfiles.map((profile) => (
                    <ProfileCard key={profile.name} profile={profile} />
                ))} */}

                {/* {SampleProfiles.map((profile) => (
                    <HomePageCard key={profile.id || profile.name} profile={profile} />
                ))} */}

                
            </div>
        </>
    )

}
