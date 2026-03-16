import { createFileRoute } from "@tanstack/react-router";
import LoginPage from "@/pages/auth/Login.tsx";

export const Route = createFileRoute("/")({
  component: LoginPage,
});