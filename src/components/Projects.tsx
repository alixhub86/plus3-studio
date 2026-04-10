"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import {
  projectFilters,
  type Project,
  type ProjectCategory,
} from "@/data/projects";

// Chargé uniquement quand on clique sur un projet
const ProjectModal = dynamic(() => import("./ProjectModal"), { ssr: false });

type Filter = (typeof projectFilters)[number];
const PAGE_SIZE = 6; // 3 columns × 2 rows

const decoColorMap: Record<Project["decoColor"], string> = {
  lime: "bg-lime",
  gray: "bg-bone-200",
  black: "bg-ink",
};

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const hasCover = Boolean(project.cover);

  return (
    <article
      onClick={onClick}
      className="group cursor-pointer"
    >
      {/* Visual */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-bone-100">
        {hasCover && project.cover!.type === "image" ? (
          <>
            <Image
              src={project.cover!.src}
              alt={("alt" in project.cover! ? project.cover!.alt : undefined) ?? project.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              quality={40}
              loading="lazy"
              placeholder="empty"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          </>
        ) : hasCover && project.cover!.type === "video" ? (
          <>
            <video
              src={project.cover!.src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          </>
        ) : (
          <>
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div
              className={`absolute right-6 top-6 h-14 w-14 rounded-full transition-transform duration-700 group-hover:scale-110 ${decoColorMap[project.decoColor]}`}
            />
          </>
        )}

        {/* Hover CTA */}
        <div className="absolute inset-0 flex items-end justify-end p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="rounded-full bg-ink px-4 py-2 text-xs uppercase tracking-wider text-lime">
            Voir le projet →
          </span>
        </div>
      </div>

      {/* Meta */}
      <div className="mt-4">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
          {project.tags.join(" • ")}
          {project.year && ` — ${project.year}`}
        </span>
        <h3 className="mt-1.5 text-xl font-bold leading-tight transition-colors group-hover:text-lime">
          {project.title}
        </h3>
      </div>
    </article>
  );
}

export default function Projects({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>("Tous");
  const [page, setPage] = useState(0);
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (active === "Tous") return projects;
    return projects.filter((p) =>
      p.tags.includes(active as ProjectCategory),
    );
  }, [active, projects]);

  // Reset page when filter changes
  const setFilter = useCallback((f: Filter) => {
    setActive(f);
    setPage(0);
  }, []);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const visible = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  const canPrev = page > 0;
  const canNext = page < totalPages - 1;

  return (
    <>
      <section
        id="projets"
        className="relative bg-ink text-white py-28 md:py-36"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          {/* Heading */}
          <div className="reveal mb-12 flex flex-col gap-4 md:mb-16">
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
              Portfolio
            </span>
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              Nos projets
            </h2>
          </div>

          {/* Filters */}
          <div className="reveal reveal-delay-1 mb-12 flex flex-wrap gap-3">
            {projectFilters.map((filter) => {
              const isActive = active === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setFilter(filter)}
                  className={`rounded-full border px-5 py-2 text-xs uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "border-white bg-white text-ink"
                      : "border-white/25 text-white/70 hover:border-white/60 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Grid: 3 columns × 2 rows */}
          <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {visible.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setOpenProject(project)}
              />
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="rounded-2xl border border-white/10 p-16 text-center">
              <p className="text-white/60">
                Aucun projet dans cette catégorie pour le moment.
              </p>
            </div>
          )}

          {/* Navigation arrows below the grid */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setPage((p) => p - 1)}
                disabled={!canPrev}
                className={`flex h-12 w-12 items-center justify-center rounded-full border text-lg transition ${
                  canPrev
                    ? "border-white/30 text-white hover:bg-white hover:text-ink"
                    : "border-white/10 text-white/20 cursor-not-allowed"
                }`}
                aria-label="Page précédente"
              >
                ←
              </button>
              <span className="text-sm text-white/50">
                {page + 1} / {totalPages}
              </span>
              <button
                type="button"
                onClick={() => setPage((p) => p + 1)}
                disabled={!canNext}
                className={`flex h-12 w-12 items-center justify-center rounded-full border text-lg transition ${
                  canNext
                    ? "border-white/30 text-white hover:bg-white hover:text-ink"
                    : "border-white/10 text-white/20 cursor-not-allowed"
                }`}
                aria-label="Page suivante"
              >
                →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {openProject && (
        <ProjectModal
          project={openProject}
          onClose={() => setOpenProject(null)}
        />
      )}
    </>
  );
}
