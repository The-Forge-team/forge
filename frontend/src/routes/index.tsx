import { createFileRoute } from "@tanstack/react-router";
import LoginPage from "../Pages/Login";

export const Route = createFileRoute("/")({
  component: LoginPage,
});