import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader">
      <div className="loader-content">
        <div className="loader-spinner"></div>
        <div className="loader-text">Loading Portfolio...</div>
        <div className="loader-bar">
          <div 
            className="loader-progress" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="loader-percentage">{progress}%</div>
      </div>
    </div>
  );
};

export default Loader;
