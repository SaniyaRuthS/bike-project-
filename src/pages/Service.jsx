import React from "react";
import { useBike } from "../context/BikeContext";

export default function Service() {
  const { state, kmToNextService, oilChangeDue } = useBike();

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 space-y-10 bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 transition-all duration-500">
      {/* 🔧 Service & Oil Overview */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* 🧭 Service Timeline */}
        <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200 shadow-[0_8px_35px_rgba(0,0,0,0.05)] p-6 sm:p-8 transition-all duration-500 hover:shadow-[0_10px_45px_rgba(0,0,0,0.08)]">
          <div className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">
            Service Timeline
          </div>
          <h2 className="text-xl font-bold text-slate-800 mt-1">
            Upcoming Service Window
          </h2>

          <div className="mt-4 space-y-2 text-sm text-slate-600 leading-relaxed">
            <p>
              Last service completed at{" "}
              <span className="font-semibold text-emerald-600">
                {state.maintenance.lastServiceKm} km
              </span>{" "}
              with an interval of{" "}
              <span className="font-semibold">
                {state.maintenance.serviceIntervalKm} km
              </span>
              .
            </p>
            <p>
              Next service is planned for{" "}
              <span className="font-semibold text-sky-600">
                {state.maintenance.nextServiceDate}
              </span>
              .
            </p>
          </div>

          <div className="mt-5 text-sm">
            {kmToNextService <= 0 ? (
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-rose-100 to-rose-200 border border-rose-300 text-rose-700 font-medium shadow-sm">
                <span className="text-lg">⚠️</span>
                <span>Service overdue — schedule immediately.</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-100 to-sky-100 border border-emerald-300 text-emerald-700 font-medium shadow-sm">
                <span className="text-lg">✅</span>
                <span>{kmToNextService} km remaining before next service.</span>
              </div>
            )}
          </div>
        </div>

        {/* 🛢️ Oil & Consumables */}
        <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200 shadow-[0_8px_35px_rgba(0,0,0,0.05)] p-6 sm:p-8 transition-all duration-500 hover:shadow-[0_10px_45px_rgba(0,0,0,0.08)]">
          <div className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">
            Oil & Consumables
          </div>
          <h2 className="text-xl font-bold text-slate-800 mt-1">
            Engine Oil Health
          </h2>

          <div className="mt-4 text-sm text-slate-600 leading-relaxed">
            <p>
              Oil was last changed at{" "}
              <span className="font-semibold text-emerald-600">
                {state.maintenance.lastOilChangeKm} km
              </span>{" "}
              with an interval of{" "}
              <span className="font-semibold">
                {state.maintenance.oilChangeIntervalKm} km
              </span>
              .
            </p>
          </div>

          <div className="mt-5 text-sm">
            {oilChangeDue ? (
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-100 to-amber-200 border border-amber-300 text-amber-700 font-medium shadow-sm">
                <span className="text-lg">🛢️</span>
                <span>Oil change recommended now for best performance.</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-100 to-sky-100 border border-emerald-300 text-emerald-700 font-medium shadow-sm">
                <span className="text-lg">🛢️</span>
                <span>Oil is within safe running limits.</span>
              </div>
            )}
          </div>

          <ul className="mt-5 text-xs text-slate-500 space-y-1.5">
            <li>• Add brake pad, chain lube, and coolant reminders as future fields.</li>
            <li>• Can later integrate SMS / WhatsApp service reminders.</li>
          </ul>
        </div>
      </div>

      {/* 📋 Offline Notes */}
      <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200 shadow-[0_8px_35px_rgba(0,0,0,0.05)] p-6 sm:p-8 space-y-4 transition-all duration-500 hover:shadow-[0_10px_45px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">
            Offline Notes
          </div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-sky-100 to-emerald-100 border border-slate-200 text-[11px] text-slate-700 font-medium">
            📝 Data stored in localStorage
          </span>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          As a PWA, all service data is cached directly on the device. You can open this
          dashboard in the workshop even with no internet — simply record readings and sync
          later when online.
        </p>

        <p className="text-xs text-slate-500 leading-relaxed">
          For your portfolio, highlight that you built a{" "}
          <span className="text-emerald-600 font-semibold">
            mobile-installable, offline-first app
          </span>{" "}
          using React, Vite, Tailwind, and a custom service worker for persistence.
        </p>
      </div>

      {/* Footer Tagline */}
      <div className="text-center text-sm text-slate-500 pt-6">
        Built with 💚 by <span className="font-semibold text-slate-700">Varghese G T</span> •
        Full-Stack PWA Dashboard • IoT-Ready Integration
      </div>
    </section>
  );
}
