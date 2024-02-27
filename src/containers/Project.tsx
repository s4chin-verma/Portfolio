import { projectTitle, projectsSection } from '@/lib/content/project';
import { motion } from 'framer-motion';
import { PROJECTS_INITIALLY } from '@/lib/utils/config';
import { sortByYear } from '@/lib/utils/helper';
import { ProjectCard, Button } from '@/components';
import { getSectionAnimation } from '@/animation/animation';
import { cardVariants } from '@/animation/animation';
import { useEffect, useState } from 'react';

export default function Projects() {
   const [isDomLoaded, setIsDomLoaded] = useState(false);
   const [showMore, setShowMore] = useState(false);
   const { title, subTitle } = projectTitle;
   const { projects } = projectsSection;
   const topProjects = projects.slice(0, PROJECTS_INITIALLY);
   const visibleProjects = showMore ? projects : topProjects;

   useEffect(() => {
      setIsDomLoaded(true);
   });

   return isDomLoaded ? (
      <>
         <motion.section id="projects" animate={false} {...getSectionAnimation} className="py-24 md:py-32">
            <motion.h2 className="heading-primary">{title}</motion.h2>
            <motion.h3 className="heading-secondary ">{subTitle}</motion.h3>
            <div className="grid gap-6 grid-cols-auto-250 xs:grid-cols-auto-300 place-items-center">
               {sortByYear(visibleProjects).map((project, i) => {
                  if (i < PROJECTS_INITIALLY) {
                     return (
                        <ProjectCard
                           {...project}
                           key={project.id}
                           variants={cardVariants}
                           initial="hidden"
                           whileInView="show"
                           custom={i}
                           viewport={{ once: true }}
                        />
                     );
                  }

                  return (
                     <ProjectCard
                        {...project}
                        key={project.id}
                        variants={cardVariants}
                        initial="hidden"
                        animate="show"
                        custom={i - PROJECTS_INITIALLY}
                     />
                  );
               })}
            </div>
            {projects.length > PROJECTS_INITIALLY && (
               <div className="w-full flex justify-center">
                  <Button className="!mt-20" onClick={() => setShowMore(prev => !prev)}>
                     {showMore ? 'show less' : 'show more'}
                  </Button>
               </div>
            )}
         </motion.section>
      </>
   ) : (
      <></>
   );
}
