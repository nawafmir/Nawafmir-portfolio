import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  MapPin,
  Download,
  ArrowDown,
} from "lucide-react";
import { useData } from "../../contexts/DataContext";

export const Hero: React.FC = () => {
  const { personalInfo } = useData();

  const socialLinks = [
    { icon: Github, url: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, url: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Mail, url: `mailto:${personalInfo.email}`, label: "Email" },
    ...(personalInfo.twitter
      ? [{ icon: Twitter, url: personalInfo.twitter, label: "Twitter" }]
      : []),
  ];

  const handleResumeDownload = () => {
    const resumeUrl =
      "https://raw.githubusercontent.com/nawafmir/resume/c02e50f300fcbba26c541e2fa7abfc339607c6f4/Nawaf_Cv_last.pdf";

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Nawaf_Resume.pdf");
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4 transition-all duration-500"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in-up">
          <div className="relative inline-block">
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full mx-auto shadow-2xl object-cover ring-4 ring-white dark:ring-gray-700 transition-all duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 animate-pulse"></div>
          </div>
        </div>

        <div className="animate-fade-in-up animation-delay-200">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            {personalInfo.name}
          </h1>
        </div>

        <div className="animate-fade-in-up animation-delay-400">
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-6 transition-colors">
            {personalInfo.title}
          </h2>
        </div>

        <div className="animate-fade-in-up animation-delay-600">
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed transition-colors">
            {personalInfo.bio}
          </p>
        </div>

        <div className="animate-fade-in-up animation-delay-800">
          <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-8 transition-colors">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        <div className="animate-fade-in-up animation-delay-1000">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex justify-center space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-200 dark:border-gray-700"
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </a>
              ))}
            </div>

            {personalInfo.resumeUrl && (
              <button
                onClick={handleResumeDownload}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </button>
            )}
          </div>
        </div>

        <div className="animate-fade-in-up animation-delay-1200">
          <a
            href="#experience"
            className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
          >
            <span className="mr-2">Explore my work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
