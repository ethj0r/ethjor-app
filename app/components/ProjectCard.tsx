"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { Project } from "../data/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative mx-auto w-full max-w-[320px] md:max-w-[380px] lg:max-w-none"
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div
        className="relative h-full overflow-hidden md:!h-[500px] md:!rounded-[54px]"
        style={{
          height: "420px",
          background: "linear-gradient(-90deg, #4a5863ff 0%, #0a0a0a 100%)",
          borderRadius: "44px",
          boxShadow: "0 4px 10px -4px rgba(255, 255, 255, 0.9)",
        }}
      >
        {project.image && (
          <div className="absolute top-0 left-0 right-0 h-48 md:h-64 overflow-hidden pointer-events-none">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 60%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 60%, transparent 100%)",
              }}
            />
          </div>
        )}

        <div className="relative z-10 flex h-full flex-col px-5 pb-5 pt-6 md:px-6.5 md:pb-6 md:pt-8 lg:px-6.5 lg:pb-5 lg:pt-10">
          <div className="flex-1" />

          <div>
            <h3 className="mb-3 md:mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-2xl md:text-3xl font-bold text-transparent lg:text-4xl bg-gradient-to-r from-black via-[#2F6192] to-white bg-clip-text font-bold">
              {project.title}
            </h3>
            <p className="mb-4 md:mb-6 text-sm md:text-base leading-tight text-gray-300/90 lg:text-lg lg:leading-tight">
              {project.description}
            </p>

            <div className="mb-4 md:mb-6 flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="rounded-full bg-black/20 px-2 py-0.5 md:py-1 text-xs md:text-sm font-medium text-white/90 backdrop-blur-m"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Link
            href={`/projects/${project.id}`}
            className="liquid-glass-btn block overflow-hidden rounded-full border-0 bg-transparent px-6 py-2.5 md:px-8 md:py-3 text-center text-sm md:text-base font-normal text-white transition-all duration-300 hover:scale-[1.02]"
          >
            <span className="relative z-10 bg-gradient-to-r from-gray-400 to-black bg-clip-text">
              Find out more
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
