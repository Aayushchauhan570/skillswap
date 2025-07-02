import React from "react";

export default function CTABtn(){
    return (
        <>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <button className="bg-[#6366f1] hover:bg-[#4f46e5] text-white font-semibold px-8 py-3 rounded-full shadow transition">
          Get Started
        </button>
        <button className="border-2 border-[#6366f1] text-[#6366f1] hover:bg-[#eef2ff] font-semibold px-8 py-3 rounded-full transition">
          Browse Skills
        </button>
      </div>
        </>
    )
}