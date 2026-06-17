const CAPS_1 = ["SOFTWARE DESIGN", "DATA SCIENCE", "MACHINE LEARNING", "BACKEND SYSTEMS", "ALGORITHM DESIGN"];
const CAPS_2 = ["RESEARCH WRITING", "COMPETITIVE PROGRAMMING", "TECHNICAL LEADERSHIP", "OPEN SOURCE"];

function Pill({ t, active }) {
  return (
    <div
      style={{
        padding: "8px 14px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "#fff",
        background: active ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.10)",
        backdropFilter: "blur(20px) saturate(160%)",
        WebkitBackdropFilter: "blur(20px) saturate(160%)",
        border: `1px solid rgba(255,255,255,${active ? 0.4 : 0.18})`,
        boxShadow: active
          ? "0 6px 20px rgba(120,170,255,0.45), inset 0 1px 0 rgba(255,255,255,0.4)"
          : "0 4px 10px rgba(0,30,80,0.15), inset 0 1px 0 rgba(255,255,255,0.22)",
      }}
    >
      {t}
    </div>
  );
}

export default function Capabilities() {
  return (
    <section
      className="sec"
      style={{
        padding: "120px 24px 80px",
        position: "relative",
        background: "linear-gradient(180deg, #2C5BE5 0%, #1E4FD8 100%)",
      }}
    >
      <div className="eyebrow">What I build</div>
      <h2 className="h2">From research papers to production systems.</h2>
      <div style={{ maxWidth: 900, margin: "34px auto 0", display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
          {CAPS_1.map((t) => (
            <Pill key={t} t={t} active={t === "MACHINE LEARNING"} />
          ))}
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
          {CAPS_2.map((t) => (
            <Pill key={t} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
