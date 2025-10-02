// src/components/AboutBox.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="box-about">
      <div className="experience-item">
        <div className="experience-header">
          <span className="experience-title">Frontend Developer,<i> UniCollab </i></span>
          <span className="experience-dates">2025-Present</span>
        </div>
        {/* Replaced the list with a descriptive paragraph */}
        <p className="experience-description">
          A collaborative learning platform that bridges the gap between academics and the professional world for university students.
        </p>
      </div>

      <div className="experience-item">
        <div className="experience-header">
          <span className="experience-title">Documentation Lead,<i> IT Meet 2024 </i></span>
          <span className="experience-dates">06/2024 - 12/2024</span>
        </div>
        {/* Replaced the list with a descriptive paragraph */}
        <p className="experience-description">
          An annual student-led tech event uniting innovators, students, and professionals through competitions, workshops, and exhibitions.
        </p>
      </div>
    </div>
  );
};

export default About;