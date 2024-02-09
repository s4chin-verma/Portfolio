import { projectTitle, projectsSection } from '@/lib/content/project';
import { motion } from 'framer-motion';
import { ProjectCard } from '@/components';
import { getSectionAnimation } from '@/animation/animation';
import { cardVariants } from '@/animation/animation';
import { useEffect, useState } from 'react';

export default function Projects() {
   const [isDomLoaded, setIsDomLoaded] = useState(false);
   const { title, subTitle } = projectTitle;
   const { projects } = projectsSection;

   useEffect(() => {
      setIsDomLoaded(true);
   });

   return isDomLoaded ? (
      <>
         <motion.section id="projects" animate={false} {...getSectionAnimation} className="py-24 md:py-32">
            <motion.h2 className="md:text-5xl text-center  md:mb-10 text-3xl sm:text-4xl capitalize font-medium mb-8 sm:mb-12 text-dark-2">
               {title}
            </motion.h2>
            <motion.h3 className="text-xl md:text-4xl text-text text-center mb-10 md:mb-20">
               {subTitle}
            </motion.h3>
            <motion.div className="grid gap-8 grid-cols-auto-250 xs:grid-cols-auto-300 place-items-center">
               {projects.map((project, index) => (
                  <ProjectCard
                     {...project}
                     key={index}
                     variants={cardVariants}
                     initial="hidden"
                     whileInView="show"
                     custom={index}
                     viewport={{ once: true }}
                  />
               ))}
            </motion.div>
         </motion.section>
      </>
   ) : (
      <></>
   );
}
