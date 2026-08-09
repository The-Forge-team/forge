import { createFileRoute } from "@tanstack/react-router";
import GamificationPage from "@/Pages/GamificationPage";

export const Route = createFileRoute("/gamification")({
  component: GamificationPage,
});
