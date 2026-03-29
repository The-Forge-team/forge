import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbGridDots, TbFlame, TbTrophy, TbCode, TbBrandPython, TbBrandReact } from "react-icons/tb";
import { BsPeopleFill, BsLightningFill, BsPatchCheckFill } from "react-icons/bs";
import { SiTypescript, SiRust, SiGoland } from "react-icons/si";
import { HiSparkles } from "react-icons/hi";
import { FiArrowUp, FiMessageSquare, FiGitBranch } from "react-icons/fi";
import { RiMedalLine } from "react-icons/ri";

// ─── Slide 1: Connect with your tribe ──────────────────────────────────────
const Slide1 = () => (
  <div className="flex flex-col items-center justify-center w-full">
    <div className="relative mb-8" style={{ width: "300px", height: "270px" }}>

      {/* Central hub node */}
      <div
        className="absolute flex items-center justify-center rounded-full shadow-xl z-10"
        style={{
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "58px", height: "58px",
          background: "rgba(255,255,255,0.2)",
          backdropFilter: "blur(10px)",
          border: "2px solid rgba(255,255,255,0.4)",
        }}
      >
        <TbGridDots size={26} color="white" />
      </div>

      {/* Orbiting profile cards */}
      {[
        { top: "0px",    left: "30px",  role: "Dev",    color: "bg-blue-400",   icon: <TbCode size={13} color="white" />,       label: "Full-Stack" },
        { top: "0px",    right: "20px", role: "Design", color: "bg-pink-400",   icon: <HiSparkles size={13} color="white" />,    label: "UI/UX" },
        { bottom: "10px",left: "10px",  role: "Data",   color: "bg-yellow-400", icon: <TbBrandPython size={13} color="white" />, label: "Data Eng" },
        { bottom: "10px",right: "20px", role: "PM",     color: "bg-purple-400", icon: <BsPeopleFill size={13} color="white" />,  label: "Prod. Mgr" },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute flex items-center gap-2 rounded-xl px-2.5 py-2 shadow-lg"
          style={{
            ...(p.top    !== undefined ? { top:    p.top    } : {}),
            ...(p.bottom !== undefined ? { bottom: p.bottom } : {}),
            ...(p.left   !== undefined ? { left:   p.left   } : {}),
            ...(p.right  !== undefined ? { right:  p.right  } : {}),
            background: "rgba(255,255,255,0.13)",
            backdropFilter: "blur(8px)",
            border: "1.5px solid rgba(255,255,255,0.25)",
            minWidth: "110px",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.12, duration: 0.4 }}
        >
          <div className={`w-7 h-7 rounded-full ${p.color} flex items-center justify-center shrink-0`}>
            {p.icon}
          </div>
          <div>
            <div className="text-[10px] font-bold text-white leading-tight">{p.role}</div>
            <div className="text-[9px] text-green-200 leading-tight">{p.label}</div>
          </div>
        </motion.div>
      ))}

      {/* Connecting lines */}
      <svg className="absolute inset-0" width="300" height="270" viewBox="0 0 300 270" fill="none">
        {["M80 30 L150 135","M230 30 L150 135","M50 230 L150 135","M240 230 L150 135"].map((d, i) => (
          <motion.path
            key={i} d={d}
            stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="4 4"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          />
        ))}
      </svg>
    </div>

    <div className="text-center">
      <h2 className="text-2xl font-bold mb-2">Connect with your tribe.</h2>
      <p className="text-green-200 text-sm leading-relaxed max-w-xs">
        Developers, designers, PMs, and data engineers — all in one purposeful space.
      </p>
    </div>
  </div>
);

