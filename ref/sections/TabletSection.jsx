import Dock from "@/components/Dock";

function IPod() {
  return (
    <div
      style={{
        position: "absolute",
        left: "4%",
        top: "52%",
        width: 96,
        height: 160,
        transform: "rotate(-8deg)",
        "--rot": "-8deg",
        zIndex: 3,
      }}
      className="bob"
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg,#f3f3f3 0%,#d8d8d8 50%,#bcbcbc 100%)",
          borderRadius: 14,
          padding: 8,
          boxShadow: "0 18px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -2px 4px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <div
          style={{
            height: 62,
            borderRadius: 4,
            background: "linear-gradient(180deg,#1a2236,#2c3a55)",
            padding: "6px 8px",
            color: "#cfd8eb",
            fontFamily: "var(--sans)",
            fontSize: 8,
            boxShadow: "inset 0 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          <div style={{ fontWeight: 600, opacity: 0.9 }}>N</div>
          <div style={{ marginTop: 6, lineHeight: 1.2 }}>Jordhy’s Mix</div>
          <div style={{ opacity: 0.6 }}>2026 · Lo‑fi</div>
        </div>
        <div
          style={{
            width: 60,
            height: 60,
            margin: "2px auto 0",
            borderRadius: "50%",
            background: "radial-gradient(circle at 50% 35%,#ffffff,#cfcfcf 70%,#aaaaaa)",
            boxShadow: "inset 0 -2px 4px rgba(0,0,0,0.25), inset 0 2px 3px rgba(255,255,255,0.9)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "50% 0 0 50%",
              transform: "translate(-50%,-50%)",
              width: 22,
              height: 22,
              borderRadius: "50%",
              background: "linear-gradient(180deg,#e7e7e7,#bdbdbd)",
              boxShadow: "inset 0 1px 1px rgba(255,255,255,0.8), inset 0 -1px 2px rgba(0,0,0,0.25)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function FinderIcon() {
  return (
    <div
      style={{
        position: "absolute",
        right: "4%",
        top: "52%",
        width: 84,
        height: 84,
        transform: "rotate(8deg)",
        "--rot": "8deg",
        zIndex: 3,
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
      }}
      className="bob delay"
    >
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,#3FA7FF,#1E6DEF)" }} />
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "52%",
            background: "#fff",
            clipPath: "polygon(0 0, 100% 0, 65% 100%, 0 100%)",
          }}
        />
        <div style={{ position: "absolute", left: 22, top: 28, width: 5, height: 18, borderRadius: 3, background: "#000" }} />
        <div style={{ position: "absolute", left: 48, top: 28, width: 5, height: 18, borderRadius: 3, background: "#000" }} />
        <svg viewBox="0 0 84 84" style={{ position: "absolute", inset: 0 }}>
          <path d="M24 56 Q42 70 60 56" stroke="#000" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    </div>
  );
}

function TabletMockup() {
  return (
    <div
      className="tablet-tilt"
      style={{
        width: "min(880px, 92vw)",
        aspectRatio: "1.45/0.9",
        borderRadius: 22,
        padding: 10,
        background: "linear-gradient(160deg,#2A3540,#181f29)",
        boxShadow:
          "0 40px 80px rgba(5,15,40,0.55), 0 6px 16px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.12)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 14,
          left: "50%",
          transform: "translateX(-50%)",
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "#0b0d12",
          boxShadow: "inset 0 0 0 1px #2a2f38",
        }}
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 14,
          background: "linear-gradient(180deg,#f6f7fb,#e7ecf4)",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "130px 1fr",
          color: "#1d2433",
          fontFamily: "var(--sans)",
        }}
      >
        <aside
          style={{
            background: "linear-gradient(180deg,#eef2f8,#dfe6f1)",
            padding: "14px 10px",
            borderRight: "1px solid rgba(0,30,80,0.08)",
          }}
        >
          <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f56" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f" }} />
          </div>
          {["Recents", "Activity", "Modes", "Settings"].map((t, i) => (
            <div
              key={t}
              style={{
                padding: "6px 8px",
                borderRadius: 6,
                fontSize: 11,
                fontWeight: i === 2 ? 600 : 500,
                background: i === 2 ? "rgba(45,90,229,0.15)" : "transparent",
                color: i === 2 ? "#1E4FD8" : "#3b4761",
                marginBottom: 3,
              }}
            >
              {t}
            </div>
          ))}
          <div style={{ marginTop: 14, fontSize: 9, color: "#8893ad", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Library
          </div>
          {["Voxelith", "Eigen Pustaka", "Clearo"].map((t) => (
            <div key={t} style={{ padding: "5px 8px", fontSize: 10.5, color: "#3b4761" }}>
              {t}
            </div>
          ))}
        </aside>
        <main style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontFamily: "var(--serif)", fontSize: 15, fontWeight: 500, lineHeight: 1.25 }}>
            You’re already ahead, but even more ahead with <span style={{ color: "#1E4FD8" }}>Modes</span> in Voxelith.
          </div>
          <div style={{ display: "flex", gap: 6, fontSize: 9 }}>
            {["Search modes", "Recent", "Pinned", "Trending"].map((t, i) => (
              <div
                key={t}
                style={{
                  padding: "4px 8px",
                  borderRadius: 999,
                  background: i === 0 ? "#1E4FD8" : "rgba(0,20,60,0.06)",
                  color: i === 0 ? "#fff" : "#3b4761",
                  fontWeight: 500,
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, flex: 1 }}>
            {[
              { t: "Voxel", d: "3D engine for inspecting voxel volumes.", hue: "#dde6f7" },
              { t: "Recall", d: "Local-first knowledge graph search.", hue: "#e6e0f7" },
              { t: "Cluely", d: "Discreet AI coding companion.", hue: "#f5e4dd" },
            ].map((c) => (
              <div
                key={c.t}
                style={{
                  background: "#fff",
                  borderRadius: 8,
                  padding: 10,
                  border: "1px solid rgba(0,30,80,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <div style={{ height: 34, borderRadius: 6, background: c.hue }} />
                <div style={{ fontWeight: 600, fontSize: 10 }}>{c.t}</div>
                <div style={{ fontSize: 8.5, color: "#6b7593", lineHeight: 1.3 }}>{c.d}</div>
                <div style={{ marginTop: "auto", fontSize: 8.5, color: "#1E4FD8", fontWeight: 600 }}>Launch →</div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function TabletSection() {
  return (
    <section
      id="work"
      className="sec"
      style={{
        position: "relative",
        padding: "80px 24px 40px",
        background: "linear-gradient(180deg, #1E4FD8 0%, #6FA0E0 30%, #B8D1F0 55%, #C8DFF5 100%)",
      }}
    >
      <IPod />
      <FinderIcon />
      <div className="cloud" style={{ left: -160, top: 120 }} />
      <div className="cloud" style={{ right: -160, top: 60, transform: "scaleX(-1)" }} />
      <div className="cloud" style={{ left: -100, top: 380, transform: "scale(0.7)", opacity: 0.6 }} />
      <div className="cloud" style={{ right: -100, top: 430, transform: "scale(0.65) scaleX(-1)", opacity: 0.55 }} />

      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>
        <TabletMockup />
        <Dock />
        <div
          className="glass-light glass-pill"
          style={{
            padding: "5px 12px 5px 6px",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 11,
            fontWeight: 500,
          }}
        >
          <span
            style={{
              background: "#26C281",
              color: "#fff",
              padding: "2px 8px",
              borderRadius: 999,
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            New
          </span>
          <span style={{ color: "rgba(255,255,255,0.85)" }}>More work below…</span>
        </div>
      </div>
    </section>
  );
}
