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
      style={{
        position: "fixed",
        top: 16,
        left: "50%",
        transform: visible ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-12px)",
        zIndex: 100,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.4s ease, transform 0.4s ease",
      }}
    >
      <div
        className="glass-dark"
        style={{
          borderRadius: 999,
          padding: "6px 6px 6px 14px",
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <VerifiedBadge size={18} />
          <span style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: 19, letterSpacing: "-0.01em" }}>ethjor</span>
        </div>
        <nav style={{ display: "flex", gap: 22, fontSize: 13, fontWeight: 500, color: "#ffffff" }}>
          <a href="#experiences" style={{ textDecoration: "none" }}>Experiences</a>
          <a href="#publications" style={{ textDecoration: "none" }}>Papers</a>
          <a href="#projects" style={{ textDecoration: "none" }}>Projects</a>
        </nav>
        <button className="cta-pill" style={{ padding: "8px 16px", fontSize: 13 }}>Connect</button>
      </div>
    </div>
  );
}
