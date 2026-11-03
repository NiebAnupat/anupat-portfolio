import React, { useEffect } from 'react';
import { Download, ExternalLink, X, FileText } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const ResumeModal: React.FC = () => {
  const { locale, resumePreviewOpen, setResumePreviewOpen } = useLanguage();

  useEffect(() => {
    if (!resumePreviewOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setResumePreviewOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [resumePreviewOpen, setResumePreviewOpen]);

  if (!resumePreviewOpen) return null;

  const pdfUrl = `${import.meta.env.BASE_URL}anupat-resume.pdf`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 dark:bg-black/80 backdrop-blur-xs print:hidden"
      onClick={() => setResumePreviewOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Resume PDF Preview"
    >
      <div
        className="w-full max-w-4xl h-[85vh] bg-slate-900 dark:bg-slate-950 rounded-2xl border border-slate-700 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* IDE Style Top Bar */}
        <div className="px-4 py-2.5 bg-slate-950 dark:bg-black/60 border-b border-slate-800 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-slate-600">|</span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-200 truncate">
              <FileText className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">anupat-resume.pdf</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{locale === 'en' ? 'Open Tab' : 'เปิดแท็บใหม่'}</span>
            </a>

            <a
              href={pdfUrl}
              download="Anupat-Kaewmee-Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors active:scale-95 shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{locale === 'en' ? 'Download' : 'ดาวน์โหลด'}</span>
            </a>

            <button
              type="button"
              onClick={() => setResumePreviewOpen(false)}
              aria-label="Close resume preview"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 bg-slate-800 dark:bg-slate-900">
          <iframe
            src={pdfUrl}
            title="Anupat Kaewmee Resume PDF"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};
