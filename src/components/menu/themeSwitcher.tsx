"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme!.includes("dark"))
      document.documentElement.classList.remove("dark");
    else {
      document.documentElement.classList.add("dark");
    }

    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div onClick={toggleTheme}>
      {theme && theme!.includes("dark") ? <Sun strokeWidth={1.2} /> : <Moon strokeWidth={1.2} />}
    </div>
  );
}
