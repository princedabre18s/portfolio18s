import React, { useState, useEffect } from 'react';
import './Cursor.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateFollower = () => {
      setFollowerPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1
      }));
    };

    window.addEventListener('mousemove', updateCursor);
    const interval = setInterval(updateFollower, 16);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      clearInterval(interval);
    };
  }, [position]);

  return (
    <>
      <div 
        className="cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div 
        className="cursor-follower"
        style={{
          left: `${followerPosition.x}px`,
          top: `${followerPosition.y}px`,
        }}
      />
    </>
  );
};

export default Cursor;
