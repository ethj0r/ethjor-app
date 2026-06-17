import Stars from "@/components/Stars";

export default function BlackBlock() {
  return (
    <section
      className="sec"
      style={{
        padding: "0 24px 60px",
        background: "linear-gradient(180deg, #1E4FD8 0%, #2453DE 100%)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          background: "#000",
          borderRadius: 24,
          minHeight: 360,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "60px 24px",
          boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Stars count={40} />
        <div style={{ position: "relative" }}>
          <div style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(26px,3.4vw,36px)", lineHeight: 1.15 }}>
            Click to see more projects
          </div>
          <div style={{ marginTop: 10, color: "rgba(255,255,255,0.6)", fontSize: 13 }}>
            Enable camera for an immersive experience
          </div>
          <div style={{ marginTop: 24 }}>
            <button className="cta-pill" style={{ padding: "10px 22px" }}>
              Enable Camera
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
