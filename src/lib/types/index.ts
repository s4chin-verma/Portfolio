export type NavLinkType = {
   name: string;
   url: string;
};

export type SocialLinkType = {
   icon: string;
   url: string;
};

export type TechSkillsType = {
   name: string;
   icon: string;
};

export type ProjectType = {
   id: string;
   name: string;
   url: string;
   year: number;
   img: string;
   tags: string[];
   repo: string;
};

export type EducationType = {
   standard: string;
   institution: string;
   location: string;
   time: string;
};

export type StringKeyValueType = {
   [link: string]: string;
};

export type RevealPropsType = {
   children: JSX.Element;
   width?: 'fit-content' | '100%';
   delay?: number;
   childClass?: string;
   parentClass?: string;
};
