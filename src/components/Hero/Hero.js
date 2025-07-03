import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Full Stack Developer',
        'React.js Developer',
        'Python Django Developer',
        'Database Engineer',
        'Software Engineer',
        'Web Application Developer'
      ],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/princedabre', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/princedabre', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/princedabre', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://instagram.com/princedabre', label: 'Instagram' }
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hi, I'm <span className="gradient-text">Prince Dabre</span>
            </motion.h1>
            
            <motion.div 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span ref={typedRef} className="typing-text"></span>
            </motion.div>

            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Passionate Full Stack Developer with expertise in React.js, Python Django, and modern web technologies. 
              Experienced in building scalable web applications with MongoDB and PostgreSQL databases.
            </motion.p>

            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.a
                href="#projects"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="/Prince_Dabre.pdf"
                download="Prince_Dabre_Resume.pdf"
                className="btn btn-resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload /> Download Resume
              </motion.a>
            </motion.div>

            <motion.div 
              className="hero-social"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.2, color: '#00d4ff' }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="animated-sphere">
              <div className="sphere-container">
                <div className="sphere"></div>
                <div className="sphere-glow"></div>
              </div>
            </div>
            
            <div className="floating-elements">
              <div className="floating-element element-1">HTML</div>
              <div className="floating-element element-2">CSS</div>
              <div className="floating-element element-3">JS</div>
              <div className="floating-element element-4">React</div>
              <div className="floating-element element-5">Python</div>
              <div className="floating-element element-6">Django</div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="scroll-arrow"></div>
          <span>Scroll Down</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
