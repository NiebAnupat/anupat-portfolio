import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Search,
  Terminal,
  Briefcase,
  Network,
  FileText,
  Download,
  Copy,
  Globe,
  FolderGit2,
  CornerDownLeft,
  Check,
  X,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface CommandAction {
  id: string;
  group: string;
  label: string;
  hint?: string;
  icon: React.ReactNode;
  onSelect: () => void;
}

export const CommandPalette: React.FC = () => {
  const {
    locale,
    toggleLocale,
    data,
    setGlobalLens,
    setSelectedSkillFilter,
    commandPaletteOpen,
    setCommandPaletteOpen,
    setResumePreviewOpen,
  } = useLanguage();

  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const closePalette = () => {
    setCommandPaletteOpen(false);
    setQuery('');
  };

  const scrollToElement = (selector: string) => {
    closePalette();
    setTimeout(() => {
      const el = document.querySelector(selector);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  const copyText = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = document.createElement('textarea');
      area.value = text;
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      document.body.removeChild(area);
    }
    setToastMessage(label);
    setTimeout(() => {
      setToastMessage(null);
      closePalette();
    }, 900);
  };

  const actions = useMemo<CommandAction[]>(() => {
    const isEn = locale === 'en';
    const quickGroup = isEn ? 'Quick Actions' : 'คำสั่งด่วน';
    const lensGroup = isEn ? 'Architecture & Lens' : 'สลับมุมมองระบบ';
    const projectsGroup = isEn ? 'Jump to System' : 'ไปยังระบบงาน';

    const list: CommandAction[] = [
      {
        id: 'preview-resume',
        group: quickGroup,
        label: isEn ? 'Preview Resume PDF (In-Browser)' : 'เปิดดูเรซูเม่ PDF บนหน้าเว็บ',
        hint: 'anupat-resume.pdf',
        icon: <FileText className="w-4 h-4 text-emerald-600" />,
        onSelect: () => {
          closePalette();
          setResumePreviewOpen(true);
        },
      },
      {
        id: 'download-resume',
        group: quickGroup,
        label: isEn ? 'Download Resume PDF' : 'ดาวน์โหลดไฟล์เรซูเม่ PDF',
        hint: '.pdf',
        icon: <Download className="w-4 h-4 text-blue-600" />,
        onSelect: () => {
          const link = document.createElement('a');
          link.href = `${import.meta.env.BASE_URL}anupat-resume.pdf`;
          link.download = 'Anupat-Kaewmee-Resume.pdf';
          link.click();
          closePalette();
        },
      },
      {
        id: 'copy-email',
        group: quickGroup,
        label: isEn ? 'Copy Email Address' : 'คัดลอกอีเมล (anupat.kae@gmail.com)',
        hint: data.hero.email,
        icon: <Copy className="w-4 h-4 text-blue-600" />,
        onSelect: () =>
          copyText(
            data.hero.email,
            isEn ? 'Copied email to clipboard!' : 'คัดลอกอีเมลเรียบร้อยแล้ว!'
          ),
      },
      {
        id: 'toggle-lang',
        group: quickGroup,
        label: isEn ? 'Switch Language to Thai (ภาษาไทย)' : 'เปลี่ยนภาษาเป็น English (EN)',
        hint: isEn ? 'TH' : 'EN',
        icon: <Globe className="w-4 h-4 text-blue-600" />,
        onSelect: () => {
          toggleLocale();
          closePalette();
        },
      },
      {
        id: 'lens-arch',
        group: lensGroup,
        label: isEn
          ? 'Switch All Projects to System Architecture View'
          : 'สลับทุกระบบเป็นมุมมองสถาปัตยกรรม (Tech Lead)',
        hint: 'Architecture',
        icon: <Network className="w-4 h-4 text-indigo-600" />,
        onSelect: () => {
          setGlobalLens('architecture');
          scrollToElement('#projects');
        },
      },
      {
        id: 'lens-business',
        group: lensGroup,
        label: isEn
          ? 'Switch All Projects to Business Impact View'
          : 'สลับทุกระบบเป็นมุมมองผลลัพธ์ธุรกิจ (HR)',
        hint: 'Business',
        icon: <Briefcase className="w-4 h-4 text-blue-600" />,
        onSelect: () => {
          setGlobalLens('business');
          scrollToElement('#projects');
        },
      },
    ];

    data.projectsSection.items.forEach((proj) => {
      list.push({
        id: `proj-${proj.id}`,
        group: projectsGroup,
        label: `${proj.title} — ${proj.subtitle}`,
        hint: `sys/${proj.id}`,
        icon: <FolderGit2 className="w-4 h-4 text-indigo-600" />,
        onSelect: () => {
          setSelectedSkillFilter(null);
          scrollToElement(`#project-${proj.id}`);
        },
      });
    });

    return list;
  }, [locale, data, setGlobalLens, setSelectedSkillFilter, setResumePreviewOpen, toggleLocale]);

  const filteredActions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q) ||
        (item.hint && item.hint.toLowerCase().includes(q))
    );
  }, [actions, query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query, commandPaletteOpen]);

  useEffect(() => {
    if (commandPaletteOpen) {
      setTimeout(() => inputRef.current?.focus(), 20);
    }
  }, [commandPaletteOpen]);

  useEffect(() => {
    if (!commandPaletteOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closePalette();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) =>
          filteredActions.length > 0 ? (prev + 1) % filteredActions.length : 0
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) =>
          filteredActions.length > 0
            ? (prev - 1 + filteredActions.length) % filteredActions.length
            : 0
        );
      } else if (e.key === 'Enter' && filteredActions[activeIndex]) {
        e.preventDefault();
        filteredActions[activeIndex].onSelect();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [commandPaletteOpen, filteredActions, activeIndex]);

  if (!commandPaletteOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/50 backdrop-blur-xs print:hidden"
      onClick={closePalette}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div
        className="w-full max-w-xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200 bg-slate-50/70">
          <Search className="w-4 h-4 text-blue-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              locale === 'en'
                ? 'Type a command or search projects... (e.g. architecture, resume, LIFF)'
                : 'พิมพ์คำสั่งหรือค้นหาระบบ... (เช่น สถาปัตยกรรม, เรซูเม่, LIFF)'
            }
            className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={closePalette}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 cursor-pointer"
            aria-label="Close command palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Toast confirmation banner if copy triggered */}
        {toastMessage && (
          <div className="px-4 py-2 bg-emerald-50 border-b border-emerald-200 flex items-center gap-2 text-xs font-mono font-semibold text-emerald-700">
            <Check className="w-4 h-4" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Action List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredActions.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-slate-500">
              {locale === 'en' ? 'No matching commands found.' : 'ไม่พบคำสั่งที่ค้นหา'}
            </div>
          ) : (
            filteredActions.map((action, index) => {
              const isSelected = index === activeIndex;
              return (
                <button
                  key={action.id}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={action.onSelect}
                  className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-left text-xs sm:text-sm transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50/90 text-blue-950 font-semibold border border-blue-200/80'
                      : 'text-slate-700 hover:bg-slate-100/70 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="shrink-0">{action.icon}</span>
                    <span className="truncate">{action.label}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {action.hint && (
                      <span className="hidden sm:inline-block font-mono text-[11px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                        {action.hint}
                      </span>
                    )}
                    {isSelected && <CornerDownLeft className="w-3.5 h-3.5 text-blue-600" />}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer Keyboard Hints */}
        <div className="px-4 py-2 bg-slate-900 text-slate-300 flex items-center justify-between text-[11px] font-mono">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>COMMAND_PALETTE</span>
          </div>
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
        </div>
      </div>
    </div>
  );
};

