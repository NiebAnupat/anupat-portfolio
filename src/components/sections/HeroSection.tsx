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
  Terminal,
  GitBranch,
  Code2,
  Eye,
  Play,
  Sparkles,
  Layers,
  Database,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const HeroSection: React.FC = () => {
  const { locale, data, setResumePreviewOpen } = useLanguage();
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const [activeTab, setActiveTab] = useState<'csharp' | 'ts'>('csharp');
  const [testRunning, setTestRunning] = useState(false);
  const [testExecuted, setTestExecuted] = useState(true);

  const handleCopy = async (text: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => {
        setCopiedField((prev) => (prev === field ? null : prev));
      }, 2200);
    } catch {
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

  const handleRunVerification = () => {
    setTestRunning(true);
    setTestExecuted(false);
    setTimeout(() => {
      setTestRunning(false);
      setTestExecuted(true);
    }, 450);
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden scroll-mt-20 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#090d16] bg-blueprint-grid pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-20 transition-colors"
    >
      {/* Ambient Radial Engineering Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.12)_0%,rgba(79,70,229,0.06)_45%,transparent_75%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.22)_0%,rgba(79,70,229,0.12)_45%,transparent_75%)]"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Identity & Interactive Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Live Status & First Class Honors Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs mb-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 px-2.5 py-0.5 rounded-full tabular-nums">
                <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{data.hero.badge}</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 pr-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Siam Smile Insurance</span>
              </span>
            </div>

            {/* Bold Headline & Typography */}
            <div className="space-y-2 mb-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-900 dark:bg-slate-800 text-emerald-400 text-xs font-mono font-semibold shadow-2xs border border-slate-800 dark:border-slate-700">
                <span>$</span>
                <span>whoami --verbose</span>
                <span className="w-1.5 h-3.5 bg-emerald-400 inline-block animate-pulse" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.08]">
                {data.hero.name}
              </h1>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-base sm:text-xl font-mono font-bold text-blue-600 dark:text-blue-400">
                  Full Stack Developer
                </span>
                <span className="text-slate-300 dark:text-slate-600">•</span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs sm:text-sm font-mono font-semibold bg-blue-600 text-white shadow-2xs">
                  C# .NET
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs sm:text-sm font-mono font-semibold bg-indigo-600 text-white shadow-2xs">
                  React + TS
                </span>
              </div>
            </div>

            {/* Summary Box with Left Architectural Accent Bar */}
            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base max-w-[58ch] mb-6 leading-relaxed bg-white/90 dark:bg-slate-900/90 backdrop-blur-xs pl-4 pr-4 py-3 rounded-xl border border-slate-200/90 dark:border-slate-800 border-l-4 border-l-blue-600 dark:border-l-blue-500 shadow-xs">
              {data.hero.summary}
            </p>

            {/* High-Contrast Action Bar */}
            <div className="w-full sm:w-auto flex flex-wrap items-center gap-2.5 mb-6 print:hidden">
              <button
                type="button"
                onClick={() => setResumePreviewOpen(true)}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-slate-900 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition-all shadow-[0_6px_20px_-4px_rgba(15,23,42,0.25)] dark:shadow-[0_6px_20px_-4px_rgba(37,99,235,0.4)] cursor-pointer active:scale-95"
              >
                <Eye className="w-4 h-4 text-emerald-400 dark:text-emerald-300" />
                <span>{locale === 'en' ? 'Preview Resume' : 'เปิดดูเรซูเม่'}</span>
              </button>

              <a
                href={`${import.meta.env.BASE_URL}anupat-resume.pdf`}
                download="Anupat-Kaewmee-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-slate-900 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-xs active:scale-95"
              >
                <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{data.hero.ctaSecondary}</span>
              </a>

              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold border border-blue-200 dark:border-blue-900 bg-blue-50/80 dark:bg-blue-950/50 text-blue-950 dark:text-blue-200 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white hover:border-blue-600 transition-all shadow-xs active:scale-95"
              >
                <span>{data.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Copy Contact Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => handleCopy(data.hero.email, 'email')}
                title={data.contactSection.copyEmail}
                className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-400 text-xs text-slate-700 dark:text-slate-300 transition-all shadow-2xs cursor-pointer active:scale-95"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span className="font-mono font-medium text-slate-800 dark:text-slate-200">{data.hero.email}</span>
                {copiedField === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors print:hidden" />
                )}
              </button>

              <button
                type="button"
                onClick={() => handleCopy(data.hero.phone, 'phone')}
                title={data.contactSection.callPhone}
                className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-400 text-xs text-slate-700 dark:text-slate-300 transition-all shadow-2xs cursor-pointer active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span className="font-mono font-medium text-slate-800 dark:text-slate-200 tabular-nums">
                  {data.hero.phone}
                </span>
                {copiedField === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors print:hidden" />
                )}
              </button>

              <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                <span>{data.hero.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer IDE + Live Test Runner + Bold Metrics */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {/* Interactive Code Editor Card with Glow Frame */}
            <div className="relative rounded-2xl bg-slate-900 dark:bg-slate-950 border border-slate-700/90 dark:border-slate-800 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.35)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7)] overflow-hidden text-xs font-mono print:hidden">
              {/* Top Accent Line */}
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500" />

              {/* IDE Window Titlebar & File Tabs */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-950 dark:bg-black/40 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>

                {/* Switchable Code Tabs (C# vs TypeScript) */}
                <div className="flex items-center gap-1 bg-slate-900 dark:bg-slate-900/90 p-0.5 rounded-lg border border-slate-800">
                  <button
                    type="button"
                    onClick={() => setActiveTab('csharp')}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer ${
                      activeTab === 'csharp'
                        ? 'bg-blue-600 text-white font-semibold shadow-2xs'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Code2 className="w-3 h-3" />
                    <span>Anupat.cs</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('ts')}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer ${
                      activeTab === 'ts'
                        ? 'bg-indigo-600 text-white font-semibold shadow-2xs'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Terminal className="w-3 h-3" />
                    <span>stack.ts</span>
                  </button>
                </div>

                {/* Interactive Run Button */}
                <button
                  type="button"
                  onClick={handleRunVerification}
                  title="Run verification checks"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 text-[11px] font-mono font-semibold transition-colors cursor-pointer active:scale-95"
                >
                  <Play className="w-2.5 h-2.5 fill-current" />
                  <span>{testRunning ? 'Running...' : 'Run'}</span>
                </button>
              </div>

              {/* Code Content Area */}
              <div className="p-4 text-slate-200 leading-relaxed overflow-x-auto bg-dark-grid min-h-[175px]">
                {activeTab === 'csharp' ? (
                  <pre className="text-xs font-mono">
                    <code>
                      <span className="text-slate-500">01 </span>
                      <span className="text-blue-400">namespace</span>{' '}
                      <span className="text-emerald-300">SiamSmile.Engineering</span>;{'\n'}
                      <span className="text-slate-500">02 </span>{'\n'}
                      <span className="text-slate-500">03 </span>
                      <span className="text-blue-400">public sealed record</span>{' '}
                      <span className="text-amber-300">Engineer</span>({'\n'}
                      <span className="text-slate-500">04 </span>
                      {'  '}
                      <span className="text-sky-300">string</span> Name ={' '}
                      <span className="text-emerald-300">"{data.hero.name}"</span>,{'\n'}
                      <span className="text-slate-500">05 </span>
                      {'  '}
                      <span className="text-sky-300">string</span> Role ={' '}
                      <span className="text-emerald-300">"Full Stack (.NET + React)"</span>,{'\n'}
                      <span className="text-slate-500">06 </span>
                      {'  '}
                      <span className="text-sky-300">double</span> Gpa ={' '}
                      <span className="text-purple-300">3.84</span>,{' '}
                      <span className="text-slate-400">// 1st Class Honors</span>
                      {'\n'}
                      <span className="text-slate-500">07 </span>
                      {'  '}
                      <span className="text-sky-300">int</span> SystemsShipped ={' '}
                      <span className="text-purple-300">5</span>
                      {'\n'}
                      <span className="text-slate-500">08 </span>);
                    </code>
                  </pre>
                ) : (
                  <pre className="text-xs font-mono">
                    <code>
                      <span className="text-slate-500">01 </span>
                      <span className="text-indigo-400">export const</span>{' '}
                      <span className="text-sky-300">productionStack</span> = {'{\n'}
                      <span className="text-slate-500">02 </span>
                      {'  '}frontend:{' '}
                      <span className="text-emerald-300">['React', 'TypeScript', 'LIFF']</span>,
                      {'\n'}
                      <span className="text-slate-500">03 </span>
                      {'  '}backend:{'  '}
                      <span className="text-emerald-300">['C# .NET', 'ASP.NET MVC']</span>,{'\n'}
                      <span className="text-slate-500">04 </span>
                      {'  '}data:{'     '}
                      <span className="text-emerald-300">['SQL Server', 'REST API']</span>,{'\n'}
                      <span className="text-slate-500">05 </span>
                      {'  '}devops:{'   '}
                      <span className="text-emerald-300">['Git', 'Docker', 'CI/CD']</span>,{'\n'}
                      <span className="text-slate-500">06 </span>
                      {'  '}radar:{'    '}
                      <span className="text-amber-300">['Rust', 'Go']</span>,{'\n'}
                      <span className="text-slate-500">07 </span>
                      {'}'} <span className="text-indigo-400">as const</span>;{'\n'}
                      <span className="text-slate-500">08 </span>
                    </code>
                  </pre>
                )}
              </div>

              {/* Live Terminal Verification Output Drawer */}
              <div className="px-4 py-2.5 bg-slate-950/95 dark:bg-black/60 border-t border-slate-800 text-[11px] font-mono">
                {testRunning ? (
                  <div className="flex items-center gap-2 text-amber-300">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    <span>dotnet test --filter Category=EnterprisePortfolio...</span>
                  </div>
                ) : (
                  testExecuted && (
                    <div className="flex flex-wrap items-center justify-between gap-2 text-emerald-400">
                      <span className="inline-flex items-center gap-1.5 font-semibold">
                        <Check className="w-3.5 h-3.5" />
                        <span>PASS: 5/5 Enterprise Systems Verified</span>
                      </span>
                      <span className="text-slate-400 tabular-nums">GPA 3.84 • 12ms</span>
                    </div>
                  )
                )}
              </div>

              {/* IDE Bottom Status Bar */}
              <div className="px-3.5 py-1.5 bg-slate-950 dark:bg-black/40 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 text-blue-400">
                    <GitBranch className="w-3 h-3" />
                    <span>main</span>
                  </span>
                  <span>UTF-8</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>{activeTab === 'csharp' ? 'C# 12 • .NET 8' : 'TypeScript 5.8'}</span>
                  <span className="text-emerald-400">✓ Build Succeeded</span>
                </div>
              </div>
            </div>

            {/* Bold Color-Coded Metrics Strip (Bento Pattern) */}
            <div className="grid grid-cols-3 gap-2.5">
              {data.hero.metrics.map((metric, idx) => {
                const topAccent =
                  idx === 0
                    ? 'border-t-4 border-t-emerald-600 dark:border-t-emerald-500'
                    : idx === 1
                      ? 'border-t-4 border-t-blue-600 dark:border-t-blue-500'
                      : 'border-t-4 border-t-indigo-600 dark:border-t-indigo-500';
                return (
                  <div
                    key={idx}
                    className={`bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 ${topAccent} p-3.5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between`}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-mono text-lg sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight tabular-nums">
                        {metric.value}
                      </span>
                      {idx === 0 && <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />}
                      {idx === 1 && <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />}
                      {idx === 2 && <Database className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />}
                    </div>
                    <span className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1 leading-tight">
                      {metric.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
