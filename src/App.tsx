import React, { useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import './App.css';

import Navigation from './components/Navigation';
import HeroBox from './components/HeroSection';
import ProfileImageBox from './components/ProfileImageBox';
import ServicesBox from './components/ServicesBox';
import AboutBox from './components/About';
import ExpandedAbout from './components/ExpandedAbout';
import ExpandedProjects from './components/ExpandedProjects';
import ExpandedExperience from './components/ExpandedExperience';
import ExpandedContact from './components/ExpandedContact';

const App: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end start"], // Track scroll from the top to the bottom of the container
  });

  const bentoScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.85]);
  const bentoOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const bentoY = useTransform(scrollYProgress, [0, 0.2], ["0%", "-20%"]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: (direction: { x: number; y: number }) => ({
      opacity: 0,
      x: direction.x,
      y: direction.y,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1.8,
        ease: 'easeOut',
      },
    },
  };


  return (
    <>
      <Navigation />
      <div ref={scrollContainerRef} className="scroll-container">

        <motion.div
          style={{
            scale: bentoScale,
            opacity: bentoOpacity,
            y: bentoY,
            position: 'sticky',
            top: '0', // This makes it stick to the top of the scroll container
            zIndex: 10, // Ensures it stays on top while animating
          }}
        >

          <div className="container">
            <motion.div
              className="bento-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >

              {/* Fades in from top-left */}
              <motion.div className="grid-item box-hero" custom={{ x: -100, y: -100 }} variants={itemVariants}>
                <HeroBox />
              </motion.div>

              {/* Fades in from top-right */}
              <motion.div className="grid-item box-image" custom={{ x: 100, y: -100 }} variants={itemVariants}>
                <ProfileImageBox />
              </motion.div>

              {/* Fades in from bottom-right */}
              <motion.div className="grid-item box-services" custom={{ x: 100, y: 100 }} variants={itemVariants}>
                <ServicesBox />
              </motion.div>

              {/* Fades in from bottom-left */}
              <motion.div className="grid-item box-about" custom={{ x: -100, y: 100 }} variants={itemVariants}>
                <AboutBox />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Layer 2: The Expanded Sections that are revealed underneath */}
        <div className="expanded-sections-container">
          <ExpandedAbout />
          <ExpandedProjects />
          <ExpandedExperience />
          <ExpandedContact />
        </div>

      </div>
    </>
  );
};

export default App;

