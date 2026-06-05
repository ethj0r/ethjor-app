"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

const BUBBLES: { side: "left" | "right"; text: string }[] = [
  { side: "left", text: "Hey, saw your portfolio…" },
  { side: "right", text: "Glad you stopped by!" },
  { side: "left", text: "Got a project I'd love to chat about." },
  { side: "right", text: "Down to discuss. You free this week?" },
  { side: "left", text: "Let's hop on a call." },
];

// Timing (ms): how long the "…" shows before each message appears,
// and the pause after a message before the next person starts typing.
const TYPING_MS = 900;
const PAUSE_MS = 450;

const bubbleClass =
  "max-w-[200px] px-2.5 py-1.5 text-[10px] leading-snug sm:max-w-[240px] sm:px-3 sm:py-2 sm:text-xs md:max-w-[260px] md:px-3.5 md:py-2.5 md:text-sm";

function bubbleStyle(side: "left" | "right"): React.CSSProperties {
  return {
    borderRadius: 18,
    background: side === "left" ? "#E5E5EA" : "#0088FF",
    color: side === "left" ? "#0a0a0a" : "#fff",
    borderBottomLeftRadius: side === "left" ? 4 : 18,
    borderBottomRightRadius: side === "right" ? 4 : 18,
    boxShadow: "0 4px 12px rgba(5,15,40,0.12)",
  };
}

function TypingDots({ side }: { side: "left" | "right" }) {
  return (
    <div
      className="flex items-center gap-1 px-3 py-2.5 sm:px-3.5"
      style={bubbleStyle(side)}
      aria-label="typing"
    >
      {[0, 1, 2].map((d) => (
        <motion.span
          key={d}
          className="block h-1.5 w-1.5 rounded-full"
          style={{ background: side === "left" ? "#6b7280" : "rgba(255,255,255,0.85)" }}
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: d * 0.18, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export default function ChatCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.4 });

  // How many bubbles are fully revealed, and whether the next one is "typing".
  const [revealed, setRevealed] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    let elapsed = 300; // small initial delay after scroll-in

    BUBBLES.forEach((_, i) => {
      // show typing indicator
      timers.push(setTimeout(() => setTyping(true), elapsed));
      elapsed += TYPING_MS;
      // replace typing with the actual bubble
      timers.push(
        setTimeout(() => {
          setTyping(false);
          setRevealed(i + 1);
        }, elapsed)
      );
      elapsed += PAUSE_MS;
    });

    return () => timers.forEach(clearTimeout);
  }, [inView]);

  const allRevealed = revealed >= BUBBLES.length;
  // The side of the bubble currently being typed (the next one to appear).
  const typingSide = revealed < BUBBLES.length ? BUBBLES[revealed].side : "left";

  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-b from-[#1E1E1E] to-[#2A2A2A] py-20 md:py-28"
    >
      <div
        ref={sectionRef}
        className="mx-auto flex max-w-[340px] flex-col gap-2 px-4 sm:max-w-[460px] sm:px-6 lg:px-8"
      >
        {BUBBLES.slice(0, revealed).map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 480, damping: 30 }}
            style={{
              display: "flex",
              justifyContent: b.side === "left" ? "flex-start" : "flex-end",
            }}
          >
            <div className={bubbleClass} style={bubbleStyle(b.side)}>
              {b.text}
            </div>
          </motion.div>
        ))}

        {/* Typing indicator for the next message */}
        <AnimatePresence>
          {typing && !allRevealed && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              style={{
                display: "flex",
                justifyContent: typingSide === "left" ? "flex-start" : "flex-end",
              }}
            >
              <TypingDots side={typingSide} />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {allRevealed && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              style={{ marginTop: 30, display: "flex", justifyContent: "center" }}
            >
              <Link href="mailto:ethgalleryin@gmail.com" className="cluely-btn">
                Let&apos;s build
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
