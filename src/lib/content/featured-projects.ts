import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

/* FOR ADDING SPECIAL PROJECTS */
const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: '',
      description: '',
      tasks: '',
      url: '',
      img: '',
      tags: [],
    },
  ],
};

export default featuredProjectsSection;
