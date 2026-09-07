'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-slate-200/20 dark:bg-slate-800/40 border border-amber-500/20 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle Light and Dark Theme"
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800/80 text-amber-600 dark:text-amber-400 border border-amber-500/30 hover:border-amber-400 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md group"
      title={isDark ? "Switch to Light Luxury Theme" : "Switch to Dark Luxury Theme"}
    >
      {isDark ? (
        <Sun className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45" />
      ) : (
        <Moon className="w-5 h-5 transition-transform duration-500 group-hover:-rotate-12" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
