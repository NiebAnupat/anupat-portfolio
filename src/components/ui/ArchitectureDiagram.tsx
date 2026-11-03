import React, { useState } from 'react';
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
  CheckCircle,
} from 'lucide-react';
import { ArchitectureNode } from '../../types/portfolio';

interface ArchitectureDiagramProps {
  nodes: ArchitectureNode[];
  label: string;
}

const getNodeIcon = (layer: string, tech: string, index: number, isActive: boolean) => {
  const combined = `${layer} ${tech}`.toLowerCase();
  const iconClass = `w-3.5 h-3.5 shrink-0 transition-colors ${
    isActive ? 'text-white' : 'text-indigo-400'
  }`;

  if (combined.includes('identity') || combined.includes('liff') || combined.includes('auth')) {
    return <ShieldCheck className={iconClass} />;
  }
  if (
    combined.includes('db') ||
    combined.includes('sql') ||
    combined.includes('data') ||
    combined.includes('storage') ||
    combined.includes('persistence')
  ) {
    return <Database className={iconClass} />;
  }
  if (
    combined.includes('ui') ||
    combined.includes('frontend') ||
    combined.includes('presentation') ||
    combined.includes('client') ||
    combined.includes('spa')
  ) {
    return index === 0 ? (
      <Smartphone className={iconClass} />
    ) : (
      <Layout className={iconClass} />
    );
  }
  if (combined.includes('rules') || combined.includes('logic')) {
    return <Cpu className={iconClass} />;
  }
  return <Server className={iconClass} />;
};

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ nodes, label }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const activeNode = nodes[selectedIndex] || nodes[0];

  return (
    <div className="rounded-xl bg-slate-900 dark:bg-slate-950 bg-dark-grid border border-slate-800 dark:border-slate-800/90 p-3.5 sm:p-4 text-slate-100 shadow-inner">
      {/* Diagram Header */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-indigo-300 dark:text-indigo-400 uppercase tracking-wider">
          <Workflow className="w-3.5 h-3.5 text-emerald-400" />
          <span>{label}</span>
        </div>
        <span className="text-xs font-mono text-emerald-400 bg-slate-950 dark:bg-black/50 px-2 py-0.5 rounded border border-slate-800 tabular-nums">
          {nodes.length} {nodes.length === 1 ? 'Layer' : 'Layers'} • Interactive Pipeline
        </span>
      </div>

      {/* Responsive Pipeline: flex-col on mobile (<768px), md:flex-row on tablet/desktop (>=768px) */}
      <div className="flex flex-col md:flex-row items-stretch gap-2">
        {nodes.map((node, index) => {
          const isLast = index === nodes.length - 1;
          const isSelected = index === selectedIndex;
          const stepNumber = String(index + 1).padStart(2, '0');

          return (
            <React.Fragment key={`${node.layer}-${index}`}>
              {/* Interactive Architectural Node Card */}
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-pressed={isSelected}
                className={`flex-1 min-w-0 text-left rounded-xl border p-3 transition-all duration-200 cursor-pointer flex flex-col justify-between active:scale-[0.98] ${
                  isSelected
                    ? 'bg-indigo-950/90 dark:bg-indigo-950/80 border-indigo-400 ring-2 ring-indigo-400/20 shadow-md'
                    : 'bg-slate-950/80 dark:bg-slate-900/60 border-slate-800 hover:border-indigo-500/60 hover:bg-slate-900'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1.5 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-300 uppercase tracking-tight min-w-0">
                      <span
                        className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-900 border border-slate-800'
                        }`}
                      >
                        {getNodeIcon(node.layer, node.tech, index, isSelected)}
                      </span>
                      <span className="truncate">{node.layer}</span>
                    </span>
                    <span
                      className={`text-xs font-mono font-bold px-1.5 py-0.2 rounded tabular-nums ${
                        isSelected
                          ? 'bg-emerald-400 text-slate-950'
                          : 'bg-slate-900 text-slate-400 border border-slate-800'
                      }`}
                    >
                      {stepNumber}
                    </span>
                  </div>

                  <div className="mb-1.5">
                    <span className="inline-block font-mono text-xs font-semibold text-indigo-200 dark:text-indigo-300 bg-indigo-500/20 border border-indigo-400/30 px-2 py-0.5 rounded">
                      {node.tech}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 dark:text-slate-400 leading-snug line-clamp-2">{node.description}</p>
              </button>

              {/* Pipeline Connector Arrow */}
              {!isLast && (
                <div
                  aria-hidden="true"
                  className="flex items-center justify-center py-0.5 md:py-0 md:px-0.5 shrink-0"
                >
                  <div className="md:hidden w-6 h-6 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center">
                    <ArrowDown className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="hidden md:flex w-6 h-6 rounded-full bg-slate-950 border border-slate-700 items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400 animate-flow-arrow" />
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Active Layer Inspector Drawer */}
      {activeNode && (
        <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-300">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="text-slate-400">Layer {String(selectedIndex + 1).padStart(2, '0')}:</span>
            <span className="font-semibold text-white">{activeNode.layer}</span>
            <span className="text-slate-500">→</span>
            <span className="text-indigo-300">{activeNode.tech}</span>
          </div>
          <span className="text-slate-400 text-[11px] font-sans truncate max-w-sm">
            {activeNode.description}
          </span>
        </div>
      )}
    </div>
  );
};
