import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Download,
  Terminal,
  Mail,
  Globe,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Locale } from '../../types/portfolio';

export const Navbar: React.FC = () => {
  const { locale, setLocale, data } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  const navItems = [
    { id: 'about', label: data.nav.about, href: '#about' },
    { id: 'projects', label: data.nav.projects, href: '#projects' },
    { id: 'experience', label: data.nav.experience, href: '#experience' },
    { id: 'education', label: data.educationSection.title, href: '#education' },
    { id: 'skills', label: data.nav.skills, href: '#skills' },
  ];

  useEffect(() => {
    const handleScroll = () => {
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageSelect = (targetLocale: Locale) => {
    setLocale(targetLocale);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-slate-200 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Brand Identity */}
          <a
            href="#about"
            onClick={closeMobileMenu}
            className="group flex items-center gap-2.5 focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-mono text-xs font-semibold tracking-tight group-hover:bg-blue-600 transition-colors shadow-xs">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-900 tracking-tight text-sm sm:text-base group-hover:text-blue-600 transition-colors">
                {data.hero.name}
              </span>
              <span className="hidden lg:inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-100/80 text-slate-600 border border-slate-200">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Center: Desktop Smooth-Scroll Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-1.5"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-md text-xs lg:text-sm font-medium transition-all ${
                    isActive
                      ? 'text-blue-600 bg-blue-50/80 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right: Language Switcher, Resume Download & Contact CTA */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Segmented Language Toggle (TH | EN) */}
            <div
              role="group"
              aria-label="Language switcher"
              className="inline-flex items-center p-0.5 rounded-lg bg-slate-100/80 border border-slate-200"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500 ml-1.5 mr-1 hidden sm:block" />
              <button
                type="button"
                onClick={() => handleLanguageSelect('th')}
                aria-pressed={locale === 'th'}
                className={`px-2.5 py-1 rounded-md text-xs font-mono font-semibold transition-all cursor-pointer ${
                  locale === 'th'
                    ? 'bg-white text-blue-600 shadow-xs border border-slate-200/80'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                TH
              </button>
              <button
                type="button"
                onClick={() => handleLanguageSelect('en')}
                aria-pressed={locale === 'en'}
                className={`px-2.5 py-1 rounded-md text-xs font-mono font-semibold transition-all cursor-pointer ${
                  locale === 'en'
                    ? 'bg-white text-blue-600 shadow-xs border border-slate-200/80'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                EN
              </button>
            </div>

            {/* Resume PDF Direct Download (Desktop) */}
            <a
              href={`${import.meta.env.BASE_URL}anupat-resume.pdf`}
              download="Anupat-Kaewmee-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title={data.nav.downloadResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>{data.nav.downloadResume}</span>
            </a>

            {/* Primary Contact CTA Button (Desktop) */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{data.nav.contact}</span>
            </a>

            {/* Mobile Hamburger Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Collapsible Mobile Navigation Drawer (< 768px) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 shadow-xs">
          <div className="mb-2 px-3 py-1.5 rounded-md bg-slate-100/80 border border-slate-200/70 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-500">Full Stack Developer</span>
            <span className="text-xs font-mono font-medium text-blue-600">.NET &amp; React</span>
          </div>
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-semibold border border-blue-200/60'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              );
            })}
          </nav>

          <div className="mt-4 pt-3 border-t border-slate-200 flex flex-col gap-2">
            <a
              href={`${import.meta.env.BASE_URL}anupat-resume.pdf`}
              download="Anupat-Kaewmee-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-800 bg-slate-100/80 border border-slate-200 hover:bg-slate-200/70 transition-colors"
            >
              <Download className="w-4 h-4 text-slate-600" />
              <span>{data.nav.downloadResume}</span>
            </a>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{data.nav.contact}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

