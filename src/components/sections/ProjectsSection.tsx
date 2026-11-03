import React from 'react';
import { Briefcase, Network, Filter, Terminal, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { ProjectItem, ProjectLens } from '../../types/portfolio';
import { ProjectCard } from '../ui/ProjectCard';

type CategoryFilter = 'all' | ProjectItem['category'];

const matchesSkillFilter = (project: ProjectItem, skillFilter: string | null): boolean => {
  if (!skillFilter) return true;
  const normalized = skillFilter.toLowerCase();
  return project.techStack.some((tech) => {
    const t = tech.toLowerCase();
    if (normalized === 'c#' || normalized === '.net') {
      return t.includes('c#') || t.includes('.net');
    }
    if (normalized === 'javascript' || normalized === 'typescript') {
      return t.includes('typescript') || t.includes('react') || t.includes('liff');
    }
    return t.includes(normalized) || normalized.includes(t);
  });
};

export const ProjectsSection: React.FC = () => {
  const {
    locale,
    data,
    globalLens,
    setGlobalLens,
    selectedSkillFilter,
    setSelectedSkillFilter,
  } = useLanguage();
  const { projectsSection } = data;

  const [cardLensOverrides, setCardLensOverrides] = React.useState<Record<string, ProjectLens>>({});
  const [activeCategory, setActiveCategory] = React.useState<CategoryFilter>('all');

  const handleGlobalLensChange = (nextLens: ProjectLens) => {
    setGlobalLens(nextLens);
    setCardLensOverrides({});
  };

  const handleCardLensToggle = (projectId: string, nextLens: ProjectLens) => {
    setCardLensOverrides((prev) => ({
      ...prev,
      [projectId]: nextLens,
    }));
  };

  const categories: { id: CategoryFilter; label: string; count: number }[] = [
    {
      id: 'all',
      label: locale === 'en' ? 'all_systems' : 'ทั้งหมด',
      count: projectsSection.items.length,
    },
    {
      id: 'customer',
      label: locale === 'en' ? 'customer_portal' : 'บริการลูกค้า',
      count: projectsSection.items.filter((i) => i.category === 'customer').length,
    },
    {
      id: 'operations',
      label: locale === 'en' ? 'field_ops' : 'ภาคสนาม',
      count: projectsSection.items.filter((i) => i.category === 'operations').length,
    },
    {
      id: 'compliance',
      label: locale === 'en' ? 'compliance_risk' : 'มาตรฐาน & ความเสี่ยง',
      count: projectsSection.items.filter((i) => i.category === 'compliance').length,
    },
  ];

  const filteredProjects = projectsSection.items.filter((item) => {
    const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
    const skillMatch = matchesSkillFilter(item, selectedSkillFilter);
    return categoryMatch && skillMatch;
  });

  const getBentoSpanClass = (
    project: ProjectItem,
    index: number,
    totalCount: number,
    currentLens: ProjectLens
  ): string => {
    if (totalCount === 1 || currentLens === 'architecture') {
      return 'md:col-span-2 lg:col-span-12';
    }
    if (activeCategory === 'all' && !selectedSkillFilter) {
      if (project.id === 'customer-portal' || index === totalCount - 1) {
        return 'md:col-span-2 lg:col-span-12';
      }
    }
    return 'md:col-span-1 lg:col-span-6';
  };

  return (
    <section
      id="projects"
      className="scroll-mt-20 py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#090d16] transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Global Lens Switcher Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 mb-1">
              <Terminal className="w-3.5 h-3.5" />
              <span>02 // PRODUCTION_SYSTEMS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {projectsSection.title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-[60ch]">
              {projectsSection.subtitle}
            </p>
          </div>

          {/* Global Lens Switcher Panel */}
          <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs self-start lg:self-auto shrink-0 print:hidden">
            <span className="text-xs font-mono font-medium text-slate-600 dark:text-slate-400 pl-2">
              {projectsSection.lensLabel}
            </span>
            <div
              role="group"
              aria-label={projectsSection.lensLabel}
              className="inline-flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/80 p-1 rounded-lg border border-slate-200/80 dark:border-slate-700/80"
            >
              <button
                type="button"
                onClick={() => handleGlobalLensChange('business')}
                aria-pressed={
                  globalLens === 'business' && Object.keys(cardLensOverrides).length === 0
                }
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-semibold transition-all cursor-pointer active:scale-95 ${
                  globalLens === 'business' && Object.keys(cardLensOverrides).length === 0
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5 shrink-0" />
                <span>{projectsSection.businessModeLabel}</span>
              </button>

              <button
                type="button"
                onClick={() => handleGlobalLensChange('architecture')}
                aria-pressed={
                  globalLens === 'architecture' && Object.keys(cardLensOverrides).length === 0
                }
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-semibold transition-all cursor-pointer active:scale-95 ${
                  globalLens === 'architecture' && Object.keys(cardLensOverrides).length === 0
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60'
                }`}
              >
                <Network className="w-3.5 h-3.5 shrink-0" />
                <span>{projectsSection.archModeLabel}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills + Active Skill Filter Badge */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6 print:hidden">
          <div className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400 mr-1">
            <Filter className="w-3.5 h-3.5" />
          </div>
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium transition-all cursor-pointer active:scale-95 ${
                  isActive
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold shadow-xs'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`font-mono text-xs px-1.5 rounded-full tabular-nums ${
                    isActive
                      ? 'bg-slate-800 dark:bg-slate-200 text-emerald-400 dark:text-emerald-700 font-bold'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}

          {selectedSkillFilter && (
            <button
              type="button"
              onClick={() => setSelectedSkillFilter(null)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-600 text-white shadow-xs hover:bg-blue-700 transition-colors cursor-pointer ml-1 active:scale-95"
            >
              <span>tech: {selectedSkillFilter}</span>
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Bento Grid of Project Cards */}
        {filteredProjects.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 sm:p-12 text-center shadow-xs">
            <p className="text-sm font-mono text-slate-600 dark:text-slate-400 mb-4">
              {locale === 'en'
                ? `No production systems directly tagged with "${selectedSkillFilter}".`
                : `ไม่พบระบบที่ติดป้ายกำกับ "${selectedSkillFilter}" โดยตรง`}
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedSkillFilter(null);
                setActiveCategory('all');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-slate-900 dark:bg-blue-600 text-white hover:bg-slate-800 dark:hover:bg-blue-500 cursor-pointer transition-all active:scale-95 shadow-xs"
            >
              <span>{locale === 'en' ? 'Reset Filters' : 'ล้างตัวกรอง'}</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
            {filteredProjects.map((project, index) => {
              const effectiveLens = cardLensOverrides[project.id] ?? globalLens;
              const spanClass = getBentoSpanClass(
                project,
                index,
                filteredProjects.length,
                effectiveLens
              );

              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  lens={effectiveLens}
                  onToggleLens={(newLens) => handleCardLensToggle(project.id, newLens)}
                  labels={{
                    problemLabel: projectsSection.problemLabel,
                    solutionLabel: projectsSection.solutionLabel,
                    impactLabel: projectsSection.impactLabel,
                    archFlowLabel: projectsSection.archFlowLabel,
                    highlightsLabel: projectsSection.highlightsLabel,
                    businessModeLabel: projectsSection.businessModeLabel,
                    archModeLabel: projectsSection.archModeLabel,
                  }}
                  className={spanClass}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
