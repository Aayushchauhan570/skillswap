// import React from "react";

// export default function HeroSection() {
//   return (
//     <section className="w-full bg-[#f7f8fd] pt-32 pb-16 flex flex-col items-center">
//       {/* Headline & Subheadline */}
//       <div className="max-w-3xl text-center mb-10">
//         <h1 className="text-4xl sm:text-5xl font-extrabold text-[#18181b] mb-4">
//           Swap Skills. Learn Fast. Teach Smarter.
//         </h1>
//         <p className="text-lg sm:text-xl text-[#6366f1] font-medium">
//           Connect with learners and mentors from around the world. Exchange knowledge. Grow together.
//         </p>
//       </div>
//     </section>
//     )
// }

import React from "react";
import HeroImg from "../assets/scholar.jpeg"; // put your image here

const HeroSection = () => {
  return (
    <section className="bg-blue-100 py-16 px-6 md:px-20 mt-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Text Section */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Swap Skills. <br /> Learn Fast. <br /> Teach Smarter.
          </h1>
          <p className="mt-4 text-lg text-indigo-600">
            Connect with learners and mentors from around the world. Exchange knowledge. <br />
            Grow together.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition">
              Get Started
            </button>
            <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition">
              Browse Skills
            </button>
          </div>
        </div>

        {/* Illustration Image */}
        <div className="w-full max-w-md">
          <img
            src={HeroImg}
            alt="Graduate illustration"
            className="w-full h-auto rounded-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
