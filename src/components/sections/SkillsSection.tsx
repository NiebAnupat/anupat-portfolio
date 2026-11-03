import React from 'react';
import { Code2, Cpu, Wrench, Compass, Terminal } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const PRIMARY_PRODUCTION_SKILLS = new Set([
  'C#',
  'TypeScript',
  'JavaScript',
  'SQL',
  '.NET',
  'React',
  'Git',
]);

const PROJECT_LINKED_SKILLS = new Set([
  'C#',
  'TypeScript',
  'JavaScript',
  'SQL',
  '.NET',
  'React',
]);

export const SkillsSection: React.FC = () => {
  const { locale, data, selectedSkillFilter, setSelectedSkillFilter } = useLanguage();
  const { skillsSection } = data;
  const { categories } = skillsSection;

  const handleSkillSelect = (skill: string) => {
    if (!PROJECT_LINKED_SKILLS.has(skill)) return;
    const nextSkill = selectedSkillFilter === skill ? null : skill;
    setSelectedSkillFilter(nextSkill);
    if (nextSkill) {
      const projectsEl = document.getElementById('projects');
      if (projectsEl) {
        projectsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section
      id="skills"
      className="scroll-mt-20 py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#090d16] bg-dev-dots transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 mb-1">
              <Terminal className="w-3.5 h-3.5" />
              <span>05 // TECH_STACK.JSON</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {skillsSection.title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              {skillsSection.subtitle}
            </p>
          </div>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 print:hidden">
            {locale === 'en'
              ? 'Tip: Click a core skill to filter systems ↑'
              : 'คลิกที่สกิลหลักเพื่อกรองดูโปรเจกต์ที่ใช้ ↑'}
          </span>
        </div>

        {/* 4-Column Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Languages */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-[0_1px_3px_0_rgba(15,23,42,0.04)] dark:shadow-none flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {categories.languages.title}
                  </h3>
                </div>
                <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500">lang[]</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {categories.languages.items.map((skill) => {
                  const isCore = PRIMARY_PRODUCTION_SKILLS.has(skill);
                  const isLinked = PROJECT_LINKED_SKILLS.has(skill);
                  const isSelected = selectedSkillFilter === skill;

                  return (
                    <button
                      key={skill}
                      type="button"
                      disabled={!isLinked}
                      onClick={() => handleSkillSelect(skill)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono border transition-all ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-600 font-semibold shadow-2xs cursor-pointer active:scale-95'
                          : isCore
                            ? 'bg-blue-50/70 dark:bg-blue-950/60 text-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-900 font-semibold hover:border-blue-400 cursor-pointer active:scale-95'
                            : 'bg-slate-100/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 font-medium'
                      }`}
                    >
                      <span>{skill}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Card 2: Frameworks */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-[0_1px_3px_0_rgba(15,23,42,0.04)] dark:shadow-none flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {categories.frameworks.title}
                  </h3>
                </div>
                <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500">runtime[]</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {categories.frameworks.items.map((framework) => {
                  const isCore = PRIMARY_PRODUCTION_SKILLS.has(framework);
                  const isLinked = PROJECT_LINKED_SKILLS.has(framework);
                  const isSelected = selectedSkillFilter === framework;

                  return (
                    <button
                      key={framework}
                      type="button"
                      disabled={!isLinked}
                      onClick={() => handleSkillSelect(framework)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono border transition-all ${
                        isSelected
                          ? 'bg-indigo-600 text-white border-indigo-600 font-semibold shadow-2xs cursor-pointer active:scale-95'
                          : isCore
                            ? 'bg-indigo-50/70 dark:bg-indigo-950/60 text-indigo-950 dark:text-indigo-300 border-indigo-200 dark:border-indigo-900 font-semibold hover:border-indigo-400 cursor-pointer active:scale-95'
                            : 'bg-slate-100/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 font-medium'
                      }`}
                    >
                      <span>{framework}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Card 3: Tools & DevOps */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-[0_1px_3px_0_rgba(15,23,42,0.04)] dark:shadow-none flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-slate-700 dark:text-slate-300 shrink-0" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {categories.tools.title}
                  </h3>
                </div>
                <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500">ops[]</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {categories.tools.items.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-slate-100/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 4: Exploring Radar */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-[0_1px_3px_0_rgba(15,23,42,0.04)] dark:shadow-none flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {categories.interests.title}
                  </h3>
                </div>
                <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">next[]</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {categories.interests.items.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
