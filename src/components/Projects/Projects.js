import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

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

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Store',
      description: 'A modern e-commerce website with product catalog, shopping cart, and secure payment integration built with React and Django.',
      longDescription: 'This e-commerce platform showcases my full-stack development skills. Built with React.js frontend and Django backend, it features a responsive design, user authentication, product management, shopping cart functionality, and secure payment processing. The project demonstrates clean code architecture and modern web development practices.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Django', 'PostgreSQL', 'Bootstrap', 'Stripe API'],
      category: 'fullstack',
      github: 'https://github.com/princedabre/ecommerce-store',
      live: 'https://ecommerce-demo.com',
      features: [
        'Responsive Product Catalog',
        'User Authentication',
        'Shopping Cart & Checkout',
        'Payment Gateway Integration',
        'Order Management',
        'Admin Panel',
        'Search & Filter Products',
        'User Reviews & Ratings'
      ]
    },
    {
      id: 2,
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website showcasing my projects, skills, and experience with modern animations and interactive elements.',
      longDescription: 'This portfolio website represents my personal brand and showcases my web development skills. Built with React.js and featuring modern animations using Framer Motion, it includes sections for projects, skills, experience, and contact information. The design focuses on user experience and visual appeal.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'CSS3', 'Framer Motion', 'JavaScript', 'Responsive Design'],
      category: 'frontend',
      github: 'https://github.com/princedabre/portfolio',
      live: 'https://princedabre.dev',
      features: [
        'Animated Transitions',
        'Responsive Design',
        'Interactive Elements',
        'Project Showcase',
        'Skills Visualization',
        'Contact Form',
        'Modern UI/UX',
        'Performance Optimized'
      ]
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'A productivity app for managing daily tasks and projects with user authentication and real-time updates.',
      longDescription: 'This task management application helps users organize their daily work and projects efficiently. Features include task creation, editing, and deletion, project categorization, deadline tracking, and user authentication. Built with React frontend and Django backend with real-time updates.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Django', 'MongoDB', 'Socket.io', 'Material-UI'],
      category: 'fullstack',
      github: 'https://github.com/princedabre/task-manager',
      live: 'https://taskmanager-demo.com',
      features: [
        'Task Creation & Management',
        'Project Organization',
        'Deadline Tracking',
        'Real-time Updates',
        'User Authentication',
        'Progress Tracking',
        'Mobile Responsive',
        'Data Visualization'
      ]
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'A beautiful weather application with location-based forecasts and interactive UI built with React and weather APIs.',
      longDescription: 'This weather application provides current weather information and forecasts for any location worldwide. It features a clean, intuitive interface with weather data visualization, location search, and responsive design. Built using React.js and integrated with OpenWeatherMap API.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'OpenWeather API', 'CSS3', 'JavaScript', 'Chart.js'],
      category: 'frontend',
      github: 'https://github.com/princedabre/weather-app',
      live: 'https://weather-demo.com',
      features: [
        'Current Weather Data',
        'Location-based Forecasts',
        '5-Day Weather Forecast',
        'Search by City',
        'Weather Data Visualization',
        'Responsive Design',
        'Beautiful UI',
        'Geolocation Support'
      ]
    },
    {
      id: 5,
      title: 'Blog CMS',
      description: 'A content management system for bloggers with rich text editing, SEO optimization, and analytics.',
      longDescription: 'This blog CMS provides everything a blogger needs to create, manage, and optimize their content. It features a rich text editor, SEO optimization tools, analytics dashboard, and social media integration.',
      image: '/api/placeholder/600/400',
      technologies: ['Django', 'PostgreSQL', 'Redis', 'Elasticsearch'],
      category: 'backend',
      github: 'https://github.com/prince-dabre/blog-cms',
      live: 'https://blog-cms-demo.princedabre.com',
      features: [
        'Rich Text Editor',
        'SEO Optimization',
        'Content Analytics',
        'Social Media Integration',
        'Comment System',
        'Tag Management',
        'Search Functionality',
        'Multi-author Support'
      ]
    },
    {
      id: 6,
      title: 'API Gateway',
      description: 'A robust API gateway with authentication, rate limiting, monitoring, and load balancing capabilities.',
      longDescription: 'This API gateway serves as a central entry point for microservices, providing authentication, rate limiting, request/response transformation, and comprehensive monitoring and analytics.',
      image: '/api/placeholder/600/400',
      technologies: ['Django', 'Redis', 'PostgreSQL', 'Docker'],
      category: 'backend',
      github: 'https://github.com/prince-dabre/api-gateway',
      live: 'https://api-gateway-demo.princedabre.com',
      features: [
        'API Authentication',
        'Rate Limiting',
        'Request/Response Transformation',
        'Load Balancing',
        'API Analytics',
        'Error Handling',
        'Caching Layer',
        'Health Monitoring'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="projects-content"
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2 className="section-title gradient-text">Featured Projects</h2>
            <p className="section-subtitle">
              A showcase of my recent work and technical expertise
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="filter-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          <div className="projects-grid">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  layout
                  className="project-card glass hover-lift"
                  whileHover={{ y: -10 }}
                >
                  <div className="project-image">
                    <div className="image-placeholder">
                      <FaCode className="placeholder-icon" />
                    </div>
                    <div className="project-overlay">
                      <button 
                        className="overlay-btn"
                        onClick={() => setSelectedProject(project)}
                      >
                        <FaEye />
                      </button>
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="overlay-btn"
                      >
                        <FaGithub />
                      </a>
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="overlay-btn"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-tech">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaGithub />
                        Code
                      </a>
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link primary"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="modal-content glass"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  ×
                </button>
                
                <div className="modal-header">
                  <h3 className="modal-title">{selectedProject.title}</h3>
                  <div className="modal-links">
                    <a 
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-link"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>

                <div className="modal-body">
                  <p className="modal-description">{selectedProject.longDescription}</p>
                  
                  <div className="modal-section">
                    <h4 className="section-title">Technologies Used</h4>
                    <div className="modal-tech">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="modal-section">
                    <h4 className="section-title">Key Features</h4>
                    <ul className="features-list">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="feature-item">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
