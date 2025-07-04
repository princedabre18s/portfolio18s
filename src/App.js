import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Cursor from './components/Cursor/Cursor';
import Loader from './components/Loader/Loader';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="App">
        <Cursor />
        <ParticlesBackground />
        
        {/* ===== PORTFOLIO IN PROGRESS BANNER - START ===== */}
        {/* To remove this banner, delete everything between these comment blocks */}
        <div className="progress-banner">
          <div className="progress-banner-content">
            <span className="progress-banner-icon">🚧</span>
            <span className="progress-banner-text">Portfolio in Progress</span>
            <span className="progress-banner-icon">🚧</span>
          </div>
        </div>
        {/* ===== PORTFOLIO IN PROGRESS BANNER - END ===== */}
        
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
