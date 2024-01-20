import AnimatedData from '@/assets/lotties/frontend-dark.json';
import { TechIcon } from '@/components';
import { techTitle, techIconSection } from '@/lib/techStack';
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
         <div className="flex flex-col-reverse item-center gap-10 md:flex-row md:justify-between items-center md:gap-40">
            <AnimatedImage data={AnimatedData} />
            <div className="flex flex-wrap gap-10 md:gap-16 justify-center">
               {techIcons.map((icon, index) => (
                  <TechIcon
                     key={index}
                     icon={icon.icon}
                     name={icon.name}
                     classname="h-12 w-12 md:w-20 md:h-20"
                  />
               ))}
            </div>
         </div>
      </motion.section>
   );
}
