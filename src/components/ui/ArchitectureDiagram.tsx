import React from 'react';
import {
  ArrowRight,
  ArrowDown,
  Smartphone,
  Layout,
  Server,
  Database,
  ShieldCheck,
  Cpu,
  Workflow,
} from 'lucide-react';
import { ArchitectureNode } from '../../types/portfolio';

interface ArchitectureDiagramProps {
  nodes: ArchitectureNode[];
  label: string;
}

const getNodeIcon = (layer: string, tech: string, index: number) => {
  const combined = `${layer} ${tech}`.toLowerCase();
  if (combined.includes('identity') || combined.includes('liff') || combined.includes('auth')) {
    return <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 shrink-0" />;
  }
  if (
    combined.includes('db') ||
    combined.includes('sql') ||
    combined.includes('data') ||
    combined.includes('storage') ||
    combined.includes('persistence')
  ) {
    return <Database className="w-3.5 h-3.5 text-indigo-600 shrink-0" />;
  }
  if (
    combined.includes('ui') ||
    combined.includes('frontend') ||
    combined.includes('presentation') ||
    combined.includes('client') ||
    combined.includes('spa')
  ) {
    return index === 0 ? (
      <Smartphone className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
    ) : (
      <Layout className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
    );
  }
  if (combined.includes('rules') || combined.includes('logic')) {
    return <Cpu className="w-3.5 h-3.5 text-indigo-600 shrink-0" />;
  }
  return <Server className="w-3.5 h-3.5 text-indigo-600 shrink-0" />;
};

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ nodes, label }) => {
  return (
    <div className="rounded-xl bg-slate-100/80 border border-slate-200 p-3.5 sm:p-4">
      {/* Diagram Header */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">
          <Workflow className="w-3.5 h-3.5 text-indigo-600" />
          <span>{label}</span>
        </div>
        <span className="text-[11px] font-mono text-slate-500">
          {nodes.length} {nodes.length === 1 ? 'Layer' : 'Layers'}
        </span>
      </div>

      {/* Responsive Pipeline: flex-col on mobile (<768px), md:flex-row on tablet/desktop (>=768px) */}
      <div className="flex flex-col md:flex-row items-stretch gap-2">
        {nodes.map((node, index) => {
          const isLast = index === nodes.length - 1;
          const stepNumber = String(index + 1).padStart(2, '0');

          return (
            <React.Fragment key={`${node.layer}-${index}`}>
              {/* Architectural Node Card */}
              <div className="flex-1 min-w-0 bg-white rounded-lg border border-slate-200 hover:border-indigo-400/70 p-3 transition-all shadow-[0_1px_2px_0_rgba(15,23,42,0.03)] flex flex-col justify-between">
                <div>
                  {/* Layer Label + Step Number */}
                  <div className="flex items-center justify-between gap-1.5 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-slate-500 uppercase tracking-tight">
                      {getNodeIcon(node.layer, node.tech, index)}
                      <span className="truncate">{node.layer}</span>
                    </span>
                    <span className="text-[10px] font-mono font-semibold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                      {stepNumber}
                    </span>
                  </div>

                  {/* Monospace Tech Component Badge (indigo-600 with bg-indigo-50/60) */}
                  <div className="mb-2">
                    <span className="inline-block font-mono text-xs font-semibold text-indigo-600 bg-indigo-50/60 border border-indigo-200/80 px-2 py-0.5 rounded-md">
                      {node.tech}
                    </span>
                  </div>
                </div>

                {/* Technical Responsibility Detail */}
                <p className="text-xs text-slate-600 leading-relaxed">{node.description}</p>
              </div>

              {/* Pipeline Connector Arrow */}
              {!isLast && (
                <div
                  aria-hidden="true"
                  className="flex items-center justify-center py-0.5 md:py-0 md:px-0.5 text-slate-400 shrink-0"
                >
                  {/* Mobile downward arrow */}
                  <div className="md:hidden w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                    <ArrowDown className="w-3.5 h-3.5 text-indigo-600" />
                  </div>
                  {/* Desktop rightward arrow */}
                  <div className="hidden md:flex w-6 h-6 rounded-full bg-white border border-slate-200 items-center justify-center shadow-2xs">
                    <ArrowRight className="w-3.5 h-3.5 text-indigo-600" />
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

