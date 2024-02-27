import { HomeSection } from '@/lib/content/home';
import { motion } from 'framer-motion';
import { Button } from '@/components';
import { slideUp } from '@/animation/animation';
import useWindowWidth from '@/lib/contexts/WindowWidth';

export default function Home() {
   const { title, subtitle, tagline, specialText, description } = HomeSection;
   const windowWidth = useWindowWidth();
   const DEFAULT_ANIMATION_DELAY = windowWidth <= 768 ? 0.9 : 1.7;
   const getAnimationDelay = (delay: number) => DEFAULT_ANIMATION_DELAY + 0.15 * delay;

   return (
      <section
         id="home"
         className="flex flex-col justify-center h-full min-h-screen gap-6 mt-12 xs:gap-4 xs:mt-0 py-24 md:py-32">
         <motion.p
            variants={slideUp({ delay: getAnimationDelay(0) })}
            initial="hidden"
            animate="show"
            className="font-mono text-base md:text-lg text-accent">
            {subtitle}
         </motion.p>
         <motion.h1
            variants={slideUp({ delay: getAnimationDelay(1) })}
            initial="hidden"
            animate="show"
            className="name text-text text-4xl md:text-6xl font-bold capitalize  ">
            {title}
         </motion.h1>
         <motion.h1
            variants={slideUp({ delay: getAnimationDelay(2) })}
            initial="hidden"
            animate="show"
            className="text-text text-4xl md:text-6xl font-bold capitalize">
            {tagline}
         </motion.h1>
         <motion.p
            variants={slideUp({ delay: getAnimationDelay(3) })}
            initial="hidden"
            animate="show"
            className="max-w-xl text-base md:text-lg text-text">
            {description}
         </motion.p>
         <motion.p
            variants={slideUp({ delay: getAnimationDelay(4) })}
            initial="hidden"
            animate="show"
            className="font-mono text-base md:text-lg text-accent">
            {specialText}
         </motion.p>

         <motion.div variants={slideUp({ delay: getAnimationDelay(5) })} initial="hidden" animate="show">
            <Button url={'/Sachin_Resume.pdf'} children={'Download CV'} className={'mt-3'} />
         </motion.div>
      </section>
   );
}
