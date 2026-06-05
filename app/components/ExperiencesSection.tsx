"use client";

import { useState } from "react";
import { experiences, sortExperiences, formatDate } from "../data/experiences";
import { AnimatePresence, motion } from "framer-motion";

export default function ExperiencesSection() {
  const sortedExperiences = sortExperiences(experiences);
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="experiences" className="relative w-full bg-gradient-to-b from-[var(--bg-alt)] to-[var(--background)] pt-16 md:pt-20 pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-3 bg-gradient-to-r from-[var(--heading-from)] to-[var(--heading-to)] bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
          Experiences
        </h2>
        {/* <p className="mx-auto mb-8 max-w-2xl text-center text-xs leading-tight text-gray-600 md:text-base">
          Building products with clarity, speed, and personality.
        </p> */}

        <div className="space-y-0">
          {sortedExperiences.map((experience, index) => {
            const isOpen = openId === experience.id;

            return (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
              >
                {/* Divider at top */}
                <div className="border-t" style={{ borderColor: 'var(--border-color)' }} />

                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : experience.id)}
                  aria-expanded={isOpen}
                  className="w-full cursor-pointer text-left"
                >
                  <div className="flex flex-row items-center justify-between gap-2 py-5 md:items-center">
                    <div className="min-w-0 flex-1 px-4 md:pl-20 md:pr-8">
                      <h3 className="bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] bg-clip-text text-base font-semibold text-transparent sm:text-lg md:text-xl leading-tight">
                        {experience.title}
                      </h3>
                      <p className="mt-0.5 text-sm font-semibold text-gray-700 md:text-base leading-tight">
                        @ {experience.organization}
                      </p>
                      <p className="mt-0.5 text-xs text-gray-600 md:hidden leading-tight">
                        {formatDate(experience.startDate)} – {formatDate(experience.endDate)}
                      </p>
                    </div>

                    <div className="flex flex-shrink-0 items-center gap-4 pr-4 md:px-0 md:pr-20">
                      <p className="hidden text-sm text-gray-600 md:block md:text-base whitespace-nowrap">
                        {formatDate(experience.startDate)} – {formatDate(experience.endDate)}
                      </p>
                      <motion.svg
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="h-5 w-5 flex-shrink-0 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="list-disc space-y-1.5 px-4 pb-5 pl-9 text-sm text-gray-600 md:pl-24 md:pr-20 md:text-base leading-snug">
                        {experience.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
          {/* Final bottom divider */}
          <div className="border-t" style={{ borderColor: 'var(--border-color)' }} />
        </div>
      </div>
    </section>
  );
}
