'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInOnScrollProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

const directionMap = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
};

export default function FadeInOnScroll({
  children,
  direction = 'up',
  delay = 0,
  className,
}: FadeInOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
