import { useState, useEffect } from 'react';
import { ProjectLink } from '@/components';
import { ProjectType } from '@/lib/types';
import { motion, MotionProps } from 'framer-motion';

const ProjectCard = ({ img, name, year, repo, url, tags, ...rest }: ProjectType & MotionProps) => {
   const [domLoaded, setDomLoaded] = useState(false);

   useEffect(() => {
      setDomLoaded(true);
   }, []);

   return domLoaded ? (
      <motion.div
         {...rest}
         className="project-card w-72 md:w-[22rem] md:h-[29.3rem] bg-bg-secondary rounded-2xl transition ease-in-out duration-500 shadow-custom"
      >
         <div className="">
            <img
               className="rounded-t-2xl overflow-hidden relative w-full object-center object-cover"
               src={img}
               alt="project"
            />
         </div>
         <div className="p-4 md:p-6 flex flex-col gap-6">
            <div className="flex justify-between group">
               <h3 className="text-text text-lg md:text-2xl font-medium font-mono hover:text-accent">
                  {name}
               </h3>
               <h3 className="text-text text-lg font-medium font-mono hover:text-accent">{year}</h3>
            </div>
            <div className="text-sm md:text-lg font-light text-text font-mono">
               Tech stack: {tags.join(' | ')}
            </div>
            <div className="flex flex-row justify-between items-center ">
               <ProjectLink repo={repo} url={url} />
            </div>
         </div>
      </motion.div>
   ) : (
      <></>
   );
};
export default ProjectCard;
