import React, { useState } from 'react';
import { LogOut, User, FolderOpen, Briefcase, Code, Settings, Moon, Sun } from 'lucide-react';
import { logout } from '../../utils/storage';
import { useTheme } from '../../contexts/ThemeContext';
import { PersonalInfoForm } from './PersonalInfoForm';
import { ProjectsManager } from './ProjectsManager';
import { ExperienceManager } from './ExperienceManager';
import { SkillsManager } from './SkillsManager';
import { ServicesManager } from './ServicesManager';

interface DashboardProps {
  onLogout: () => void;
}

type TabType = 'personal' | 'projects' | 'experience' | 'skills' | 'services';

export const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<TabType>('personal');
  const { isDark, toggleTheme } = useTheme();

  const handleLogout = () => {
    logout();
    onLogout();
  };

  const tabs = [
    { id: 'personal' as TabType, label: 'Personal Info', icon: User },
    { id: 'experience' as TabType, label: 'Experience', icon: Briefcase },
    { id: 'skills' as TabType, label: 'Skills', icon: Code },
    { id: 'projects' as TabType, label: 'Projects', icon: FolderOpen },
    { id: 'services' as TabType, label: 'Services', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <header className="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white transition-colors">
              Admin Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 flex-shrink-0">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm hover:shadow-md'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300 border border-gray-200 dark:border-gray-700">
            {activeTab === 'personal' && <PersonalInfoForm />}
            {activeTab === 'projects' && <ProjectsManager />}
            {activeTab === 'experience' && <ExperienceManager />}
            {activeTab === 'skills' && <SkillsManager />}
            {activeTab === 'services' && <ServicesManager />}
          </div>
        </div>
      </div>
    </div>
  );
};