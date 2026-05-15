import { useState, useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { TbGridDots } from 'react-icons/tb';

// FORGE Logo Component
const DotworkLogo = ({ className }: { className?: string }) => (
  <div className="flex items-center gap-2 mb-6">
    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
      <TbGridDots size={18} color="white" />
    </div>
    <span
      className={`text-green-800 font-semibold text-4xl tracking-tight ${className || ''}`}
    >
      Forge
    </span>
  </div>
);

export default function About() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div
          className={`relative max-w-4xl mx-auto text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 mt-8">
            Building the Future in <span className="text-primary"> Forge</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Inspired by the fast-paced nature of modern social platforms, Forge
            is a tech-centered social platform built for builders, learners, and
            innovators. Whether you’re a beginner exploring your first
            programming language or an experienced engineer sharing insights
            with the community, Forge gives your growth a place to be seen.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card border border-border rounded-3xl p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-primary/5" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Find your tech family on FORGE.
              </p>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => navigate({ to: '/signup' })}
                  className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto flex md:flex-row items-center justify-center gap-4 ">
          <DotworkLogo className="text-sm " />

          <p className="text-sm text-muted-foreground pb-4.5">
            © 2026 FORGE. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
