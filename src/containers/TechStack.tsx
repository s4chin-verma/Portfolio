import AnimatedData from '@/assets/lotties/frontend-dark.json';
import { TechIcon } from '@/components';
import { techTitle, techIconSection } from '@/lib/content/techStack';
import { AnimatedImage } from '@/components';
import { motion } from 'framer-motion';
import { getSectionAnimation } from '@/animation/animation';

export default function TechStack() {
   const { heading, subHeading } = techTitle;
   const { techIcons } = techIconSection;

   return (
      <motion.section id="skills" animate={false} {...getSectionAnimation} className="py-24 md:py-32">
         <h2 className="md:text-5xl text-center  md:mb-10 text-3xl sm:text-4xl capitalize font-medium mb-8 sm:mb-12 text-dark-2">
            {heading}
         </h2>
         <h3 className="text-xl md:text-4xl text-text text-center mb-10 md:mb-20">{subHeading}</h3>
         <div className="flex gap-8 sm:gap-10 flex-col lg:flex-row items-center odd:lg:flex-row-reverse">
            <div className="flex flex-wrap gap-10 md:gap-16 justify-center lg:w-1/2">
               {techIcons.map((icon, index) => (
                  <TechIcon
                     key={index}
                     icon={icon.icon}
                     name={icon.name}
                     classname="h-12 w-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                  />
               ))}
            </div>
            <AnimatedImage data={AnimatedData} classname="lg:w-1/2" />
         </div>
      </motion.section>
   );
}
