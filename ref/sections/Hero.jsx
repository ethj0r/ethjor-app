import Image from "next/image";
import Stars from "@/components/Stars";
import CursorArrow from "@/components/CursorArrow";
import YouPill from "@/components/YouPill";

function HelloTile() {
  return (
    <div
      style={{
        position: "absolute",
        left: "3.5%",
        top: 84,
        transform: "rotate(-14deg)",
        width: 64,
        height: 54,
      }}
      className="bob delay"
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg,#e8e8e8,#bdbdbd)",
          borderRadius: 8,
          padding: "5px 5px 8px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.7)",
          position: "relative",
        }}
      >
        <div
          style={{
            background: "#0b1a2e",
            borderRadius: 3,
            height: 34,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontFamily: '"Lucida Handwriting", "Apple Chancery", cursive',
            fontStyle: "italic",
            fontSize: 14,
          }}
        >
          hello
        </div>
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: -3,
            transform: "translateX(-50%)",
            width: 18,
            height: 3,
            background: "#666",
            borderRadius: 2,
          }}
        />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="sec"
      style={{
        position: "relative",
        minHeight: "88vh",
        paddingTop: 140,
        paddingBottom: 60,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        overflow: "hidden",
        background: "linear-gradient(180deg, #000000 0%, #000000 55%, #0A1A4A 80%, #1E4FD8 100%)",
      }}
    >
      <Stars count={90} />
      <HelloTile />
      <div style={{ position: "relative", maxWidth: 760, padding: "0 24px", textAlign: "center" }}>
        <div style={{ marginBottom: 24, display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: -1,
                filter: "blur(32px)",
                background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
                transform: "scale(1.1)",
              }}
            />
            <div
              className="hero-photo"
              style={{
                position: "relative",
                overflow: "hidden",
                background: "#e5e7eb",
                width: 500,
                height: 324,
                maxWidth: "50vw",
                maxHeight: "40vw",
                aspectRatio: "500 / 324",
                borderRadius: "clamp(30px, 16vw, 99px)",
              }}
            >
              <Image
                src="/profile.webp"
                alt="Jordhy Branenda"
                fill
                style={{ objectFit: "cover", objectPosition: "center 30%" }}
                priority
              />
            </div>
          </div>
        </div>
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontWeight: 500,
            fontSize: "clamp(38px, 5.4vw, 60px)",
            lineHeight: 1.12,
            letterSpacing: "-0.015em",
            margin: 0,
            textWrap: "balance",
          }}
        >
          Hi, I’m Jordhy —<br />
          Computer Science @ ITB.<br />
          Building intentionally.
        </h1>
        <p
          style={{
            marginTop: 22,
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: 480,
            fontSize: 14.5,
            lineHeight: 1.55,
            color: "rgba(255,255,255,0.78)",
            fontWeight: 400,
          }}
        >
          Computer Science undergraduate based in Bandung, bridging the worlds of data science, machine learning, and software
          engineering. Building things people obsess over.
        </p>
        <div style={{ marginTop: 26, display: "inline-flex", alignItems: "flex-start", gap: 4 }}>
          <CursorArrow size={14} />
          <div style={{ marginLeft: -1, marginTop: 12 }}>
            <YouPill />
          </div>
        </div>
      </div>
    </section>
  );
}
