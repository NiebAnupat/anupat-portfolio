import React, { useState } from 'react';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const ExperienceSection: React.FC = () => {
  const { locale, data } = useLanguage();
  const { experienceSection, educationSection } = data;
  const [showAllCourses, setShowAllCourses] = useState(true);

  return (
    <section
      id="experience"
      className="py-16 sm:py-20 lg:py-24 border-b border-slate-200 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Side-by-Side Dual Timeline Layout (lg:grid-cols-12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column (7 cols): Work Experience Timeline */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {experienceSection.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1.5 max-w-[65ch]">
                {experienceSection.subtitle}
              </p>
            </div>

            {/* Vertical Connected Timeline */}
            <div className="relative pl-6 sm:pl-8 before:content-[''] before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-[2px] before:bg-slate-200 space-y-6">
              {experienceSection.items.map((item, index) => {
                const isCurrent = index === 0;

                return (
                  <React.Fragment key={item.id}>
                    <div className="relative">
                      {/* Timeline Node Marker */}
                      <div
                        className={`absolute -left-6 sm:-left-8 top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 transition-colors ${
                          isCurrent
                            ? 'bg-blue-600 border-blue-100 text-white shadow-xs'
                            : 'bg-white border-slate-300 text-slate-500'
                        }`}
                      >
                        <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </div>

                      {/* Experience Card */}
                      <div
                        className={`rounded-xl border p-5 sm:p-6 transition-all shadow-[0_1px_3px_0_rgba(15,23,42,0.03),0_1px_2px_-1px_rgba(15,23,42,0.03)] ${
                          isCurrent
                            ? 'bg-slate-50/70 border-blue-200/90 hover:border-blue-400/70'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {/* Top Metadata Row */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold border ${
                              isCurrent
                                ? 'bg-blue-50 text-blue-600 border-blue-200'
                                : 'bg-slate-100/80 text-slate-600 border-slate-200'
                            }`}
                          >
                            {isCurrent && (
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                            )}
                            <span>{item.type}</span>
                          </span>

                          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 tabular-nums">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            <span>{item.period}</span>
                          </div>
                        </div>

                        {/* Role & Company */}
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                          {item.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-medium text-slate-600 mt-1 mb-4">
                          <span className="text-slate-800 font-semibold">{item.company}</span>
                          <span className="text-slate-300">•</span>
                          <span className="inline-flex items-center gap-1 text-slate-500">
                            <MapPin className="w-3.5 h-3.5" />
                            {item.location}
                          </span>
                        </div>

                        {/* Highlights Bullet List */}
                        <ul className="space-y-2 pt-3 border-t border-slate-200/80">
                          {item.highlights.map((point, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
                            >
                              <CheckCircle2
                                className={`w-4 h-4 shrink-0 mt-0.5 ${
                                  isCurrent ? 'text-blue-600' : 'text-slate-400'
                                }`}
                              />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Progression Connector Banner between Full-Time and Internship */}
                    {index === 0 && experienceSection.items.length > 1 && (
                      <div className="relative pl-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-700 tabular-nums">
                          <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                          <span>
                            {locale === 'en'
                              ? 'Transitioned from Internship (2024) to Full-Time Role upon graduating with First Class Honors'
                              : 'ต่อยอดจากนักศึกษาฝึกงาน (2024) สู่การบรรจุเป็นพนักงานประจำหลังสำเร็จการศึกษาเกียรตินิยมอันดับ 1'}
                          </span>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Right Column (5 cols): Education & Academic Excellence Card */}
          <div id="education" className="lg:col-span-5 scroll-mt-24">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {educationSection.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1.5 max-w-[65ch]">
                {locale === 'en'
                  ? 'Strong computer science fundamentals and software engineering foundation.'
                  : 'พื้นฐานด้านวิทยาการคอมพิวเตอร์และวิศวกรรมซอฟต์แวร์อย่างครบถ้วน'}
              </p>
            </div>

            {/* Rangsit University Card */}
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 sm:p-6 shadow-[0_1px_3px_0_rgba(15,23,42,0.03),0_1px_2px_-1px_rgba(15,23,42,0.03)]">
              {/* University Header */}
              <div className="flex items-start justify-between gap-3 pb-4 mb-4 border-b border-slate-200">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 mb-1 tabular-nums">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{educationSection.graduationDate}</span>
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    {educationSection.university}
                  </h3>
                  <p className="inline-flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{educationSection.location}</span>
                  </p>
                </div>

                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 shadow-2xs">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>

              {/* Degree Title */}
              <div className="mb-4">
                <p className="text-sm sm:text-base font-semibold text-slate-800">
                  {educationSection.degree}
                </p>
              </div>

              {/* First Class Honors & GPA Highlight Box */}
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 block">
                    {locale === 'en' ? 'Academic Standing' : 'เกียรติบัตรการศึกษา'}
                  </span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <Award className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-emerald-700">
                      {educationSection.honors}
                    </span>
                  </div>
                </div>

                <div className="border-l border-emerald-200/80 pl-3 tabular-nums">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 block">
                    Cumulative GPA
                  </span>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-emerald-700 tracking-tight">
                    {educationSection.gpa}
                  </span>
                  <span className="text-xs font-mono text-emerald-700"> / 4.00</span>
                </div>
              </div>

              {/* Relevant Coursework Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-slate-700">
                    <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                    <span>{educationSection.courseworkLabel}</span>
                    <span className="ml-1 px-1.5 py-0.2 rounded bg-slate-200/70 text-slate-600 text-xs tabular-nums">
                      {educationSection.coursework.length}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowAllCourses((prev) => !prev)}
                    className="inline-flex items-center gap-1 text-xs font-mono text-blue-600 hover:text-blue-700 cursor-pointer"
                  >
                    <span>
                      {showAllCourses
                        ? locale === 'en'
                          ? 'Compact'
                          : 'ย่อรายการ'
                        : locale === 'en'
                          ? 'Show All'
                          : 'ดูทั้งหมด'}
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
                    : educationSection.coursework.slice(0, 6)
                  ).map((course) => (
                    <span
                      key={course}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-white text-slate-700 border border-slate-200 hover:border-blue-500/40 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                  {!showAllCourses && educationSection.coursework.length > 6 && (
                    <button
                      type="button"
                      onClick={() => setShowAllCourses(true)}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100/70 transition-colors cursor-pointer tabular-nums"
                    >
                      +{educationSection.coursework.length - 6} more
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
