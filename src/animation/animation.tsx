import { Variants } from 'framer-motion';

type Direction = 'up' | 'right' | 'down' | 'left';

interface SlideInOptions {
   delay?: number;
   direction?: Direction;
   offset?: number;
}

export const slideIn = ({ delay = 0, direction = 'up', offset = 10 }: SlideInOptions): Variants => {
   return {
      hidden: {
         y: direction === 'down' ? -offset : direction === 'up' ? offset : 0,
         x: direction === 'left' ? -offset : direction === 'right' ? offset : 0,
         opacity: 0,
      },
      show: {
         y: 0,
         x: 0,
         opacity: 1,
         transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
            delay,
         },
      },
   };
};

interface SlideUpOptions {
   delay?: number;
   duration?: number;
   offset?: number;
}

export const slideUp = ({ delay = 0, duration = 1.25, offset = 100 }: SlideUpOptions): Variants => ({
   hidden: {
      y: offset,
      opacity: 0,
   },
   show: {
      opacity: 1,
      y: 0,
      transition: {
         type: 'spring',
         delay,
         duration,
      },
   },
});

export const sectionVariants = slideUp({
   delay: 0.5,
   duration: 1.75,
   offset: 50,
});

export const getSectionAnimation = {
   variants: sectionVariants,
   initial: 'hidden',
   whileInView: 'show',
   viewport: { once: true },
};

export const cardVariants: Variants = {
   hidden: {
      opacity: 0,
      y: 40,
   },
   show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
         type: 'spring',
         stiffness: 150,
         damping: 20,
         delay: 0.2 * i,
         duration: 0.5,
      },
   }),
};

export const fadeIn = (delay = 0): Variants => ({
   hidden: {
      opacity: 0,
   },
   show: {
      opacity: 1,
      transition: {
         type: 'spring',
         duration: 1.25,
         delay,
      },
   },
});
