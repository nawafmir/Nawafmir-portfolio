import { PersonalInfo, Project, Experience, Skill, Service } from '../types';

const STORAGE_KEYS = {
  PERSONAL_INFO: 'portfolio_personal_info',
  PROJECTS: 'portfolio_projects',
  EXPERIENCES: 'portfolio_experiences',
  SKILLS: 'portfolio_skills',
  SERVICES: 'portfolio_services',
  AUTH_TOKEN: 'portfolio_auth_token',
};

export const getPersonalInfo = (): PersonalInfo => {
  const stored = localStorage.getItem(STORAGE_KEYS.PERSONAL_INFO);
  if (stored) {
    return JSON.parse(stored);
  }
  
  return {
    name: 'Nawafmir',
    title: 'Full Stack Developer',
    bio: 'Passionate developer with expertise in modern web technologies. I love creating beautiful, functional applications that solve real-world problems.',
    profileImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    email: 'nawafmir@example.com',
    github: 'https://github.com/nawafmir',
    linkedin: 'https://linkedin.com/in/nawafmir',
    twitter: 'https://twitter.com/nawafmir',
    location: 'Remote',
    resumeUrl: 'https://drive.google.com/file/d/1234567890/view?usp=sharing',
  };
};

export const savePersonalInfo = (info: PersonalInfo): void => {
  localStorage.setItem(STORAGE_KEYS.PERSONAL_INFO, JSON.stringify(info));
};

export const getProjects = (): Project[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.PROJECTS);
  if (stored) {
    return JSON.parse(stored);
  }
  
  return [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern features',
      detailedDescription: 'A comprehensive e-commerce platform built with React, Node.js, and PostgreSQL. This project features a complete shopping experience with user authentication, product management, shopping cart functionality, secure payment processing through Stripe, and an admin dashboard for inventory management.',
      images: [
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      githubUrl: 'https://github.com/nawafmir/ecommerce-platform',
      liveUrl: 'https://demo-ecommerce.vercel.app',
      featured: true,
      createdAt: '2024-01-15',
      category: 'Web Application',
      duration: '3 months',
      role: 'Full Stack Developer',
      challenges: 'Implementing secure payment processing and real-time inventory management',
      solutions: 'Used Stripe for payments and WebSocket connections for real-time updates',
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      detailedDescription: 'A modern task management application designed for team collaboration. Features include drag-and-drop task organization, real-time updates, team member assignments, project timelines, and comprehensive reporting dashboard.',
      images: [
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      githubUrl: 'https://github.com/nawafmir/task-manager',
      liveUrl: 'https://taskflow-demo.vercel.app',
      featured: true,
      createdAt: '2024-02-20',
      category: 'Productivity Tool',
      duration: '2 months',
      role: 'Frontend Developer',
      challenges: 'Creating smooth drag-and-drop interactions and real-time synchronization',
      solutions: 'Implemented React DnD library and Firebase real-time database',
    },
  ];
};

export const saveProjects = (projects: Project[]): void => {
  localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
};

export const getExperiences = (): Experience[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.EXPERIENCES);
  if (stored) {
    return JSON.parse(stored);
  }
  
  return [
    {
      id: '1',
      company: 'Tech Solutions Inc.',
      position: 'Senior Full Stack Developer',
      duration: '2023 - Present',
      description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions.',
      technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'TypeScript'],
      location: 'Remote',
      type: 'full-time',
    },
    {
      id: '2',
      company: 'StartupXYZ',
      position: 'Frontend Developer',
      duration: '2022 - 2023',
      description: 'Developed responsive web applications and mobile-first designs. Collaborated with design team to implement pixel-perfect UI components.',
      technologies: ['React', 'Vue.js', 'Tailwind CSS', 'JavaScript'],
      location: 'San Francisco, CA',
      type: 'full-time',
    },
  ];
};

export const saveExperiences = (experiences: Experience[]): void => {
  localStorage.setItem(STORAGE_KEYS.EXPERIENCES, JSON.stringify(experiences));
};

export const getSkills = (): Skill[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.SKILLS);
  if (stored) {
    return JSON.parse(stored);
  }
  
  return [
    { id: '1', name: 'React', category: 'frontend', level: 95 },
    { id: '2', name: 'TypeScript', category: 'frontend', level: 90 },
    { id: '3', name: 'Node.js', category: 'backend', level: 88 },
    { id: '4', name: 'PostgreSQL', category: 'database', level: 85 },
    { id: '5', name: 'Tailwind CSS', category: 'frontend', level: 92 },
    { id: '6', name: 'Express.js', category: 'backend', level: 87 },
    { id: '7', name: 'MongoDB', category: 'database', level: 80 },
    { id: '8', name: 'Git', category: 'tools', level: 90 },
  ];
};

export const saveSkills = (skills: Skill[]): void => {
  localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(skills));
};

export const getServices = (): Service[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.SERVICES);
  if (stored) {
    return JSON.parse(stored);
  }
  
  return [
    {
      id: '1',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      icon: 'Code',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly', 'Cross-browser Compatibility'],
      price: 'Starting at $2,000',
    },
    {
      id: '2',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      icon: 'Smartphone',
      features: ['iOS & Android', 'React Native', 'App Store Deployment', 'Push Notifications'],
      price: 'Starting at $3,000',
    },
    {
      id: '3',
      title: 'API Development',
      description: 'RESTful APIs and backend services',
      icon: 'Server',
      features: ['RESTful Design', 'Database Integration', 'Authentication', 'Documentation'],
      price: 'Starting at $1,500',
    },
  ];
};

export const saveServices = (services: Service[]): void => {
  localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
};

export const isAuthenticated = (): boolean => {
  return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN) === 'authenticated';
};

export const login = (username: string, password: string): boolean => {
  if (username === 'nawaf' && password === '0570915708Nn') {
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, 'authenticated');
    return true;
  }
  return false;
};

export const logout = (): void => {
  localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
};