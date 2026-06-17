const STACK = ["REACT", "NEXT.JS", "PYTHON", "GO", "C++", "TYPESCRIPT", "POSTGRES", "TENSORFLOW", "FASTAPI", "NODE.JS"];

export default function Marquee() {
  return (
    <section
      className="sec"
      style={{
        padding: "60px 0",
        overflow: "hidden",
        position: "relative",
        background: "linear-gradient(180deg, #7FA8E0 0%, #5C8AED 60%, #4576E0 100%)",
      }}
    >
      <div
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="marquee-track">
          {[...STACK, ...STACK].map((s, i) => (
            <div
              key={i}
              style={{
                fontSize: 24,
                fontWeight: 600,
                letterSpacing: "0.04em",
                color: "rgba(255,255,255,0.82)",
                fontFamily: "var(--sans)",
                whiteSpace: "nowrap",
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
