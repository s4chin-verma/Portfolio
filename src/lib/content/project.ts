import { ProjectsSectionType } from '@/lib/types/sections';
import { StringKeyValueType } from '../types';

export const projectTitle: StringKeyValueType = {
   title: 'Projects',
   subTitle: "Things I've built so far",
};

export const projectsSection: ProjectsSectionType = {
   title: 'Latest Projects',
   projects: [
      {
         name: 'PortFolio',
         url: 'https://s4chin.vercel.app/',
         repo: 'https://github.com/s4chin-verma/Chat-Room',
         img: '/Rectangle_6.png',
         year: 2024,
         tags: ['ReactJs', 'TailwindCSS', 'TypeScript'],
      },
      {
         name: 'Chat Room',
         url: '',
         repo: 'https://github.com/s4chin-verma/Chat-Room',
         img: '/Rectangle_4.png',
         year: 2023,
         tags: ['ReactJs', 'MDB', 'NodeJs', 'MongoDB', 'JWT'],
      },
      {
         name: 'Todo List',
         url: 'https://to-do-frontend-eta.vercel.app/',
         repo: 'https://github.com/s4chin-verma/ToDo-React',
         img: '/Rectangle_6.png',
         year: 2023,
         tags: ['ReactJs', 'MDB', 'NodeJs', 'MongoDB', 'JWT'],
      },
   ],
};
