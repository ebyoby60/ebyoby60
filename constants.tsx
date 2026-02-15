
import { Project, SkillCategory, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Network Vulnerability Assessment',
    description: 'Conducted a comprehensive penetration test for a financial services firm, identifying critical flaws in legacy infrastructure.',
    tags: ['Nmap', 'Metasploit', 'Python'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  {
    id: '2',
    title: 'SOC Monitoring Dashboard',
    description: 'Developed a custom SIEM integration to visualize real-time threats and automate incident response alerts.',
    tags: ['Splunk', 'ELK Stack', 'Security'],
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  {
    id: '3',
    title: 'Automated Phishing Simulation',
    description: 'Designed an internal training tool that reduced successful employee phishing clicks by 45% over six months.',
    tags: ['Social Engineering', 'Go', 'API'],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    link: '#'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Technical Skills',
    skills: ['Penetration Testing', 'SIEM Management', 'Digital Forensics', 'Cloud Security (AWS/Azure)', 'Python', 'Linux Administration']
  },
  {
    title: 'Creative & Strategic',
    skills: ['Threat Modeling', 'Risk Assessment', 'Security Architecture', 'Compliance Strategy', 'Policy Writing']
  },
  {
    title: 'Soft Skills',
    skills: ['Crisis Management', 'Technical Writing', 'Cross-functional Collaboration', 'Leadership', 'Public Speaking']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    period: '2022 - Present',
    role: 'Senior Cybersecurity Analyst',
    company: 'Global Tech Solutions',
    description: 'Lead analyst for the incident response team, overseeing security protocols for over 5,000 endpoints.'
  },
  {
    period: '2020 - 2022',
    role: 'Security Consultant',
    company: 'Nexus Cyber Defense',
    description: 'Performed monthly vulnerability assessments and security audits for high-profile clients in the healthcare sector.'
  },
  {
    period: '2018 - 2020',
    role: 'Junior Security Engineer',
    company: 'SecureNetwork Inc.',
    description: 'Maintained firewall configurations and monitored IDS/IPS alerts for suspicious network activity.'
  }
];
