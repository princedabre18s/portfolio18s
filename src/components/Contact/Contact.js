import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaInstagram,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Replace with your EmailJS configuration
      await emailjs.send(
        'your_service_id',
        'your_template_id',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'your_public_key'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'princedabre18s@gmail.com',
      link: 'mailto:princedabre18s@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 8080685913',
      link: 'tel:+918080685913'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Mumbai, Maharashtra, India',
      link: 'https://maps.google.com'
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/princedabre18s',
      color: '#333'
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/princedabre18s',
      color: '#0077B5'
    },
    {
      icon: FaInstagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/princedabre18s',
      color: '#E4405F'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="contact-content"
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2 className="section-title gradient-text">Get In Touch</h2>
            <p className="section-subtitle">
              Have a project in mind? Let's work together to bring your ideas to life!
            </p>
          </motion.div>

          <div className="contact-grid">
            <motion.div variants={itemVariants} className="contact-info">
              <div className="info-card glass">
                <h3 className="info-title">Let's Talk</h3>
                <p className="info-description">
                  I'm always open to discussing new opportunities, 
                  interesting projects, and creative collaborations.
                </p>

                <div className="contact-details">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      className="contact-detail"
                      whileHover={{ x: 10 }}
                      target={item.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                    >
                      <div className="detail-icon">
                        <item.icon />
                      </div>
                      <div className="detail-content">
                        <span className="detail-title">{item.title}</span>
                        <span className="detail-value">{item.value}</span>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="social-links">
                  <h4 className="social-title">Follow Me</h4>
                  <div className="social-icons">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        style={{ '--hover-color': social.color }}
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <social.icon />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form glass">
                <h3 className="form-title">Send Message</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder=" "
                    />
                    <label className="form-label">Your Name</label>
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder=" "
                    />
                    <label className="form-label">Your Email</label>
                  </div>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder=" "
                  />
                  <label className="form-label">Subject</label>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="form-input form-textarea"
                    placeholder=" "
                  ></textarea>
                  <label className="form-label">Your Message</label>
                </div>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <div className="spinner"></div>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>

                {submitStatus && (
                  <motion.div
                    className={`submit-status ${submitStatus}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {submitStatus === 'success' ? (
                      <>
                        <FaCheckCircle />
                        Message sent successfully!
                      </>
                    ) : (
                      'Failed to send message. Please try again.'
                    )}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
