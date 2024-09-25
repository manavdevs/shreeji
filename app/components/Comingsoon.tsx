import React from 'react';
import Navbar from './Navbar';

// Simplified Next.js component
const comingsoon = () => {
  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center h-screen bg-[#F8F4EF] opacity-70 text-gray-800 relative">
      {/* Centered Content */}
      <div className="flex flex-col items-center text-center">
        {/* Logo Image */}
        {/* Coming Soon Text */}
        <h1 className="text-4xl lg:text-6xl font-bold">Coming Soon</h1>
      </div>
    </div>
    </>
  );
};

// Ensure Next.js default export
export default comingsoon;
