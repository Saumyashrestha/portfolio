// src/components/ServicesBox.tsx
import React from 'react';

const projects = [
  { name: 'UniCollab - Learning Platform' },
  { name: 'RS Craftmandu - E-commerce Site' },
  { name: 'KUdos - University Sports Website' },
  { name: 'Movie4AllMoods - Recommender' },
  { name: 'Lung Disease Detection - Machine Learning' },
  { name: 'Right Meal - Diet Planner' },
  { name: 'Tranzac - Fintech Mobile App' },
  { name: 'Colorize - Deep Learning' },
];

const ServicesBox: React.FC = () => {
  return (
    <div className="box-services">
      <div className="services-header">
        <i>
          <h1 className="services-title">Featured Works</h1>
        </i>
        <div className="featured-image-container">
          <img
            src="/selectedworks.jpg"
            alt="Featured Works"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="scrollable-list">
        {projects.map((project) => {
          const parts = project.name.split(' - ');
          const title = parts[0];
          const description = parts[1]; 

          return (
            <div key={project.name} className="project-item">
              <span className="project-name">
                {title}
                {description && (
                  <>
                    {' - '}
                    <i>{description}</i>
                  </>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesBox;