import React from "react";
import { Link } from "react-router-dom";
import { useBike } from "../context/BikeContext";
import StatCard from "../components/StatCard";

export default function Home() {
  const { state, kmToNextService, oilChangeDue } = useBike();

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 transition-all duration-500">
      {/* 🌟 Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-stretch gap-10">
        {/* LEFT PANEL */}
        <div className="relative flex-1 overflow-hidden rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200 shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-6 sm:p-10 transition-all duration-300 hover:shadow-[0_12px_45px_rgba(0,0,0,0.08)]">
          {/* Decorative gradients */}
          <div className="absolute -top-20 -right-24 w-96 h-96 bg-gradient-to-br from-emerald-300/40 to-sky-300/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-[28rem] h-[28rem] bg-gradient-to-tr from-sky-200/50 to-emerald-200/40 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col gap-8 sm:gap-10">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-100 to-sky-100 border border-emerald-200 text-sm text-emerald-700 font-semibold w-max shadow-sm">
              ⚡ Live Bike Health • PWA
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-center sm:text-left">
                <span className="text-slate-800">Your bike,</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
                  monitored like a superbike.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto sm:mx-0 text-center sm:text-left">
                Track your bike’s performance, mileage, and health in real time — even{" "}
                <span className="text-emerald-600 font-semibold">offline</span>.  
                Install the app and elevate your connected riding experience.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center sm:justify-start">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-sky-400 text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
              >
                <span>Open Dashboard</span>
                <span className="text-lg">→</span>
              </Link>

              <Link
                to="/profile"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl border border-slate-300 bg-white hover:bg-slate-100 text-sm text-slate-700 font-semibold shadow-sm transition-all duration-300"
              >
                View Rider & Bike
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                📲 <span>Installable on Android & iOS</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                🚀 <span>Works seamlessly offline</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                🧠 <span>Smart health insights</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL - STATS */}
        <div className="flex-1 space-y-6 sm:space-y-8">
          <div className="rounded-3xl bg-white border border-slate-200 shadow-[0_6px_25px_rgba(0,0,0,0.05)] p-6 sm:p-8 flex flex-col gap-8 backdrop-blur-lg hover:shadow-[0_8px_35px_rgba(0,0,0,0.07)] transition-all duration-300">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-4 sm:gap-6 text-center sm:text-left">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">
                  Health Snapshot
                </div>
                <div className="text-lg font-bold text-slate-800 mt-1">
                  {state.bike.model} • {state.bike.number}
                </div>
              </div>
              <div>
                <div className="text-slate-500 text-sm font-medium">Overall Score</div>
                <div className="text-4xl font-extrabold text-emerald-600 tracking-tight">
                  {state.metrics.overallHealthScore}%
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <StatCard
                label="Total Distance"
                value={state.metrics.totalKmRun.toLocaleString("en-IN")}
                suffix="km"
                sub="Since tracking began"
              />
              <StatCard
                label="Mileage"
                value={state.metrics.mileageKmPerLitre}
                suffix="km/L"
                accent="sky"
                sub="Real-world conditions"
              />
              <StatCard
                label="Next Service"
                value={kmToNextService <= 0 ? "Due now" : kmToNextService}
                suffix={kmToNextService <= 0 ? "" : "km"}
                accent="violet"
                sub={`Scheduled on ${state.maintenance.nextServiceDate}`}
              />
              <StatCard
                label="Oil Health"
                value={oilChangeDue ? "Change now" : "Good"}
                accent={oilChangeDue ? "violet" : "emerald"}
                sub={oilChangeDue ? "Service immediately" : "Within safe limits"}
              />
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 pt-2 text-center sm:text-left">
              <span>Optimized for your PWA experience.</span>
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                View All Metrics <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="pt-14 text-center text-sm text-slate-500 leading-relaxed">
        Designed for <span className="font-semibold text-slate-700">Next-Gen Riders</span>  
        • React + Vite • Tailwind • PWA • Offline-Ready
      </div>
    </section>
  );
}
