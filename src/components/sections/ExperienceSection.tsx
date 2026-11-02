import React, { useState } from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  GitCommitHorizontal,
  GitBranch,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const ExperienceSection: React.FC = () => {
  const { locale, data } = useLanguage();
  const { experienceSection, educationSection } = data;
  const [showAllCourses, setShowAllCourses] = useState(false);

  return (
    <section
      id="experience"
      className="scroll-mt-20 py-12 sm:py-16 border-b border-slate-200 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (7 cols): Git-Commit Style Work Experience Timeline */}
          <div className="lg:col-span-7">
            <div className="mb-5">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-600 mb-1">
                <GitBranch className="w-3.5 h-3.5" />
                <span>03 // GIT_LOG --EXPERIENCE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {experienceSection.title}
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                {experienceSection.subtitle}
              </p>
            </div>

            <div className="relative pl-6 sm:pl-7 before:content-[''] before:absolute before:left-[11px] before:top-3 before:bottom-3 before:w-[2px] before:bg-slate-200 space-y-4">
              {experienceSection.items.map((item, index) => {
                const isCurrent = index === 0;
                const commitHash = isCurrent ? 'HEAD -> main' : 'commit v2024.08';

                return (
                  <div key={item.id} className="relative">
                    {/* Git Commit Node Marker */}
                    <div
                      className={`absolute -left-6 sm:-left-7 top-1.5 w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors ${
                        isCurrent
                          ? 'bg-blue-600 border-blue-100 text-white shadow-xs'
                          : 'bg-white border-slate-300 text-slate-500'
                      }`}
                    >
                      <GitCommitHorizontal className="w-3.5 h-3.5" />
                    </div>

                    {/* Experience Card */}
                    <div
                      className={`rounded-xl border p-4 sm:p-5 transition-all shadow-[0_1px_2px_0_rgba(15,23,42,0.03)] ${
                        isCurrent
                          ? 'bg-slate-50/70 border-blue-200/90'
                          : 'bg-white border-slate-200'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-mono font-semibold border ${
                              isCurrent
                                ? 'bg-slate-900 text-emerald-400 border-slate-800'
                                : 'bg-slate-100 text-slate-600 border-slate-200'
                            }`}
                          >
                            {isCurrent && (
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            )}
                            <span>{commitHash}</span>
                          </span>
                          <span className="px-2 py-0.5 rounded text-xs font-mono font-semibold bg-blue-50 text-blue-950 border border-blue-200">
                            {item.type}
                          </span>
                        </div>

                        <div className="inline-flex items-center gap-1 text-xs font-mono text-slate-600 tabular-nums">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                        {item.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium text-slate-600 mt-0.5 mb-3">
                        <span className="text-slate-800 font-semibold">{item.company}</span>
                        <span className="text-slate-300">•</span>
                        <span className="inline-flex items-center gap-1 text-slate-600">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>

                      <ul className="space-y-1.5 pt-2.5 border-t border-slate-200/80">
                        {item.highlights.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 leading-snug"
                          >
                            <CheckCircle2
                              className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                                isCurrent ? 'text-blue-600' : 'text-slate-500'
                              }`}
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column (5 cols): Education & Academic Excellence Card */}
          <div id="education" className="lg:col-span-5 scroll-mt-24">
            <div className="mb-5">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-indigo-600 mb-1">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>04 // ACADEMIC_CREDENTIALS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {educationSection.title}
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                {locale === 'en'
                  ? 'Academic standing & computer science foundation.'
                  : 'วุฒิการศึกษาและผลการเรียน'}
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 sm:p-5 shadow-[0_1px_2px_0_rgba(15,23,42,0.03)]">
              <div className="flex items-start justify-between gap-3 pb-3 mb-3 border-b border-slate-200">
                <div>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-600 mb-0.5 tabular-nums">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{educationSection.graduationDate}</span>
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    {educationSection.university}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-700 mt-0.5">
                    {educationSection.degree}
                  </p>
                </div>

                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-600 shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
              </div>

              {/* First Class Honors & GPA Highlight Box */}
              <div className="grid grid-cols-2 gap-2.5 p-3 rounded-lg bg-emerald-50 border border-emerald-200 mb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 block">
                    {locale === 'en' ? 'Honors' : 'เกียรตินิยม'}
                  </span>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Award className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-emerald-700">
                      {educationSection.honors}
                    </span>
                  </div>
                </div>

                <div className="border-l border-emerald-200/80 pl-2.5 tabular-nums">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 block">
                    GPA
                  </span>
                  <span className="font-mono text-lg sm:text-xl font-bold text-emerald-700">
                    {educationSection.gpa}
                  </span>
                  <span className="text-xs font-mono text-emerald-700"> / 4.00</span>
                </div>
              </div>

              {/* Compact Coursework */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-slate-700">
                    <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                    <span>{educationSection.courseworkLabel}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowAllCourses((prev) => !prev)}
                    aria-expanded={showAllCourses}
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
                  >
                    <span>
                      {showAllCourses
                        ? locale === 'en'
                          ? 'Show Less'
                          : 'ย่อ'
                        : locale === 'en'
                          ? `All (${educationSection.coursework.length})`
                          : `ทั้งหมด (${educationSection.coursework.length})`}
                    </span>
                    {showAllCourses ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {(showAllCourses
                    ? educationSection.coursework
                    : educationSection.coursework.slice(0, 5)
                  ).map((course) => (
                    <span
                      key={course}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-white text-slate-700 border border-slate-200"
                    >
                      {course}
                    </span>
                  ))}
                  {!showAllCourses && educationSection.coursework.length > 5 && (
                    <button
                      type="button"
                      onClick={() => setShowAllCourses(true)}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-semibold bg-blue-50 text-blue-950 border border-blue-200 hover:bg-blue-100/70 transition-colors cursor-pointer tabular-nums"
                    >
                      +{educationSection.coursework.length - 5}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
