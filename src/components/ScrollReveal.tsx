import React from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 14, opacity: 0.92 };
      case 'down':
        return { y: -14, opacity: 0.92 };
      case 'left':
        return { x: 14, opacity: 0.92 };
      case 'right':
        return { x: -14, opacity: 0.92 };
      case 'none':
      default:
        return { opacity: 0.92 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.01 }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const MalayMotifDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-8 text-amber-600/80 ${className}`}>
      <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1 max-w-xs"></div>
      <div className="flex items-center gap-2 text-xs tracking-widest text-amber-800 font-cinzel font-bold">
        <span className="text-amber-500 text-sm">✦</span>
        <span className="w-1.5 h-1.5 rotate-45 bg-amber-600"></span>
        <span className="text-xs font-extrabold text-teal-950 tracking-wider">WARISAN BUDAYA &amp; GEOMETRI</span>
        <span className="w-1.5 h-1.5 rotate-45 bg-amber-600"></span>
        <span className="text-amber-500 text-sm">✦</span>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1 max-w-xs"></div>
    </div>
  );
};
