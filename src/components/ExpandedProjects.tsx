import React, { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

const detailedProjects = [
  {
    title: "UniCollab - Learning Platform",
    description: "Unicollab is a web-based platform created to bring university students together for academic and collaborative purposes. It enables users to share study materials, form project teams, and network with peers across departments.",
    tech: ["TypeScript", "React", "SCSS", "Node.js"],
    image: "/unicollab.png",
    color: "#8B4513" // SaddleBrown
  },
  {
    title: "RS Craftmandu - E-commerce",
    description: "RS Craftmandu is an e-commerce website dedicated to showcasing and selling authentic handmade Nepali crafts. The platform connects artisans with customers, providing a digital marketplace for products such as traditional art and cultural goods.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    image: "/rscraftmandu.png",
    color: "#A0522D" // Sienna
  },
  {
    title: "KUdos - University Sports Website",
    description: "KUdos is a centralized sports management system for Kathmandu University, integrating live scores, scheduling, venue booking, equipment borrowing, and automated fixture generation, streamlining sports management for students and staff.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    image: "/kudos.png",
    color: "#CD853F" // Peru
  },
  {
    title: "Movie4AllMoods - Recommendation System",
    description: "Movie4allmoods recommends films based on your emotional state. By inputting your current mood, the system generates a curated list of movies that align with your preferences, combining content-based and mood-based filtering.",
    tech: ["Python", "Django", "Bootstrap", "Scikit-learn", "Cosine Similarity"],
    image: "/m4am.png",
    color: "#D2691E" // Chocolate
  },
   {
    title: "Lung Disease Detection - Machine Learning",
    description: "This web application applies machine learning to medical imaging for identifying and classifying various lung diseases. It processes chest images to support early detection and assist healthcare professionals with reliable insights.",
    tech: ["Python","Django","React", "CNN", "Tensorflow"],
    image: "/ldd.png",
    color: "#B8860B" // DarkGoldenRod
  },
  {
    title: "Colorize - Deep Learning",
    description: "Colorize is a deep learning web app that brings black-and-white photos to life. Using convolutional neural networks (CNNs), it analyzes grayscale images and generates realistic colorized versions, making it useful for restoring old photographs and exploring creative applications of AI.",
    tech: ["Python", "Pytorch", "Ski-Image", "U-Net"],
    image: "/colorize.jpg",
    color:"#8B5A2B"
  },
  {
    title: "Right Meal - Diet Planner",
    description: "Right Meal helps users manage their health by calculating their BMI and recommended daily calorie intake based on fitness goals. The platform then generates a personalized diet plan aligned with the user’s calorie requirements.",
    tech: ["C++", "Qt", "MySQL"],
    image: "/rightmeal.jpg",
    color: "#DAA520" // GoldenRod
  },
  {
    title: "Tranzac - Fintech Mobile App",
    description: "Tranzac is a fintech platform designed to simplify digital transactions while supporting financial management. Along with peer-to-peer transfers and online payments, it offers budget tracking and shared expense management among friends, making everyday finance more accessible and organized.",
    tech: ["Flutter", "Firebase"],
    image: "/tranzac.png",
    color:"#C68642"
  },
];

interface ProjectCardProps {
  project: (typeof detailedProjects)[0];
  index: number;
  scrollYProgress: MotionValue<number>;
  totalProjects: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, scrollYProgress, totalProjects }) => {
  // Create a transform mapping for the scale of the card
  // It starts larger and shrinks as it gets covered by the next card
  const scale = useTransform(
    scrollYProgress,
    [index / totalProjects, (index + 1) / totalProjects],
    [1, 0.85]
  );
  
  return (
    // This is the sticky container for each card
    <div className="card-sticky-container">
      <motion.div 
        className="project-card-sticky"
        style={{ 
          backgroundColor: project.color,
          scale,
          top: `calc(2rem + ${index * 2.5}rem)`, // Stacks cards with an offset
        }}
      >
        <div className="project-sticky-content">
            <div className="project-sticky-text">
                <h3 className="project-sticky-title">{project.title}</h3>
                <p className="project-sticky-description">{project.description}</p>
                <div className="project-card-tech-list">
                  {project.tech.map(tech => <span key={tech} className="tech-badge-sticky">{tech}</span>)}
                </div>
            </div>
            <div className="project-sticky-image-container">
                <img src={project.image} alt={project.title} />
            </div>
        </div>
      </motion.div>
    </div>
  );
};


// The main component that orchestrates the scene
const ExpandedProjects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Get scroll progress from the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section className="expanded-section expanded-projects-sticky">
      <div 
        ref={containerRef} 
        className="project-cards-sticky-container"
        style={{ "--num-projects": detailedProjects.length } as React.CSSProperties}
      >

        <div className="sticky-title-wrapper">
          <div className="expanded-content-container">
            <h1 className="expanded-title">Featured Works</h1>
          </div>
        </div>
        
        {detailedProjects.map((project, i) => (
          <ProjectCard
            key={project.title}
            index={i}
            project={project}
            scrollYProgress={scrollYProgress}
            totalProjects={detailedProjects.length}
          />
        ))}
      </div>
    </section>
  );
};

export default ExpandedProjects;