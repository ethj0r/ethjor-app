"use client";

import { useEffect, useRef, useState } from "react";
import CursorArrow from "./CursorArrow";
import YouPill from "./YouPill";

export default function LiveCursor() {
  const ref = useRef(null);
  const target = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) {
      setEnabled(false);
      return;
    }
    setEnabled(true);
    let raf;
    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.22;
      pos.current.y += (target.current.y - pos.current.y) * 0.22;
      if (ref.current) ref.current.style.transform = `translate3d(${pos.current.x}px,${pos.current.y}px,0)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;
  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
        display: "flex",
        alignItems: "flex-start",
        gap: 4,
        willChange: "transform",
      }}
    >
      <CursorArrow size={16} />
      <div style={{ marginLeft: -2, marginTop: 14 }}>
        <YouPill />
      </div>
    </div>
  );
}
