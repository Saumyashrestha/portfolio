// src/components/HeroSection.tsx
import React from 'react';

const HeroBox: React.FC = () => {
  return (
    <div>
      <h1 className="font-bold text-lg mb-4 text-gray-800">
        <i>Final Year Computer Engineering Student</i>
      </h1>
      <p className="hero-paragraph text-gray-600">
       My principle is that the best technology should be an extension of our own thinking—clear, logical, and empowering. This guides my development, where I focus on both the structural integrity of the code and the cognitive ease of the user experience. I strive to build digital tools that solve problems with a clarity that makes them a pleasure to use.
      </p>
    </div>
  );
};

export default HeroBox;