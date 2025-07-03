import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-container">
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-text gradient-text">Prince</span>
          <span className="logo-dot">.</span>
        </motion.div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="nav-link"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                color: '#00d4ff',
                textShadow: '0 0 10px #00d4ff'
              }}
            >
              {item.name}
            </motion.a>
          ))}
          
          <motion.a
            href="/Prince_Dabre.pdf"
            download="Prince_Dabre_Resume.pdf"
            className="nav-resume-btn"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navItems.length * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload /> Resume
          </motion.a>
        </div>

        <motion.div 
          className="nav-toggle"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
