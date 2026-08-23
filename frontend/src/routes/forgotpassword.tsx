import { createFileRoute } from "@tanstack/react-router";
import ForgotPasswordPage from "@/pages/auth/ForgotPassword";       

export const Route = createFileRoute("/forgotpassword")({
    component: ForgotPasswordPage,
})