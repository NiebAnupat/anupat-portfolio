import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-700">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;

