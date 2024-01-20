import { SocialIcon } from '@/components';
import { socialSection } from '@/lib/social';

const FooterLinks = () => {
   const { socialLinks } = socialSection;
   return (
      <ul className="flex justify-center gap-3 mb-1 md:hidden">
         {socialLinks.map(({ icon, url }) => (
            <SocialIcon icon={icon} url={url} />
         ))}
      </ul>
   );
};

export default FooterLinks;
