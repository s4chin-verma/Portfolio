import { Icon } from '@iconify/react';

type propTypes = {
   repo: string;
   url?: string;
};

const ProjectLink = ({ repo, url }: propTypes) => {
   return (
      <>
         <a href={url} target="_blank" className="hover:text-accent text-dark-1">
            <div className="flex gap-3 items-center">
               <Icon icon="ci:external-link" width={22} height={22} />
               <span className="text-sm md:text-sm font-mono">Live Preview</span>
            </div>
         </a>
         <a href={repo} target="_blank" className="hover:text-accent text-dark-1">
            <div className="flex gap-3 items-center">
               <Icon icon="tabler:brand-github" width={20} height={20} />
               <span className="text-sm  md:text-sm font-mono">Github</span>
            </div>
         </a>
      </>
   );
};

export default ProjectLink;
