import { useNavigate } from '@tanstack/react-router';
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
  <div className="flex items-center gap-2 ">
    <div className="w-6 h-6 bg-green-600 rounded-sm flex items-center justify-center">
      <TbGridDots size={16} color="white" />
    </div>
    <span className="text-green-800 font-semibold text-sm tracking-tight">Forge</span>
  </div>
);

export function Navbar({ action = defaultAction }: NavbarProps) {

  const navigate = useNavigate();

  return (
    <header className="  border-b border-border bg-background/80 backdrop-blur-sm p-4">
      <nav
        className=" flex  max-w-6xl justify-end text-left px-2 gap-2 mx-auto sm:px-6"
        aria-label="Main navigation"
      >
    

        <button onClick={() => navigate({ to: "/" })} 
          className="text-green-600 hover:text-green-700 font-semibold transition-colors hover:cursor-pointer">
              Log in
            </button>
        <DotworkLogo />
      </nav>
    </header>
  );
}