// ─── Slide 2: Level up as you contribute ───────────────────────────────────
const Slide2 = () => (
  <div className="flex flex-col items-center justify-center w-full">
    <div className="relative mb-8" style={{ width: "300px", height: "270px" }}>

      {/* Leaderboard card */}
      <div
        className="absolute rounded-2xl shadow-2xl overflow-hidden"
        style={{
          top: "0px", left: "50%", transform: "translateX(-50%)",
          width: "220px", background: "white",
        }}
      >
        <div
          className="px-4 py-2.5 flex items-center gap-2 border-b border-gray-100"
          style={{ background: "linear-gradient(90deg, #14532d, #16a34a)" }}
        >
          <TbTrophy size={16} color="#fbbf24" />
          <span className="text-xs font-bold text-white">Top Contributors</span>
          <span className="ml-auto text-[10px] text-green-200">This week</span>
        </div>

        {[
          { medal: "🥇", name: "Ade B.",    xp: "4,820 XP", color: "bg-yellow-400", bar: 95 },
          { medal: "🥈", name: "Chisom O.", xp: "3,910 XP", color: "bg-gray-300",   bar: 78 },
          { medal: "🥉", name: "Kwame A.",  xp: "3,240 XP", color: "bg-orange-300", bar: 65 },
        ].map((u, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-2 px-3 py-2 border-b border-gray-50"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.12 }}
          >
            <span className="text-sm">{u.medal}</span>
            <div className={`w-6 h-6 rounded-full ${u.color} shrink-0`} />
            <div className="flex-1">
              <div className="flex justify-between mb-0.5">
                <span className="text-[10px] font-semibold text-gray-700">{u.name}</span>
                <span className="text-[9px] text-green-600 font-bold">{u.xp}</span>
              </div>
              <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #16a34a, #4ade80)" }}
                  initial={{ width: 0 }}
                  animate={{ width: `${u.bar}%` }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.7 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Streak badge */}
      <motion.div
        className="absolute flex items-center gap-1.5 rounded-xl px-3 py-2 shadow-lg"
        style={{
          bottom: "20px", left: "0px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(8px)",
          border: "1.5px solid rgba(255,255,255,0.3)",
        }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <TbFlame size={18} color="#fb923c" />
        <div>
          <div className="text-xs font-bold text-white">14-day streak</div>
          <div className="text-[9px] text-green-200">Keep it going 🔥</div>
        </div>
      </motion.div>

      {/* XP badge */}
      <motion.div
        className="absolute flex items-center gap-1.5 rounded-xl px-3 py-2 shadow-lg"
        style={{
          bottom: "20px", right: "0px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(8px)",
          border: "1.5px solid rgba(255,255,255,0.3)",
        }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <BsLightningFill size={16} color="#facc15" />
        <div>
          <div className="text-xs font-bold text-white">+120 XP</div>
          <div className="text-[9px] text-green-200">Post earned</div>
        </div>
      </motion.div>
    </div>

    <div className="text-center">
      <h2 className="text-2xl font-bold mb-2">Level up as you contribute.</h2>
      <p className="text-green-200 text-sm leading-relaxed max-w-xs">
        Earn XP, build streaks, and climb the leaderboard — growth is always visible.
      </p>
    </div>
  </div>
);

// ─── Slide 3: Share code. Get recognized. ──────────────────────────────────
const Slide3 = () => (
  <div className="flex flex-col items-center justify-center w-full">
    <div className="relative mb-8" style={{ width: "300px", height: "270px" }}>

      {/* Post card */}
      <div
        className="absolute rounded-2xl shadow-2xl overflow-hidden"
        style={{ top: "0px", left: "50%", transform: "translateX(-50%)", width: "230px", background: "white" }}
      >
        {/* Author */}
        <div className="flex items-center gap-2 px-3 pt-3 pb-2">
          <div className="w-8 h-8 rounded-full bg-blue-400 shrink-0 flex items-center justify-center">
            <TbBrandReact size={16} color="white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <span className="text-[11px] font-bold text-gray-800">Temi A.</span>
              <BsPatchCheckFill size={10} color="#16a34a" />
            </div>
            <span className="text-[9px] text-gray-400">Frontend Engineer · Lvl 12</span>
          </div>
        </div>

        {/* Code snippet */}
        <div className="mx-3 mb-2 rounded-lg overflow-hidden" style={{ background: "#1e1e2e" }}>
          <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-white/10">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <span className="text-[9px] text-gray-400 ml-1">useDebounce.ts</span>
          </div>
          <div className="px-3 py-2 font-mono text-[9px] leading-relaxed">
            <span className="text-purple-400">const </span>
            <span className="text-blue-300">useDebounce </span>
            <span className="text-gray-400">= (</span>
            <span className="text-orange-300">value</span>
            <span className="text-gray-400">, </span>
            <span className="text-orange-300">delay</span>
            <span className="text-gray-400">{`) => {`}</span>
            <br />
            <span className="text-gray-500">{"  "}// debounce logic...</span>
            <br />
            <span className="text-gray-400">{`}`}</span>
          </div>
        </div>

        {/* Tech tags */}
        <div className="flex gap-1.5 px-3 pb-2 flex-wrap">
          {[
            { icon: <TbBrandReact size={10} color="#61dafb" />, label: "React" },
            { icon: <SiTypescript size={9} color="#3178c6" />,  label: "TypeScript" },
          ].map((tag, i) => (
            <span key={i} className="flex items-center gap-1 text-[9px] font-medium bg-gray-100 text-gray-600 rounded-full px-2 py-0.5">
              {tag.icon} {tag.label}
            </span>
          ))}
        </div>

        {/* Engagement bar */}
        <div className="flex items-center gap-3 px-3 pb-2.5 border-t border-gray-50 pt-2">
          <span className="flex items-center gap-1 text-[10px] text-gray-500">
            <FiArrowUp size={11} className="text-green-500" />
            <span className="font-semibold text-green-600">248</span>
          </span>
          <span className="flex items-center gap-1 text-[10px] text-gray-500">
            <FiMessageSquare size={10} /> 34
          </span>
          <span className="flex items-center gap-1 text-[10px] text-gray-500">
            <FiGitBranch size={10} /> 12 forks
          </span>
          <span className="ml-auto flex items-center gap-1 text-[9px] font-bold text-yellow-600">
            <RiMedalLine size={11} /> Top Post
          </span>
        </div>
      </div>

      {/* Trending tech badge */}
      <motion.div
        className="absolute flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 shadow-lg"
        style={{
          bottom: "20px", left: "-5px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(8px)",
          border: "1.5px solid rgba(255,255,255,0.3)",
        }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <SiRust size={14} color="#f97316" />
        <SiGoland size={14} color="#00acd7" />
        <TbBrandPython size={14} color="#facc15" />
        <span className="text-[9px] text-green-200 ml-1">Trending</span>
      </motion.div>

      {/* XP earned badge */}
      <motion.div
        className="absolute flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 shadow-lg"
        style={{
          bottom: "20px", right: "-5px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(8px)",
          border: "1.5px solid rgba(255,255,255,0.3)",
        }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <HiSparkles size={13} color="#facc15" />
        <span className="text-xs font-bold text-white">+80 XP</span>
      </motion.div>
    </div>

    <div className="text-center">
      <h2 className="text-2xl font-bold mb-2">Share code. Get recognized.</h2>
      <p className="text-green-200 text-sm leading-relaxed max-w-xs">
        Post snippets, spark discussions, and earn XP every time you teach the community something new.
      </p>
    </div>
  </div>
);

// Slide config
const slides = [Slide1, Slide2, Slide3];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:  (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

// Main RightPanel
export default function AuthImage() {
  const [[current, dir], setCurrent] = useState([0, 1]);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent(([c]) => [(c + 1) % slides.length, 1]);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  const goTo = (index: number) => {
    setCurrent(([c]) => [index, index > c ? 1 : -1]);
  };

  const SlideComponent = slides[current];

  return (
    <div
      className="hidden md:flex flex-1 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #14532d 0%, #16a34a 50%, #22c55e 100%)" }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="rounded-full opacity-20"
          style={{
            width: "420px", height: "420px",
            background: "radial-gradient(circle, #4ade80 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Slides */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-10 text-white">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={current}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="w-full flex flex-col items-center"
          >
            <SlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} className="focus:outline-none">
            <motion.div
              animate={{ width: i === current ? 20 : 8, opacity: i === current ? 1 : 0.4 }}
              transition={{ duration: 0.3 }}
              className="h-2 rounded-full bg-white"
            />
          </button>
        ))}
      </div>
    </div>
  );
}