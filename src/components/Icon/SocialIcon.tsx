import { Icon } from '@iconify/react';

type propType = {
   icon: string;
   url: string;
};

const SocialIcon = ({ icon, url }: propType) => {
   return (
      <li className="my-1.5">
         <a
            href={url}
            target="_blank"
            className={`block text-sm p-2.5 hover:text-accent hover:-translate-y-1 focus:outline-none focus:text-accent focus:-translate-y-1 duration-200 text-text`}
         >
            <Icon icon={icon} width={24} height={24} />
         </a>
      </li>
   );
};

export default SocialIcon;
