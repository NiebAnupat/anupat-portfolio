import React, { createContext, useContext, useEffect, useState } from 'react';
import { Locale, PortfolioData, ProjectLens } from '../types/portfolio';
import { portfolioData } from '../data/portfolioData';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  data: PortfolioData;
  globalLens: ProjectLens;
  setGlobalLens: (lens: ProjectLens) => void;
  selectedSkillFilter: string | null;
  setSelectedSkillFilter: (skill: string | null) => void;
  commandPaletteOpen: boolean;
  setCommandPaletteOpen: (open: boolean) => void;
  resumePreviewOpen: boolean;
  setResumePreviewOpen: (open: boolean) => void;
}

const STORAGE_KEY = 'anupat_portfolio_locale';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'th' || saved === 'en') {
        return saved;
      }
    } catch {
      // Ignore storage errors in restricted environments
    }
    return 'en';
  });

  const [globalLens, setGlobalLensState] = useState<ProjectLens>('business');
  const [selectedSkillFilter, setSelectedSkillFilterState] = useState<string | null>(null);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState<boolean>(false);
  const [resumePreviewOpen, setResumePreviewOpen] = useState<boolean>(false);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
  };

  const toggleLocale = () => {
    setLocaleState((prev) => (prev === 'en' ? 'th' : 'en'));
  };

  const setGlobalLens = (lens: ProjectLens) => {
    setGlobalLensState(lens);
  };

  const setSelectedSkillFilter = (skill: string | null) => {
    setSelectedSkillFilterState(skill);
  };

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // Ignore storage errors
    }

    document.documentElement.lang = locale;

    const currentMeta = portfolioData[locale].meta;
    document.title = currentMeta.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentMeta.description);
    }
  }, [locale]);

  const value: LanguageContextType = {
    locale,
    setLocale,
    toggleLocale,
    data: portfolioData[locale],
    globalLens,
    setGlobalLens,
    selectedSkillFilter,
    setSelectedSkillFilter,
    commandPaletteOpen,
    setCommandPaletteOpen,
    resumePreviewOpen,
    setResumePreviewOpen,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
