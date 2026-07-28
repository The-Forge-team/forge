import { createFileRoute } from '@tanstack/react-router'
import Login from "@/Pages/auth/Login";

export const Route = createFileRoute('/login')({
  component: Login,
})