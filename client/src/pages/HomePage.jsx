import React from "react";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
// import axios from "axios";
import SampleProfiles from "../assets/sample_profiles.json";
import HomePageCard from "../components/HomePageCard";
import HeroSection from "../components/HeroSection";
import CTABtn from "../components/CTABtn";
import HIW from "../components/HIW";


export default function HomePage(){
    // const [profiles, setProfiles] = useState([]);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     axios.get('http://localhost:8080/api/profiles/public/all')
    //     .then(response => setProfiles(response.data))
    //     .catch(error => console.error("Error fetching profile data:", error));
    // },[]);



    return(
        <>  <div className="flex flex-col justify-center items-center mt-25 p-6 bg-blue-100">
            
                <HeroSection/>
                <HIW/>
                <CTABtn/>
            
            </div>
        </>
    )

}
