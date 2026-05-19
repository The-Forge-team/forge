import { useRef, type ReactNode } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { motion, useInView } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import womenInTech from '/public/images/womenInTech.jpg';
import frontend from '/public/images/frontend.jpg';
import ai from '/public/images/ai.jpg';
import openSource from '/public/images/openSource.jpg';
import {
  Award,
  BookOpen,
  Brain,
  Briefcase,
  Code2,
  Flame,
  GitBranch,
  Layout,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { TbGridDots } from 'react-icons/tb';

// Forge Logo Animation

const DotworkLogo = () => (
  <div className="flex items-center gap-2 mb-6">
    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
      <TbGridDots size={18} color="white" />
    </div>
    <span className="text-green-800 font-semibold text-sm tracking-tight">
      Forge
    </span>
  </div>
);

// Hero Section Animation
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const floatY = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' as const },
  },
};

const sidebarItems = [
  { icon: Flame, label: 'Feed', active: true },
  { icon: Code2, label: 'Projects' },
  { icon: BookOpen, label: 'Learning' },
  { icon: Users, label: 'Community' },
  { icon: Award, label: 'Recognition' },
];

function IsometricCube({ className }: { className?: string }) {
  return (
    <div className={className} style={{ perspective: '600px' }}>
      <div
        className="relative h-14 w-14"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(18deg) rotateY(-28deg)',
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-md bg-primary/90 shadow-lg shadow-primary/30"
          style={{ transform: 'translateZ(28px)' }}
        />
        <motion.div
          className="absolute inset-0 rounded-md bg-green-700/80"
          style={{ transform: 'rotateY(90deg) translateZ(28px)' }}
          animate={{ opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <div
          className="absolute inset-0 rounded-md bg-emerald-900/70"
          style={{ transform: 'rotateX(90deg) translateZ(28px)' }}
        />
      </div>
    </div>
  );
}

function FloatingCard({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        variants={floatY}
        animate="animate"
        style={{ transitionDelay: `${delay}s` }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function DashboardMockup() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-4xl"
      style={{ perspective: '1400px' }}
      initial={{ opacity: 0, rotateX: 8, rotateY: -10, y: 32 }}
      animate={{ opacity: 1, rotateX: 4, rotateY: -6, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
    >
      <FloatingCard
        className="absolute -left-2 top-4 z-20 hidden sm:block md:-left-8"
        delay={0.7}
      >
        <motion.div
          className="rounded-xl border border-primary/30 bg-card/95 px-4 py-3 shadow-xl shadow-primary/10 backdrop-blur-md"
          style={{ transform: 'rotateY(12deg) rotateX(-4deg)' }}
        >
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
              <TrendingUp className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Skill score
              </p>
              <p className="text-sm font-bold text-foreground">
                +240 this week
              </p>
            </div>
          </div>
        </motion.div>
      </FloatingCard>

      <FloatingCard
        className="absolute -right-2 top-12 z-20 hidden md:block md:-right-6"
        delay={0.9}
      >
        <motion.div
          className="rounded-xl border border-border bg-card/95 px-4 py-3 shadow-xl backdrop-blur-md"
          style={{ transform: 'rotateY(-10deg) rotateX(6deg)' }}
        >
          <motion.div
            className="flex items-center gap-2"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">
              Badge unlocked
            </span>
          </motion.div>
          <p className="mt-1 text-xs text-muted-foreground">
            Open-source contributor
          </p>
        </motion.div>
      </FloatingCard>

      <FloatingCard
        className="absolute -bottom-4 right-6 z-20 hidden lg:block"
        delay={1.1}
      >
        <motion.div
          className="flex items-center gap-3 rounded-xl border border-border bg-card/95 px-4 py-3 shadow-xl backdrop-blur-md"
          style={{ transform: 'rotateY(-6deg) rotateX(8deg)' }}
        >
          <div className="flex -space-x-2">
            {['bg-emerald-500', 'bg-sky-500', 'bg-violet-500'].map((color) => (
              <div
                key={color}
                className={`h-7 w-7 rounded-full border-2 border-card ${color}`}
              />
            ))}
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground">
              3 collaborators
            </p>
            <p className="text-[10px] text-muted-foreground">
              on your latest PR
            </p>
          </div>
        </motion.div>
      </FloatingCard>

      <IsometricCube className="absolute -top-4 right-8 z-10 hidden scale-75 md:block" />

      <motion.div
        className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl shadow-black/20 ring-1 ring-white/10"
        style={{ transformStyle: 'preserve-3d' }}
        whileHover={{ rotateY: -4, rotateX: 4 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      >
        <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
          </div>
          <div className="mx-auto flex h-7 flex-1 max-w-sm items-center justify-center rounded-md bg-background/80 px-3 text-[11px] text-muted-foreground">
            forge.app/dashboard
          </div>
        </div>

        <div className="flex">
          <aside className="hidden w-12 shrink-0 flex-col gap-0.5 border-r border-border bg-muted/30 p-1.5 sm:flex">
            {sidebarItems.map(({ icon: Icon, label, active }) => (
              <motion.div
                key={label}
                className={`flex flex-col items-center gap-0.5 rounded-lg p-1.5 ${
                  active
                    ? 'bg-primary/15 text-primary'
                    : 'text-muted-foreground'
                }`}
                whileHover={{ scale: 1.08 }}
              >
                <Icon className="h-3.5 w-3.5" />
                <span className="text-[7px] font-medium">{label}</span>
              </motion.div>
            ))}
          </aside>

          <div className="flex min-w-0 flex-1 flex-col gap-2 p-2.5 sm:p-3">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-[10px] font-medium text-muted-foreground">
                  Featured moment
                </p>
                <p className="text-xs font-semibold text-foreground">
                  Late-night build session
                </p>
              </div>
              <motion.span
                className="rounded-full bg-primary/15 px-2 py-0.5 text-[9px] font-semibold text-primary"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Live
              </motion.span>
            </div>

            <motion.div
              className="relative aspect-[2.6/1] max-h-[9.5rem] w-full overflow-hidden rounded-lg border border-border bg-[#0f1115] sm:max-h-[10.5rem]"
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,156,0.12),transparent_50%)]"
                animate={{ opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <img
                src="/images/about-hero.png"
                alt="Developer at laptop with a curious cat during a coding session"
                className="h-full w-full object-cover object-[center_35%]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0f1115] via-[#0f1115]/75 to-transparent px-3 pb-2 pt-8">
                <motion.div
                  className="flex items-end justify-between gap-2"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.85 }}
                >
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Shipped 3 lessons today
                    </p>
                    <p className="text-[10px] text-white/60">
                      Java · GUI · Community kudos
                    </p>
                  </div>
                  <motion.span
                    className="flex shrink-0 items-center gap-1 rounded-md bg-primary/20 px-1.5 py-0.5 text-[10px] font-bold text-primary"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <GitBranch className="h-2.5 w-2.5" />
                    +42 rep
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-1.5"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.9 },
                },
              }}
            >
              {[
                { label: 'Skills', value: '12' },
                { label: 'Streak', value: '7d' },
                { label: 'Kudos', value: '89' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  custom={0}
                  className="rounded-md border border-border bg-muted/40 px-2 py-1.5 text-center"
                >
                  <p className="text-xs font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-[9px] text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-6 pt-10 sm:px-6 sm:pb-10 sm:pt-14">
      <motion.div
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,255,156,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,156,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mb-8 text-center lg:mb-10"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
          >
            A social network where tech skills, learning, and contribution earn{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-primary to-emerald-400 bg-clip-text text-transparent">
              real recognition
            </span>
            .
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Forge is where developers showcase projects, document what they
            learn, and get credited for their work. Join the conversation, learn
            and collaborate.
          </motion.p>
        </motion.div>

        <DashboardMockup />
      </div>
    </section>
  );
}

// Community Section

type Community = {
  name: string;
  icon: LucideIcon;
  members: string;
  trending: string;
  image: string;
};

const communityImages = {
  womenInTech,
  frontend,
  ai,
  openSource
};

const communities: Community[] = [
  {
    name: 'Frontend Circle',
    icon: Layout,
    members: '12.4k',
    trending: 'React Server Components deep dive',
    image: communityImages.frontend,
  },
  {
    name: 'AI & ML Circle',
    icon: Brain,
    members: '8.9k',
    trending: 'Fine-tuning LLMs on small datasets',
    image: communityImages.ai,
  },
  {
    name: 'Women in Tech',
    icon: Users,
    members: '6.2k',
    image: communityImages.womenInTech,
    trending: 'mentorship',
  },
  {
    name: 'Open Source Circle',
    icon: GitBranch,
    members: '15.1k',
    trending: 'Good-first-issues for new contributors',
    image: communityImages.openSource,
  },
];

function CommunityCard({
  community,
  index,
  inView,
}: {
  community: Community;
  index: number;
  inView: boolean;
}) {
  const Icon = community.icon;

  return (
    <motion.article
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
      transition={{
        delay: index * 0.12,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={`relative h-36 bg-gradient-to-br p-4`}>
      <img 
  src={community.image} 
  alt={community.name} 
  className="absolute inset-0 h-full w-full object-cover" 
/>

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg bg-black/25 backdrop-blur-sm">
          <Icon className="h-4 w-4 text-white" />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-primary">
            {community.name}
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Users className="h-3.5 w-3.5 shrink-0" />
            <span>{community.members} members</span>
          </p>
        </div>

        <div className="mt-auto rounded-lg border border-border bg-muted/40 px-3 py-2.5">
          <p className="mt-1 line-clamp-2 text-sm leading-snug text-foreground/90">
            {community.trending}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function AboutCommunitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px 0px' });

  return (
    <section
      ref={sectionRef}
      className="relative px-4 py-4 sm:px-6 sm:py-10"
      aria-labelledby="community-heading"
    >
      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="community-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl"
          >
            Find your circle. Grow with your people.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Join focused spaces built around skills, identity, and
            contributions. Each with live discussions and recognition that
            rewards real work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {communities.map((community, index) => (
            <CommunityCard
              key={community.name}
              community={community}
              index={index}
              inView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Future of Forge Section

type MilestoneStatus = 'active' | 'upcoming' | 'future';

type RoadmapMilestone = {
  phase: string;
  title: string;
  detail: string;
  status: MilestoneStatus;
  icon: LucideIcon;
  illustration?: 'mentorship' | 'hiring';
};

const roadmapMilestones: RoadmapMilestone[] = [
  {
    phase: 'Now',
    title: 'Recognition & communities',
    detail: 'Skill-based profiles, circles and contribution credit.',
    status: 'active',
    icon: Sparkles,
  },
  {
    phase: 'Next',
    title: 'Mentorship network',
    detail: 'Match mentors and learners by goals, stack and pace.',
    status: 'upcoming',
    icon: Users,
    illustration: 'mentorship',
  },
  {
    phase: 'Ahead',
    title: 'Hiring ecosystem',
    detail: 'Opportunities surfaced from proven work, not résumé noise.',
    status: 'future',
    icon: Briefcase,
    illustration: 'hiring',
  },
];

function milestoneGlow(status: MilestoneStatus) {
  if (status === 'active')
    return 'bg-primary shadow-[0_0_14px] shadow-primary/35';
  if (status === 'upcoming')
    return 'bg-primary/60 shadow-[0_0_10px] shadow-primary/20';
  return 'bg-primary/25 shadow-none';
}

function MentorshipNetworkIllustration({ inView }: { inView: boolean }) {
  const nodes = [
    { cx: 50, cy: 22, r: 4 },
    { cx: 78, cy: 48, r: 3.5 },
    { cx: 22, cy: 52, r: 3.5 },
    { cx: 50, cy: 78, r: 4 },
  ];
  return (
    <motion.div
      className="relative mx-auto h-20 w-full max-w-[120px] text-primary"
      aria-hidden
    >
      <svg className="h-full w-full" viewBox="0 0 100 100">
        {[
          [50, 22, 78, 48],
          [50, 22, 22, 52],
          [78, 48, 50, 78],
          [22, 52, 50, 78],
        ].map(([x1, y1, x2, y2], i) => (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeOpacity={0.3}
            strokeWidth="0.75"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2 + i * 0.08, duration: 0.7 }}
          />
        ))}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="currentColor"
            fillOpacity={0.25}
            stroke="currentColor"
            strokeOpacity={0.5}
            animate={inView ? { opacity: [0.5, 1, 0.5] } : {}}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
        <circle
          cx={50}
          cy={50}
          r="7"
          fill="currentColor"
          fillOpacity={0.1}
          stroke="currentColor"
          strokeOpacity={0.35}
        />
      </svg>
    </motion.div>
  );
}

function HiringEcosystemIllustration({ inView }: { inView: boolean }) {
  return (
    <motion.div
      className="relative mx-auto h-20 w-full max-w-[120px] text-primary"
      aria-hidden
    >
      <svg
        className="h-full w-full text-muted-foreground"
        viewBox="0 0 100 100"
      >
        <motion.rect
          x="58"
          y="24"
          width="26"
          height="20"
          rx="3"
          fill="currentColor"
          fillOpacity={0.08}
          stroke="var(--primary)"
          strokeOpacity={0.25}
          strokeWidth="0.75"
          animate={inView ? { opacity: [0.5, 0.85, 0.5] } : {}}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.circle
          cx="28"
          cy="50"
          r="9"
          className="text-primary"
          fill="currentColor"
          fillOpacity={0.12}
          stroke="currentColor"
          strokeOpacity={0.35}
          animate={inView ? { scale: [1, 1.04, 1] } : {}}
          transition={{ duration: 3.5, repeat: Infinity }}
        />
        <motion.path
          d="M37 50 H53"
          className="text-primary"
          stroke="currentColor"
          strokeOpacity={0.4}
          strokeWidth="0.75"
          strokeDasharray="3 4"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.2 }}
        />
        <motion.circle
          cx="72"
          cy="50"
          r="5"
          className="text-primary"
          fill="currentColor"
          fillOpacity={0.2}
          stroke="currentColor"
          strokeOpacity={0.45}
          animate={inView ? { opacity: [0.5, 1, 0.5] } : {}}
          transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
        />
      </svg>
    </motion.div>
  );
}

function MilestoneIllustration({
  type,
  inView,
}: {
  type: RoadmapMilestone['illustration'];
  inView: boolean;
}) {
  if (type === 'mentorship')
    return <MentorshipNetworkIllustration inView={inView} />;
  if (type === 'hiring') return <HiringEcosystemIllustration inView={inView} />;
  return (
    <div className="flex h-20 items-center justify-center text-primary/40">
      <Sparkles className="h-8 w-8" />
    </div>
  );
}

function FloatingRoadmapLines({ inView }: { inView: boolean }) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full text-primary opacity-[0.12]"
      aria-hidden
      viewBox="0 0 800 400"
      preserveAspectRatio="xMidYMid slice"
    >
      <motion.path
        d="M0 120 Q200 80 400 140 T800 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="6 10"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={
          inView
            ? { pathLength: 1, opacity: 1, x: [0, 12, 0] }
            : { pathLength: 0, opacity: 0 }
        }
        transition={{
          pathLength: { duration: 2 },
          x: { duration: 14, repeat: Infinity },
        }}
      />
      <motion.path
        d="M0 280 Q250 240 500 300 T800 260"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.6"
        strokeWidth="1"
        strokeDasharray="4 12"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={
          inView
            ? { pathLength: 1, opacity: 1, x: [0, -10, 0] }
            : { pathLength: 0, opacity: 0 }
        }
        transition={{
          pathLength: { duration: 2.2, delay: 0.2 },
          x: { duration: 16, repeat: Infinity },
        }}
      />
      <motion.path
        className="text-border"
        d="M120 0 V400 M680 0 V400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 16"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </svg>
  );
}

function FutureTimelineNode({
  milestone,
  index,
  inView,
  isLast,
}: {
  milestone: RoadmapMilestone;
  index: number;
  inView: boolean;
  isLast: boolean;
}) {
  return (
    <motion.li
      className="relative flex gap-5 pb-8 last:pb-0"
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        delay: index * 0.15,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div className="relative z-10 flex shrink-0 flex-col items-center">
        <motion.span
          className={`relative flex h-3 w-3 rounded-full ${milestoneGlow(milestone.status)}`}
          animate={
            inView && milestone.status !== 'future'
              ? { scale: [1, 1.2, 1], opacity: [0.85, 1, 0.85] }
              : {}
          }
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        {!isLast && (
          <motion.span
            className="mt-1 w-px flex-1 min-h-[3.5rem] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ delay: index * 0.15 + 0.2, duration: 0.6 }}
            style={{ originY: 0 }}
          />
        )}
      </motion.div>
      <div className="pt-0.5">
        <p className="text-[10px] font-medium uppercase tracking-widest text-primary/70">
          {milestone.phase}
        </p>
        <h3 className="mt-0.5 text-sm font-semibold text-foreground">
          {milestone.title}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {milestone.detail}
        </p>
      </div>
    </motion.li>
  );
}

function FutureRoadmapCard({
  milestone,
  index,
  inView,
}: {
  milestone: RoadmapMilestone;
  index: number;
  inView: boolean;
}) {
  const Icon = milestone.icon;

  return (
    <motion.article
      className="relative flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/25"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.12,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="mb-4 flex flex-col items-center">
        <motion.span
          className={`relative z-10 flex h-3.5 w-3.5 rounded-full ${milestoneGlow(milestone.status)}`}
          animate={
            inView && milestone.status !== 'future'
              ? { scale: [1, 1.15, 1], opacity: [0.85, 1, 0.85] }
              : {}
          }
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <p className="mt-3 text-[10px] font-medium uppercase tracking-widest text-primary/70">
          {milestone.phase}
        </p>
      </div>

      <div className="mb-4 rounded-xl border border-border/60 bg-muted/30 px-3 py-2">
        <MilestoneIllustration type={milestone.illustration} inView={inView} />
      </div>

      <div className="flex items-start gap-2">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">
            {milestone.title}
          </h3>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
            {milestone.detail}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function AboutFutureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px 0px' });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-8 sm:px-6 sm:py-8"
      aria-labelledby="future-heading"
    >
      <motion.div
        className="pointer-events-none absolute -left-24 top-1/4 h-56 w-56 rounded-full bg-primary/15 blur-3xl"
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none absolute -right-16 bottom-1/4 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 bg-primary/[0.03]"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,255,156,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,156,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(ellipse 80% 70% at 50% 50%, black, transparent)',
        }}
      />
      <FloatingRoadmapLines inView={isInView} />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mb-10 text-center sm:mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="future-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl"
          >
            The future of Forge
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
            A quiet look at what we are building next. Stay connected,
            intentional, and still grounded in real contribution.
          </p>
        </motion.div>

        <motion.div
          className="relative rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.55 }}
        >
          <motion.div
            className="pointer-events-none absolute left-[1.65rem] top-8 bottom-8 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0 shadow-[0_0_12px] shadow-primary/25 sm:left-[2.15rem]"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
            style={{ originY: 0 }}
            aria-hidden
          />
          <ul className="relative list-none">
            {roadmapMilestones.map((milestone, index) => (
              <FutureTimelineNode
                key={milestone.title}
                milestone={milestone}
                index={index}
                inView={isInView}
                isLast={index === roadmapMilestones.length - 1}
              />
            ))}
          </ul>
        </motion.div>

        <div className="relative hidden lg:block">
          <motion.div
            className="pointer-events-none absolute left-[8%] right-[8%] top-[1.125rem] h-px bg-gradient-to-r from-primary/0 via-primary/45 to-primary/0 shadow-[0_0_12px] shadow-primary/20"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.15 }}
            style={{ originX: 0 }}
            aria-hidden
          />
          <div className="grid grid-cols-3 gap-6 xl:gap-8">
            {roadmapMilestones.map((milestone, index) => (
              <FutureRoadmapCard
                key={milestone.title}
                milestone={milestone}
                index={index}
                inView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Page Layout

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <AboutHeroSection />

      <AboutCommunitySection />

      <AboutFutureSection />

      <section className="px-4 py-20">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-card p-12 text-center">
          <div className="absolute inset-0 bg-primary/5" />
          <motion.div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mb-8 max-w-md text-muted-foreground">
              Find your tech family on FORGE.
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => navigate({ to: '/signup' })}
                className="rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-4 py-6 ">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 md:flex-row text-sm">
          <DotworkLogo />
          <p className="pb-4.5  text-muted-foreground">
            © 2026 FORGE. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
