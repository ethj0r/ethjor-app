import VerifiedBadge from "@/components/VerifiedBadge";

export default function Footer() {
  return (
    <footer
      className="sec"
      style={{
        padding: "60px 32px 32px",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
        background: "linear-gradient(180deg, #5C8AED 0%, #6E97EF 100%)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <VerifiedBadge size={16} />
        <span style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: 18 }}>Jordhy</span>
      </div>
      <div
        style={{
          display: "flex",
          gap: 14,
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.15em",
          color: "rgba(255,255,255,0.82)",
          textTransform: "uppercase",
        }}
      >
        <a href="#" style={{ textDecoration: "none" }}>GitHub</a>
        <span style={{ opacity: 0.45 }}>|</span>
        <a href="#" style={{ textDecoration: "none" }}>LinkedIn</a>
        <span style={{ opacity: 0.45 }}>|</span>
        <a href="#" style={{ textDecoration: "none" }}>Email</a>
        <span style={{ opacity: 0.45 }}>|</span>
        <span style={{ opacity: 0.6 }}>Jordhy 2026</span>
      </div>
    </footer>
  );
}
