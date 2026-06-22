import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

function StatCard({ value, suffix = "", label, delay = 0 }: StatCardProps) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000; // 2 seconds animation

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(value * progress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="text-center p-6 rounded-xl bg-linear-to-br from-emerald-50 to-cyan-50 border border-emerald-200 cursor-pointer hover:border-emerald-400 transition-colors"
    >
      <div className="text-4xl sm:text-5xl font-bold text-emerald-600 mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-slate-600 font-medium">{label}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <motion.section
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            By The Numbers
          </h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            Join a thriving community of tech professionals making real connections
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <StatCard value={1000} suffix="+" label="Professionals" delay={0} />
          <StatCard value={200} suffix="+" label="Meetups Hosted" delay={0.2} />
          <StatCard value={50} suffix="+" label="Cities" delay={0.4} />
          <StatCard value={10000} suffix="+" label="Projects Created" delay={0.6} />
        </div>
      </div>
    </motion.section>
  );
}
