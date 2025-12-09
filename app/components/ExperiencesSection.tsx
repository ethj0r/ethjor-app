"use client";

import { experiences, sortExperiences, formatDate } from "../data/experiences";
import { motion } from "framer-motion";

export default function ExperiencesSection() {
  const sortedExperiences = sortExperiences(experiences);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#E7E7E7] to-white pt-16 md:pt-20 pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-8 bg-gradient-to-r from-black to-gray-500 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
          Experiences
        </h2>

        <div className="space-y-0">
          {sortedExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01, backgroundColor: "rgba(0,0,0,0.02)" }}
            >
              {/* Divider at top */}
              <div className="border-t border-gray-300" />
              
              <div className="flex flex-col gap-2 py-5 md:flex-row md:items-center md:justify-between">
                <div className="flex-1 px-4 md:pl-20 md:pr-0">
                  <h3 className="bg-gradient-to-r from-[#0088FF] to-[#000000] bg-clip-text text-lg font-semibold text-transparent md:text-xl leading-tight">
                    {experience.title}
                  </h3>
                  <p className="mt-0.5 text-sm font-semibold text-gray-700 md:text-base leading-tight">
                    @ {experience.organization}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-600 md:hidden leading-tight">
                    {formatDate(experience.startDate)} – {formatDate(experience.endDate)}
                  </p>
                </div>

                <div className="hidden md:block flex-shrink-0 pr-20">
                  <p className="text-sm text-gray-600 md:text-base">
                    {formatDate(experience.startDate)} – {formatDate(experience.endDate)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Final bottom divider */}
          <div className="border-t border-gray-300" />
        </div>
      </div>
    </section>
  );
}
