import { Icon } from '@iconify/react';

type propType = {
   icon: string;
   name: string;
   classname: string;
};

const TechIcon = ({ icon, name, classname }: propType) => {
   return (
      <div className="flex flex-col items-center relative group">
         <Icon icon={icon} className={`${classname}`} />
         <div className="font-mono absolute invisible px-2 py-1 text-xs md:text-base text-white capitalize duration-200 rounded opacity-0 w-max group-hover:opacity-100 group-hover:visible -top-10 bg-slate-900/75 dark:bg-slate-700/90 dark:text-slate-100">
            {name}
            <svg
               className="absolute left-0 w-full h-3 text-slate-900/75 dark:text-slate-700/90 top-full"
               x="0px"
               y="0px"
               viewBox="0 0 255 255"
               xmlSpace="preserve"
            >
               <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
            </svg>
         </div>
      </div>
   );
};

export default TechIcon;
