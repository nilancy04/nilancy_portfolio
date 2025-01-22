import React, { useEffect, useRef } from 'react';

const StarryBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create static stars
    const createStars = () => {
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 1}s`;
        container.appendChild(star);
      }
    };

    // Create shooting stars
    const createShootingStar = () => {
      const star = document.createElement('div');
      star.className = 'shooting-star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.width = `${100 + Math.random() * 50}px`;
      container.appendChild(star);

      // Remove the shooting star after animation
      setTimeout(() => {
        star.remove();
      }, 3000);
    };

    createStars();

    // Create shooting stars periodically
    const shootingStarInterval = setInterval(() => {
      createShootingStar();
    }, 2000);

    return () => {
      clearInterval(shootingStarInterval);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} className="bg-stars" />;
};

export default StarryBackground;