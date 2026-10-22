import React, { useState } from 'react';
import { Briefcase, Network, Layers, Filter } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { ProjectItem, ProjectLens } from '../../types/portfolio';
import { ProjectCard } from '../ui/ProjectCard';

type CategoryFilter = 'all' | ProjectItem['category'];

export const ProjectsSection: React.FC = () => {
  const { locale, data, globalLens, setGlobalLens } = useLanguage();
  const { projectsSection } = data;

  const [cardLensOverrides, setCardLensOverrides] = useState<Record<string, ProjectLens>>({});
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const handleGlobalLensChange = (nextLens: ProjectLens) => {
    setGlobalLens(nextLens);
    // Clear individual overrides so all cards sync to the newly chosen global perspective
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
      label: locale === 'en' ? 'All Systems' : 'ทุกระบบ',
      count: projectsSection.items.length,
    },
    {
      id: 'customer',
      label: locale === 'en' ? 'Customer Facing' : 'ระบบบริการลูกค้า',
      count: projectsSection.items.filter((i) => i.category === 'customer').length,
    },
    {
      id: 'operations',
      label: locale === 'en' ? 'Field Operations' : 'ปฏิบัติการภาคสนาม',
      count: projectsSection.items.filter((i) => i.category === 'operations').length,
    },
    {
      id: 'compliance',
      label: locale === 'en' ? 'Risk & Compliance' : 'ควบคุมมาตรฐาน & ความเสี่ยง',
      count: projectsSection.items.filter((i) => i.category === 'compliance').length,
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projectsSection.items
      : projectsSection.items.filter((item) => item.category === activeCategory);

  const getBentoSpanClass = (
    project: ProjectItem,
    index: number,
    totalCount: number,
    currentLens: ProjectLens
  ): string => {
    // Flagship systems (Customer Portal & Branch Service) or full-width architecture views
    if (activeCategory === 'all') {
      if (project.featured) {
        return 'md:col-span-2 lg:col-span-12';
      }
      // For the remaining 3 systems (Assessment Zebra, Assessment Branch, Underwrite Branch):
      // If a card is individually toggled into Architecture mode, or if it's the final 5th item, give it full width on md/lg
      if (currentLens === 'architecture' || index === totalCount - 1) {
        return 'md:col-span-2 lg:col-span-12';
      }
      return 'md:col-span-1 lg:col-span-6';
    }

    if (totalCount === 1 || currentLens === 'architecture') {
      return 'md:col-span-2 lg:col-span-12';
    }

    return 'md:col-span-1 lg:col-span-6';
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-24 border-b border-slate-200 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Global Dual-Lens Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>
                {locale === 'en'
                  ? 'Dual-Lens Interactive Showcase'
                  : 'ระบบแสดงผลแบบ Dual-Lens Interactive'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {projectsSection.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              {projectsSection.subtitle}
            </p>
          </div>

          {/* Global Lens Switcher Panel */}
          <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center gap-2.5 shrink-0">
            <span className="text-xs font-mono font-medium text-slate-500 px-1.5">
              {projectsSection.lensLabel}
            </span>
            <div
              role="group"
              aria-label={projectsSection.lensLabel}
              className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 bg-slate-100/80 p-1 rounded-lg border border-slate-200/80"
            >
              <button
                type="button"
                onClick={() => handleGlobalLensChange('business')}
                aria-pressed={
                  globalLens === 'business' && Object.keys(cardLensOverrides).length === 0
                }
                className={`inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  globalLens === 'business'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
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
                className={`inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  globalLens === 'architecture'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <Network className="w-3.5 h-3.5 shrink-0" />
                <span>{projectsSection.archModeLabel}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 mr-1">
            <Filter className="w-3.5 h-3.5" />
            <span>{locale === 'en' ? 'Filter:' : 'หมวดหมู่:'}</span>
          </div>
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`font-mono text-[11px] px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? 'bg-slate-800 text-slate-200'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bento Grid of Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
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
      </div>
    </section>
  );
};
