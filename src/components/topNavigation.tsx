"use client";
import { useEffect, useState } from "react";
import MenuItems from "@/src/components/menuItems";
import { Equal, Globe, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

type TopNavigationProps = {
  locale: string;
};

export default function TopNavigation({ locale }: TopNavigationProps) {
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

  const toggleLanguage = () => {
    const newLocale = locale === "de-DE" ? "en" : "de-DE";
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newPath;
  }

  return (
    <div className="m-4 flex">
      {showMobileMenu && (
        <div className="p-4 md:hidden block mb-4 h-screen z-50 fixed inset-0 bg-background">
          <div
            className="md:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <X />
          </div>
          <MenuItems
            mobile={true}
            close={() => setShowMobileMenu(false)}
            locale={locale}
          />
        </div>
      )}
      <div
        className="md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <Equal />
      </div>
      <div className="md:block hidden">
        <MenuItems locale={locale} />
      </div>
      <div className="ml-auto">
        <ul className="flex gap-x-4">
          <li>
            <Globe onClick={toggleLanguage} />
          </li>
          <li onClick={toggleTheme}>
            {theme && theme!.includes("dark") ? <Sun /> : <Moon />}
          </li>
        </ul>
      </div>
    </div>
  );
}
