import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { TbGridDots } from 'react-icons/tb';
type NavbarAction = {
  label: string;
  to: '/' | '/signup' | '/about' | '/forgotpassword';
};

type NavbarProps = {
  action?: NavbarAction;
};

const defaultAction: NavbarAction = {
  label: 'Back to Sign In',
  to: '/',
};

const DotworkLogo = () => (
  <div className="flex items-center gap-2 mb-6">
    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
      <TbGridDots size={18} color="white" />
    </div>
    <span className="text-green-800 font-semibold text-sm tracking-tight">Forge</span>
  </div>
);

export function Navbar({ action = defaultAction }: NavbarProps) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm p-2">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Main navigation"
      >
        <DotworkLogo />
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate({ to: action.to })}
        >
          {action.label}
        </Button>
      </nav>
    </header>
  );
}
