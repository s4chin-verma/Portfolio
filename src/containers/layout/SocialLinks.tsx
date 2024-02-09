import { socialSection } from '@/lib/content/social';
import { SocialIcon } from '@/components';
import { fadeIn } from '@/animation/animation';
import { motion } from 'framer-motion';

const SocialLinks = () => {
   const { socialLinks } = socialSection;
   return (
      <motion.div
         variants={fadeIn(2.1)}
         initial="hidden"
         animate="show"
         className="fixed bottom-0 flex-col items-center hidden md:flex left-6 xl:left-12">
         <ul>
            {socialLinks.map(({ icon, url }) => (
               <SocialIcon key={url} icon={icon} url={url} />
            ))}
         </ul>
         <div className="bg-slate-500 h-24 w-0.5 mt-5"></div>
      </motion.div>
   );
};

export default SocialLinks;
