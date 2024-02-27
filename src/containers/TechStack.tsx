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
         <h2 className="heading-primary">{heading}</h2>
         <h3 className="heading-secondary">{subHeading}</h3>
         <div className="flex gap-8 sm:gap-10 flex-col lg:flex-row items-center odd:lg:flex-row-reverse">
            <div className="flex flex-wrap gap-10 md:gap-14 justify-center lg:w-1/2">
               {techIcons.map((icon, index) => (
                  <TechIcon
                     key={index}
                     icon={icon.icon}
                     name={icon.name}
                     classname="h-10 w-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
                  />
               ))}
            </div>
            <AnimatedImage data={AnimatedData} classname="lg:w-1/2" />
         </div>
      </motion.section>
   );
}
