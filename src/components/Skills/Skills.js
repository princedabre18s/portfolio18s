import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaLinux } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, 
  FaJs, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs,
  FaGitAlt,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiDjango, 
  SiMongodb, 
  SiPostgresql, 
  SiDocker,
  SiPostman
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, level: 95, color: '#61DAFB' },
        { name: 'JavaScript', icon: FaJs, level: 90, color: '#F7DF1E' },
        { name: 'HTML5', icon: FaHtml5, level: 95, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, level: 90, color: '#1572B6' },
        { name: 'Bootstrap', icon: FaCss3Alt, level: 85, color: '#7952B3' },
        { name: 'Responsive Design', icon: FaCss3Alt, level: 90, color: '#00d4ff' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python', icon: FaPython, level: 95, color: '#3776AB' },
        { name: 'Django', icon: SiDjango, level: 90, color: '#092E20' },
        { name: 'Node.js', icon: FaNodeJs, level: 75, color: '#339933' },
        { name: 'RESTful APIs', icon: FaDatabase, level: 90, color: '#00d4ff' }
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, level: 85, color: '#47A248' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 90, color: '#336791' },
        { name: 'MySQL', icon: FaDatabase, level: 80, color: '#00758F' },
        { name: 'Database Design', icon: FaDatabase, level: 85, color: '#ff00ff' }
      ]
    },
    {
      title: 'Operating Systems',
      skills: [
        { name: 'Kali Linux', icon: FaLinux, level: 80, color: '#557C94' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: FaGitAlt, level: 90, color: '#F05032' },
        { name: 'Docker', icon: SiDocker, level: 70, color: '#2496ED' },
        { name: 'Postman', icon: SiPostman, level: 90, color: '#FFA500' },
        { name: 'XAMPP', icon: FaServer, level: 90, color: '#FF4500' },
        { name: 'GitHub Actions', icon: FaGitAlt, level: 75, color: '#24292e' },
        { name: 'VS Code', icon: FaServer, level: 95, color: '#007ACC' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="skills-content"
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2 className="section-title gradient-text">Technical Skills</h2>
            <p className="section-subtitle">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="skill-category glass hover-lift"
              >
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="skill-item"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="skill-header">
                        <div className="skill-info">
                          <div 
                            className="skill-icon"
                            style={{ color: skill.color }}
                          >
                            <skill.icon />
                          </div>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          style={{ 
                            background: `linear-gradient(90deg, ${skill.color}, #00d4ff)` 
                          }}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="skills-summary">
            <div className="summary-card glass">
              <h3 className="summary-title">What I Bring to the Table</h3>
              <div className="summary-points">
                <div className="summary-point">
                  <div className="point-icon">⚡</div>
                  <p>Fast learner with a passion for staying updated with latest technologies</p>
                </div>
                <div className="summary-point">
                  <div className="point-icon">🎯</div>
                  <p>Problem-solving mindset with attention to detail and code quality</p>
                </div>
                <div className="summary-point">
                  <div className="point-icon">🚀</div>
                  <p>Experience in full-stack development and modern development practices</p>
                </div>
                <div className="summary-point">
                  <div className="point-icon">💡</div>
                  <p>Creative approach to turning complex requirements into simple solutions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
