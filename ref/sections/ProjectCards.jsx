"use client";
import { useEffect, useRef } from "react";

function VoxelithMock() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 30%, #1b2438, #060912 70%)", color: "#cfe1ff", padding: 14 }}>
      <svg viewBox="0 0 200 160" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <defs>
          <radialGradient id="vg" cx="50%" cy="40%">
            <stop offset="0%" stopColor="#3D75FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3D75FF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="80" r="60" fill="url(#vg)" />
        {[...Array(8)].map((_, i) => (
          <ellipse key={i} cx="100" cy="80" rx={50} ry={50 * Math.cos((i * Math.PI) / 8)} stroke="#7fb0ff" strokeOpacity="0.35" fill="none" />
        ))}
        {[...Array(8)].map((_, i) => (
          <ellipse key={"v" + i} cx="100" cy="80" rx={50 * Math.cos((i * Math.PI) / 8)} ry={50} stroke="#7fb0ff" strokeOpacity="0.35" fill="none" />
        ))}
      </svg>
      <div style={{ position: "absolute", bottom: 12, left: 12, right: 12, display: "flex", gap: 8, alignItems: "flex-end" }}>
        {[14, 28, 18, 42, 30, 52, 38, 60].map((h, i) => (
          <div key={i} style={{ flex: 1, height: h, background: "linear-gradient(180deg,#7fb0ff,#3D75FF)", borderRadius: 2, opacity: 0.85 }} />
        ))}
      </div>
    </div>
  );
}

function EigenMock() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,#dbe6f5,#a8bdde)", padding: 12, color: "#1d2433", fontFamily: "var(--sans)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "70px 1fr", gap: 8, height: "100%" }}>
        <div style={{ background: "rgba(255,255,255,0.55)", borderRadius: 8, padding: 8, fontSize: 8, lineHeight: 1.6 }}>
          <div style={{ fontWeight: 700, fontSize: 9, marginBottom: 4 }}>Topics</div>
          {["Algebra", "ML", "Systems", "Algorithms", "Physics"].map((t) => (
            <div key={t} style={{ opacity: 0.75 }}>
              {t}
            </div>
          ))}
        </div>
        <div>
          <div style={{ background: "rgba(255,255,255,0.85)", borderRadius: 6, height: 18, marginBottom: 6, padding: "4px 8px", fontSize: 8.5 }}>
            🔍 search 12,402 papers
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }}>
            {["#3D75FF", "#7fb0ff", "#FFD27A", "#ffffff", "#A5D8F0", "#C9B6FF"].map((c, i) => (
              <div key={i} style={{ aspectRatio: "3/4", background: c, borderRadius: 4, boxShadow: "0 2px 6px rgba(0,0,0,0.15)" }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ClearoMock() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#fafafa", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      <div
        style={{
          fontFamily: '"Brush Script MT","Apple Chancery",cursive',
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: 54,
          color: "#0c0c0c",
          letterSpacing: "-0.04em",
          transform: "rotate(-4deg)",
        }}
      >
        FOCUS
      </div>
      <div style={{ marginTop: 10, fontFamily: "var(--sans)", fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", color: "#777" }}>
        25:00 · POMODORO
      </div>
    </div>
  );
}

function GrodditMock() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "#0b0d10",
        color: "#9ef79e",
        fontFamily: 'ui-monospace, "SF Mono", monospace',
        fontSize: 9,
        padding: "14px 12px",
        lineHeight: 1.45,
      }}
    >
      <div style={{ color: "#ffffff", opacity: 0.7 }}>$ groddit ~ /jordhy</div>
      <div>&gt; loading reddit-tui v0.4.2 ...</div>
      <div style={{ color: "#7ed1ff" }}>r/cscareerquestions  ▲ 4.2k</div>
      <div style={{ color: "#ffffff", opacity: 0.85 }}>  ITB student lands first internship</div>
      <div style={{ color: "#7ed1ff" }}>r/MachineLearning   ▲ 1.8k</div>
      <div style={{ color: "#ffffff", opacity: 0.85 }}>  Compressing transformers</div>
      <div style={{ position: "absolute", right: 14, bottom: 14, display: "grid", gridTemplateColumns: "repeat(6, 6px)", gap: 1 }}>
        {"001100011110111111101111111001100110".split("").map((b, i) => (
          <div key={i} style={{ width: 6, height: 6, background: b === "1" ? "#9ef79e" : "transparent" }} />
        ))}
      </div>
    </div>
  );
}

