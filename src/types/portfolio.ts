export type Locale = 'th' | 'en';
export type ProjectLens = 'business' | 'architecture';

export interface ArchitectureNode {
  layer: string;
  tech: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'customer' | 'operations' | 'compliance';
  categoryLabel: string;
  techStack: string[];
  featured?: boolean;
  businessLens: {
    problem: string;
    solution: string;
    impact: string;
  };
  architectureLens: {
    overview: string;
    nodes: ArchitectureNode[];
    engineeringHighlights: string[];
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
}

export interface PortfolioData {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    projects: string;
    experience: string;
    skills: string;
    contact: string;
    downloadResume: string;
  };
  hero: {
    badge: string;
    name: string;
    role: string;
    summary: string;
    location: string;
    email: string;
    phone: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metrics: { value: string; label: string }[];
  };
  projectsSection: {
    title: string;
    subtitle: string;
    lensLabel: string;
    businessModeLabel: string;
    archModeLabel: string;
    problemLabel: string;
    solutionLabel: string;
    impactLabel: string;
    archFlowLabel: string;
    highlightsLabel: string;
    items: ProjectItem[];
  };
  experienceSection: {
    title: string;
    subtitle: string;
    items: ExperienceItem[];
  };
  educationSection: {
    title: string;
    degree: string;
    university: string;
    location: string;
    graduationDate: string;
    honors: string;
    gpa: string;
    courseworkLabel: string;
    coursework: string[];
  };
  skillsSection: {
    title: string;
    subtitle: string;
    categories: {
      languages: { title: string; items: string[] };
      frameworks: { title: string; items: string[] };
      tools: { title: string; items: string[] };
      interests: { title: string; description: string; items: string[] };
    };
  };
  contactSection: {
    title: string;
    subtitle: string;
    copyEmail: string;
    copied: string;
    callPhone: string;
  };
}

