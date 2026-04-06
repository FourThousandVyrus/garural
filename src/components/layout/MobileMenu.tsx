'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { NAV_LINKS } from '@/lib/constants';

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      className="fixed inset-0 z-40 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
      style={{ backgroundColor: 'rgba(11, 43, 21, 0.96)' }}
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
    >
      {NAV_LINKS.map((link, i) => (
        <motion.div
          key={link.label}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Link
            href={link.href}
            onClick={onClose}
            className="text-white text-3xl font-bold hover:text-[#ffd400] transition-colors"
          >
            {link.label}
          </Link>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Button variant="gold" size="lg">Open an Account</Button>
      </motion.div>
    </motion.div>
  );
}
