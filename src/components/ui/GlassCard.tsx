'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, ReactNode, MouseEvent } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  tiltEnabled?: boolean;
}

export default function GlassCard({ children, className, tiltEnabled = false }: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: MouseEvent) => {
    if (!tiltEnabled || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltEnabled ? { rotateX, rotateY, transformPerspective: 1000 } : undefined}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      className={cn(
        'bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl',
        'shadow-sm hover:shadow-xl transition-shadow duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
