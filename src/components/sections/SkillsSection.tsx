import React from 'react';
import {
  Code2,
  Cpu,
  Wrench,
  Compass,
  Terminal,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
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

export const SkillsSection: React.FC = () => {
  const { locale, data } = useLanguage();
  const { skillsSection } = data;
  const { categories } = skillsSection;

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-24 border-b border-slate-200 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold mb-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>{locale === 'en' ? 'Technical Stack & Radar' : 'ทักษะและเครื่องมือทางเทคนิค'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {skillsSection.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            {skillsSection.subtitle}
          </p>
        </div>

        {/* 4-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Card 1: Programming Languages (lg:col-span-6) */}
          <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200 hover:border-blue-500/40 p-5 sm:p-6 transition-all shadow-[0_1px_3px_0_rgba(15,23,42,0.03),0_1px_2px_-1px_rgba(15,23,42,0.03)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 pb-3.5 mb-4 border-b border-slate-200/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {categories.languages.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  01 / {categories.languages.items.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {categories.languages.items.map((skill) => {
                  const isCore = PRIMARY_PRODUCTION_SKILLS.has(skill);
                  return (
                    <div
                      key={skill}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-mono font-medium border transition-colors ${
                        isCore
                          ? 'bg-blue-50/70 text-slate-900 border-blue-200'
                          : 'bg-slate-100/80 text-slate-700 border-slate-200'
                      }`}
                    >
                      <span>{skill}</span>
                      {isCore && (
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" title="Core Production" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>
                {locale === 'en'
                  ? 'Primary enterprise production languages: C#, TypeScript, JavaScript, SQL'
                  : 'ภาษาหลักที่ใช้พัฒนาระบบองค์กรจริง: C#, TypeScript, JavaScript, SQL'}
              </span>
            </div>
          </div>

          {/* Card 2: Frameworks & Runtimes (lg:col-span-6) */}
          <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200 hover:border-blue-500/40 p-5 sm:p-6 transition-all shadow-[0_1px_3px_0_rgba(15,23,42,0.03),0_1px_2px_-1px_rgba(15,23,42,0.03)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 pb-3.5 mb-4 border-b border-slate-200/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50/60 border border-indigo-200 flex items-center justify-center text-indigo-600">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {categories.frameworks.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  02 / {categories.frameworks.items.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {categories.frameworks.items.map((framework) => {
                  const isCore = PRIMARY_PRODUCTION_SKILLS.has(framework);
                  return (
                    <div
                      key={framework}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-mono font-medium border transition-colors ${
                        isCore
                          ? 'bg-indigo-50/60 text-indigo-600 font-semibold border-indigo-200'
                          : 'bg-slate-100/80 text-slate-700 border-slate-200'
                      }`}
                    >
                      <span>{framework}</span>
                      {isCore && (
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.2 rounded bg-white text-indigo-600 border border-indigo-200/80">
                          Core
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
              <span>
                {locale === 'en'
                  ? 'Full-stack versatility across .NET backend ecosystems and modern React/Node.js frameworks'
                  : 'ครอบคลุมทั้งสถาปัตยกรรม .NET ฝั่ง Backend และเฟรมเวิร์กตระกูล React / Node.js'}
              </span>
            </div>
          </div>

          {/* Card 3: DevOps & Tools (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 hover:border-blue-500/40 p-5 sm:p-6 transition-all shadow-[0_1px_3px_0_rgba(15,23,42,0.03),0_1px_2px_-1px_rgba(15,23,42,0.03)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 pb-3.5 mb-4 border-b border-slate-200/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-100/80 border border-slate-200 flex items-center justify-center text-slate-700">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {categories.tools.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  03 / {categories.tools.items.length}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {categories.tools.items.map((tool) => (
                  <div
                    key={tool}
                    className="p-3.5 rounded-lg bg-slate-100/80 border border-slate-200 flex items-center justify-between"
                  >
                    <span className="font-mono text-sm font-semibold text-slate-900">{tool}</span>
                    <span className="text-[11px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {tool === 'Git'
                        ? locale === 'en'
                          ? 'Version Control'
                          : 'จัดการเวอร์ชัน'
                        : locale === 'en'
                          ? 'Containers'
                          : 'คอนเทนเนอร์'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 text-xs text-slate-500">
              {locale === 'en'
                ? 'Collaborative version control & containerized development environments.'
                : 'รองรับการทำงานร่วมกันเป็นทีมและการจำลองสภาพแวดล้อมด้วย Container'}
            </div>
          </div>

          {/* Card 4: Engineering Interests & Exploring Radar (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 hover:border-emerald-500/40 p-5 sm:p-6 transition-all shadow-[0_1px_3px_0_rgba(15,23,42,0.03),0_1px_2px_-1px_rgba(15,23,42,0.03)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 pb-3.5 mb-3 border-b border-slate-200/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {categories.interests.title}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <Sparkles className="w-3 h-3" />
                  <span>Radar</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                {categories.interests.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categories.interests.items.map((interest, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-emerald-50/60 border border-emerald-200/90 flex items-start gap-2.5"
                  >
                    <span className="font-mono text-xs font-bold text-emerald-700 bg-white border border-emerald-200 px-1.5 py-0.5 rounded shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-emerald-700 leading-snug">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

