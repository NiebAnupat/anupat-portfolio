import React, { useState } from 'react';
import {
  Download,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  Award,
  Layers,
  ShieldCheck,
  Code2,
  Database,
  Server,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const HeroSection: React.FC = () => {
  const { locale, data } = useLanguage();
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  const handleCopy = async (text: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => {
        setCopiedField((prev) => (prev === field ? null : prev));
      }, 2200);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedField(field);
      setTimeout(() => {
        setCopiedField((prev) => (prev === field ? null : prev));
      }, 2200);
    }
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-slate-200 bg-slate-50 bg-engineering-grid pt-10 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      {/* Subtle top radial light vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-white via-white/60 to-transparent"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Primary Identity, Value Proposition, Actions & Quick Contact */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Honors & Role Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-[0_1px_3px_0_rgba(15,23,42,0.03),0_1px_2px_-1px_rgba(15,23,42,0.03)] mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                <Award className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{data.hero.badge}</span>
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="text-xs font-medium text-slate-600 px-1">
                {locale === 'en'
                  ? 'Full Stack Developer @ Siam Smile Insurance'
                  : 'Full Stack Developer @ บมจ. สยามสไมล์ประกันภัย'}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2 mb-5">
              <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-blue-600 font-semibold">
                {data.hero.role}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
                {data.hero.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-700 pt-1">
                {locale === 'en' ? (
                  <>
                    Engineering reliable enterprise systems with{' '}
                    <span className="font-mono text-base sm:text-lg font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                      C# .NET
                    </span>{' '}
                    &amp;{' '}
                    <span className="font-mono text-base sm:text-lg font-semibold text-indigo-600 bg-indigo-50/60 px-1.5 py-0.5 rounded border border-indigo-200">
                      React
                    </span>
                  </>
                ) : (
                  <>
                    ออกแบบและพัฒนาระบบระดับองค์กรด้วย{' '}
                    <span className="font-mono text-base sm:text-lg font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                      C# .NET
                    </span>{' '}
                    และ{' '}
                    <span className="font-mono text-base sm:text-lg font-semibold text-indigo-600 bg-indigo-50/60 px-1.5 py-0.5 rounded border border-indigo-200">
                      React
                    </span>
                  </>
                )}
              </p>
            </div>

            {/* Summary Paragraph */}
            <p className="text-slate-700 text-sm sm:text-base max-w-2xl mb-7 leading-relaxed">
              {data.hero.summary}
            </p>

            {/* Action Bar: Full-width on <640px, inline on >=640px */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
              <a
                href={`${import.meta.env.BASE_URL}anupat-resume.pdf`}
                download="Anupat-Kaewmee-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>{data.hero.ctaSecondary}</span>
                <span className="ml-1 text-[11px] font-mono text-slate-300 bg-slate-800 px-1.5 py-0.5 rounded">
                  PDF
                </span>
              </a>

              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-blue-500/40 hover:text-blue-600 transition-all shadow-xs"
              >
                <span>{data.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Contact Strip with Copyable Email & Phone + Toast Feedback */}
            <div className="w-full pt-5 border-t border-slate-200/90">
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                {/* Copyable Email Chip */}
                <button
                  type="button"
                  onClick={() => handleCopy(data.hero.email, 'email')}
                  title={data.contactSection.copyEmail}
                  className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-500/40 text-xs sm:text-sm text-slate-700 transition-all shadow-xs cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-slate-800">
                    {data.hero.email}
                  </span>
                  {copiedField === 'email' ? (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <Check className="w-3 h-3" />
                      <span>{ locale === 'en' ? 'Copied!' : 'คัดลอกแล้ว!' }</span>
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  )}
                </button>

                {/* Copyable Phone Chip */}
                <button
                  type="button"
                  onClick={() => handleCopy(data.hero.phone, 'phone')}
                  title={data.contactSection.callPhone}
                  className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-500/40 text-xs sm:text-sm text-slate-700 transition-all shadow-xs cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-slate-800">
                    {data.hero.phone}
                  </span>
                  {copiedField === 'phone' ? (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <Check className="w-3 h-3" />
                      <span>{ locale === 'en' ? 'Copied!' : 'คัดลอกแล้ว!' }</span>
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  )}
                </button>

                {/* Location Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/80 border border-slate-200 text-xs text-slate-600">
                  <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>{data.hero.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Architecture Snapshot & Key Metrics Bento */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Production Stack Architecture Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-[0_1px_3px_0_rgba(15,23,42,0.03),0_1px_2px_-1px_rgba(15,23,42,0.03)]">
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-900">
                    {locale === 'en'
                      ? 'Enterprise Full-Stack Profile'
                      : 'โครงสร้างความเชี่ยวชาญ Full-Stack'}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Production Ready
                </span>
              </div>

              {/* 3-Layer Stack Pipeline */}
              <div className="space-y-2.5">
                <div className="p-3 rounded-lg bg-slate-100/80 border border-slate-200/90 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-white border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-900">
                        {locale === 'en' ? 'Client & Presentation' : 'ส่วนติดต่อผู้ใช้ (Frontend)'}
                      </span>
                      <span className="text-[11px] font-mono text-indigo-600 bg-indigo-50/60 px-2 py-0.5 rounded border border-indigo-200/80">
                        React • TS • LIFF
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      {locale === 'en'
                        ? 'Responsive SPA workflows, LINE LIFF SDK integration & structured validation'
                        : 'พัฒนา Responsive Web, เชื่อมต่อ LINE LIFF SDK และจัดการ Form Validation'}
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-100/80 border border-slate-200/90 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-white border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                    <Server className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-900">
                        {locale === 'en' ? 'Application & API Layer' : 'ระบบประมวลผล (Backend API)'}
                      </span>
                      <span className="text-[11px] font-mono text-indigo-600 bg-indigo-50/60 px-2 py-0.5 rounded border border-indigo-200/80">
                        C# .NET • MVC
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      {locale === 'en'
                        ? 'RESTful APIs, underwriting rules engines, branch scoring & service orchestration'
                        : 'ออกแบบ RESTful API, ลอจิกคัดกรองความเสี่ยง และระบบประเมินมาตรฐานสาขา'}
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-100/80 border border-slate-200/90 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-white border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                    <Database className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-900">
                        {locale === 'en' ? 'Data & Persistence' : 'การจัดการฐานข้อมูล (Database)'}
                      </span>
                      <span className="text-[11px] font-mono text-indigo-600 bg-indigo-50/60 px-2 py-0.5 rounded border border-indigo-200/80">
                        SQL Server
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      {locale === 'en'
                        ? 'Relational schema design, transactional integrity & audit history tracking'
                        : 'ออกแบบโครงสร้างฐานข้อมูลเชิงสัมพันธ์ รองรับธุรกรรมและการตรวจสอบย้อนหลัง'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dual-Lens Feature Hint */}
              <div className="mt-4 pt-3.5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>
                    {locale === 'en'
                      ? 'NDA-Compliant Architecture Showcase'
                      : 'แสดงผลสถาปัตยกรรมระบบตามมาตรฐาน NDA'}
                  </span>
                </span>
                <a
                  href="#projects"
                  className="font-mono font-medium text-blue-600 hover:underline"
                >
                  {locale === 'en' ? 'Inspect 5 Systems →' : 'ดูทั้ง 5 ระบบ →'}
                </a>
              </div>
            </div>

            {/* Key Metrics Bento Strip: 1 col on mobile, 2-3 cols on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {data.hero.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 p-4 shadow-[0_1px_3px_0_rgba(15,23,42,0.03),0_1px_2px_-1px_rgba(15,23,42,0.03)] hover:border-slate-300 transition-colors flex flex-col justify-between"
                >
                  <span className="font-mono text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {metric.value}
                  </span>
                  <span className="text-xs text-slate-500 font-medium mt-1 leading-snug">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

