"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Project } from "@/app/data/projects";
import Footer from "@/app/components/Footer";

interface Props {
  project: Project;
}

export default function ProjectDetailClient({ project }: Props) {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.images || [project.image || "/projects/placeholder-1.jpg"];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-8 flex items-center gap-2 text-gray-700 transition-colors hover:text-black"
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
          <span className="text-base font-light">back</span>
        </button>

        {/* Image Carousel */}
        <div className="relative mb-8 overflow-hidden rounded-[54px] bg-gray-200" style={{ paddingBottom: "56.25%" }}>
          <div className="absolute inset-0">
            <Image
              src={images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              priority={currentImageIndex === 0}
            />
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white transition-all hover:scale-110"
                aria-label="Previous image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 drop-shadow-lg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white transition-all hover:scale-110"
                aria-label="Next image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 drop-shadow-lg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dots Pagination */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "w-8 bg-white"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-gradient-to-r from-[#7E9DB8]/50 to-black/40 px-2 py-1 text-sm font-semibold text-gray-800 backdrop-blur"
            >
              {tag}
            </span> 
          ))}
        </div>

        {/* Title */}
        <h1 className="mb-4 bg-gradient-to-r from-gray-900 via-[#2F6192] to-gray-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl lg:text-7xl">
          {project.title}
        </h1>

        {/* Description */}
        <p className="mb-12 text-base leading-relaxed text-gray-700 md:text-lg">
          {project.fullDescription || project.description}
        </p>

        {/* Key Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-6 bg-gradient-to-r from-black to-gray-500 bg-clip-text text-2xl font-normal text-transparent md:text-3xl">
              Key Features
            </h2>
            <div className="space-y-0">
              {project.keyFeatures.map((feature, index) => (
                <div key={index}>
                  <div className="border-t border-gray-300" />
                  <div className="flex flex-col gap-2 py-5 md:flex-row md:items-center md:justify-between">
                    <div className="flex-1 px-4 md:pl-20 md:pr-0">
                      <h3 className="bg-gradient-to-r from-[#0088FF] to-[#000000] bg-clip-text text-lg font-semibold leading-tight text-transparent md:text-xl">
                        {feature.title}
                      </h3>
                    </div>
                    <div className="px-4 md:pr-20">
                      <p className="text-sm leading-tight text-gray-600 md:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="border-t border-gray-300" />
            </div>
          </section>
        )}

        {/* Tech Stack */}
        {project.techStack && (
          <section className="mb-12">
            <h2 className="mb-6 bg-gradient-to-r from-black to-gray-500 bg-clip-text text-2xl font-normal text-transparent md:text-3xl">
              Tech Stack
            </h2>
            <div className="space-y-3">
              {project.techStack.frontend && (
                <p className="text-base text-gray-700">
                  <span className="font-semibold">Frontend:</span> {project.techStack.frontend}
                </p>
              )}
              {project.techStack.backend && (
                <p className="text-base text-gray-700">
                  <span className="font-semibold">Backend:</span> {project.techStack.backend}
                </p>
              )}
              {project.techStack.deployment && (
                <p className="text-base text-gray-700">
                  <span className="font-semibold">Deployment:</span> {project.techStack.deployment}
                </p>
              )}
            </div>
          </section>
        )}

        {/* Find out more */}
        {project.links && (project.links.github || project.links.website) && (
          <section className="mb-12">
            <h2 className="mb-6 bg-gradient-to-r from-black to-gray-500 bg-clip-text text-2xl font-normal text-transparent md:text-3xl">
              Find out more
            </h2>
            <div className="space-y-2">
              {project.links.github && (
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-[#0088FF] md:text-base"
                >
                  <span className="bg-gradient-to-r from-[#0088FF] to-[#000000] bg-clip-text font-medium text-transparent">
                    GitHub Repository
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#0088FF]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
              {project.links.website && (
                <Link
                  href={project.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-[#0088FF] md:text-base"
                >
                  <span className="bg-gradient-to-r from-[#0088FF] to-[#000000] bg-clip-text font-medium text-transparent">
                    Website
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#0088FF]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
