import React from 'react';
import {
  Briefcase,
  Network,
  AlertCircle,
  Wrench,
  CheckCircle2,
  Sparkles,
  Code2,
  FolderGit2,
} from 'lucide-react';
import { ProjectItem, ProjectLens } from '../../types/portfolio';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectCardProps {
  project: ProjectItem;
  lens: ProjectLens;
  onToggleLens: (newLens: ProjectLens) => void;
  labels: {
    problemLabel: string;
    solutionLabel: string;
    impactLabel: string;
    archFlowLabel: string;
    highlightsLabel: string;
    businessModeLabel: string;
    archModeLabel: string;
  };
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  lens,
  onToggleLens,
  labels,
  className = '',
}) => {
  const { locale, selectedSkillFilter, setSelectedSkillFilter } = useLanguage();
  const isBusiness = lens === 'business';
  const isFlagship = Boolean(project.featured);

  const handleTechClick = (tech: string) => {
    setSelectedSkillFilter(selectedSkillFilter === tech ? null : tech);
  };

  const topAccentClass = !isBusiness
    ? 'bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-500'
    : project.category === 'customer'
      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500'
      : project.category === 'operations'
        ? 'bg-gradient-to-r from-blue-600 to-sky-500'
        : 'bg-gradient-to-r from-emerald-600 to-teal-500';

  return (
    <article
      id={`project-${project.id}`}
      className={`scroll-mt-24 group bg-white dark:bg-slate-900 rounded-2xl border transition-all duration-200 flex flex-col justify-between overflow-hidden ${
        isFlagship
          ? 'border-blue-300/90 dark:border-blue-500/40 hover:border-blue-500 shadow-[0_8px_28px_-6px_rgba(37,99,235,0.10)] dark:shadow-[0_8px_28px_-6px_rgba(37,99,235,0.25)] hover:shadow-[0_14px_34px_-6px_rgba(37,99,235,0.16)]'
          : 'border-slate-200/90 dark:border-slate-800 hover:border-blue-500/60 dark:hover:border-blue-500/50 shadow-[0_2px_10px_-2px_rgba(15,23,42,0.05)] dark:shadow-[0_2px_10px_-2px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_28px_-6px_rgba(15,23,42,0.10)]'
      } ${className}`}
    >
      {/* Top Semantic Accent Bar */}
      <div className={`h-1.5 w-full ${topAccentClass}`} />

      {/* Developer IDE Top Bar */}
      <div
        className={`px-4 py-2.5 border-b flex flex-wrap items-center justify-between gap-2 ${
          isFlagship
            ? 'bg-slate-900 dark:bg-slate-950 text-slate-200 border-slate-800'
            : 'bg-slate-100/90 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200/90 dark:border-slate-800'
        }`}
      >
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/85" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/85" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/85" />
          </div>
          <span className={isFlagship ? 'text-slate-600' : 'text-slate-300 dark:text-slate-600'}>|</span>
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-mono font-medium truncate ${
              isFlagship ? 'text-slate-200' : 'text-slate-700 dark:text-slate-300'
            }`}
          >
            <FolderGit2
              className={`w-3.5 h-3.5 shrink-0 ${
                isFlagship ? 'text-emerald-400' : 'text-blue-600 dark:text-blue-400'
              }`}
            />
            <span className="truncate">sys/{project.id}</span>
          </span>
          {isFlagship && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30 shrink-0">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>{locale === 'en' ? 'FLAGSHIP' : 'ระบบหลัก'}</span>
            </span>
          )}
        </div>

        {/* Individual Card Lens Switcher */}
        <div
          role="group"
          aria-label={`View mode for ${project.title}`}
          className={`inline-flex items-center p-0.5 rounded-lg border print:hidden ${
            isFlagship
              ? 'bg-slate-950 dark:bg-black/50 border-slate-800'
              : 'bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-700 shadow-2xs'
          }`}
        >
          <button
            type="button"
            onClick={() => onToggleLens('business')}
            aria-pressed={isBusiness}
            title={labels.businessModeLabel}
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono font-medium transition-all cursor-pointer active:scale-95 ${
              isBusiness
                ? 'bg-blue-600 text-white font-semibold shadow-2xs'
                : isFlagship
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Briefcase className="w-3 h-3 shrink-0" />
            <span>{locale === 'en' ? 'business' : 'ธุรกิจ'}</span>
          </button>

          <button
            type="button"
            onClick={() => onToggleLens('architecture')}
            aria-pressed={!isBusiness}
            title={labels.archModeLabel}
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono font-medium transition-all cursor-pointer active:scale-95 ${
              !isBusiness
                ? 'bg-indigo-600 text-white font-semibold shadow-2xs'
                : isFlagship
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Network className="w-3 h-3 shrink-0" />
            <span>{locale === 'en' ? 'arch' : 'สถาปัตยกรรม'}</span>
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        {/* Project Title, Subtitle & Interactive Tech Stack Pills */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2.5 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                {project.categoryLabel}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 sm:justify-end shrink-0">
            {project.techStack.map((tech) => {
              const isSelectedTech =
                selectedSkillFilter &&
                tech.toLowerCase().includes(selectedSkillFilter.toLowerCase());
              return (
                <button
                  key={tech}
                  type="button"
                  onClick={() => handleTechClick(tech)}
                  title={
                    locale === 'en'
                      ? `Filter projects by ${tech}`
                      : `กรองระบบที่ใช้ ${tech}`
                  }
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold border transition-all cursor-pointer active:scale-95 ${
                    isSelectedTech
                      ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                      : 'bg-slate-900 dark:bg-slate-800 text-slate-100 dark:text-slate-200 border-slate-800 dark:border-slate-700 hover:bg-blue-600 dark:hover:bg-blue-600 hover:border-blue-600'
                  }`}
                >
                  {tech}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dual-Lens Content Body */}
        {isBusiness ? (
          /* Mode A: Business Impact View */
          <div className="flex-1 flex flex-col justify-between space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-750 border-l-4 border-l-slate-400 dark:border-l-slate-500">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                  <AlertCircle className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 shrink-0" />
                  <span>{labels.problemLabel}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-snug">
                  {project.businessLens.problem}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50/50 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 border-l-4 border-l-blue-600 dark:border-l-blue-500">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-blue-950 dark:text-blue-300 uppercase tracking-wider mb-1">
                  <Wrench className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{labels.solutionLabel}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-snug">
                  {project.businessLens.solution}
                </p>
              </div>
            </div>

            {/* Key Impact Callout Bar */}
            <div className="px-3.5 py-2.5 rounded-xl bg-emerald-50/90 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 border-l-4 border-l-emerald-600 dark:border-l-emerald-500 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-medium text-emerald-800 dark:text-emerald-300 leading-snug">
                <span className="font-mono font-bold uppercase mr-1.5">
                  {labels.impactLabel}:
                </span>
                {project.businessLens.impact}
              </p>
            </div>
          </div>
        ) : (
          /* Mode B: System Architecture View */
          <div className="flex-1 flex flex-col justify-between space-y-3">
            <div className="px-3.5 py-2.5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 border-l-4 border-l-indigo-600 dark:border-l-indigo-500 flex items-start gap-2">
              <Code2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 font-medium leading-snug">
                {project.architectureLens.overview}
              </p>
            </div>

            <ArchitectureDiagram
              nodes={project.architectureLens.nodes}
              label={labels.archFlowLabel}
            />

            <ul className="space-y-1.5 pt-0.5">
              {project.architectureLens.engineeringHighlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                >
                  <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold select-none">&gt;</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
};
