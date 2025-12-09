"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#CDCDCD] to-[#1E1E1E] py-16 md:py-20 lg:py-24">
      {/* SVG Filter for Liquid Glass Effect */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="btn-glass">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-8 bg-gradient-to-r from-black to-gray-500 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
          Built with Care
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative mx-auto w-full max-w-[380px] overflow-hidden lg:max-w-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              style={{
                height: '500px',
                borderRadius: '54px',
                boxShadow: '0 4px 10px -4px rgba(255, 255, 255, 0.8)',
              }}
            >
              {/* Card with gradient background */}
              <div 
                className="relative h-full overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, #7BA5C8 0%, #0a0a0a 100%)',
                  borderRadius: '54px',
                }}
              >
                {/* Content */}
                <div className="relative flex h-full flex-col px-6.5 pb-6 pt-8 lg:px-6.5 lg:pb-5 lg:pt-10">
                  {/* Spacer to push content down */}
                  <div className="flex-1" />
                  
                  {/* Content at bottom */}
                  <div>
                    <h3 className="mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-3xl font-bold text-transparent lg:text-4xl bg-gradient-to-r from-black via-[#2F6192] to-white bg-clip-text font-bold text-transparent">
                      {project.title}
                    </h3>
                    <p className="mb-6 text-base leading-tight text-gray-300/90 lg:text-lg lg:leading-tight">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="rounded-full bg-black/20 px-2 py-1 text-sm font-medium text-white/90 backdrop-blur-m"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Liquid Glass Button - stays at bottom */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="liquid-glass-btn block overflow-hidden rounded-full border-0 bg-transparent px-8 py-3 text-center text-base font-normal text-white transition-all duration-300 hover:scale-[1.02]"
                  >
                    <span className="relative z-10 bg-gradient-to-r from-gray-400 to-black bg-clip-text">Find out more</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
