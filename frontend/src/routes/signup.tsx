import { createFileRoute } from '@tanstack/react-router';
import Signup from '@/Pages/auth/Signup.tsx';

export const Route = createFileRoute('/signup')({
  component: Signup,
});
