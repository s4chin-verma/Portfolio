import { Icon } from '@iconify/react';

type propType = {
   icon: string;
   children: React.ReactNode;
};

const EducationIcon = ({ icon, children }: propType) => {
   return (
      <div className="flex flex-row gap-2 md:gap-4 items-center">
         <Icon className="text-dark-2 w-4 h-4 md:w-6 md:h-6" icon={icon} />
         <p className="text-xs md:text-base font-medium text-text">{children}</p>
      </div>
   );
};

export default EducationIcon;
