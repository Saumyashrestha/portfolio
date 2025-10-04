import React from 'react';
// Import the necessary icons
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ExpandedContact: React.FC = () => {
  return (
    // Add a unique class to the section for specific styling
    <section className="expanded-section expanded-contact">
      <div className="expanded-content-container text-center">
        <h2 className="expanded-title">Get in Touch</h2>
        <p className="expanded-paragraph">
          I'm currently seeking new opportunities and am always open to
          connecting with fellow developers and designers. Whether you have a
          question, a project proposal, or just want to say hello, my inbox is
          always open.
        </p>

        {/* This is the main email link, styled to be prominent */}
        <a href="mailto:saumyashresthaa@gmail.com" className="contact-email-link">
          saumyashresthaa@gmail.com
        </a>

        {/* Social Links Section */}
        <div className="socials-container">
          <a
            href="https://github.com/Saumyashrestha" // <-- Add your GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-username" // <-- Add your LinkedIn link
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/saaumyaa_" // <-- Add your Instagram link
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExpandedContact;