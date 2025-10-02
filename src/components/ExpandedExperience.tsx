import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

// Array to hold your professional experience data for easy mapping
const experiences = [
  {
    title: "Frontend Developer",
    company: "UniCollab",
    dates: "2025 - Present",
    role: "As a Frontend Developer, I translated UI/UX wireframes into reusable React components and integrated APIs with the backend team to implement features like real-time project boards, delivering a seamless, responsive user experience across devices.",
    learnings: "This role strengthened my expertise in TypeScript and React through state management, performance optimization, and balancing academics with development work. I also improved my skills in Git, problem-solving, and team collaboration in a fast-paced environment."
  },
  {
    title: "Documentation Lead",
    company: "IT Meet 2024",
    dates: "June 2024 - December 2024",
    role: "As the Documentation Lead, I led a documentation team, creating technical guides, tutorials, and knowledge base standards while also handling proposals, reports, event templates, emails, and letters to maintain clear and consistent communication.",
    learnings: "This role honed my technical writing and communication skills, teaching me to distill complex concepts for diverse audiences. It also instilled a documentation-first mindset, improving my ability to prioritize clarity, maintainability, and effective knowledge sharing."
  }
];

// Animation variants for a consistent stagger effect
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const ExpandedExperience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <motion.section
      ref={sectionRef}
      className="expanded-section expanded-experience"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="expanded-content-container">
        <motion.h2 className="expanded-title" variants={itemVariants}>
          Professional Experience
        </motion.h2>

        <div className="experience-list-container">
          {experiences.map((exp) => (
            <motion.div key={exp.title} className="experience-item" variants={itemVariants}>
              <div className="experience-header">
                <h3 className="experience-item-title">{exp.title}, {exp.company}</h3>
                <span className="experience-item-dates">{exp.dates}</span>
              </div>
              
              <h4 className="experience-item-subtitle">My Role</h4>
              <p className="experience-item-details">{exp.role}</p>

              <h4 className="experience-item-subtitle">Key Learnings</h4>
              <p className="experience-item-details">{exp.learnings}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ExpandedExperience;