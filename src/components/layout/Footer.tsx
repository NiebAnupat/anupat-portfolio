import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Download,
  Copy,
  Check,
  Terminal,
  MapPin,
  ArrowUp,
  Eye,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { locale, setLocale, data, setResumePreviewOpen } = useLanguage();
  const { contactSection, hero, nav } = data;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(hero.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = hero.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="scroll-mt-20 bg-white dark:bg-[#090d16] border-t border-slate-200 dark:border-slate-800 transition-colors">
      {/* Bold Dark Terminal Contact Call-to-Action Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="relative rounded-2xl bg-slate-900 dark:bg-slate-950 bg-dark-grid border border-slate-800 dark:border-slate-800/90 p-6 sm:p-8 text-white shadow-[0_20px_50px_-12px_rgba(15,23,42,0.3)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7)] overflow-hidden">
          {/* Top Gradient Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400" />

          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-mono font-semibold mb-3">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                <span>{locale === 'en' ? 'READY FOR NEW CHALLENGES' : 'พร้อมร่วมงานทันที'}</span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                {contactSection.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-400 mt-1 max-w-[50ch]">
                {contactSection.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-4 text-xs text-slate-300">
                <span className="inline-flex items-center gap-1.5 font-mono bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  {hero.email}
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono tabular-nums bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  {hero.phone}
                </span>
                <span className="inline-flex items-center gap-1 bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {hero.location}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0 print:hidden">
              <button
                type="button"
                onClick={handleCopyEmail}
                className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all shadow-xs cursor-pointer active:scale-95 ${
                  copiedEmail
                    ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                    : 'bg-blue-600 text-white border-blue-500 hover:bg-blue-500'
                }`}
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>{contactSection.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>{contactSection.copyEmail}</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setResumePreviewOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 text-white border border-slate-700 hover:bg-slate-700 transition-all cursor-pointer active:scale-95"
              >
                <Eye className="w-4 h-4 text-emerald-400" />
                <span>{locale === 'en' ? 'Preview Resume' : 'ดูเรซูเม่'}</span>
              </button>

              <a
                href={`tel:${hero.phone.replace(/-/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-950 text-slate-200 border border-slate-800 hover:border-slate-600 transition-all tabular-nums active:scale-95"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{contactSection.callPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Minimalist Footer Bar */}
      <div className="border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-black/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
            <div className="w-5 h-5 rounded bg-slate-900 dark:bg-slate-800 text-emerald-400 flex items-center justify-center font-mono text-xs font-bold border border-slate-800 dark:border-slate-700">
              <Terminal className="w-3 h-3" />
            </div>
            <span className="font-semibold text-slate-800 dark:text-slate-200">{hero.name}</span>
            <span>•</span>
            <span>{hero.role}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs print:hidden">
            <a
              href={`${import.meta.env.BASE_URL}anupat-resume.pdf`}
              download="Anupat-Kaewmee-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{nav.downloadResume}</span>
            </a>

            <span className="text-slate-300 dark:text-slate-700">|</span>

            <div className="inline-flex items-center gap-1 font-mono" role="group" aria-label="Footer language switcher">
              <button
                type="button"
                onClick={() => setLocale('th')}
                aria-pressed={locale === 'th'}
                className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                  locale === 'th'
                    ? 'bg-blue-50 dark:bg-blue-950 text-blue-950 dark:text-blue-300 font-semibold border border-blue-200 dark:border-blue-900'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                TH
              </button>
              <button
                type="button"
                onClick={() => setLocale('en')}
                aria-pressed={locale === 'en'}
                className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                  locale === 'en'
                    ? 'bg-blue-50 dark:bg-blue-950 text-blue-950 dark:text-blue-300 font-semibold border border-blue-200 dark:border-blue-900'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            <span className="text-slate-300 dark:text-slate-700">|</span>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
