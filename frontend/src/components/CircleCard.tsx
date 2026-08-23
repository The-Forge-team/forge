import { motion } from "framer-motion";
import { Users, Shield, Trophy, Rss } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export interface Circle {
  id: string;
  name: string;
  tag: string;
  description: string;
  icon: LucideIcon;
  members: number;
  moderators: string[];
  challenge: string;
}

export const circleCardItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;

interface CircleCardProps {
  circle: Circle;
  joined: boolean;
  onToggleJoin: (id: string) => void;
}

export default function CircleCard({
  circle,
  joined,
  onToggleJoin,
}: CircleCardProps) {
  const Icon = circle.icon;

  return (
    <motion.div variants={circleCardItemVariants}>
      <Card className="h-full bg-white border-slate-200 hover:border-[#0f766e] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0f766e]/10 text-[#0f766e]">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{circle.name}</h3>
                <Badge
                  variant="outline"
                  className="mt-1 bg-[#fff5f0] border-[#ff7f50]/30 text-[#ff7f50]"
                >
                  {circle.tag}
                </Badge>
              </div>
            </div>
            <Button
              size="sm"
              onClick={() => onToggleJoin(circle.id)}
              variant={joined ? "outline" : "default"}
              className={
                joined
                  ? "border-[#0f766e] text-[#0f766e] bg-[#ecfdfb] hover:bg-[#ecfdfb]/70 cursor-pointer"
                  : "bg-[#0f766e] hover:bg-[#0d655d] text-white cursor-pointer"
              }
            >
              {joined ? "Joined" : "Join"}
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm text-slate-600">{circle.description}</p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5" />
              {circle.members.toLocaleString()} members
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5" />
              {circle.moderators.length} moderator
              {circle.moderators.length > 1 ? "s" : ""}
            </span>
            <span className="flex items-center gap-1.5">
              <Rss className="h-3.5 w-3.5" />
              Dedicated feed
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-lg bg-[#ecfdfb] px-3 py-2">
            <Trophy className="h-4 w-4 shrink-0 text-[#ff7f50]" />
            <p className="text-xs text-slate-600">
              This week's challenge:{" "}
              <span className="text-slate-900 font-medium">{circle.challenge}</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
