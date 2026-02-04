"use client";

import { useState, useEffect } from "react";

const themes = ["light", "dark", "blue-light", "blue-dark"] as const;
type Theme = (typeof themes)[number];

export default function TestingThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<Theme>("light");

  // Initialize theme from document's data-theme attribute on first render
  useEffect(() => {
    const existingTheme = document.documentElement.getAttribute("data-theme") as Theme | null;
    if (existingTheme && themes.includes(existingTheme)) {
      setCurrentTheme(existingTheme);
    } else {
      // Initialize with default
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    
    // Set the data-theme attribute on the document element
    document.documentElement.setAttribute("data-theme", nextTheme);
    setCurrentTheme(nextTheme);
  };

  return (
    <button
      onClick={cycleTheme}
      className="px-3 py-1 text-sm border border-(--grey-accent)/50 rounded cursor-pointer hover:bg-(--ultralight-accent)/50 transition"
    >
      Theme: {currentTheme}
    </button>
  );
}