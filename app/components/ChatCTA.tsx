"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const BUBBLES: { side: "left" | "right"; text: string }[] = [
  { side: "left", text: "Hey, saw your portfolio…" },
  { side: "right", text: "Glad you stopped by!" },
  { side: "left", text: "Got a project I'd love to chat about." },
  { side: "right", text: "Down to discuss. You free this week?" },
  { side: "left", text: "Let's hop on a call." },
];

export default function ChatCTA() {
  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-b from-[#1E1E1E] to-[#2A2A2A] py-20 md:py-28"
    >
      {/* <div className="mx-auto mb-12 max-w-2xl px-4 text-center sm:px-6">
        <h2 className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
          Let&apos;s build something meaningful together.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-gray-400 md:text-base">
          I am open to collaborations, internships, and impactful tech projects. Feel free to reach out through email or connect via GitHub and LinkedIn.
        </p>
      </div> */}

      <div className="mx-auto flex max-w-[460px] flex-col gap-2 px-4 sm:px-6">
        {BUBBLES.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            style={{
              display: "flex",
              justifyContent: b.side === "left" ? "flex-start" : "flex-end",
            }}
          >
            <div
              style={{
                maxWidth: 260,
                padding: "10px 14px",
                borderRadius: 18,
                background: b.side === "left" ? "#E5E5EA" : "#0088FF",
                color: b.side === "left" ? "#0a0a0a" : "#fff",
                fontSize: 14,
                lineHeight: 1.35,
                borderBottomLeftRadius: b.side === "left" ? 4 : 18,
                borderBottomRightRadius: b.side === "right" ? 4 : 18,
                boxShadow: "0 4px 12px rgba(5,15,40,0.12)",
              }}
            >
              {b.text}
            </div>
          </motion.div>
        ))}

        <div style={{ marginTop: 30, display: "flex", justifyContent: "center" }}>
          <Link
            href="mailto:ethgalleryin@gmail.com"
            className="cluely-btn"
            style={{ padding: "12px 26px", fontSize: 14 }}
          >
            Let's build
          </Link>
        </div>
      </div>
    </section>
  );
}
