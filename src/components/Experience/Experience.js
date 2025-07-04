
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Refs for individual timeline items
  const firstBlockRef = useRef(null);
  const secondBlockRef = useRef(null);

  // Individual block visibility detection
  useEffect(() => {
    if (!inView) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3 // Block needs to be 30% visible to trigger
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const blockIndex = entry.target.getAttribute('data-block-index');
          
          if (blockIndex === '0') {
            // Highlight first logo (Tann Mann Foundation)
            setTimeout(() => {
              const firstLogo = entry.target.querySelector('.company-logo');
              if (firstLogo && !firstLogo.hasAttribute('data-auto-highlighted')) {
                firstLogo.setAttribute('data-auto-highlighted', 'true');
                
                firstLogo.style.transform = 'scale(2.8) translateY(-10px)';
                firstLogo.style.objectFit = 'contain';
                firstLogo.style.borderRadius = '15px';
                firstLogo.style.background = 'rgba(255, 255, 255, 0.98)';
                firstLogo.style.border = '3px solid rgba(0, 212, 255, 0.6)';
                firstLogo.style.padding = '10px';
                firstLogo.style.zIndex = '1000';
                firstLogo.style.boxShadow = '0 15px 35px rgba(0, 212, 255, 0.4), 0 0 25px rgba(255, 255, 255, 0.3), 0 5px 15px rgba(0, 0, 0, 0.2)';
                
                // Reset after 3 seconds
                setTimeout(() => {
                  firstLogo.style.transform = '';
                  firstLogo.style.objectFit = '';
                  firstLogo.style.borderRadius = '';
                  firstLogo.style.background = '';
                  firstLogo.style.border = '';
                  firstLogo.style.padding = '';
                  firstLogo.style.zIndex = '';
                  firstLogo.style.boxShadow = '';
                }, 3000);
              }
            }, 500); // 0.5 second delay
          }
          
          if (blockIndex === '1') {
            // Highlight second logo (Immortal Software Solutions)
            setTimeout(() => {
              const secondLogo = entry.target.querySelector('.company-logo');
              if (secondLogo && !secondLogo.hasAttribute('data-auto-highlighted')) {
                secondLogo.setAttribute('data-auto-highlighted', 'true');
                
                secondLogo.style.transform = 'scale(2.8) translateY(-10px)';
                secondLogo.style.objectFit = 'contain';
                secondLogo.style.borderRadius = '15px';
                secondLogo.style.background = 'rgba(255, 255, 255, 0.98)';
                secondLogo.style.border = '3px solid rgba(0, 212, 255, 0.6)';
                secondLogo.style.padding = '10px';
                secondLogo.style.zIndex = '1000';
                secondLogo.style.boxShadow = '0 15px 35px rgba(0, 212, 255, 0.4), 0 0 25px rgba(255, 255, 255, 0.3), 0 5px 15px rgba(0, 0, 0, 0.2)';
                
                // Reset after 3 seconds
                setTimeout(() => {
                  secondLogo.style.transform = '';
                  secondLogo.style.objectFit = '';
                  secondLogo.style.borderRadius = '';
                  secondLogo.style.background = '';
                  secondLogo.style.border = '';
                  secondLogo.style.padding = '';
                  secondLogo.style.zIndex = '';
                  secondLogo.style.boxShadow = '';
                }, 3000);
              }
            }, 500); // 0.5 second delay
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe first two blocks only
    if (firstBlockRef.current) {
      observer.observe(firstBlockRef.current);
    }
    if (secondBlockRef.current) {
      observer.observe(secondBlockRef.current);
    }

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [inView]);

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const experiences = [
    {
      title: 'Artificial Intelligence Intern',
      company: 'Tann Mann Foundation',
      location: 'Remote',
      period: 'Feb 2025 – Ongoing',
      type: 'Internship',
      logo: '/tann mann foundation.avif',
      description: [
        'Developed the AI Smart Inventory System, an automated web platform for business inventory management and analytics, using Django (Python), React, and Neon PostgreSQL.',
        'Engineered a robust ETL pipeline to preprocess Excel uploads (manual/automatic via Microsoft Azure Cloud), storing daily and master summaries locally and on Neon DB, with scheduled and on-demand PDF/email reporting for business KPIs.',
        'Integrated Gemini API-powered chatbot for business Q&A and recommendations, implemented data insights/visualization tab, and enabled scheduled/triggered reporting and Azure folder monitoring.',
        'Automated data preview, validation, and reporting workflows for seamless user experience.'
      ],
      technologies: ['Django', 'Python', 'React', 'Neon PostgreSQL', 'Microsoft Azure Cloud', 'Gemini API', 'ETL', 'Data Visualization'],
      achievements: [
        "Reduced manual reporting time by 90% through end-to-end automation of data ingestion, validation, and PDF/email report generation.",
        "Enabled real-time business insights by integrating a Gemini API-powered chatbot for natural language Q&A and actionable recommendations.",
        "Achieved seamless cloud-to-local data synchronization and backup using Azure Blob Storage monitoring and automated ETL pipelines.",
        "Improved data reliability and user trust by implementing robust validation, error handling, and scheduled data quality checks.",
        "Enhanced user experience with interactive data visualizations, voice control, and on-demand reporting accessible via a modern web interface."
      ]
    },
    {
      title: "Python Backend Developer Intern",
      company: "Immortal Software Solutions",
      location: "Remote",
      period: "Feb 2025 – June 2025",
      type: "Internship",
      logo: '/immortal software solutions.jpg',
      description: [
        "Engineered a comprehensive multi-module Customer Relationship Management (CRM) Portal featuring Task, Contacts, Accounts, Targets, Calls, and Consignment modules, ensuring seamless business operations.",
        "Designed and implemented secure authentication flows with role-based access control, managing efficient CRUD operations across all modules for optimal user experience.",
        "Successfully executed a complex database migration from MongoDB to Neon PostgreSQL, optimizing for enhanced scalability, data integrity, and structured data management.",
        "Developed and rigorously tested RESTful APIs using Django REST Framework, ensuring robust communication between frontend and backend systems with comprehensive error handling.",
        "Collaborated closely with the frontend development team to integrate React components, delivering a responsive and intuitive user interface that improved user engagement.",
        "Enhanced system maintainability through strategic database refactoring, process automation, and implementation of best coding practices."
      ],
      technologies: ["Django", "Python", "Django REST Framework", "React", "MongoDB", "Neon PostgreSQL", "MySQL", "Postman", "JWT Authentication"],
      achievements: [
        "Successfully migrated entire database architecture from MongoDB to PostgreSQL, resulting in 40% improved query performance and enhanced data consistency.",
        "Implemented comprehensive API endpoints for all 6 modules, achieving 99.9% uptime and sub-200ms response times through optimized database queries.",
        "Designed scalable authentication system supporting multiple user roles, reducing security vulnerabilities and improving user management efficiency.",
        "Collaborated on seamless frontend-backend integration, resulting in a cohesive application that enhanced user experience and reduced development conflicts.",
        "Automated routine database maintenance tasks, reducing manual effort by 50% and allowing the team to focus on feature development and optimization."
      ]
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="experience-content"
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2 className="section-title gradient-text">Work Experience</h2>
            <p className="section-subtitle">
              My professional journey and key accomplishments
            </p>
          </motion.div>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                ref={index === 0 ? firstBlockRef : index === 1 ? secondBlockRef : null}
                data-block-index={index}
                variants={itemVariants}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="timeline-content glass hover-lift">
                  <div className={`experience-header ${index === 0 || index === 1 ? 'centered-header' : ''}`}>
                    <div className="job-info">
                      <h3 className="job-title">{exp.title}</h3>
                      <h4 className="company-name">{exp.company}</h4>
                    </div>
                    <span className="job-type">{exp.type}</span>
                  </div>

                  <div className={`experience-meta ${index === 0 || index === 1 ? 'centered-meta' : ''}`}>
                    <div className="meta-item">
                      <FaCalendarAlt />
                      <span>{exp.period}</span>
                    </div>
                    <div className="meta-item">
                      <FaMapMarkerAlt />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Format job description as bullet points with justify alignment */}
                  {Array.isArray(exp.description) ? (
                    <ul className="job-description-list">
                      {exp.description.map((point, idx) => (
                        <li key={idx} className="job-description-item">{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="job-description">{exp.description}</p>
                  )}

                  <div className="technologies">
                    <h5 className="tech-title">Technologies Used:</h5>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="achievements">
                    <h5 className="achievements-title">Key Achievements:</h5>
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="achievement-item">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="timeline-marker">
                  <div className="marker-icon">
                    {exp.logo ? (
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="company-logo"
                      />
                    ) : (
                      <FaBriefcase />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
