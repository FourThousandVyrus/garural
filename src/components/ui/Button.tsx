'use client';

import { motion } from 'framer-motion';
import { forwardRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  variant?: 'gold' | 'outline' | 'ghost' | 'dark' | 'outline-dark';
  size?: 'sm' | 'md' | 'lg';
  magnetic?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const variantStyles = {
  gold: 'bg-[#D4A017] hover:bg-[#B8860B] text-[#0A1628] font-semibold shadow-md hover:shadow-[0_10px_40px_rgba(212,160,23,0.3)]',
  outline: 'border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50',
  ghost: 'text-[#D4A017] hover:text-[#B8860B] hover:bg-[#D4A017]/10',
  dark: 'bg-[#0A1628] text-white hover:bg-[#121F3D] font-semibold shadow-md',
  'outline-dark': 'border-2 border-[#0A1628]/30 text-[#0A1628] hover:bg-[#0A1628]/5',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-sm rounded-xl',
  lg: 'px-8 py-4 text-base rounded-xl',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'gold', size = 'md', magnetic, className, onClick, type = 'button' }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center transition-all duration-300 cursor-pointer',
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (magnetic) {
      return (
        <motion.button
          ref={ref}
          type={type}
          className={classes}
          onClick={onClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.button>
      );
    }

    return (
      <button ref={ref} type={type} className={classes} onClick={onClick}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
