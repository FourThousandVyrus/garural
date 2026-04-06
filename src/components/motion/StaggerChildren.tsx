'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { staggerContainer } from '@/lib/animations';

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
}

export default function StaggerChildren({ children, className }: StaggerChildrenProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
