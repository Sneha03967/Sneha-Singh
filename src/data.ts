import { Project, Experience, Achievement, SkillCategory, Education, VolunteerWork } from './types';

export const personalInfo = {
  name: "Sneha Singh",
  title: "Software Engineer // Front End Developer",
  roleDescription: "B.Tech Computer Science student with strong interest in Artificial Intelligence, innovation, and problem-solving.",
  location: "Lucknow, India, 226001",
  email: "snehasingh03967@gmail.com",
  phone: "+919118568901",
  github: "https://github.com/Sneha03967",
  linkedin: "https://www.linkedin.com/in/sneha-singh-6aaa6a317",
  manifesto: "Passionate about building technology-driven solutions, exploring startups, and participating in hackathons.",
  bio: "Motivated B.Tech Computer Science student with strong interest in Artificial Intelligence, innovation, and problem-solving. SIH 2025 Finalist with experience in developing impactful projects like Heritage Canvas and DHARITRI AI. Passionate about building technology-driven solutions, exploring startups, and participating in hackathons. Skilled in teamwork, leadership, creativity, and learning modern technologies to solve real-world challenges."
};

export const projects: Project[] = [
  {
    id: "heritage-canvas",
    title: "Heritage Canvas",
    tagline: "India’s cultural heritage showcased through an interactive & visually engaging interface",
    description: "Developed Heritage Canvas, a web-based platform showcasing India’s cultural heritage through an interactive and visually engaging interface. Built for Smart India Hackathon 2025, focusing on digital preservation of monuments, arts, festivals, and historical sites.",
    problem: "Traditional methods of preserving and showcasing cultural heritage lack responsiveness, interactive interfaces, and engaging visual layouts for modern generations.",
    solution: "Designed a responsive UI and structured cultural content using modern web technologies, facilitating digital preservation of monument details and historic festivals.",
    impact: "Smart India Hackathon 2025 Finalist. Collaborated with team members on feature planning, research, and presentation during hackathon development.",
    role: "Frontend UI Developer. Designed and developed the responsive interface, content structures, and custom cultural assets visualization.",
    techStack: ["React", "Tailwind CSS", "Motion", "Vite", "Lucide Icons"],
    link: "https://heritagecanvas01.netlify.app/",
    github: "https://github.com/Sneha03967",
    featured: true,
    color: "#eab308", // Golden accent
    category: "Social Impact"
  },
  {
    id: "dharitri-ai",
    title: "DHARITRI AI",
    tagline: "AI fairness testing infrastructure to detect bias and unfair behavior in AI systems",
    description: "Developed DHARITRI, an AI fairness testing infrastructure designed to detect bias and unfair behavior in AI systems. Focused on ethical AI, transparency, and identity-based testing methodologies in machine learning systems.",
    problem: "Deep learning models and LLMs often contain underlying biases across demographics, which usually remain undetected prior to live deployment.",
    solution: "Built a structured testing matrix based on ethical AI principles to evaluate transparency and run identity-based testing methodologies.",
    impact: "Designed and contributed to responsible AI practice workflows, helping project teams perform comprehensive bias evaluations.",
    role: "Full-Stack Developer. Prepared project workflow design, testing strategies, and integrated AI fairness metrics within a collaborative hackathon workflow.",
    techStack: ["Python", "FastAPI", "React", "Tailwind CSS", "Scikit-Learn"],
    link: "https://dharitri-aifairness-unit.onrender.com",
    github: "https://github.com/Sneha03967",
    featured: true,
    color: "#3b82f6", // Blue accent
    category: "AI / ML"
  }
];

export const educationList: Education[] = [
  {
    id: "edu-1",
    degree: "B.Tech/B.B. in Computers",
    institution: "School of Management Sciences Lucknow",
    period: "08-2024 - Present",
    location: "Lucknow"
  },
  {
    id: "edu-2",
    degree: "Senior Secondary (12th) in PCM",
    institution: "New Public College",
    period: "05-2023 - 05-2024",
    location: "Lucknow"
  },
  {
    id: "edu-3",
    degree: "Secondary (10th) in Science",
    institution: "Kendriya Vidyalaya",
    period: "05-2021 - 05-2022",
    location: "Lucknow"
  }
];

export const volunteerWork: VolunteerWork[] = [
  {
    id: "vol-1",
    role: "Student Innovator & Hackathon Participant",
    description: [
      "Contributed to hackathons and student innovation activities by collaborating on AI and web-based projects.",
      "Assisted in project planning, presentations, and teamwork-focused development activities."
    ]
  }
];

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "Finalist in SIH",
    event: "Smart India Hackathon (SIH 2025)",
    year: "2025",
    type: "hackathon",
    highlight: "Recognized as a finalist in the prestigious national Smart India Hackathon for historical preservation software."
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Core Expertise",
    skills: [
      { name: "Web Design", level: 80, description: "Creating visually engaging and responsive UI components with clean layouts.", icon: "Palette" },
      { name: "Web App Development", level: 80, description: "Building interactive user interfaces, client-side routing, and application states.", icon: "Laptop" },
      { name: "Python Programming Proficiency", level: 80, description: "Writing structured data scripts, backend services, and basic ML workflows.", icon: "Terminal" },
      { name: "Leadership and Team Building", level: 100, description: "Collaborating on feature planning, project scheduling, and presentations during intense hackathons.", icon: "Users" }
    ]
  }
];

export const certifications = [
  "Basics of ethical hacking",
  "Prompt to prototype",
  "Web development"
];

export const hobbies = [
  "AI and startups",
  "Hackathons",
  "Reading about new technology"
];
