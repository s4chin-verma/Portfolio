import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Developing responsive static websites using Next.js',
        'Creating responsive Single Page Applications (SPAs) in React.js',
        'Building RESTful APIs with Express.js',
        'Integrating websites with databases',
        'Implementing modern UI/UX designs using various CSS frameworks',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'sass', icon: 'vscode-icons:file-type-sass' },
        { name: 'Bootstrap', icon: 'logos:bootstrap' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'typeScript', icon: 'devicon:typescript' },
        { name: 'react js', icon: 'logos:react' },
        { name: 'redux js', icon: 'logos:redux' },
        { name: 'next js', icon: 'logos:nextjs-icon' },
        { name: 'shadcn/UI', icon: 'simple-icons:shadcnui' },
        { name: 'node js', icon: 'logos:nodejs-icon' },
        { name: 'express js', icon: 'skill-icons:expressjs-dark' },
        { name: 'Mongo DB', icon: 'skill-icons:mongodb' },
      ],
    },
    {
      id: getId(),
      title: 'Other tools i am using for development',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Using Docker for containerization',
        'Version control with Git',
        'Collaborating on projects with GitHub',
        'Testing APIs on Postman',
        'Vercel for hosting projects',
      ],
      softwareSkills: [
        { name: 'Docker', icon: 'logos:docker-icon' },
        { name: 'Git', icon: 'devicon:git' },
        { name: 'Github', icon: 'skill-icons:github-dark' },
        { name: 'VS Code', icon: 'devicon:vscode' },
        { name: 'Postman', icon: 'logos:postman-icon' },
        { name: 'Vercel', icon: 'skill-icons:vercel-light' },
      ],
    },
  ],
};
