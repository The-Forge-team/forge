import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/Pages/HomePage.tsx";       

export const Route = createFileRoute("/homepage")({
    component: HomePage,
})
