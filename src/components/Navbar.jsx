import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/service", label: "Service" },
    { to: "/profile", label: "Profile" }
  ];

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* 🌤️ Top Navbar (Desktop + Tablet) */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur-xl border-b border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-400 to-sky-400 flex items-center justify-center shadow-sm">
              <span className="text-xl">🏍️</span>
            </div>
            <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-600 to-sky-500 bg-clip-text text-transparent tracking-tight">
              Bike Health
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-all pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:rounded-full after:w-0 after:bg-gradient-to-r from-emerald-500 to-sky-400 after:transition-all after:duration-300 hover:after:w-full ${
                    isActive
                      ? "text-emerald-600 after:w-full"
                      : "text-slate-600 hover:text-emerald-600"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Install / Action Button (Desktop) */}
          <button
            onClick={() =>
              alert("📲 To install: Open in your mobile browser → Add to Home Screen")
            }
            className="hidden sm:inline-flex items-center px-5 py-2.5 text-sm rounded-xl bg-gradient-to-r from-emerald-500 to-sky-400 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
          >
            Install App
          </button>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* 📱 Mobile Slide Menu */}
      {menuOpen && (
        <div className="fixed top-[64px] left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-md sm:hidden z-30 animate-slide-down">
          <nav className="flex flex-col gap-2 py-4 px-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg text-base font-medium ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-100 to-sky-100 text-emerald-700"
                      : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button
              onClick={() =>
                alert("📲 To install: open in mobile browser → Add to Home Screen")
              }
              className="mt-2 w-full py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-sky-400 text-white font-semibold text-sm shadow hover:shadow-lg transition-all"
            >
              Install App
            </button>
          </nav>
        </div>
      )}

      {/* 🌈 Mobile Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-xl border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] sm:hidden flex justify-around items-center py-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs font-medium transition-all ${
                isActive
                  ? "text-emerald-600"
                  : "text-slate-500 hover:text-emerald-500"
              }`
            }
          >
            <span className="text-lg">⬤</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </>
  );
}
