import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "@tanstack/react-router";
import ForgeLogo from "@/assets/forge-logo.png";

interface NavLink {
  label: string;
  href: string;
}


const NAV_LINKS: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Gamification", href: "#gamification" },
  { label: "Community", href: "#community" },
  { label: "Pricing", href: "/pricing" },
];


function NavLinks({ activeSection }: { activeSection: string }) {
  return (
    <nav className="flex items-center gap-0.5 md:gap-2 flex-nowrap min-w-0">
      {NAV_LINKS.map(({ label, href }) => {
        const isActive = activeSection === label.toLowerCase();
        return (
          <a
            key={label}
            href={href}
            className={`relative px-1 py-0.5 text-[8px] md:px-3 md:py-1 md:text-sm rounded-sm md:rounded-xl transition-colors duration-200 whitespace-nowrap ${
              isActive
                ? "text-white"
                : "text-zinc-700 hover:text-[#0f766e] hover:underline"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 bg-white/[0.07] rounded-xl"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative">{label}</span>
          </a>
        );
      })}
    </nav>
  );
}

function AuthButtons({ onNavigate, compact = true }: { onNavigate?: () => void; compact?: boolean }) {
  const navigate = useNavigate();

  const go = (to: "/login" | "/signup") => {
    navigate({ to });
    onNavigate?.();
  };

  const size = compact
    ? "text-[7px] px-2 py-2 rounded-sm"
    : "text-sm px-4 py-2 rounded-lg";

  return (
    <div className="flex items-center gap-4 md:gap-4 shrink-0">
      <motion.button
        onClick={() => go("/login")}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`${size} font-medium text-zinc-700 hover:text-white border border-white/0.08 hover:border-[#0f766e] hover:bg-[#0f766e] transition-all whitespace-nowrap cursor-pointer`}
      >
        Log In
      </motion.button>

      <motion.button
        onClick={() => go("/signup")}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`${size} relative inline-flex items-center font-semibold text-white overflow-hidden group whitespace-nowrap cursor-pointer`}
      >
        <span className="absolute inset-0 bg-[#0f766e] transition-opacity duration-300" />
        <span className="relative flex items-center gap-0.5 md:gap-1">
          Sign Up
          <FiArrowRight className={`${compact ? "text-[7px]" : "text-xs"} transition-transform duration-200 group-hover:translate-x-0.5`} />
        </span>
      </motion.button>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  // Close menu on Escape key or click/tap outside the header
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onPointerDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // NOTE - remove logo background
  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-white/10 backdrop-blur-xl border-b border-white/0.06"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-0 md:gap-4">
          <img
            src={ForgeLogo}
            alt="Forge Icon"
            className="h-15 w-15 md:h-15 md:w-15"
          />

          {/* Desktop links & auth */}
          <div className="hidden md:block">
            <NavLinks activeSection={activeSection} />
          </div>
          <div className="hidden md:block">
            <AuthButtons />
          </div>

          {/* Mobile hamburger (animates into an X when open) */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden text-zinc-700 hover:text-[#0f766e] transition-colors cursor-pointer p-1.5"
          >
            <span className="relative block h-5 w-6">
              <motion.span
                className="absolute left-0 top-0 h-0.5 w-full rounded-full bg-current"
                animate={menuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 26 }}
              />
              <motion.span
                className="absolute left-0 top-[9px] h-0.5 w-full rounded-full bg-current"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="absolute left-0 bottom-0 h-0.5 w-full rounded-full bg-current"
                animate={menuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 26 }}
              />
            </span>
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white/95 dark:bg-[#0F1115]/95 backdrop-blur-xl border-t border-white/0.06 px-4 sm:px-6 py-4 flex flex-col gap-1"
            >
              {NAV_LINKS.map(({ label, href }) => {
                const isActive = activeSection === label.toLowerCase();
                return (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive
                        ? "text-[#0f766e] bg-[#0f766e]/10 font-medium"
                        : "text-zinc-700 dark:text-zinc-300 hover:text-[#0f766e] hover:bg-[#0f766e]/5"
                    }`}
                  >
                    {label}
                  </a>
                );
              })}
              <div className="mt-3 pt-4 border-t border-white/0.06 flex justify-center">
                <AuthButtons compact={false} onNavigate={() => setMenuOpen(false)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
