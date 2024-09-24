'use client'
import React, { useState, useEffect } from 'react';

const ComingSoon: React.FC = () => {
  // Set launch date (example: 31st December 2024)
  const launchDate = new Date('2024-12-31T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Function to calculate the remaining time
  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = launchDate - now;

    let timeLeft = {} as any;
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  // Update timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center z-0 opacity-40" style={{ backgroundImage: `url('https://source.unsplash.com/random')` }}></div>
      
      {/* Content */}
      <div className="z-10 text-center px-6">
        <h1 className="text-5xl lg:text-7xl font-bold mb-8 animate-bounce">Coming Soon</h1>
        
        {/* Countdown Timer */}
        <div className="flex justify-center space-x-8 text-2xl lg:text-4xl">
          <div>
            <span className="block text-5xl font-extrabold">{timeLeft.days || '00'}</span>
            <span>Days</span>
          </div>
          <div>
            <span className="block text-5xl font-extrabold">{timeLeft.hours || '00'}</span>
            <span>Hours</span>
          </div>
          <div>
            <span className="block text-5xl font-extrabold">{timeLeft.minutes || '00'}</span>
            <span>Minutes</span>
          </div>
          <div>
            <span className="block text-5xl font-extrabold">{timeLeft.seconds || '00'}</span>
            <span>Seconds</span>
          </div>
        </div>
        
        <p className="mt-10 text-lg lg:text-xl">We are working hard to bring you something amazing. Stay tuned!</p>

        {/* Social Icons */}
        <div className="mt-8 space-x-6 text-2xl">
          <a href="#" className="hover:text-gray-200"><i className="fab fa-facebook"></i></a>
          <a href="#" className="hover:text-gray-200"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-gray-200"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
