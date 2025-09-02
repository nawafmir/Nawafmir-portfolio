import React, { createContext, useContext, useState, useEffect } from 'react';
import { PersonalInfo, Project, Experience, Skill, Service } from '../types';
import { 
  getPersonalInfo, 
  savePersonalInfo, 
  getProjects, 
  saveProjects,
  getExperiences,
  saveExperiences,
  getSkills,
  saveSkills,
  getServices,
  saveServices
} from '../utils/storage';

interface DataContextType {
  personalInfo: PersonalInfo;
  projects: Project[];
  experiences: Experience[];
  skills: Skill[];
  services: Service[];
  updatePersonalInfo: (info: PersonalInfo) => void;
  addProject: (project: Omit<Project, 'id' | 'createdAt'>) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  addExperience: (experience: Omit<Experience, 'id'>) => void;
  updateExperience: (id: string, experience: Partial<Experience>) => void;
  deleteExperience: (id: string) => void;
  addSkill: (skill: Omit<Skill, 'id'>) => void;
  updateSkill: (id: string, skill: Partial<Skill>) => void;
  deleteSkill: (id: string) => void;
  addService: (service: Omit<Service, 'id'>) => void;
  updateService: (id: string, service: Partial<Service>) => void;
  deleteService: (id: string) => void;
  refreshData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(getPersonalInfo());
  const [projects, setProjects] = useState<Project[]>(getProjects());
  const [experiences, setExperiences] = useState<Experience[]>(getExperiences());
  const [skills, setSkills] = useState<Skill[]>(getSkills());
  const [services, setServices] = useState<Service[]>(getServices());

  const updatePersonalInfo = (info: PersonalInfo) => {
    setPersonalInfo(info);
    savePersonalInfo(info);
  };

  const addProject = (projectData: Omit<Project, 'id' | 'createdAt'>) => {
    const newProject: Project = {
      ...projectData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    saveProjects(updatedProjects);
  };

  const updateProject = (id: string, projectData: Partial<Project>) => {
    const updatedProjects = projects.map(project =>
      project.id === id ? { ...project, ...projectData } : project
    );
    setProjects(updatedProjects);
    saveProjects(updatedProjects);
  };

  const deleteProject = (id: string) => {
    const updatedProjects = projects.filter(project => project.id !== id);
    setProjects(updatedProjects);
    saveProjects(updatedProjects);
  };

  const addExperience = (experienceData: Omit<Experience, 'id'>) => {
    const newExperience: Experience = {
      ...experienceData,
      id: Date.now().toString(),
    };
    const updatedExperiences = [...experiences, newExperience];
    setExperiences(updatedExperiences);
    saveExperiences(updatedExperiences);
  };

  const updateExperience = (id: string, experienceData: Partial<Experience>) => {
    const updatedExperiences = experiences.map(experience =>
      experience.id === id ? { ...experience, ...experienceData } : experience
    );
    setExperiences(updatedExperiences);
    saveExperiences(updatedExperiences);
  };

  const deleteExperience = (id: string) => {
    const updatedExperiences = experiences.filter(experience => experience.id !== id);
    setExperiences(updatedExperiences);
    saveExperiences(updatedExperiences);
  };

  const addSkill = (skillData: Omit<Skill, 'id'>) => {
    const newSkill: Skill = {
      ...skillData,
      id: Date.now().toString(),
    };
    const updatedSkills = [...skills, newSkill];
    setSkills(updatedSkills);
    saveSkills(updatedSkills);
  };

  const updateSkill = (id: string, skillData: Partial<Skill>) => {
    const updatedSkills = skills.map(skill =>
      skill.id === id ? { ...skill, ...skillData } : skill
    );
    setSkills(updatedSkills);
    saveSkills(updatedSkills);
  };

  const deleteSkill = (id: string) => {
    const updatedSkills = skills.filter(skill => skill.id !== id);
    setSkills(updatedSkills);
    saveSkills(updatedSkills);
  };

  const addService = (serviceData: Omit<Service, 'id'>) => {
    const newService: Service = {
      ...serviceData,
      id: Date.now().toString(),
    };
    const updatedServices = [...services, newService];
    setServices(updatedServices);
    saveServices(updatedServices);
  };

  const updateService = (id: string, serviceData: Partial<Service>) => {
    const updatedServices = services.map(service =>
      service.id === id ? { ...service, ...serviceData } : service
    );
    setServices(updatedServices);
    saveServices(updatedServices);
  };

  const deleteService = (id: string) => {
    const updatedServices = services.filter(service => service.id !== id);
    setServices(updatedServices);
    saveServices(updatedServices);
  };

  const refreshData = () => {
    setPersonalInfo(getPersonalInfo());
    setProjects(getProjects());
    setExperiences(getExperiences());
    setSkills(getSkills());
    setServices(getServices());
  };

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <DataContext.Provider value={{
      personalInfo,
      projects,
      experiences,
      skills,
      services,
      updatePersonalInfo,
      addProject,
      updateProject,
      deleteProject,
      addExperience,
      updateExperience,
      deleteExperience,
      addSkill,
      updateSkill,
      deleteSkill,
      addService,
      updateService,
      deleteService,
      refreshData,
    }}>
      {children}
    </DataContext.Provider>
  );
};