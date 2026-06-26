import { FiZap, FiCode, FiUsers, FiTrendingUp, FiAward } from "react-icons/fi";

function WinningCard() {
  return (
    <div className="absolute top-4 right-0 z-20 w-40 rounded-2xl bg-[#0f0f1a]/95 border border-white/0.1 backdrop-blur-xl p-3.5 shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">🏆</span>
        <div>
          <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">
            Winning
          </p>
          <p className="text-white text-sm font-bold leading-none">Results</p>
        </div>
      </div>
      <div className="flex gap-1 mt-2">
        {["⭐", "⭐", "⭐"].map((s, i) => (
          <span key={i} className="text-xs">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Floating Card — Total Reach ───────────────────────────────────────────────

function ReachCard() {
  return (
    <div className="absolute -bottom-4 right-4 z-20 w-44 rounded-2xl bg-[#0f0f1a]/95 border border-white/0.1 backdrop-blur-xl p-4 shadow-2xl shadow-black/40">
      <p className="text-zinc-500 text-[10px] font-medium uppercase tracking-widest mb-1">
        Total Reach
      </p>
      <div className="flex items-end gap-2 mb-3">
        <span className="text-white text-2xl font-bold leading-none">
          2,420
        </span>
        <span className="text-emerald-400 text-xs font-medium mb-0.5 flex items-center gap-0.5">
          <FiTrendingUp className="text-[10px]" /> +40%
        </span>
      </div>
      {/* Bar chart */}
      <div className="flex items-end gap-1 h-8">
        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-linear-to-t from-blue-600 to-violet-500"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <p className="text-zinc-600 text-[10px] mt-1">vs last month</p>
    </div>
  );
}

// ── Avatar Visual ─────────────────────────────────────────────────────────────

export default function HeroImage() {
  return (
    <div className="relative overflow-hidden w-full max-w-90 mx-auto lg:mx-0 lg:ml-auto">
      {/* Main circle bg */}
      <div className="relative w-full aspect-square max-w-[320px] mx-auto">
        {/* Soft glow circle */}
        <div className="absolute inset-0 rounded-full bg-linear-to-br from-blue-500/20 to-violet-600/20 blur-2xl" />

        {/* Center avatar */}
        <div className="absolute inset-8 rounded-full bg-linear-to-br from-blue-500/30 to-violet-600/30 border border-white/10 flex items-center justify-center overflow-hidden">
          {/* Stylised dev avatar */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 rounded-full bg-linear-to-br from-blue-400 to-violet-600 flex items-center justify-center text-4xl font-bold text-white shadow-xl">
              K
            </div>
            <div className="text-center px-4">
              <p className="text-white text-sm font-bold">Kaito Dev</p>
              <p className="text-zinc-400 text-xs">@kaito_dev</p>
              {/* Stack tags */}
              <div className="flex gap-1 mt-2 justify-center flex-wrap">
                {["React", "TS", "Rust"].map((t) => (
                  <span
                    key={t}
                    className="text-[10px] bg-white/10 border border-white/10 text-zinc-300 px-2 py-0.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Orbiting icons */}
        {[
          {
            icon: <FiCode className="text-blue-400" />,
            top: "5%",
            left: "50%",
            translate: "-50%",
          },
          {
            icon: <FiAward className="text-amber-400" />,
            top: "50%",
            right: "0",
            translate: "0",
          },
          {
            icon: <FiUsers className="text-emerald-400" />,
            bottom: "5%",
            left: "50%",
            translate: "-50%",
          },
          {
            icon: <FiZap className="text-violet-400" />,
            top: "50%",
            left: "0",
            translate: "0",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="absolute w-10 h-10 rounded-2xl bg-[#0f0f1a]/90 border border-white/0.1 flex items-center justify-center shadow-lg"
            style={
              {
                top: item.top,
                left: item.left,
                right: item.right,
                bottom: item.bottom,
                transform: `translateY(-50%)`,
              } as React.CSSProperties
            }
          >
            {item.icon}
          </div>
        ))}
      </div>

      {/* Floating cards */}
      <WinningCard />
      <ReachCard />
    </div>
  );
}
