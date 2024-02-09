import { socialLinks } from '@/lib/content/links';
import { SocialSectionType } from '@/lib/types/sections';

export const socialSection: SocialSectionType = {
   socialLinks: [
      {
         icon: 'tabler:brand-github',
         url: socialLinks.github,
      },
      {
         icon: 'lucide:linkedin',
         url: socialLinks.linkedin,
      },
      {
         icon: 'lucide:twitter',
         url: socialLinks.twitter,
      },
      {
         icon: 'mdi:instagram',
         url: socialLinks.instagram,
      },
      {
         icon: 'simple-icons:leetcode',
         url: socialLinks.leetcode,
      },
   ],
};
