import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, Code2, Cpu, HeartHandshake, GitBranch } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BackgroundElements from "@/components/BackgroundElements";
import Navbar from "@/components/Navbar";
import CircleCard, { type Circle } from "@/components/CircleCard";

const CIRCLES: Circle[] = [
  {
    id: "frontend",
    name: "Frontend Circle",
    tag: "#React",
    description:
      "React, CSS wizardry, accessibility, and everything that ships to the browser.",
    icon: Code2,
    members: 1240,
    moderators: ["@ama_codes", "@devwithjoy"],
    challenge: "Post 5 React tips this week",
  },
  {
    id: "ai-ml",
    name: "AI & ML Circle",
    tag: "#AI",
    description:
      "Model training, prompt engineering, and the frontier of machine learning.",
    icon: Cpu,
    members: 980,
    moderators: ["@kwabena.ml"],
    challenge: "Explain a concept to a beginner",
  },
  {
    id: "women-in-tech",
    name: "Women in Tech",
    tag: "#WomenInTech",
    description:
      "A space to connect, mentor, and celebrate women building in tech.",
    icon: HeartHandshake,
    members: 760,
    moderators: ["@abena.dev", "@nia_builds"],
    challenge: "Solve 3 coding problems",
  },
  {
    id: "open-source",
    name: "Open Source Circle",
    tag: "#OpenSource",
    description:
      "Find projects to contribute to, review PRs, and grow your OSS footprint.",
    icon: GitBranch,
    members: 540,
    moderators: ["@osskwame"],
    challenge: "Merge your first PR of the month",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export default function CommunityPage() {
  const [search, setSearch] = useState("");
  const [joinedCircles, setJoinedCircles] = useState<Set<string>>(new Set());

  const toggleJoin = (id: string) => {
    setJoinedCircles((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredCircles = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return CIRCLES;
    return CIRCLES.filter(
      (circle) =>
        circle.name.toLowerCase().includes(query) ||
        circle.tag.toLowerCase().includes(query) ||
        circle.description.toLowerCase().includes(query)
    );
  }, [search]);

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 overflow-hidden">
      <BackgroundElements />
      <Navbar />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20">
        {/* Header */}
        <div className="mb-8">
          <p className="text-xs font-bold text-[#0f766e] uppercase tracking-widest mb-2">
            Community
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Tech Circles
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Focused communities around the topics you care about.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mb-10">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search circles by name or tag..."
            className="pl-9 h-11 bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#0f766e]/30 focus-visible:border-[#0f766e]"
          />
        </div>

        {/* Circles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredCircles.map((circle) => (
            <CircleCard
              key={circle.id}
              circle={circle}
              joined={joinedCircles.has(circle.id)}
              onToggleJoin={toggleJoin}
            />
          ))}
        </motion.div>

        {filteredCircles.length === 0 && (
          <p className="text-center text-slate-500 py-16">
            No circles match "{search}".
          </p>
        )}

        {/* Mentorship Mode teaser (future feature) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <Card className="bg-[#fff5f0] border-[#ff7f50]/20">
            <CardContent className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-2">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#ff7f50]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Mentorship Mode
                  </h3>
                  <p className="text-sm text-slate-600">
                    Opt-in mentor/mentee matching is coming soon. Sit tight.
                  </p>
                </div>
              </div>
              <Button
                disabled
                variant="outline"
                className="border-slate-300 text-slate-400 bg-white cursor-not-allowed"
              >
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
