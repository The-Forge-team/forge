import { createFileRoute } from '@tanstack/react-router';
import LoginPage from '@/Pages/auth/Login';

export const Route = createFileRoute('/')({
  component: LoginPage,
});
