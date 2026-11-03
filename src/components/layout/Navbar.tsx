import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Download,
  Terminal,
  Mail,
  ChevronRight,
  Search,
  Eye,
  Sun,
  Moon,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { Locale } from '../../types/portfolio';

export const Navbar: React.FC = () => {
  const {
    locale,
    setLocale,
    data,
    setCommandPaletteOpen,
    setResumePreviewOpen,
  } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'about', label: data.nav.about, href: '#about', cmd: '01' },
    { id: 'projects', label: data.nav.projects, href: '#projects', cmd: '02' },
    { id: 'experience', label: data.nav.experience, href: '#experience', cmd: '03' },
    { id: 'education', label: data.educationSection.title, href: '#education', cmd: '04' },
    { id: 'skills', label: data.nav.skills, href: '#skills', cmd: '05' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      const sections = ['about', 'projects', 'experience', 'education', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleLanguageSelect = (targetLocale: Locale) => {
    setLocale(targetLocale);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full pt-3 sm:pt-4 px-3 sm:px-6 lg:px-8 pointer-events-none print:hidden">
      {/* Skip to Main Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:pointer-events-auto focus:absolute focus:top-4 focus:left-6 focus:z-50 focus:px-4 focus:py-2 focus:rounded-full focus:bg-blue-600 focus:text-white focus:text-xs focus:font-mono focus:font-semibold focus:shadow-md"
      >
        {locale === 'en' ? 'Skip to main content' : 'ข้ามไปยังเนื้อหาหลัก'}
      </a>

      <div className="max-w-6xl mx-auto">
        {/* Floating Glass Pill Container */}
        <div
          className={`pointer-events-auto w-full flex items-center justify-between gap-2 lg:gap-2.5 px-3 py-1.5 sm:py-2 rounded-full transition-all duration-200 ${
            scrolled
              ? 'bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl backdrop-saturate-150 border border-slate-200/90 dark:border-slate-800/90 shadow-[0_8px_30px_rgb(15,23,42,0.07)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
              : 'bg-white/75 dark:bg-slate-900/75 backdrop-blur-lg backdrop-saturate-150 border border-slate-200/80 dark:border-slate-800/80 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)] dark:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.4)]'
          }`}
        >
          {/* Left: Developer Brand Identity */}
          <a
            href="#about"
            onClick={closeMobileMenu}
            className="group flex items-center gap-2 rounded-full pl-1 pr-2 py-0.5 min-w-0 shrink-0 focus-visible:outline-2 focus-visible:outline-blue-600"
          >
            <div className="w-8 h-8 rounded-full bg-slate-900 dark:bg-slate-800 text-emerald-400 flex items-center justify-center font-mono text-xs font-bold tracking-tight group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-xs shrink-0 border border-slate-800 dark:border-slate-700">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-2 min-w-0">
              <span className="font-semibold text-slate-900 dark:text-white tracking-tight text-sm sm:text-base whitespace-nowrap group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {data.hero.name}
              </span>
              <span className="hidden xl:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>~/fullstack</span>
              </span>
            </div>
          </a>

          {/* Center: Inner Recessed Glass Pill Track for Navigation (Desktop lg+) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-0.5 p-1 rounded-full bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/70 shadow-inner min-w-0"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  aria-current={isActive ? 'location' : undefined}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs xl:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 font-semibold shadow-xs border border-slate-200/80 dark:border-slate-600'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-white/60 dark:hover:bg-slate-700/50 border border-transparent'
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] ${
                      isActive
                        ? 'text-blue-500 dark:text-blue-300'
                        : 'text-slate-400 dark:text-slate-500'
                    }`}
                  >
                    {item.cmd}
                  </span>
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right: Quick Command, Language, Theme, Resume & Contact */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Command Palette Shortcut Button (Ctrl+K / ⌘K) */}
            <button
              type="button"
              onClick={() => setCommandPaletteOpen(true)}
              title={locale === 'en' ? 'Open Command Palette (Ctrl+K / ⌘K)' : 'เปิดเมนูคำสั่งด่วน (Ctrl+K)'}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-mono text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200/80 dark:border-slate-700/80 transition-all cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline text-[11px] font-semibold">⌘K</span>
            </button>

            {/* Segmented Language Toggle Pill (TH | EN) */}
            <div
              role="group"
              aria-label="Language switcher"
              className="inline-flex items-center p-0.5 rounded-full bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80"
            >
              <button
                type="button"
                onClick={() => handleLanguageSelect('th')}
                aria-pressed={locale === 'th'}
                className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                  locale === 'th'
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs border border-slate-200/80 dark:border-slate-600'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                TH
              </button>
              <button
                type="button"
                onClick={() => handleLanguageSelect('en')}
                aria-pressed={locale === 'en'}
                className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                  locale === 'en'
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs border border-slate-200/80 dark:border-slate-600'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                EN
              </button>
            </div>

            {/* Theme Toggle Button (Light / Dark) */}
            <button
              type="button"
              onClick={toggleTheme}
              title={
                theme === 'dark'
                  ? locale === 'en'
                    ? 'Switch to Light Mode'
                    : 'เปลี่ยนเป็นธีมสว่าง'
                  : locale === 'en'
                    ? 'Switch to Dark Mode'
                    : 'เปลี่ยนเป็นธีมมืด'
              }
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-1.5 sm:p-2 rounded-full text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 hover:text-amber-500 dark:hover:text-amber-400 border border-slate-200/80 dark:border-slate-700/80 transition-all cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
              ) : (
                <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-700" />
              )}
            </button>

            {/* Resume Preview Button (Desktop) */}
            <button
              type="button"
              onClick={() => setResumePreviewOpen(true)}
              title={locale === 'en' ? 'Preview Resume PDF' : 'เปิดดูเรซูเม่ PDF'}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap text-slate-700 dark:text-slate-200 bg-white/90 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <Eye className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>{data.nav.downloadResume}</span>
            </button>

            {/* Primary Contact CTA Pill */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-xs active:scale-95"
            >
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span>{data.nav.contact}</span>
            </a>

            {/* Mobile / Tablet Hamburger Menu Pill Button (< 1024px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Collapsible Floating Glass Drawer (< 1024px) */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto lg:hidden mt-2 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl backdrop-saturate-150 border border-slate-200/90 dark:border-slate-800 p-3.5 shadow-[0_12px_32px_rgba(15,23,42,0.12)] dark:shadow-[0_12px_32px_rgba(0,0,0,0.6)]">
            <div className="mb-2.5 px-3 py-1.5 rounded-full bg-slate-900 dark:bg-slate-800 text-slate-200 flex items-center justify-between border border-slate-800 dark:border-slate-700">
              <span className="text-xs font-mono text-emerald-400">$ whoami</span>
              <span className="text-xs font-mono font-medium text-white">.NET &amp; React Dev</span>
            </div>
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={closeMobileMenu}
                    aria-current={isActive ? 'location' : undefined}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-50/90 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold border border-blue-200/60 dark:border-blue-800/60'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/70 dark:hover:bg-slate-800/70 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="font-mono text-xs text-slate-400 dark:text-slate-500">{item.cmd}.</span>
                      <span>{item.label}</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                  </a>
                );
              })}
            </nav>

            <div className="mt-3.5 pt-3 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row gap-2">
              <button
                type="button"
                onClick={() => {
                  closeMobileMenu();
                  setResumePreviewOpen(true);
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-slate-800 dark:text-slate-200 bg-slate-100/80 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-200/70 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <Eye className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{locale === 'en' ? 'Preview Resume' : 'เปิดดูเรซูเม่'}</span>
              </button>
              <a
                href={`${import.meta.env.BASE_URL}anupat-resume.pdf`}
                download="Anupat-Kaewmee-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-slate-800 dark:text-slate-200 bg-slate-100/80 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-200/70 dark:hover:bg-slate-700 transition-colors"
              >
                <Download className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                <span>{data.nav.downloadResume}</span>
              </a>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{data.nav.contact}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
