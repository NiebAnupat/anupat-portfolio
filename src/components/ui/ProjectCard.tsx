import React from 'react';
import {
  Briefcase,
  Network,
  AlertCircle,
  Wrench,
  CheckCircle2,
  Sparkles,
  Code2,
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
  const { locale } = useLanguage();
  const isBusiness = lens === 'business';

  return (
    <article
      className={`group bg-white rounded-xl border border-slate-200 hover:border-blue-500/40 transition-all shadow-[0_1px_3px_0_rgba(15,23,42,0.03),0_1px_2px_-1px_rgba(15,23,42,0.03)] flex flex-col justify-between overflow-hidden ${className}`}
    >
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Card Header: Category Badge, Featured Tag & Individual Dual-Lens Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 mb-4 border-b border-slate-200/80">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-slate-100/80 text-slate-700 border border-slate-200">
              {project.categoryLabel}
            </span>
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-blue-50 text-blue-600 border border-blue-200">
                <Sparkles className="w-3 h-3" />
                <span>{locale === 'en' ? 'Flagship System' : 'ระบบหลัก'}</span>
              </span>
            )}
          </div>

          {/* Individual Card Lens Switcher */}
          <div
            role="group"
            aria-label={`View mode for ${project.title}`}
            className="inline-flex items-center p-0.5 rounded-lg bg-slate-100/90 border border-slate-200"
          >
            <button
              type="button"
              onClick={() => onToggleLens('business')}
              aria-pressed={isBusiness}
              title={labels.businessModeLabel}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                isBusiness
                  ? 'bg-white text-blue-600 shadow-xs border border-slate-200/80 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 shrink-0" />
              <span>{locale === 'en' ? 'Business' : 'ธุรกิจ'}</span>
            </button>

            <button
              type="button"
              onClick={() => onToggleLens('architecture')}
              aria-pressed={!isBusiness}
              title={labels.archModeLabel}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                !isBusiness
                  ? 'bg-white text-indigo-600 shadow-xs border border-slate-200/80 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Network className="w-3.5 h-3.5 shrink-0" />
              <span>{locale === 'en' ? 'Architecture' : 'สถาปัตยกรรม'}</span>
            </button>
          </div>
        </div>

        {/* Project Title, Subtitle & Tech Stack Pills */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
              {project.subtitle}
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap items-center gap-1.5 sm:justify-end shrink-0">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-slate-100/80 text-slate-800 border border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Dual-Lens Content Body */}
        {isBusiness ? (
          /* Mode A: Business Impact View (HR / Management Lens) */
          <div className="flex-1 flex flex-col justify-between space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Problem / Context */}
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>{labels.problemLabel}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {project.businessLens.problem}
                </p>
              </div>

              {/* Implemented Solution */}
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  <Wrench className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{labels.solutionLabel}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {project.businessLens.solution}
                </p>
              </div>
            </div>

            {/* Key Impact Callout Box (emerald-700 with bg-emerald-50 and border-emerald-200) */}
            <div className="p-3.5 sm:p-4 rounded-lg bg-emerald-50 border border-emerald-200">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-mono font-semibold uppercase tracking-wider text-emerald-700 mb-0.5">
                    {labels.impactLabel}
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-emerald-700 leading-relaxed">
                    {project.businessLens.impact}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Mode B: System Architecture View (Tech Lead / Engineering Lens) */
          <div className="flex-1 flex flex-col justify-between space-y-4">
            {/* Architectural Overview (tinted deep indigo text on indigo-50 surface) */}
            <div className="px-3.5 py-2.5 rounded-lg bg-indigo-50/60 border border-indigo-200/80 flex items-start gap-2.5">
              <Code2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-indigo-950 leading-relaxed">
                {project.architectureLens.overview}
              </p>
            </div>

            {/* Interactive Visual Flow Diagram */}
            <ArchitectureDiagram
              nodes={project.architectureLens.nodes}
              label={labels.archFlowLabel}
            />

            {/* Engineering Responsibilities / Highlights */}
            <div className="pt-1">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 mb-2">
                {labels.highlightsLabel}
              </h4>
              <ul className="space-y-1.5">
                {project.architectureLens.engineeringHighlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-slate-700"
                  >
                    <span className="font-mono text-indigo-600 font-bold select-none mt-0.5">
                      •
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
