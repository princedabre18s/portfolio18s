import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Freelance Projects',
      location: 'Remote',
      period: '2023 - Present',
      type: 'Freelance',
      description: 'Developing custom web applications for clients using React.js and Django. Creating responsive designs and implementing robust backend solutions.',
      technologies: ['React', 'Django', 'PostgreSQL', 'MongoDB', 'JavaScript'],
      achievements: [
        'Successfully delivered 10+ projects for various clients',
        'Built e-commerce platform with payment gateway integration',
        'Developed inventory management system for small businesses',
        'Implemented real-time features using WebSocket technology'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Tech Startup',
      location: 'Mumbai, India',
      period: '2022 - 2023',
      type: 'Full-time',
      description: 'Worked on building user-friendly interfaces using React.js and modern JavaScript. Collaborated with backend team to integrate APIs and ensure seamless user experience.',
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Redux'],
      achievements: [
        'Improved application performance by 30% through optimization',
        'Built responsive dashboard for data visualization',
        'Developed reusable component library for team use',
        'Collaborated with UX/UI designers for pixel-perfect implementation'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'Digital Agency',
      location: 'Pune, India',
      period: '2021 - 2022',
      type: 'Full-time',
      description: 'Started professional career learning web development fundamentals. Worked on client websites and learned various programming languages and frameworks.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'MySQL'],
      achievements: [
        'Completed 15+ website projects successfully',
        'Learned Python and Django framework',
        'Gained experience in database design and management',
        'Received recognition for quick learning and dedication'
      ]
    },
    {
      title: 'Intern - Web Development',
      company: 'Local Software Company',
      location: 'Mumbai, India',
      period: '2020 - 2021',
      type: 'Internship',
      description: 'Started my journey in web development as an intern. Learned HTML, CSS, JavaScript basics and assisted senior developers in various projects.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      achievements: [
        'Successfully completed 6-month internship program',
        'Built first personal portfolio website',
        'Learned version control with Git and GitHub',
        'Gained foundation in responsive web design'
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
                variants={itemVariants}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="timeline-content glass hover-lift">
                  <div className="experience-header">
                    <div className="job-info">
                      <h3 className="job-title">{exp.title}</h3>
                      <h4 className="company-name">{exp.company}</h4>
                    </div>
                    <span className="job-type">{exp.type}</span>
                  </div>

                  <div className="experience-meta">
                    <div className="meta-item">
                      <FaCalendarAlt />
                      <span>{exp.period}</span>
                    </div>
                    <div className="meta-item">
                      <FaMapMarkerAlt />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="job-description">{exp.description}</p>

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
                    <FaBriefcase />
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
