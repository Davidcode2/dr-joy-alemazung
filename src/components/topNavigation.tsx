"use client";
import { useEffect, useState } from "react";
import MenuItems from "@/src/components/menuItems";
import { Equal, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

export default function TopNavigation() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showMobileMenu]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && showMobileMenu) {
        setShowMobileMenu(false);
        document.body.style.overflow = "unset";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showMobileMenu]);

  const toggleTheme = () => {
    if (theme!.includes("dark"))
      document.documentElement.classList.remove("dark");
    else {
      document.documentElement.classList.add("dark");
    }

    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="m-4 flex">
      {showMobileMenu && (
        <div className="p-4 md:hidden block mb-4 h-screen fixed inset-0 bg-background)">
          <div
            className="md:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <X />
          </div>
          <MenuItems mobile={true} close={() => setShowMobileMenu(false)} />
        </div>
      )}
      <div
        className="md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <Equal />
      </div>
      <div className="md:block hidden">
        <MenuItems />
      </div>
      <div className="ml-auto" onClick={toggleTheme}>
        <Sun />
      </div>
    </div>
  );
}
