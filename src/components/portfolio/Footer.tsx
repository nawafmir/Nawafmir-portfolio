import React from 'react';
import { Heart } from 'lucide-react';
import { useData } from '../../contexts/DataContext';

export const Footer: React.FC = () => {
  const { personalInfo } = useData();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">{personalInfo.name}</h3>
            <p className="text-gray-400">{personalInfo.title}</p>
          </div>
          
          <div className="flex items-center justify-center mb-4">
            <span className="text-gray-400">Made with</span>
            <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
            <span className="text-gray-400">using React & Tailwind CSS</span>
          </div>
          
          <p className="text-gray-400">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};