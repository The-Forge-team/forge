import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  { label: "Explore", href: "#explore" },
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
                : "text-zinc-700 hover:text-green-800 hover:underline"
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

function AuthButtons() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-2 md:gap-2 shrink-0">
      <motion.button
        onClick={() => navigate({ to: "/" })}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="text-[7px] md:text-sm font-medium text-zinc-700 hover:text-white px-1 py-0.5 md:px-3 md:py-1 rounded-sm md:rounded-xl border border-white/0.08 hover:border-green-500 hover:bg-green-500 transition-all whitespace-nowrap cursor-pointer"
      >
        Log In
      </motion.button>

      <motion.button
        onClick={() => navigate({ to: "/signup" })}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="relative inline-flex items-center gap-0 md:gap-1 text-[7px] md:text-sm font-semibold text-white px-1 py-0.5 md:px-3 md:py-1 rounded-sm md:rounded-xl overflow-hidden group whitespace-nowrap cursor-pointer"
      >
        <span className="absolute inset-0 bg-linear-to-r from-green-300 to-green-600" />
        <span className="absolute inset-0 bg-green-700 transition-opacity duration-300" />
        <span className="relative flex items-center gap-0.5 md:gap-1">
          Sign Up
          <FiArrowRight className="text-[7px] md:text-xs transition-transform duration-200 group-hover:translate-x-0.5" />
        </span>
      </motion.button>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
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
          <NavLinks activeSection={activeSection} />
          <AuthButtons />
        </div>
      </motion.header>
    </>
  );
}
