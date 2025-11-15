export interface SocialLink {
  id: string;
  icon: string;
  tooltip: string;
  url: string;
  download?: boolean;
}

export interface EducationalExperience {
  id: string;
  icon: string;
  course: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  display?: boolean;
}

export interface Company {
  logo: string;
  name: string;
  info: string;
}

export interface Link {
  label: string;
  url: string;
}

export interface ProfessionalExperience {
  id: string;
  startDate: string;
  endDate: string;
  position: string;
  diamondColors: string[];
  company: Company;
  description: string;
  links: Link[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  finishDate: string;
  links: Link[];
  tags: string[];
}

export interface Skill {
  id: string;
  icon: string;
  name: string;
}

export interface ActivityAndLeadership {
  id: string;
  startDate: string;
  endDate: string;
  position: string;
  diamondColors: string[];
  company: Company;
  description: string;
  links: Link[];
}

export interface Certificate {
  id: string;
  icon: string;
  provider: string;
  course: string;
  link: string;
  issueDate: string;
}

export interface HobbyAndInterest {
  id: string;
  icon: string;
  name: string;
}

export interface DataType {
  socialLinks: SocialLink[];
  educationalExperiences: EducationalExperience[];
  professionalExperiences: ProfessionalExperience[];
  projects: Project[];
  skills: Skill[];
  activitiesAndLeadership: ActivityAndLeadership[];
  certificates: Certificate[];
  hobbiesAndInterests: HobbyAndInterest[];
}
