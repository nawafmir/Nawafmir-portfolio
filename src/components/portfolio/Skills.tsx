import React from 'react';
import { Code, Database, Wrench, Layers } from 'lucide-react';
import { useData } from '../../contexts/DataContext';

export const Skills: React.FC = () => {
  const { skills } = useData();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend': return Code;
      case 'backend': return Layers;
      case 'database': return Database;
      case 'tools': return Wrench;
      default: return Code;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend': return 'from-blue-500 to-cyan-500';
      case 'backend': return 'from-green-500 to-emerald-500';
      case 'database': return 'from-purple-500 to-pink-500';
      case 'tools': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryNames = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    tools: 'Tools & Others',
    other: 'Other',
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => {
            const Icon = getCategoryIcon(category);
            const colorClass = getCategoryColor(category);
            
            return (
              <div
                key={category}
                className="animate-fade-in-up group"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full border border-gray-200 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClass} text-white mr-3`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white transition-colors">
                      {categoryNames[category as keyof typeof categoryNames] || category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {categorySkills.map((skill, skillIndex) => (
                      <div
                        key={skill.id}
                        className="animate-slide-in-right"
                        style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400 transition-colors">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 transition-colors">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${colorClass} transition-all duration-1000 ease-out`}
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${(categoryIndex * 200) + (skillIndex * 100) + 500}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {skills.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <Code className="w-16 h-16 mx-auto" />
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-lg">No skills added yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};