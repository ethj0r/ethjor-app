"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const CAPS_1 = ["SOFTWARE DESIGN", "BACKEND SYSTEMS", "DEVOPS & CI/CD", "MACHINE LEARNING"];
const CAPS_2 = ["DATA SCIENCE", "ALGORITHM DESIGN", "RESEARCH WRITING", "PROJECT MANAGEMENT"];

function Pill({ t, active }: { t: string; active?: boolean }) {
  return (
    <div
      className="shrink min-w-0 truncate rounded-full px-1.5 py-1 text-center text-[7px] font-medium uppercase leading-none tracking-[0.06em] text-white sm:px-3 sm:py-1.5 sm:text-[10px] sm:tracking-[0.08em] md:px-3.5 md:py-2 md:text-xs"
      style={{
        background: active ? "rgba(30,30,30,0.62)" : "rgba(30,30,30,0.45)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: `1px solid rgba(255,255,255,${active ? 0.28 : 0.15})`,
        boxShadow: active
          ? "0 8px 24px -8px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.28)"
          : "0 8px 32px -8px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
      }}
    >
      {t}
    </div>
  );
}

export default function HeroSection() {
  const greetings = ["Hi", "Hello", "안녕", "Bonjour","你好"];
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentGreeting = greetings[currentGreetingIndex];
    const typingSpeed = isDeleting ? 80 : 150;
    const pauseAfterTyping = 2000;
    const pauseAfterDeleting = 500;

    if (!isDeleting && displayText === currentGreeting) {
      // Pause after fully typing
      const timeout = setTimeout(() => setIsDeleting(true), pauseAfterTyping);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      // Move to next greeting after fully deleting
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentGreetingIndex((prev) => (prev + 1) % greetings.length);
      }, pauseAfterDeleting);
      return () => clearTimeout(timeout);
    }

    // Typing or deleting
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentGreeting.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentGreeting.substring(0, displayText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentGreetingIndex]);

  return (
    <section id="hero" className="relative w-full py-12 md:py-16 lg:py-20" style={{ background: 'var(--background)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Profile Photo - IN THE CENTER */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            {/* White blur shadow behind */}
            <div className="absolute inset-0 -z-10 blur-2xl" style={{ 
              background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)',
              transform: 'scale(1.1)'
            }} />
            <div 
              className="relative overflow-hidden bg-gray-200"
              style={{
                width: '500px',
                height: '324px',
                maxWidth: '50vw',
                maxHeight: '40vw',
                aspectRatio: '500 / 324',
                borderRadius: 'clamp(30px, 16vw, 99px)',
                boxShadow: '0 4px 10px -4px rgba(28, 28, 28, 0.6)',
              }}
            >
              <Image
                src="/profile.webp"
                alt="Jordhy Branenda"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 30%' }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Hero Text - BELOW PHOTO */}
        <div className="text-center">
          <h1 className="mb-3 text-3xl md:text-5xl lg:text-6xl">
            <span className="font-normal" style={{ color: 'var(--text-primary)' }}>
              {displayText}
              <span className="animate-pulse">|</span>, I'm{" "}
            </span>
            <span className="bg-gradient-to-r from-[var(--heading-from)] via-[#2F6192] to-[var(--background)] bg-clip-text font-bold text-transparent">
              Jordhy
            </span>
          </h1>
          <p className="mb-3 text-sm md:text-lg" style={{ color: 'var(--foreground)' }}>
            Computer Science Undergraduate @ ITB
          </p>
          <p className="mx-auto max-w-2xl text-xs md:text-base leading-tight lg:leading-tight" style={{ color: 'var(--text-secondary)' }}>
            Learning relentlessly. Building intentionally.<br /> Interested in data science,
            machine learning, <br />and software engineering.
          </p>
        </div>

        {/* Capabilities — What I build */}
        <div className="relative mt-12 text-center md:mt-16">
          <div className="eyebrow" style={{ color: "rgba(31,41,55,0.55)" }}>What I build</div>
          <p className="mx-auto mt-2 max-w-2xl text-xs md:text-base leading-tight lg:leading-tight" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}>
            From research papers to production systems.
          </p>
          <div className="mx-auto mt-6 flex w-full max-w-[900px] flex-col items-stretch gap-1.5 sm:gap-2 md:mt-7 md:gap-2.5">
            <div className="flex w-full flex-nowrap justify-center gap-1.5 sm:flex-wrap sm:gap-2">
              {CAPS_1.map((t) => (
                <Pill key={t} t={t} active={t === "MACHINE LEARNING"} />
              ))}
            </div>
            <div className="flex w-full flex-nowrap justify-center gap-1.5 sm:flex-wrap sm:gap-2">
              {CAPS_2.map((t) => (
                <Pill key={t} t={t} />
              ))}
            </div>
          </div>

          <div className="mt-7 flex justify-center">
            <Link
              href="/CV - June.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-[400] text-[0.625rem] bg-gradient-to-r from-[#323b43] to-[#0088ff] bg-clip-text text-transparent md:text-base transition-transform duration-300 hover:scale-105"
            >
              <span>View my résumé</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                style={{ color: '#a7bed2ff' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
