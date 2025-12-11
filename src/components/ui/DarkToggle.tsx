"use client";

import { useEffect, useState } from "react";

export default function DarkToggle() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "dark") return true;
      if (saved === "light") return false;
    } catch {}
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
    try { localStorage.setItem("theme", isDark ? "dark" : "light"); } catch {}
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(v => !v)}
      aria-pressed={isDark}
      className="px-3 py-1 rounded-md border text-sm flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800"
    >
      <span>{isDark ? "🌙 Dark" : "☀️ Light"}</span>
    </button>
  );
}
