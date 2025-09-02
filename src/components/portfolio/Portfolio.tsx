import React from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { Experience } from './Experience';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Services } from './Services';
import { Contact } from './Contact';
import { Footer } from './Footer';

export const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 transition-colors duration-300">
      <Header />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};