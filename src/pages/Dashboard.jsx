import React from "react";
import { useBike } from "../context/BikeContext";
import StatCard from "../components/StatCard";
import HealthGauge from "../components/HealthGauge";

export default function Dashboard() {
  const { state } = useBike();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 space-y-10 bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 transition-all duration-500">
      {/* 📊 Metrics Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <StatCard
          label="Total Distance"
          value={state.metrics.totalKmRun.toLocaleString("en-IN")}
          suffix="km"
          accent="emerald"
        />
        <StatCard
          label="Trip Distance"
          value={state.metrics.tripDistanceKm}
          suffix="km"
          accent="sky"
        />
        <StatCard
          label="Avg Speed"
          value={state.metrics.averageSpeedKmph}
          suffix="km/h"
          accent="violet"
        />
        <StatCard
          label="Fuel Left"
          value={state.metrics.fuelLeftPercent}
          suffix="%"
          accent="amber"
        />
      </div>

      {/* 🚀 Live Riding Insights */}
      <div className="grid lg:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] gap-6">
        {/* Left Panel */}
        <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200 shadow-[0_8px_35px_rgba(0,0,0,0.05)] p-6 sm:p-8 transition-all duration-500 hover:shadow-[0_10px_45px_rgba(0,0,0,0.08)]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">
                Live Riding Insights
              </div>
              <div className="text-lg font-bold text-slate-800 mt-1">
                Performance Overview
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-500">Overall Health</div>
              <div className="text-3xl font-extrabold text-emerald-600">
                {state.metrics.overallHealthScore}%
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 text-sm text-slate-600">
            <ul className="space-y-2">
              <li>• Tracks average speed across your latest rides.</li>
              <li>• Calculates realistic mileage via ride history.</li>
              <li>• Predicts fuel usage using performance patterns.</li>
            </ul>
            <ul className="space-y-2">
              <li>• Built with scalable IoT sensor integration in mind.</li>
              <li>• Offline-first PWA — works with zero connectivity.</li>
              <li>• Designed for real-world, full-stack portfolios.</li>
            </ul>
          </div>
        </div>

        {/* Right Panel - Ride Mode */}
        <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200 shadow-[0_8px_35px_rgba(0,0,0,0.05)] p-6 sm:p-8 flex flex-col items-center justify-center transition-all duration-500 hover:shadow-[0_10px_45px_rgba(0,0,0,0.08)]">
          <div className="flex items-center justify-between w-full mb-5">
            <div className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">
              Ride Mode
            </div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-sky-100 to-emerald-100 border border-slate-200 text-[11px] text-slate-700 font-medium">
              <span className="text-base">🛰️</span> GPS Sync Ready
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 py-4">
            {/* Circular Speed Gauge */}
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 border-4 border-emerald-200 shadow-inner">
              <div className="absolute inset-[6px] rounded-full bg-gradient-to-br from-emerald-100 to-sky-100 border border-emerald-200"></div>
              <div className="relative z-10 text-center">
                <div className="text-[12px] text-slate-500">Avg Speed</div>
                <div className="text-3xl font-extrabold text-emerald-600">
                  {state.metrics.averageSpeedKmph}
                </div>
                <div className="text-[11px] text-slate-500">km/h</div>
              </div>
            </div>

            <p className="text-[12px] text-slate-500 text-center max-w-xs leading-relaxed">
              Speed, distance, and health data are cached locally — your dashboard stays
              live and responsive even offline.
            </p>
          </div>
        </div>
      </div>

      {/* ⚙️ Health Gauges */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
        <HealthGauge label="Engine Health" value={state.health.engine} />
        <HealthGauge label="Battery Health" value={state.health.battery} />
        <HealthGauge label="Tyre Condition" value={state.health.tyres} />
        <HealthGauge label="Brake Efficiency" value={state.health.brakes} />
      </div>

      {/* Footer Line */}
      <div className="text-center text-sm text-slate-500 pt-8">
        Built for <span className="font-semibold text-slate-700">Next-Gen Riders</span> •
        Full-stack PWA • Offline-Ready • IoT Future Integration
      </div>
    </section>
  );
}
