import React from 'react';
import {
  Server,
  Code2,
  Monitor,
  Database,
  Cpu,
  Wrench,
  Workflow,
  ShieldCheck,
  Clock,
  Zap,
  Network,
  Table,
  Sliders,
  Bell,
  Calculator,
  Receipt,
  FileCheck2,
  Lock,
  Boxes,
  Layers,
  Sparkles,
  Terminal,
  Activity,
  Award,
  BookOpen,
  Send,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Download,
  ExternalLink,
  CheckCircle2,
  Building2,
  GraduationCap,
  Briefcase,
  Users,
  Coins,
  ChartLine,
  Hand
} from 'lucide-react';

/* ==========================================================================
   Brand & Tech SVGs
   ========================================================================== */

export function GithubIcon({ size = 18, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18, color = '#0a66c2', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function LeetcodeIcon({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#ffa116' }}>
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.858 3.57 5.86 5.86 0 0 0 2.563-.306 5.766 5.766 0 0 0 2.324-1.38l3.377-3.483a1.378 1.378 0 0 0-1.945-1.954l-3.374 3.48a3.007 3.007 0 0 1-1.217.724 3.06 3.06 0 0 1-1.338.16 3.12 3.12 0 0 1-2.55-1.874 3.197 3.197 0 0 1-.225-.972 3.143 3.143 0 0 1 .15-1.282 3.2 3.2 0 0 1 .634-1.127l3.864-4.14 5.412-5.787A1.378 1.378 0 0 0 13.483 0zm-2.88 8.78a1.39 1.39 0 0 0-1.383 1.38 1.39 1.39 0 0 0 1.38 1.382h8.016a1.39 1.39 0 0 0 1.383-1.382 1.39 1.39 0 0 0-1.383-1.38z" />
    </svg>
  );
}

export function JavaIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  );
}

export function SpringBootIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

export function ReactIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="2" fill="#00f2fe" />
    </svg>
  );
}

export function JavascriptIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#f7df1e" />
      <path d="M7 16c.5 1 1.5 1.5 2.5 1.5 1.5 0 2.5-1 2.5-2.5V8" stroke="#000" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 15.5c.8.8 1.8 1 2.8.8 1-.2 1.7-.8 1.7-1.8 0-2-3.5-1.2-3.5-3.5 0-1.2 1-2 2.5-2 1 0 1.8.3 2.5 1" stroke="#000" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function DatabaseIcon({ size = 16, color = '#38bdf8', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

export function GitIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#f05032" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="6" y1="9" x2="6" y2="15" />
      <path d="M18 15a9 9 0 0 0-9-9" />
    </svg>
  );
}

/* ==========================================================================
   Tech Icon Mapper for Skills & Project Badges
   ========================================================================== */

export function TechIcon({ name, size = 15 }) {
  const n = (name || '').toLowerCase();

  if (n.includes('spring boot') || n.includes('spring data')) {
    return <SpringBootIcon size={size} />;
  }
  if (n.includes('java') && !n.includes('script')) {
    return <JavaIcon size={size} />;
  }
  if (n.includes('react')) {
    return <ReactIcon size={size} />;
  }
  if (n.includes('javascript') || n.includes('js')) {
    return <JavascriptIcon size={size} />;
  }
  if (n.includes('postgresql')) {
    return <DatabaseIcon size={size} color="#336791" />;
  }
  if (n.includes('mysql')) {
    return <DatabaseIcon size={size} color="#00758f" />;
  }
  if (n.includes('sql') || n.includes('database') || n.includes('ledger') || n.includes('schema')) {
    return <Database size={size} color="#38bdf8" />;
  }
  if (n.includes('git') && !n.includes('hub')) {
    return <GitIcon size={size} />;
  }
  if (n.includes('github')) {
    return <GithubIcon size={size} color="#f8fafc" />;
  }
  if (n.includes('rest') || n.includes('feign') || n.includes('api')) {
    return <Network size={size} color="#00f2fe" />;
  }
  if (n.includes('business') || n.includes('logic')) {
    return <Boxes size={size} color="#a855f7" />;
  }
  if (n.includes('workflow') || n.includes('approval') || n.includes('engine')) {
    return <Workflow size={size} color="#a855f7" />;
  }
  if (n.includes('schedul') || n.includes('cron') || n.includes('time')) {
    return <Clock size={size} color="#eab308" />;
  }
  if (n.includes('cache') || n.includes('performance') || n.includes('optim')) {
    return <Zap size={size} color="#fbbf24" />;
  }
  if (n.includes('auth') || n.includes('security') || n.includes('shield')) {
    return <ShieldCheck size={size} color="#10b981" />;
  }
  if (n.includes('dto') || n.includes('valid')) {
    return <FileCheck2 size={size} color="#06b6d4" />;
  }
  if (n.includes('formula') || n.includes('metric') || n.includes('calculat')) {
    return <Calculator size={size} color="#ec4899" />;
  }
  if (n.includes('audit') || n.includes('trail')) {
    return <BookOpen size={size} color="#f97316" />;
  }
  if (n.includes('payroll') || n.includes('payout') || n.includes('reconcil') || n.includes('incentive')) {
    return <Receipt size={size} color="#10b981" />;
  }
  if (n.includes('bell') || n.includes('notif')) {
    return <Bell size={size} color="#eab308" />;
  }
  if (n.includes('pagin') || n.includes('sort')) {
    return <Sliders size={size} color="#94a3b8" />;
  }
  if (n.includes('html')) {
    return <Code2 size={size} color="#f97316" />;
  }
  if (n.includes('css')) {
    return <Sparkles size={size} color="#38bdf8" />;
  }
  if (n.includes('responsive') || n.includes('ui')) {
    return <Monitor size={size} color="#a855f7" />;
  }
  if (n.includes('ajax') || n.includes('fetch')) {
    return <Activity size={size} color="#00f2fe" />;
  }
  if (n.includes('embedded') || n.includes('arduino') || n.includes('hardware')) {
    return <Cpu size={size} color="#ef4444" />;
  }
  if (n.includes('vscode') || n.includes('intellij') || n.includes('tool')) {
    return <Wrench size={size} color="#818cf8" />;
  }
  if (n.includes('postman') || n.includes('pgadmin')) {
    return <Terminal size={size} color="#f97316" />;
  }

  // Default fallback
  return <Layers size={size} color="#00f2fe" />;
}

/* ==========================================================================
   Category Header Icon Mapper
   ========================================================================== */
export function CategoryHeaderIcon({ icon, size = 22 }) {
  switch (icon) {
    case 'server':
      return <Server size={size} />;
    case 'code':
      return <Code2 size={size} />;
    case 'desktop':
      return <Monitor size={size} />;
    case 'database':
      return <Database size={size} />;
    case 'gears':
      return <Workflow size={size} />;
    case 'screwdriver-wrench':
      return <Wrench size={size} />;
    default:
      return <Cpu size={size} />;
  }
}
