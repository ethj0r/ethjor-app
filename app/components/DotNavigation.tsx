"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "experiences", label: "Experiences" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
];

export default function DotNavigation() {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const most = visible.reduce((a, b) =>
            a.intersectionRatio > b.intersectionRatio ? a : b
          );
          setActiveId(most.target.id);
        }
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 md:flex md:flex-col md:gap-3 lg:right-7">
      {sections.map(({ id, label }) => {
        const isActive = activeId === id;
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="group relative flex items-center justify-end"
            aria-label={`Scroll to ${label}`}
          >
            {/* Tooltip */}
            <span
              className="absolute right-6 whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              style={{
                background: 'var(--foreground)',
                color: 'var(--background)',
              }}
            >
              {label}
            </span>

            {/* Dot */}
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: isActive ? "10px" : "6px",
                height: isActive ? "10px" : "6px",
                backgroundColor: isActive
                  ? "var(--foreground)"
                  : "var(--text-muted)",
                opacity: isActive ? 1 : 0.4,
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
