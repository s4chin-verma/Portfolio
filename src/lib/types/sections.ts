import { EducationType, NavLinkType, ProjectType, SocialLinkType, TechSkillsType } from '.';

export interface HomeSectionType {
   title?: string;
   heading?: string;
   subtitle?: string;
   tagline: string;
   description?: string;
   specialText?: string;
}
export interface FooterSectionType {
   title: string;
   heading: string;
   paragraph: string;
}

export interface AboutSectionType extends Section {
   tittle?: string;
   content?: string;
   subContent?: string;
}

export interface EducationSectionType {
   education: EducationType[];
}

export interface NavbarSectionType {
   navLinks: NavLinkType[];
}
export interface SocialSectionType {
   socialLinks: SocialLinkType[];
}

export interface TechSectionType {
   techIcons: TechSkillsType[];
}

export interface ProjectsSectionType extends Section {
   projects: ProjectType[];
}

export interface Section {
   title: string;
}
