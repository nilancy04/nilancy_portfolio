import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillProgressProps {
  skill: string;
  percentage: number;
}

const SkillProgress: React.FC<SkillProgressProps> = ({ skill, percentage }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { width: 0 },
    visible: { 
      width: `${percentage}%`,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">{skill}</span>
        <span className="text-sm font-medium text-purple-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        />
      </div>
    </div>
  );
};

export default SkillProgress;