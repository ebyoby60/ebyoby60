
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
}
