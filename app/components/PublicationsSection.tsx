"use client";

import { publications } from "../data/publications";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PublicationsSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#E7E7E7] to-white pt-16 md:pt-20 pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-8 bg-gradient-to-r from-black to-gray-500 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
          Publications
        </h2>

        <div className="space-y-0">
          {publications.map((publication, index) => (
            <motion.div
              key={publication.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01, backgroundColor: "rgba(0,0,0,0.02)" }}
            >
              {/* Divider at top */}
              <div className="border-t border-gray-300" />
              
              <div className="flex flex-col gap-2 py-5 md:flex-row md:items-start md:justify-between">
                <div className="flex-1 px-4 md:pl-20 md:pr-0">
                  {publication.link ? (
                    <Link
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <h3 className="bg-gradient-to-r from-[#0088FF] to-[#000000] bg-clip-text text-lg font-semibold text-transparent md:text-xl leading-tight transition-all group-hover:from-[#0066CC] group-hover:to-[#333333]">
                        {publication.title}
                      </h3>
                    </Link>
                  ) : (
                    <h3 className="bg-gradient-to-r from-[#0088FF] to-[#000000] bg-clip-text text-lg font-semibold text-transparent md:text-xl leading-tight">
                      {publication.title}
                    </h3>
                  )}
                  <p className="mt-0.5 text-sm font-semibold text-gray-700 md:text-base leading-tight">
                    {publication.publisher}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-600 md:hidden leading-tight">
                    {publication.date}
                  </p>
                  {/* Categories */}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {publication.categories.map((category, catIndex) => (
                      <span
                        key={catIndex}
                        className="rounded-full border border-gray-400 px-2 py-0.5 text-xs font-medium text-gray-700"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block flex-shrink-0 pr-20">
                  <p className="text-sm text-gray-600 md:text-base">
                    {publication.date}
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
