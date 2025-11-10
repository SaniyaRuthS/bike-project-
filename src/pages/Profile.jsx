import React from "react";
import { useBike } from "../context/BikeContext";

export default function Profile() {
  const { state } = useBike();

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 space-y-10 bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 transition-all duration-500">
      {/* 👤 Rider Card */}
      <div className="rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-200 shadow-[0_10px_35px_rgba(0,0,0,0.06)] p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center md:items-start transition-all duration-500 hover:shadow-[0_12px_45px_rgba(0,0,0,0.08)]">
        {/* Avatar */}
        <div className="relative w-28 h-28 rounded-3xl bg-gradient-to-br from-emerald-500 via-sky-400 to-cyan-500 flex items-center justify-center text-5xl text-white font-semibold shadow-[0_10px_30px_rgba(16,185,129,0.3)]">
          🧑‍💻
          <div className="absolute inset-0 rounded-3xl border border-white/30" />
        </div>

        {/* Info */}
        <div className="flex-1 space-y-4">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">
              Rider Profile
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mt-1">
              {state.owner.name}
            </h2>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-gradient-to-r from-emerald-50 to-sky-50 border border-slate-200 rounded-2xl p-3">
              <div className="text-slate-500 text-xs font-medium mb-1">Email</div>
              <div className="font-semibold text-slate-800">{state.owner.email}</div>
            </div>
            <div className="bg-gradient-to-r from-sky-50 to-emerald-50 border border-slate-200 rounded-2xl p-3">
              <div className="text-slate-500 text-xs font-medium mb-1">Phone</div>
              <div className="font-semibold text-slate-800">{state.owner.phone}</div>
            </div>
          </div>

          <p className="text-xs text-slate-500 leading-relaxed">
            This profile doubles as a *digital visiting card* inside your PWA portfolio.
            You can also extend it with editable fields, profile images, or social links for
            a truly interactive showcase.
          </p>
        </div>
      </div>

      {/* 🏍️ Bike Information */}
      <div className="rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-200 shadow-[0_10px_35px_rgba(0,0,0,0.06)] p-6 sm:p-8 space-y-6 transition-all duration-500 hover:shadow-[0_12px_45px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">
              Bike Details
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mt-1">
              {state.bike.model}
            </h2>
          </div>
          <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-100 to-sky-100 border border-emerald-200 text-sm font-semibold text-emerald-700 shadow-sm">
            {state.bike.number}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 text-sm">
          <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-4 shadow-inner hover:shadow-md transition-all">
            <div className="text-slate-500 text-xs font-medium mb-1">Year</div>
            <div className="font-semibold text-slate-800">{state.bike.year}</div>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-emerald-50 border border-slate-200 rounded-2xl p-4 shadow-inner hover:shadow-md transition-all">
            <div className="text-slate-500 text-xs font-medium mb-1">
              Total Distance
            </div>
            <div className="font-semibold text-slate-800">
              {state.metrics.totalKmRun.toLocaleString("en-IN")} km
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-sky-50 border border-slate-200 rounded-2xl p-4 shadow-inner hover:shadow-md transition-all">
            <div className="text-slate-500 text-xs font-medium mb-1">Mileage</div>
            <div className="font-semibold text-slate-800">
              {state.metrics.mileageKmPerLitre} km/L
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed">
          Extend this to support **multiple bikes**, export as PDF, or generate a
          **mechanic-shareable link**. These enhancements can make your portfolio project
          stand out in professional demos.
        </p>
      </div>

      {/* 🏁 Footer */}
      <div className="text-center text-sm text-slate-500 pt-6">
        Built for <span className="font-semibold text-slate-800">Next-Gen Riders</span> •
        Full-Stack PWA • React + Tailwind + Vite
      </div>
    </section>
  );
}
