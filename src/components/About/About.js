import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaLaptopCode, FaServer, FaDatabase } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const features = [
    {
      icon: FaCode,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces with React, HTML5, CSS3, and modern JavaScript frameworks.'
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Python Django, RESTful APIs, and scalable architecture.'
    },
    {
      icon: FaDatabase,
      title: 'Database Management',
      description: 'Designing and optimizing databases with MongoDB and PostgreSQL for efficient data storage and retrieval.'
    },
    {
      icon: FaLaptopCode,
      title: 'Full Stack Solutions',
      description: 'End-to-end development from concept to deployment, ensuring seamless integration across all layers.'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="about-content"
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2 className="section-title gradient-text">About Me</h2>
            <p className="section-subtitle">
              Passionate developer with a love for creating innovative solutions
            </p>
          </motion.div>

          <div className="about-grid">
            <motion.div variants={itemVariants} className="about-text">
              <div className="about-card glass">
                <h3 className="about-card-title">My Journey</h3>
                <p className="about-description">
                  I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. 
                  My journey in programming started during my college years, and it has evolved into a career 
                  focused on creating efficient and user-friendly web applications.
                </p>
                <p className="about-description">
                  I specialize in building responsive web applications using React.js for the frontend 
                  and Python Django for the backend. My experience with both MongoDB and PostgreSQL 
                  allows me to design efficient database solutions for various project requirements.
                </p>
                <div className="about-stats">
                  <div className="stat">
                    <span className="stat-number gradient-text">25+</span>
                    <span className="stat-label">Projects Completed</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number gradient-text">3+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number gradient-text">100%</span>
                    <span className="stat-label">Client Satisfaction</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="about-visual">
              <div className="about-image">
                <div className="image-placeholder">
                  <div className="code-animation">
                    <div className="code-line"></div>
                    <div className="code-line"></div>
                    <div className="code-line"></div>
                    <div className="code-line"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="feature-card glass hover-lift"
                whileHover={{ y: -10 }}
              >
                <div className="feature-icon">
                  <feature.icon />
                </div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
