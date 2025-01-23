import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  decimals?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000, decimals = 0 }) => {
  const { ref } = useInView();

  return (
    <span ref={ref}>
      {end.toFixed(decimals)}
    </span>
  );
};

export default AnimatedCounter;