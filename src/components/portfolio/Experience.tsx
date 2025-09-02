import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { useData } from '../../contexts/DataContext';

export const Experience: React.FC = () => {
  const { experiences } = useData();

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'full-time': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'part-time': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'contract': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'internship': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            My journey through various roles and companies
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in-up group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white transition-colors">
                        {experience.position}
                      </h3>
                    </div>
                    <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2 transition-colors">
                      {experience.company}
                    </h4>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(experience.type)}`}>
                        {experience.type.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium transition-colors hover:bg-blue-200 dark:hover:bg-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {experiences.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <Briefcase className="w-16 h-16 mx-auto" />
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-lg">No experience added yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};