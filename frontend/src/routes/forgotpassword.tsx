import { createFileRoute } from "@tanstack/react-router";
import ForgotPasswordPage from "@/Pages/auth/ForgotPassword.tsx";       

export const Route = createFileRoute("/forgotpassword")({
    component: ForgotPasswordPage,
})