import React, { useEffect, useState } from 'react';

const ParallaxBackground: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${offset * 0.5}px)`,
          background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
        }}
      />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${offset * 0.3}px)`,
          background: 'radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
        }}
      />
    </div>
  );
};

export default ParallaxBackground;