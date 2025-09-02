import React from 'react';
import { Mail, Github, Linkedin, Twitter, MapPin, Send } from 'lucide-react';
import { useData } from '../../contexts/DataContext';

export const Contact: React.FC = () => {
  const { personalInfo } = useData();

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors">
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {[
              { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: 'blue' },
              { icon: Github, label: 'GitHub', value: 'View Profile', href: personalInfo.github, color: 'gray' },
              { icon: Linkedin, label: 'LinkedIn', value: 'Connect', href: personalInfo.linkedin, color: 'blue' },
              { icon: MapPin, label: 'Location', value: personalInfo.location, href: null, color: 'gray' },
            ].map((contact, index) => (
              <div
                key={contact.label}
                className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up border border-gray-200 dark:border-gray-700 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`p-3 rounded-full ${
                  contact.color === 'blue' 
                    ? 'bg-blue-100 dark:bg-blue-900 group-hover:bg-blue-200 dark:group-hover:bg-blue-800' 
                    : 'bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-200 dark:group-hover:bg-gray-600'
                } transition-colors`}>
                  <contact.icon className={`w-6 h-6 ${
                    contact.color === 'blue' 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-600 dark:text-gray-400'
                  } transition-colors`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white transition-colors">
                    {contact.label}
                  </h3>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={contact.href.startsWith('mailto:') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <span className="text-gray-600 dark:text-gray-300 transition-colors">
                      {contact.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg animate-fade-in-up border border-gray-200 dark:border-gray-700" style={{ animationDelay: '800ms' }}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
              Let's Work Together
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 transition-colors">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center w-full justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Email
              </a>
              
              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                or reach out through any of the social platforms above
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};