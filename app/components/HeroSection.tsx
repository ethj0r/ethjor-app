"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-20">
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
            <span className="font-normal text-gray-800">
              {displayText}
              <span className="animate-pulse">|</span>, I'm{" "}
            </span>
            <span className="bg-gradient-to-r from-black via-[#2F6192] to-white bg-clip-text font-bold text-transparent">
              Jordhy
            </span>
          </h1>
          <p className="mb-3 text-sm text-gray-900 md:text-lg">
            Computer Science @ ITB
          </p>
          <p className="mx-auto max-w-2xl text-xs text-gray-700 md:text-base leading-tight lg:leading-tight">
            Learning relentlessly. Building intentionally.<br /> Interested in data science,
            machine learning, <br />and software engineering.
          </p>
          <Link 
            href="https://linkedin.com/in/ethjor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-5 mb-3 font-[400] text-sm bg-gradient-to-r from-[#323b43] to-[#0088ff] bg-clip-text text-transparent md:text-base transition-transform duration-300 hover:scale-105"
          >
            <span>Connect with me</span>
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
    </section>
  );
}
