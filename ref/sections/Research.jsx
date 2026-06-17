"use client";

import { useEffect, useState } from "react";

const PAPERS = [
  {
    id: "tx",
    tab: "Transformer Compression",
    venue: "STEI ITB · Dec 2025",
    title: "Efficient Transformer Compression in Pre‑trained Language Models Through Selective Tensor Rank Reduction",
    abstract:
      "A geometric approach to compressing large transformer models through selective rank reduction of weight tensors, preserving accuracy while significantly reducing parameter count.",
    tags: ["Model Compression", "NLP", "Tensor Decomposition", "Low Rank Approx", "Linear Algebra"],
    preview: "tx",
  },
  {
    id: "kg",
    tab: "KG Anomaly Detection",
    venue: "STEI ITB · 2024",
    title: "Anomaly Detection in AI Knowledge Graphs: A Discrete Mathematical Framework Against Graph Poisoning",
    abstract:
      "A discrete‑mathematics‑based framework for detecting adversarial perturbations in knowledge graphs used by AI systems, defending against graph poisoning attacks.",
    tags: ["Knowledge Graphs", "AI Security", "Discrete Math", "Graph Theory", "Anomaly Detection"],
    preview: "kg",
  },
];

function PaperPreview({ kind }) {
  if (kind === "tx") {
    return (
      <div
        style={{
          width: "100%",
          aspectRatio: "1/1",
          borderRadius: 16,
          overflow: "hidden",
          background: "linear-gradient(135deg,#0b1638,#1E4FD8)",
          position: "relative",
        }}
      >
        <svg viewBox="0 0 200 200" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          {[...Array(7)].map((_, i) =>
            [...Array(7)].map((__, j) => (
              <rect key={`${i}-${j}`} x={20 + i * 24} y={20 + j * 24} width="16" height="16" fill="#7fb0ff" opacity={0.15 + ((i + j) % 3) * 0.25} />
            ))
          )}
          <path d="M30 20 L170 180" stroke="#fff" strokeWidth="2" opacity="0.5" />
          <path d="M170 20 L30 180" stroke="#fff" strokeWidth="2" opacity="0.5" />
        </svg>
        <div style={{ position: "absolute", left: 14, bottom: 12, fontFamily: "var(--serif)", fontSize: 18, fontWeight: 500 }}>
          rank · k
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "1/1",
        borderRadius: 16,
        overflow: "hidden",
        background: "linear-gradient(135deg,#1a0b38,#3a1a8a)",
        position: "relative",
      }}
    >
      <svg viewBox="0 0 200 200" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        {[
          [60, 50],
          [140, 40],
          [160, 110],
          [100, 170],
          [40, 140],
          [120, 100],
          [80, 90],
        ].map(([x, y], i, a) =>
          a.slice(i + 1).map(([x2, y2], j) => (
            <line key={`${i}-${j}`} x1={x} y1={y} x2={x2} y2={y2} stroke="#fff" strokeOpacity="0.18" />
          ))
        )}
        {[
          [60, 50, "#7fb0ff"],
          [140, 40, "#7fb0ff"],
          [160, 110, "#7fb0ff"],
          [100, 170, "#ff7a7a"],
          [40, 140, "#7fb0ff"],
          [120, 100, "#7fb0ff"],
          [80, 90, "#7fb0ff"],
        ].map(([x, y, c], i) => (
          <circle key={i} cx={x} cy={y} r="9" fill={c} stroke="#fff" strokeWidth="2" />
        ))}
      </svg>
      <div
        style={{
          position: "absolute",
          right: 14,
          top: 12,
          fontSize: 10,
          fontWeight: 600,
          color: "#ff7a7a",
          background: "rgba(0,0,0,0.4)",
          padding: "3px 8px",
          borderRadius: 999,
        }}
      >
        POISONED
      </div>
    </div>
  );
}

function FadeKey({ k, children }) {
  const [shown, setShown] = useState(k);
  const [child, setChild] = useState(children);
  const [vis, setVis] = useState(true);
  useEffect(() => {
    if (k === shown) {
      setChild(children);
      return;
    }
    setVis(false);
    const t = setTimeout(() => {
      setShown(k);
      setChild(children);
      setVis(true);
    }, 180);
    return () => clearTimeout(t);
  }, [k, children, shown]);
  return (
    <div
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(6px)",
        transition: "opacity .22s ease, transform .22s ease",
      }}
    >
      {child}
    </div>
  );
}

export default function Research() {
  const [active, setActive] = useState(PAPERS[0].id);
  const cur = PAPERS.find((p) => p.id === active);
  return (
    <section
      id="research"
      className="sec"
      style={{
        padding: "120px 24px 40px",
        position: "relative",
        background: "linear-gradient(180deg, #2453DE 0%, #2C5BE5 30%, #4D7FE8 100%)",
      }}
    >
      <div className="eyebrow">Research</div>
      <h2 className="h2">Papers &amp; writing</h2>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 26 }}>
        <div className="glass-light glass-pill" style={{ padding: 6, display: "inline-flex", gap: 4, position: "relative" }}>
          {PAPERS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              style={{
                position: "relative",
                padding: "8px 16px",
                borderRadius: 999,
                background: active === p.id ? "rgba(255,255,255,0.22)" : "transparent",
                border: active === p.id ? "1px solid rgba(255,255,255,0.35)" : "1px solid transparent",
                boxShadow:
                  active === p.id
                    ? "0 6px 16px rgba(80,140,255,0.35), inset 0 1px 0 rgba(255,255,255,0.4)"
                    : "none",
                color: active === p.id ? "#fff" : "rgba(255,255,255,0.6)",
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "var(--sans)",
                transition: "background .25s ease, color .25s ease, box-shadow .25s ease, border-color .25s ease",
              }}
            >
              {p.tab}
            </button>
          ))}
        </div>
      </div>

      <div
        className="glass-light"
        style={{
          maxWidth: 980,
          margin: "28px auto 0",
          borderRadius: 24,
          padding: 32,
          display: "grid",
          gridTemplateColumns: "minmax(220px, 0.7fr) 1.3fr",
          gap: 28,
          alignItems: "start",
        }}
      >
        <FadeKey k={cur.id + "-p"}>
          <PaperPreview kind={cur.preview} />
        </FadeKey>
        <FadeKey k={cur.id + "-t"}>
          <div>
            <div
              className="glass-light glass-pill"
              style={{
                display: "inline-block",
                padding: "4px 10px",
                fontSize: 10.5,
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {cur.venue}
            </div>
            <h3
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 600,
                fontSize: 22,
                lineHeight: 1.3,
                margin: "14px 0 12px",
                color: "#fff",
                textWrap: "pretty",
              }}
            >
              {cur.title}
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: "rgba(255,255,255,0.82)", margin: 0 }}>{cur.abstract}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16 }}>
              {cur.tags.map((t) => (
                <div
                  key={t}
                  style={{
                    padding: "4px 10px",
                    borderRadius: 999,
                    fontSize: 11,
                    fontWeight: 500,
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: "rgba(255,255,255,0.88)",
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20 }}>
              <a
                className="glass-light glass-pill"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "7px 14px",
                  fontSize: 12.5,
                  fontWeight: 500,
                  textDecoration: "none",
                  color: "#fff",
                }}
                href="#"
              >
                Read paper →
              </a>
            </div>
          </div>
        </FadeKey>
      </div>
    </section>
  );
}
