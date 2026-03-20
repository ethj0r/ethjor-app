"use client";

import { projects } from "../data/projects";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section id="projects" className="relative w-full bg-gradient-to-b from-[var(--bg-alt-2)] to-[#1E1E1E] py-16 md:py-20 lg:py-24">
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
          {currentProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-4">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              disabled={currentPage === 1}
              className="flex items-center gap-2 text-white transition-colors hover:text-white/70 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`h-8 w-8 rounded-full text-sm font-medium transition-all ${
                    currentPage === page
                      ? "bg-white text-black"
                      : "text-white hover:bg-white/20"
                  }`}
                  aria-label={`Go to page ${page}`}
                  aria-current={currentPage === page ? "page" : undefined}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 text-white transition-colors hover:text-white/70 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
