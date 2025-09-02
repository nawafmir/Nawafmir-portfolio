import React from 'react';
import { Code, Smartphone, Server, Palette, Globe, Zap } from 'lucide-react';
import { useData } from '../../contexts/DataContext';

export const Services: React.FC = () => {
  const { services } = useData();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return Code;
      case 'Smartphone': return Smartphone;
      case 'Server': return Server;
      case 'Palette': return Palette;
      case 'Globe': return Globe;
      case 'Zap': return Zap;
      default: return Code;
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Services I Offer
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = getServiceIcon(service.icon);
            
            return (
              <div
                key={service.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group hover:-translate-y-2 animate-fade-in-up border border-gray-200 dark:border-gray-700"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-600 dark:text-gray-300 transition-colors"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {service.price && (
                  <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400 transition-colors">
                      {service.price}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {services.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <Briefcase className="w-16 h-16 mx-auto" />
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-lg">No services added yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};