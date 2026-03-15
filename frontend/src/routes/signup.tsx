import { createFileRoute } from "@tanstack/react-router";
import SignUpPage from "../Pages/SignUpPage";

export const Route = createFileRoute("/signup")({
  component: SignUpPage,
});