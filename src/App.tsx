import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { Footer } from './components/layout/Footer';
import { CommandPalette } from './components/ui/CommandPalette';
import { ResumeModal } from './components/ui/ResumeModal';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-700">
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          <HeroSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
        </main>
        <Footer />
        <CommandPalette />
        <ResumeModal />
      </div>
    </LanguageProvider>
  );
};

export default App;
