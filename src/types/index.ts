export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  profileImage: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  location: string;
  resumeUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  images: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  createdAt: string;
  category: string;
  duration: string;
  role: string;
  challenges: string;
  solutions: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  level: number; // 1-100
  icon?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
}

export interface User {
  username: string;
  password: string;
}