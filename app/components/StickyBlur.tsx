"use client";

import { useEffect, useState } from "react";

export default function StickyBlur() {
  const [atFooter, setAtFooter] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setAtFooter(entry.isIntersecting),
      { rootMargin: "0px 0px -1px 0px" }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 pointer-events-none z-50"
      style={{
        height: "150px",
        opacity: atFooter ? 0 : 1,
        transition: "opacity 0.3s ease",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(50px)",
          WebkitBackdropFilter: "blur(20px)",
          maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)",
        }}
      />
    </div>
  );
}
