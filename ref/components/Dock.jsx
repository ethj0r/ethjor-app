"use client";

import { useEffect, useRef, useState } from "react";

const DOCK_ITEMS = [
  {
    id: "gh",
    bg: "#24292e",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" width="60%" height="60%" fill="#fff">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.55 4.56-1.52 7.85-5.83 7.85-10.9C23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    id: "in",
    bg: "#0a66c2",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" width="60%" height="60%" fill="#fff">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zM8.6 8h4.37v1.91h.06c.61-1.16 2.11-2.39 4.34-2.39 4.64 0 5.5 3.06 5.5 7.04V22h-4.56v-6.51c0-1.55-.03-3.55-2.16-3.55-2.16 0-2.49 1.69-2.49 3.43V22H8.6V8z" />
      </svg>
    ),
  },
  {
    id: "mail",
    bg: "linear-gradient(135deg,#ea4335,#fbbc05)",
    label: "Email",
    icon: (
      <svg viewBox="0 0 24 24" width="60%" height="60%" fill="#fff">
        <path d="M2 5.5C2 4.67 2.67 4 3.5 4h17c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-17C2.67 20 2 19.33 2 18.5v-13zm2.4 0 7.6 5.7 7.6-5.7H4.4zM20 7.4l-7.4 5.55a1 1 0 0 1-1.2 0L4 7.4V18h16V7.4z" />
      </svg>
    ),
  },
  {
    id: "cal",
    bg: "#fff",
    fg: "#ea3939",
    label: "Calendar",
    icon: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#ea3939",
          fontFamily: "var(--sans)",
          lineHeight: 1,
        }}
      >
        <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: "0.08em" }}>NOV</div>
        <div style={{ fontSize: 22, fontWeight: 700, marginTop: 1 }}>12</div>
      </div>
    ),
  },
  {
    id: "pdf",
    bg: "linear-gradient(180deg,#fff,#e6ebf4)",
    label: "Resume",
    icon: (
      <svg viewBox="0 0 24 24" width="58%" height="58%">
        <path fill="#1E4FD8" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
        <path fill="#fff" opacity="0.4" d="M14 2v6h6" />
        <text x="12" y="17" textAnchor="middle" fontFamily="Inter" fontSize="6" fontWeight="700" fill="#fff">
          PDF
        </text>
      </svg>
    ),
  },
  {
    id: "dc",
    bg: "#5865F2",
    label: "Discord",
    icon: (
      <svg viewBox="0 0 24 24" width="62%" height="62%" fill="#fff">
        <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.249a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.249.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.04.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.029zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
];

function DockIcon({ item, mouseX, onHover, active, hoverable }) {
  const ref = useRef(null);
  const [size, setSize] = useState(44);
  const [ty, setTy] = useState(0);
  useEffect(() => {
    if (!hoverable || !ref.current) {
      setSize(44);
      setTy(0);
      return;
    }
    const r = ref.current.getBoundingClientRect();
    const d = mouseX - (r.x + r.width / 2);
    const t = Math.max(-140, Math.min(140, d));
    const f = 1 - Math.abs(t) / 140;
    setSize(44 + 16 * f);
    setTy(-8 * f);
  }, [mouseX, hoverable]);
  return (
    <div
      ref={ref}
      style={{
        width: size,
        height: size,
        transform: `translateY(${ty}px)`,
        transition:
          "width 180ms cubic-bezier(.2,.8,.2,1), height 180ms cubic-bezier(.2,.8,.2,1), transform 180ms cubic-bezier(.2,.8,.2,1)",
        position: "relative",
      }}
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 12,
          background: item.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 14px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
        }}
      >
        {item.icon}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "calc(100% + 12px)",
          left: "50%",
          transform: `translateX(-50%) translateY(${active ? 0 : 6}px)`,
          opacity: active ? 1 : 0,
          transition: "opacity .18s ease, transform .18s ease",
          pointerEvents: "none",
          background: "rgba(0,0,0,0.78)",
          color: "#fff",
          padding: "4px 10px",
          borderRadius: 6,
          fontSize: 11,
          fontWeight: 500,
          whiteSpace: "nowrap",
          border: "1px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(8px)",
        }}
      >
        {item.label}
      </div>
    </div>
  );
}

export default function Dock() {
  const [mouseX, setMouseX] = useState(Infinity);
  const [hover, setHover] = useState(null);
  const [hoverable, setHoverable] = useState(false);
  useEffect(() => {
    setHoverable(window.matchMedia("(hover: hover)").matches);
  }, []);
  return (
    <div
      onMouseMove={(e) => hoverable && setMouseX(e.clientX)}
      onMouseLeave={() => setMouseX(Infinity)}
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: 6,
        padding: "8px 10px",
        background: "rgba(0,0,0,0.42)",
        backdropFilter: "blur(24px) saturate(160%)",
        WebkitBackdropFilter: "blur(24px) saturate(160%)",
        borderRadius: 20,
        border: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0 20px 40px rgba(0,20,60,0.4), inset 0 1px 0 rgba(255,255,255,0.18)",
      }}
    >
      {DOCK_ITEMS.map((item) => (
        <DockIcon key={item.id} item={item} mouseX={mouseX} onHover={setHover} hoverable={hoverable} active={hover === item.id} />
      ))}
    </div>
  );
}
