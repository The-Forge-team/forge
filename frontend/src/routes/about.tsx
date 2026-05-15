import { createFileRoute } from '@tanstack/react-router';
import About from '@/Pages/sections/About.tsx';

export const Route = createFileRoute('/about')({
  component: About,
});
