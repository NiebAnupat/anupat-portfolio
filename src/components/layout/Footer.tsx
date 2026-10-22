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
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { locale, setLocale, data } = useLanguage();
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

  return (
    <footer id="contact" className="bg-white border-t border-slate-200">
      {/* Upper Contact Call-to-Action Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-10 shadow-[0_1px_3px_0_rgba(15,23,42,0.03),0_1px_2px_-1px_rgba(15,23,42,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-medium text-blue-600 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>{nav.contact}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {contactSection.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl leading-relaxed">
                {contactSection.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-5 text-xs sm:text-sm text-slate-600">
                <span className="inline-flex items-center gap-1.5 font-mono">
                  <Mail className="w-4 h-4 text-blue-600" />
                  {hero.email}
                </span>
                <span className="text-slate-300">•</span>
                <span className="inline-flex items-center gap-1.5 font-mono">
                  <Phone className="w-4 h-4 text-blue-600" />
                  {hero.phone}
                </span>
                <span className="text-slate-300">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  {hero.location}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center lg:items-stretch xl:items-center justify-end gap-3">
              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold border transition-all shadow-xs cursor-pointer ${
                  copiedEmail
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
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

              {/* Call Phone Link */}
              <a
                href={`tel:${hero.phone.replace(/-/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-white text-slate-700 border border-slate-300 hover:bg-slate-100/70 hover:border-slate-400 transition-all shadow-xs"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>{contactSection.callPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Minimalist Footer Bar */}
      <div className="border-t border-slate-200/80 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand & Copyright */}
          <div className="flex items-center gap-2.5 text-xs text-slate-500">
            <div className="w-6 h-6 rounded-md bg-slate-900 text-white flex items-center justify-center font-mono text-[10px] font-bold">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold text-slate-800">{hero.name}</span>
            <span>•</span>
            <span>{hero.role}</span>
          </div>

          {/* Quick Links, Language Toggle & Scroll to Top */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <a
              href={`${import.meta.env.BASE_URL}anupat-resume.pdf`}
              download="Anupat-Kaewmee-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{nav.downloadResume}</span>
            </a>

            <span className="text-slate-300">|</span>

            <div className="inline-flex items-center gap-1 font-mono">
              <button
                type="button"
                onClick={() => setLocale('th')}
                className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                  locale === 'th'
                    ? 'bg-blue-50 text-blue-600 font-semibold border border-blue-200'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                ภาษาไทย (TH)
              </button>
              <button
                type="button"
                onClick={() => setLocale('en')}
                className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                  locale === 'en'
                    ? 'bg-blue-50 text-blue-600 font-semibold border border-blue-200'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                English (EN)
              </button>
            </div>

            <span className="text-slate-300">|</span>

            <a
              href="#about"
              aria-label="Back to top"
              className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-900 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

