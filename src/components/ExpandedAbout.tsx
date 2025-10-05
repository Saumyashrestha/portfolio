// src/components/ExpandedAbout.tsx
import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, 
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const ExpandedAbout: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={sectionRef}
      className="expanded-section expanded-about"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Animate when in view
    >
      <div className="expanded-content-container">
        <motion.h1 className="expanded-title" variants={itemVariants}>
          About Me
        </motion.h1>
        <motion.p className="expanded-paragraph" variants={itemVariants}>
          As a final-year Computer Engineering student, I thrive at the intersection of logical problem-solving and creative design. My journey began with a curiosity for how things work, which evolved into a passion for building elegant and intuitive digital experiences. I’m also interested in AI and its potential to make technology more adaptive and human-centered, bridging the gap between complex systems and natural interaction.
        </motion.p>
        <motion.p className="expanded-paragraph" variants={itemVariants}>
          My experience at UniCollab and IT Meet has strengthened my frontend development skills and deepened my appreciation for clear communication and documentation in collaborative work. I’m driven by the challenge of turning ideas into functional, meaningful products and am increasingly drawn to exploring how AI can enhance creativity and user experience.
        </motion.p>
        <motion.div variants={itemVariants}>
          <h3 className="about-subtitle">My Education</h3>
          <div className="education-list">
            <div className="education-item">
              <h4 className="education-degree">B.E. Computer Engineering</h4>
              <p className="education-institution">Kathmandu University, Dhulikhel</p>
              <p className="education-dates">2022 - 2026 </p>
            </div>
            <div className="education-item">
              <h4 className="education-degree">High School (+2 Science)</h4>
              <p className="education-institution">Kathmandu Model College, Bagbazaar</p>
              <p className="education-dates">2019 - 2021</p>
            </div>
            <div className="education-item">
              <h4 className="education-degree">Secondary Education (SEE)</h4>
              <p className="education-institution">St. Mary's High School, Jawalakhel</p>
              <p className="education-dates">Graduated 2019</p>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default ExpandedAbout;