const PROJECTS = [
  { id: "voxelith", label: "VOXELITH", render: <VoxelithMock /> },
  { id: "eigen", label: "EIGEN PUSTAKA", render: <EigenMock /> },
  { id: "clearo", label: "CLEARO", render: <ClearoMock /> },
  { id: "groddit", label: "GRODDIT", render: <GrodditMock /> },
];

export default function ProjectCards() {
  const loop = [...PROJECTS, ...PROJECTS];
  const trackRef = useRef(null);
  const hoverRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const BASE_SPEED = 80;
    const HOVER_RATIO = 0.22;
    const EASE = 3.2;

    let pos = 0;
    let speed = BASE_SPEED;
    let halfWidth = 0;
    let lastT = performance.now();
    let raf = 0;

    const measure = () => {
      halfWidth = track.scrollWidth / 2;
    };
    measure();

    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    ro?.observe(track);
    window.addEventListener("resize", measure);

    const tick = (t) => {
      const dt = Math.min((t - lastT) / 1000, 0.05);
      lastT = t;
      const target = (hoverRef.current ? HOVER_RATIO : 1) * BASE_SPEED;
      speed += (target - speed) * (1 - Math.exp(-EASE * dt));
      pos -= speed * dt;
      if (halfWidth > 0 && -pos >= halfWidth) pos += halfWidth;
      track.style.transform = `translate3d(${pos}px, 0, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame((t) => {
      lastT = t;
      tick(t);
    });

    return () => {
      cancelAnimationFrame(raf);
      ro?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section
      className="sec"
      onMouseEnter={() => {
        hoverRef.current = true;
      }}
      onMouseLeave={() => {
        hoverRef.current = false;
      }}
      style={{
        padding: "40px 0 60px",
        position: "relative",
        background: "linear-gradient(180deg, #4576E0 0%, #2C5BE5 100%)",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative" }}>
        <div className="proj-track" ref={trackRef}>
          {loop.map((c, i) => (
            <div
              key={c.id + "-" + i}
              className="proj-card"
              style={{
                flex: "0 0 auto",
                width: "min(360x, 26vw)",
                aspectRatio: "5/4",
                borderRadius: 16,
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 22px 50px rgba(5,15,40,0.35), 0 4px 10px rgba(0,0,0,0.2)",
              }}
            >
              {c.render}
              <div
                style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  background: "rgba(0,0,0,0.55)",
                  color: "#fff",
                  padding: "4px 9px",
                  borderRadius: 999,
                  fontSize: 9.5,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  backdropFilter: "blur(8px)",
                }}
              >
                {c.label}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "22%",
            pointerEvents: "none",
            background: "linear-gradient(180deg, #4576E0 0%, #2C5BE5 100%)",
            maskImage: "linear-gradient(90deg, #000 0%, rgba(0,0,0,0.92) 25%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.2) 80%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(90deg, #000 0%, rgba(0,0,0,0.92) 25%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.2) 80%, transparent 100%)",
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "22%",
            pointerEvents: "none",
            background: "linear-gradient(180deg, #4576E0 0%, #2C5BE5 100%)",
            maskImage: "linear-gradient(270deg, #000 0%, rgba(0,0,0,0.92) 25%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.2) 80%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(270deg, #000 0%, rgba(0,0,0,0.92) 25%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.2) 80%, transparent 100%)",
            zIndex: 2,
          }}
        />
      </div>
    </section>
  );
}
