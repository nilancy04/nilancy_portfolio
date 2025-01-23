import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  decimals?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000, decimals = 0 }) => {
  const { ref, inView } = useInView();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;

        if (progress < 1) {
          setCount(Math.min(progress * end, end));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
    </span>
  );
};

export default AnimatedCounter;