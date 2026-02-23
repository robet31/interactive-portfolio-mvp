import type { IconType } from 'react-icons';
import {
  SiReact,
  SiTypescript,
  SiPython,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiTensorflow,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiFigma,
  SiVite,
  SiJavascript,
  SiCplusplus,
  SiGo,
  SiRust,
  SiGraphql,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiSupabase,
  SiPrisma,
  SiVuedotjs,
  SiSvelte,
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiDjango,
  SiFastapi,
  SiExpress,
  SiNestjs,
  SiPandas,
  SiScikitlearn,
  SiPytorch,
  SiAmazonwebservices,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

interface TechItem {
  name: string;
  icon: IconType;
  color: string;
}

const techStacks: TechItem[] = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#a0a0a0' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Vite', icon: SiVite, color: '#646CFF' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Java', icon: FaJava, color: '#ED8B00' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'Go', icon: SiGo, color: '#00ADD8' },
  { name: 'Rust', icon: SiRust, color: '#CE422B' },
  { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Redis', icon: SiRedis, color: '#FF4438' },
  { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900' },
  { name: 'Firebase', icon: SiFirebase, color: '#DD2C00' },
  { name: 'Supabase', icon: SiSupabase, color: '#3FCF8E' },
  { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
  { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
  { name: 'Svelte', icon: SiSvelte, color: '#FF3E00' },
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
  { name: 'Swift', icon: SiSwift, color: '#F05138' },
  { name: 'Django', icon: SiDjango, color: '#092E20' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
  { name: 'Express', icon: SiExpress, color: '#a0a0a0' },
  { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
  { name: 'Pandas', icon: SiPandas, color: '#150458' },
  { name: 'scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
  { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
];

// Split into 2 rows
const row1 = techStacks.slice(0, 18);
const row2 = techStacks.slice(18);

function TechChip({ tech }: { tech: TechItem }) {
  const Icon = tech.icon;
  return (
    <span
      className="group/chip relative inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm whitespace-nowrap cursor-default select-none transition-all duration-300 hover:border-border hover:bg-card hover:shadow-lg hover:shadow-black/5 hover:-translate-y-0.5"
    >
      <Icon
        className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover/chip:scale-110"
        style={{ color: tech.color }}
      />
      <span className="text-sm text-muted-foreground transition-colors duration-300 group-hover/chip:text-foreground">
        {tech.name}
      </span>
    </span>
  );
}

function MarqueeRow({ items, reverse = false }: { items: TechItem[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex shrink-0 gap-3 py-1.5 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {doubled.map((tech, i) => (
          <TechChip key={`${tech.name}-${i}`} tech={tech} />
        ))}
      </div>
      <div
        aria-hidden
        className={`flex shrink-0 gap-3 py-1.5 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {doubled.map((tech, i) => (
          <TechChip key={`${tech.name}-dup-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}

export function TechMarquee() {
  return (
    <section className="py-10 overflow-hidden border-y border-border/40 bg-background/60 backdrop-blur-sm">
      <div className="space-y-3">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
