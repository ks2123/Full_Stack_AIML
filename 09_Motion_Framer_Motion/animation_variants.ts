/**
 * 09_Motion_Framer_Motion - Animation Variants
 */
import { Variants } from 'framer-motion';

// 1. Page Transition Variants
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 15,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.3,
    },
  },
};

// 2. Score Card Stagger Variants
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
};

// 3. Progress Bar Fill Variant
export const progressBarVariants: Variants = {
  initial: { width: '0%' },
  animate: (targetPercentage: number) => ({
    width: `${targetPercentage}%`,
    transition: {
      duration: 1.2,
      ease: [0.65, 0, 0.35, 1],
    },
  }),
};
