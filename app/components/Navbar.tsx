"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);
  const pastHero = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const heroThreshold = window.innerHeight * 0.75;
      const scrollingDown = currentY > lastScrollY.current;

      pastHero.current = currentY > heroThreshold;

      // Only show when past hero AND scrolling down
      // Hide when scrolling up or still in hero
      setVisible(pastHero.current && scrollingDown);

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-4 right-4 z-50 md:top-6 md:right-6 lg:top-8 lg:right-8"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-12px)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <Link
        href="https://linkedin.com/in/ethjor"
        target="_blank"
        rel="noopener noreferrer"
        className="cluely-btn"
      >
        {/* LinkedIn icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[14px] w-[14px] md:h-4 md:w-4"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        <span className="hidden md:inline">Connect with me</span>
        <span className="md:hidden">Connect</span>
      </Link>
    </div>
  );
}
