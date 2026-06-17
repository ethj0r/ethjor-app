const BUBBLES = [
  { side: "left", text: "Hey, saw your portfolio…" },
  { side: "right", text: "Glad you stopped by!" },
  { side: "left", text: "Got a project I’d love to chat about." },
  { side: "right", text: "Down to discuss. You free this week?" },
  { side: "left", text: "Let’s hop on a call." },
];

export default function ChatCTA() {
  return (
    <section
      className="sec"
      style={{
        padding: "80px 24px 120px",
        background: "linear-gradient(180deg, #4D7FE8 0%, #5C8AED 100%)",
      }}
    >
      <div style={{ maxWidth: 460, margin: "0 auto", display: "flex", flexDirection: "column", gap: 8 }}>
        {BUBBLES.map((b, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: b.side === "left" ? "flex-start" : "flex-end",
              animation: `bubbleIn 0.5s ease ${i * 0.12}s backwards`,
            }}
          >
            <div
              style={{
                maxWidth: 260,
                padding: "10px 14px",
                borderRadius: 18,
                background: b.side === "left" ? "#E5E5EA" : "#007AFF",
                color: b.side === "left" ? "#0a0a0a" : "#fff",
                fontSize: 14,
                lineHeight: 1.35,
                borderBottomLeftRadius: b.side === "left" ? 4 : 18,
                borderBottomRightRadius: b.side === "right" ? 4 : 18,
                boxShadow: "0 4px 12px rgba(5,15,40,0.18)",
              }}
            >
              {b.text}
            </div>
          </div>
        ))}
        <div style={{ marginTop: 30, display: "flex", justifyContent: "center" }}>
          <button className="cta-pill" style={{ padding: "12px 26px", fontSize: 14 }}>
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
}
