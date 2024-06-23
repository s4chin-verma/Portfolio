import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';
import { portfolioUrl } from '../utils/config';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Mystery Messenger',
      url: 'https://mystery-messenger-ten.vercel.app/',
      year: 2024,
      img: 'https://res.cloudinary.com/dnpji7f84/image/upload/v1717356083/Portfolio/mystery-messenger.png',
      tags: ['Next.js', 'Shadcn/UI', 'NextAuth', 'MongoDB'],
      repo: 'https://github.com/s4chin-verma/Mystery-Messenger',
    },
    {
      id: getId(),
      name: 'Pixel-Pipers',
      url: 'https://pixel-pipers.vercel.app/',
      repo: 'https://github.com/s4chin-verma/pixel-pipers',
      img: 'https://res.cloudinary.com/dnpji7f84/image/upload/v1717357175/Portfolio/pixel-pipers.png',
      year: 2024,
      tags: ['ReactTs', 'Redux', 'Tailwind CSS'],
    },
    {
      id: getId(),
      name: 'PortFolio',
      url: 'https://s4chin.vercel.app/',
      repo: 'https://github.com/s4chin-verma/Chat-Room',
      img: 'https://res.cloudinary.com/dnpji7f84/image/upload/v1717356557/Portfolio/s4chin-verma-portfolio.png',
      year: 2024,
      tags: ['NextJs', 'TailwindCSS'],
    },
    {
      id: getId(),
      name: 'Web Chat',
      url: `${portfolioUrl}/not-available`,
      repo: 'https://github.com/s4chin-verma/Chat-Room',
      img: 'https://res.cloudinary.com/dnpji7f84/image/upload/v1717357366/Portfolio/web-chat.jpg',
      year: 2023,
      tags: ['React.Ts', 'Tailwind', 'Redux', 'MongoDB', 'Express'],
    },
    {
      id: getId(),
      name: 'Todo List',
      url: `${portfolioUrl}/not-available`,
      repo: 'https://github.com/s4chin-verma/ToDo-React',
      img: 'https://res.cloudinary.com/dnpji7f84/image/upload/v1717357333/Portfolio/todolist.jpg',
      year: 2023,
      tags: ['ReactJs', 'MDB', 'NodeJs', 'MongoDB', 'JWT'],
    },
    {
      id: getId(),
      name: 'Travel Website',
      url: 'https://jadoo-five-murex.vercel.app/',
      repo: 'https://github.com/s4chin-verma/Jadoo',
      img: 'https://res.cloudinary.com/dnpji7f84/image/upload/v1717356826/Portfolio/thumbnail.png',
      year: 2023,
      tags: ['HTML', 'CSS'],
    },
  ],
};
