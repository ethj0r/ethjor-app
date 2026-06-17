import VerifiedBadge from "@/components/VerifiedBadge";

export default function Navbar() {
  return (
    <div
      style={{
        position: "fixed",
        top: 16,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
      }}
    >
      <div
        className="glass-dark"
        style={{
          borderRadius: 999,
          padding: "6px 6px 6px 14px",
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <VerifiedBadge size={18} />
          <span style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: 19, letterSpacing: "-0.01em" }}>ethjor</span>
        </div>
        <nav style={{ display: "flex", gap: 22, fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.88)" }}>
          <a href="#about" style={{ textDecoration: "none" }}>About</a>
          <a href="#work" style={{ textDecoration: "none" }}>Work</a>
          <a href="#research" style={{ textDecoration: "none" }}>Research</a>
        </nav>
        <button className="cta-pill" style={{ padding: "8px 16px", fontSize: 13 }}>Connect</button>
      </div>
    </div>
  );
}
