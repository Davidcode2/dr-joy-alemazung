"use client";

import { Equal, X } from "lucide-react";
import { useEffect, useState } from "react";
import MenuItems from "./menuItems";

export default function MobileMenu({ locale }: { locale: string }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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

  return (
    <>
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
    </>
  );
}
