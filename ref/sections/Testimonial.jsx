function AvatarCluster() {
  const colors = [
    "linear-gradient(135deg,#ffd3a5,#fd6585)",
    "linear-gradient(135deg,#a1c4fd,#c2e9fb)",
    "linear-gradient(135deg,#fbc2eb,#a6c1ee)",
    "linear-gradient(135deg,#84fab0,#8fd3f4)",
  ];
  const initials = ["RM", "TF", "HY", "SA"];
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 18 }}>
      {colors.map((c, i) => (
        <div
          key={i}
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: c,
            border: "2px solid #fff",
            marginLeft: i === 0 ? 0 : -10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 11,
            fontWeight: 600,
            boxShadow: "0 2px 6px rgba(0,30,80,0.25)",
          }}
        >
          {initials[i]}
        </div>
      ))}
    </div>
  );
}

export default function Testimonial() {
  return (
    <section
      id="about"
      className="sec"
      style={{
        padding: "120px 24px 40px",
        position: "relative",
        background: "linear-gradient(180deg, #C8DFF5 0%, #9CC0EE 60%, #7FA8E0 100%)",
      }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <div className="eyebrow">Endorsed by mentors</div>
        <h2 className="h2">From classrooms to real‑world impact.</h2>
        <AvatarCluster />
        <p
          style={{
            marginTop: 22,
            fontSize: 17,
            lineHeight: 1.55,
            color: "rgba(255,255,255,0.92)",
            maxWidth: 520,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          “Jordhy’s ability to translate complex ideas into elegant systems is exceptional. He’s one of those rare students who builds
          with intention from day one.”
        </p>
        <div style={{ marginTop: 14, fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>
          Dr. Rinaldi Munir · Lecturer @ STEI ITB
        </div>
        <div style={{ marginTop: 28 }}>
          <button className="cta-pill">Start a Conversation</button>
        </div>
      </div>
    </section>
  );
}
