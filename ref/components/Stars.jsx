"use client";

import { useMemo } from "react";

export default function Stars({ count = 80 }) {
  const stars = useMemo(() => {
    let s = 9301;
    const r = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
    return Array.from({ length: count }, () => ({
      left: r() * 100,
      top: r() * 100,
      size: r() < 0.85 ? 1 : 2,
      o: 0.3 + r() * 0.7,
      d: 2 + r() * 4,
      delay: r() * 5,
    }));
  }, [count]);
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {stars.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            background: "#fff",
            opacity: s.o,
            animation: `twinkle ${s.d}s ease-in-out ${s.delay}s infinite`,
            "--o": s.o,
          }}
        />
      ))}
    </div>
  );
}
