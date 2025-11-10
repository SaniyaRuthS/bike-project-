import React from "react";

export default function StatCard({ label, value, suffix, accent = "emerald", sub }) {
  const accentColors = {
    emerald: {
      gradient: "from-emerald-500 to-sky-400",
      text: "text-emerald-600",
      glow: "shadow-[0_0_25px_rgba(16,185,129,0.25)]",
    },
    violet: {
      gradient: "from-violet-500 to-fuchsia-400",
      text: "text-violet-600",
      glow: "shadow-[0_0_25px_rgba(139,92,246,0.25)]",
    },
    sky: {
      gradient: "from-sky-500 to-cyan-400",
      text: "text-sky-600",
      glow: "shadow-[0_0_25px_rgba(14,165,233,0.25)]",
    },
  };

  const c = accentColors[accent] || accentColors.emerald;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200 hover:border-transparent shadow-[0_5px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.07)] transition-all duration-300 group`}
    >
      {/* Gradient border accent */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${c.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
      />

      {/* Content */}
      <div className="relative p-5 sm:p-6 flex flex-col gap-2 z-10">
        {/* Label */}
        <div className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">
          {label}
        </div>

        {/* Value */}
        <div
          className={`text-3xl sm:text-4xl font-extrabold bg-gradient-to-r ${c.gradient} bg-clip-text text-transparent drop-shadow-sm group-hover:scale-[1.04] transition-transform duration-300 ease-out`}
        >
          {value}
          {suffix && (
            <span className="text-slate-500 text-lg ml-1 align-super">{suffix}</span>
          )}
        </div>

        {/* Subtext */}
        {sub && <div className="text-xs text-slate-500 font-medium mt-1">{sub}</div>}
      </div>

      {/* Glow effect (on hover) */}
      <div
        className={`absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 ${c.glow} transition-opacity duration-500`}
      ></div>
    </div>
  );
}
