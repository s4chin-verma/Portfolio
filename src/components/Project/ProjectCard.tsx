import { ProjectType } from '@/lib/types';
import { Icon } from '@iconify/react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useEffect, useState } from 'react';
type ProjectCardProps = ProjectType & HTMLMotionProps<'div'>;

const ProjectCard = ({ name, url, repo, year, img, tags, ...rest }: ProjectCardProps) => {
   const [domLoaded, setDomLoaded] = useState(false);

   useEffect(() => {
      setDomLoaded(true);
   }, []);

   return domLoaded ? (
      <motion.div {...rest} className="w-full max-w-[350px]">
         <button
            onClick={e => {
               if ((e.target as HTMLElement).closest('a')) return;
               window.open(url);
            }}
            className="block w-full overflow-hidden transition-all duration-200 rounded-xl shadow-xl group bg-bg-secondary dark:shadow-2xl">
            <div className="overflow-hidden h-[200px]">
               <img
                  src={img}
                  alt={name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110 group-focus:scale-110"
               />
            </div>
            <div className="p-4 py-3 space-y-1 min-h-20">
               <div className="flex items-start justify-between">
                  <p className="font-mono text-xs capitalize text-start">{tags.join(' | ')}</p>
                  <div className="flex items-center space-x-1.5">
                     <a href={repo} className="block duration-200 hover:text-accent" target="_blank">
                        <Icon icon="tabler:brand-github" width={20} height={20} />
                     </a>
                     <a href={url} className="block duration-200 hover:text-accent" target="_blank">
                        <Icon icon="ci:external-link" width={22} height={22} />
                     </a>
                  </div>
               </div>
               <h4 className="flex justify-between font-medium capitalize duration-200 group-hover:text-accent">
                  <span>{name}</span>
                  <span className="mr-1">{year}</span>
               </h4>
            </div>
         </button>
      </motion.div>
   ) : (
      <></>
   );
};

export default ProjectCard;
