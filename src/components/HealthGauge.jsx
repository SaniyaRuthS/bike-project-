import React from "react";

export default function HealthGauge({ label, value }) {
  const normalized = Math.max(0, Math.min(100, value));

  // Dynamic color and accent gradients based on value
  const getAccent = () => {
    if (normalized > 80)
      return {
        gradient: "from-emerald-400 via-emerald-500 to-sky-400",
        glow: "shadow-[0_0_25px_rgba(16,185,129,0.25)]",
        text: "text-emerald-600",
      };
    if (normalized > 60)
      return {
        gradient: "from-amber-300 via-amber-400 to-amber-500",
        glow: "shadow-[0_0_25px_rgba(251,191,36,0.25)]",
        text: "text-amber-600",
      };
    return {
      gradient: "from-rose-400 via-rose-500 to-pink-500",
      glow: "shadow-[0_0_25px_rgba(244,63,94,0.25)]",
      text: "text-rose-600",
    };
  };

  const { gradient, glow, text } = getAccent();

  return (
    <div className="relative rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200 shadow-[0_6px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.07)] transition-all duration-500 p-5 sm:p-6 overflow-hidden group">
      {/* Subtle background accent */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
      />

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-slate-700 tracking-wide">
          {label}
        </span>
        <span
          className={`text-lg font-bold ${text} drop-shadow-sm group-hover:scale-[1.05] transition-transform duration-300`}
        >
          {normalized}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="h-3 rounded-full bg-slate-200 overflow-hidden relative">
        <div
          className={`h-full bg-gradient-to-r ${gradient} ${glow} rounded-full transition-all duration-700 ease-out`}
          style={{ width: `${normalized}%` }}
        ></div>
      </div>

      {/* Labels below bar */}
      <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-medium">
        <span>Critical</span>
        <span>Optimal</span>
      </div>

      {/* Decorative reflection gradient */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
    </div>
  );
}
