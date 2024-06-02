import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Sachin Verma.',
  tagline: 'I create visually pleasing interfaces for the web.',
  description:
    "I'm a passionate Full Stack web developer with experience in building web applications using React.js, Next.js, and Express.js with TypeScript.",
  specialText: 'Currently available for a job & freelance',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
