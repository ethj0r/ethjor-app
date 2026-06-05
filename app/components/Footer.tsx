import VerifiedBadge from "./VerifiedBadge";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="flex flex-wrap items-end justify-between gap-4 bg-[#2A2A2A] px-6 pb-8 pt-14 md:px-8"
    >
      <div className="flex items-center gap-2">
        <VerifiedBadge size={16} />
        <span style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: 18, color: "#fff" }}>
          Jordhy
        </span>
      </div>
      <div
        className="flex items-center gap-3.5 uppercase"
        style={{
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.15em",
          color: "rgba(255,255,255,0.82)",
        }}
      >
        <a
          href="https://github.com/ethj0r"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline transition-colors hover:text-white"
        >
          GitHub
        </a>
        <span style={{ opacity: 0.45 }}>|</span>
        <a
          href="https://linkedin.com/in/ethjor"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline transition-colors hover:text-white"
        >
          LinkedIn
        </a>
        <span style={{ opacity: 0.45 }}>|</span>
        <a
          href="mailto:ethgalleryin@gmail.com"
          className="no-underline transition-colors hover:text-white"
        >
          Email
        </a>
        <span style={{ opacity: 0.45 }}>|</span>
        <span style={{ opacity: 0.6 }}>Jordhy 2026</span>
      </div>
    </footer>
  );
}
