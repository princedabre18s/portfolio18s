import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/prince-dabre', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/prince-dabre', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/prince_dabre', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://instagram.com/prince_dabre', label: 'Instagram' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="footer-logo">
                <span className="logo-text gradient-text">Prince Dabre</span>
              </div>
              <p className="footer-description">
                Full Stack Developer passionate about creating innovative 
                web solutions with modern technologies.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="footer-title">Services</h3>
              <ul className="footer-links">
                <li><span className="footer-link">Web Development</span></li>
                <li><span className="footer-link">Frontend Development</span></li>
                <li><span className="footer-link">Backend Development</span></li>
                <li><span className="footer-link">Database Design</span></li>
                <li><span className="footer-link">API Development</span></li>
                <li><span className="footer-link">Technical Consulting</span></li>
              </ul>
            </motion.div>

            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="footer-title">Contact Info</h3>
              <div className="contact-info">
                <p className="contact-item">
                  <span className="contact-label">Email:</span>
                  <a 
                    href="mailto:prince.dabre@email.com" 
                    className="contact-value"
                  >
                    prince.dabre@email.com
                  </a>
                </p>
                <p className="contact-item">
                  <span className="contact-label">Phone:</span>
                  <a 
                    href="tel:+919876543210" 
                    className="contact-value"
                  >
                    +91 98765 43210
                  </a>
                </p>
                <p className="contact-item">
                  <span className="contact-label">Location:</span>
                  <span className="contact-value">Mumbai, India</span>
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="footer-copyright">
              <p>
                © {currentYear} Prince Dabre. Made with{' '}
                <motion.span
                  className="heart"
                  animate={{
                    scale: [1, 1.2, 1],
                    color: ['#ff00ff', '#ff4444', '#ff00ff']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaHeart />
                </motion.span>{' '}
                and lots of ☕
              </p>
            </div>

            <motion.button
              className="scroll-to-top"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FaArrowUp />
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="footer-bg-effects">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>
    </footer>
  );
};

export default Footer;
