export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  role: string;
  techStack: string[];
  link?: string;
  github?: string;
  featured: boolean;
  color: string; // Theme color for this specific project
  category: 'AI / ML' | 'Web Systems' | 'Social Impact' | 'Security';
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string[];
  tags: string[];
  location?: string;
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  year: string;
  type: 'hackathon' | 'leadership' | 'academic' | 'community';
  highlight: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; description: string; icon: string }[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
}

export interface VolunteerWork {
  id: string;
  role: string;
  description: string[];
}
