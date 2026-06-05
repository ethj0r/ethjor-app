"use client";

import { useState, useEffect } from "react";
import VerifiedBadge from "./VerifiedBadge";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroThreshold = window.innerHeight * 0.75;
      setVisible(window.scrollY > heroThreshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed left-1/2 top-3 z-[100] w-[calc(100%-1.5rem)] max-w-[92vw] md:top-4 md:w-auto"
      style={{
        transform: visible ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-12px)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.4s ease, transform 0.4s ease",
      }}
    >
      <div className="glass-dark flex items-center justify-between gap-3 rounded-full py-1.5 pl-3.5 pr-1.5 md:justify-start md:gap-6 md:py-1.5 md:pl-3.5 md:pr-1.5">
        <div className="flex items-center gap-2">
          <VerifiedBadge size={18} />
          <span style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: 19, letterSpacing: "-0.01em" }}>ethjor</span>
        </div>
        <nav className="hidden items-center gap-5 text-[13px] font-medium text-white sm:flex md:gap-[22px]">
          <a href="#experiences" className="no-underline whitespace-nowrap">Experiences</a>
          <a href="#publications" className="no-underline">Papers</a>
          <a href="#projects" className="no-underline">Projects</a>
        </nav>
        <button className="cta-pill" style={{ padding: "8px 16px", fontSize: 13 }}>Connect</button>
      </div>
    </div>
  );
}
