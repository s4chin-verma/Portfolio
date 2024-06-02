import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'about me',
  content: [
    'Hi, my name is Sachin Verma. I am an artist of the web and a passionate full-stack web developer eager to explore every tech stack. ',
    'My main focus these days is learning new technologies in development and finding a decent job. ',
    'I have recently graduated from ARYA College of Engineering & IT with a degree in Electrical Engineering.',
  ],
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: ['NextJs', 'Shadcn/UI', 'NextAuth', 'TypeScript', 'Docker'],
  },
  img: '/sachin-verma.jpeg',
};
