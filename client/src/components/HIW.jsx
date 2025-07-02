import React from "react";

export default function HIW() {
    return(
        <>
        <div className="w-full max-w-4xl flex flex-col sm:flex-row justify-center gap-6 mb-16">
        <div className="bg-white rounded-2xl shadow-xl/40 p-6 flex-1 text-center">
          <div className="text-3xl mb-2"></div>
          <h3 className="font-bold text-lg mb-1">Create your Profile</h3>
          <p className="text-gray-500 text-sm">Sign up and introduce yourself to the community.</p>
        </div>
        <div className="bg-blue-300 rounded-2xl shadow-xl/40 p-6 flex-1 text-center">
          <div className="text-3xl mb-2"></div>
          <h3 className="font-bold text-lg mb-1">List what you can teach & want to learn</h3>
          <p className="text-gray-700 text-sm">Share your skills and what you’re looking to learn.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl/40 p-6 flex-1 text-center">
          <div className="text-3xl mb-2"></div>
          <h3 className="font-bold text-lg mb-1">Connect with learners/mentors</h3>
          <p className="text-gray-500 text-sm">Find your match and start exchanging knowledge.</p>
        </div>
      </div>
        </>
    )
}