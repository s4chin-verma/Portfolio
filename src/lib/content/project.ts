import { ProjectsSectionType } from '@/lib/types/sections';
import { StringKeyValueType } from '../types';
import { getId } from '@/lib/utils/helper';

export const projectTitle: StringKeyValueType = {
   title: 'Projects',
   subTitle: "Things I've built so far",
};

export const projectsSection: ProjectsSectionType = {
   title: 'Latest Projects',
   projects: [
      {
         id: getId(),
         name: 'Pixel-Pipers',
         url: 'https://pixel-pipers.vercel.app/',
         repo: 'https://github.com/s4chin-verma/pixel-pipers',
         img: '/portfolio.webp',
         year: 2024,
         tags: ['ReactTs', 'Redux', 'Tailwind CSS'],
      },
      {
         id: getId(),
         name: 'PortFolio',
         url: 'https://s4chin.vercel.app/',
         repo: 'https://github.com/s4chin-verma/Chat-Room',
         img: '/port.png',
         year: 2024,
         tags: ['ReactJs', 'Tailwind', 'TypeScript'],
      },
      {
         id: getId(),
         name: 'Chat Room',
         url: '',
         repo: 'https://github.com/s4chin-verma/Chat-Room',
         img: '/Rectangle_4.png',
         year: 2023,
         tags: ['React.Ts', 'Tailwind', 'Redux', 'MongoDB', 'Express'],
      },
      {
         id: getId(),
         name: 'Todo List',
         url: 'https://to-do-frontend-eta.vercel.app/',
         repo: 'https://github.com/s4chin-verma/ToDo-React',
         img: '/Rectangle_6.png',
         year: 2023,
         tags: ['ReactJs', 'MDB', 'NodeJs', 'MongoDB', 'JWT'],
      },
   ],
};
