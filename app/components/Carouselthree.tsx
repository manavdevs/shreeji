"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Carouselthree = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const slides = [
    { 
      srcSmall: '/images/banglessmall.png', 
      srcLarge: '/images/carbangles.png', 
      href: '#carouselthree',
      title: 'Bangles',
      description: 'A timeless piece of beauty that completes your traditional look.'
    },
    { 
      srcSmall: '/images/earringssmall.png', 
      srcLarge: '/images/carearring.png', 
      href: '#carouselthree',
      title: 'Earrings',
      description: 'Elegantly crafted earrings that speak of grace and charm.'
    },
    { 
      srcSmall: '/images/necklacesmall.png', 
      srcLarge: '/images/carnecklace.png', 
      href: '#carouselthree',
      title: 'Necklaces',
      description: 'Necklaces designed to radiate luxury and sophistication.'
    }
  ];

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-[#F8F4EF] opacity-70 text-gray-800 relative">
      {/* Centered Content */}
      <div className="flex flex-col items-center text-center">
        {/* Logo Image */}
        {/* Coming Soon Text */}
        <h1 className="text-4xl lg:text-6xl font-bold">Collections Coming Soon...</h1>
      </div>
    </div>
  );
};

export default Carouselthree;
