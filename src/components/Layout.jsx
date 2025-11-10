import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-800 flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20 px-4 sm:px-6 lg:px-10 pb-10">{children}</main>
    </div>
  );
}
