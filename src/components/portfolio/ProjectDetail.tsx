import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Clock, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { useData } from '../../contexts/DataContext';
import { useTheme } from '../../contexts/ThemeContext';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { projects } = useData();
  const { isDark } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
            {project.description}
          </p>
        </div>

        {/* Project Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg animate-fade-in-up border border-gray-200 dark:border-gray-700" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center mb-2">
              <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="font-semibold text-gray-900 dark:text-white">Duration</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{project.duration}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg animate-fade-in-up border border-gray-200 dark:border-gray-700" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center mb-2">
              <User className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="font-semibold text-gray-900 dark:text-white">Role</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{project.role}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg animate-fade-in-up border border-gray-200 dark:border-gray-700" style={{ animationDelay: '600ms' }}>
            <div className="flex items-center mb-2">
              <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="font-semibold text-gray-900 dark:text-white">Category</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{project.category}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg animate-fade-in-up border border-gray-200 dark:border-gray-700" style={{ animationDelay: '800ms' }}>
            <div className="flex items-center justify-center space-x-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-200 hover:scale-110"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Image Slider */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="relative h-64 sm:h-80 lg:h-96">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </button>
                </>
              )}
            </div>

            {project.images.length > 1 && (
              <div className="flex justify-center space-x-2 p-4 bg-gray-50 dark:bg-gray-700">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex
                        ? 'bg-blue-600 dark:bg-blue-400'
                        : 'bg-gray-300 dark:bg-gray-500 hover:bg-gray-400 dark:hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg animate-fade-in-up border border-gray-200 dark:border-gray-700" style={{ animationDelay: '1200ms' }}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Project Overview
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                {project.detailedDescription}
              </p>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg animate-fade-in-up border border-gray-200 dark:border-gray-700" style={{ animationDelay: '1400ms' }}>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 transition-colors">
                  Challenges
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors">
                  {project.challenges}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg animate-fade-in-up border border-gray-200 dark:border-gray-700" style={{ animationDelay: '1600ms' }}>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 transition-colors">
                  Solutions
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors">
                  {project.solutions}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg animate-fade-in-up border border-gray-200 dark:border-gray-700" style={{ animationDelay: '1800ms' }}>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium transition-colors hover:bg-blue-200 dark:hover:bg-blue-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg animate-fade-in-up border border-gray-200 dark:border-gray-700" style={{ animationDelay: '2000ms' }}>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Project Links
              </h4>
              <div className="space-y-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 group"
                  >
                    <Github className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">View Source Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-200 group"
                  >
                    <ExternalLink className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">View Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};