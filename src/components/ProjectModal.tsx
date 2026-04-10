"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Project, ProjectMedia, Campaign } from "@/data/projects";
import Lightbox from "./Lightbox";

function getEmbedUrl(url: string): string {
  let match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/,
  );
  if (match) return `https://www.youtube.com/embed/${match[1]}`;
  match = url.match(/vimeo\.com\/(\d+)/);
  if (match) return `https://player.vimeo.com/video/${match[1]}`;
  // Instagram reels
  match = url.match(/instagram\.com\/reel\/([\w-]+)/);
  if (match) return `https://www.instagram.com/reel/${match[1]}/embed/`;
  return url;
}

function MediaThumb({
  media,
  onClick,
}: {
  media: ProjectMedia;
  onClick: () => void;
}) {
  if (media.type === "embed") {
    return (
      <button
        type="button"
        onClick={onClick}
        className="group relative aspect-video w-full overflow-hidden rounded-xl bg-ink col-span-2 md:col-span-3"
      >
        {media.poster ? (
          <Image
            src={media.poster}
            alt=""
            fill
            sizes="(min-width: 768px) 33vw, 50vw"
            className="object-cover"
          />
        ) : (
          <iframe
            src={getEmbedUrl(media.url)}
            className="pointer-events-none h-full w-full"
            tabIndex={-1}
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-ink/30 transition group-hover:bg-ink/50">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-xl text-ink">
            &#9654;
          </span>
        </div>
      </button>
    );
  }

  if (media.type === "video") {
    return (
      <button
        type="button"
        onClick={onClick}
        className="group relative aspect-video w-full overflow-hidden rounded-xl bg-ink col-span-2 md:col-span-3"
      >
        <video
          src={media.src}
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-ink/20 transition group-hover:bg-ink/40">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-xl text-ink">
            &#9654;
          </span>
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-bone-100"
    >
      <Image
        src={media.src}
        alt={media.alt ?? ""}
        fill
        sizes="(min-width: 768px) 33vw, 50vw"
        quality={55}
        loading="lazy"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </button>
  );
}

/** Folder card for a campaign — click to expand */
function CampaignFolder({
  campaign,
  isOpen,
  onToggle,
  onOpenLightbox,
}: {
  campaign: Campaign;
  isOpen: boolean;
  onToggle: () => void;
  onOpenLightbox: (media: ProjectMedia[], idx: number) => void;
}) {
  const thumb = campaign.media.find((m) => m.type === "image") ?? campaign.media[0];

  return (
    <div className="mb-4">
      {/* Folder header */}
      <button
        type="button"
        onClick={onToggle}
        className={`flex w-full items-center gap-4 rounded-xl border p-4 transition ${
          isOpen
            ? "border-lime bg-lime/5"
            : "border-bone-200 bg-bone-50 hover:border-ink/20 hover:bg-bone-100"
        }`}
      >
        {thumb && thumb.type === "image" && (
          <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-bone-200">
            <Image src={thumb.src} alt="" fill sizes="48px" className="object-cover" />
          </div>
        )}
        {(!thumb || thumb.type !== "image") && (
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-ink text-white text-lg">
            &#9654;
          </div>
        )}

        <div className="flex-1 text-left">
          <p className="font-bold text-sm text-ink">{campaign.title}</p>
          <p className="text-xs text-mist-400">
            {campaign.media.length} {campaign.media.length > 1 ? "fichiers" : "fichier"}
          </p>
        </div>

        <svg
          className={`h-5 w-5 flex-shrink-0 text-mist-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Collapsible media grid */}
      <div
        className={`overflow-hidden transition-all duration-400 ease-out ${
          isOpen ? "mt-3 max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {campaign.media.map((media, mi) => (
            <MediaThumb
              key={mi}
              media={media}
              onClick={() => onOpenLightbox(campaign.media, mi)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Lightbox state — tracks which group of media and current index */
type LightboxState = { group: ProjectMedia[]; idx: number } | null;

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [lightbox, setLightbox] = useState<LightboxState>(null);
  const [openCampaigns, setOpenCampaigns] = useState<Set<string>>(() => {
    if (project.campaigns.length === 1) return new Set([project.campaigns[0].id]);
    return new Set();
  });

  const toggleCampaign = (id: string) => {
    setOpenCampaigns((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const openLightbox = (group: ProjectMedia[], idx: number) => {
    setLightbox({ group, idx });
  };

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && !lightbox) onClose();
    },
    [onClose, lightbox],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  const hasCampaigns = project.campaigns.length > 0;
  const hasGallery = project.gallery.length > 0;

  return (
    <>
      <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-ink/90" onClick={onClose} />

        {/* Modal */}
        <div className="relative z-10 mx-4 my-8 w-full max-w-5xl animate-fade-in rounded-3xl bg-white p-6 text-ink shadow-2xl md:my-16 md:p-10">
          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-bone-100 text-ink transition hover:bg-ink hover:text-white md:right-6 md:top-6"
            aria-label="Fermer"
          >
            &#10005;
          </button>

          {/* Header */}
          <div className="mb-8 pr-12">
            <div className="flex flex-wrap items-center gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-bone-200 px-3 py-1 text-[10px] uppercase tracking-wider text-mist-500"
                >
                  {tag}
                </span>
              ))}
              {project.year && (
                <span className="text-xs text-mist-400">{project.year}</span>
              )}
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              {project.title}
            </h2>
            {project.client && (
              <p className="mt-2 text-mist-500">{project.client}</p>
            )}
            {project.description && (
              <p className="mt-4 max-w-2xl text-mist-500">
                {project.description}
              </p>
            )}
          </div>

          {/* Campaign folders */}
          {hasCampaigns && (
            <div className="mb-8">
              <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-mist-400">
                Campagnes &amp; cr&eacute;ations
              </p>
              {project.campaigns.map((campaign) => (
                <CampaignFolder
                  key={campaign.id}
                  campaign={campaign}
                  isOpen={openCampaigns.has(campaign.id)}
                  onToggle={() => toggleCampaign(campaign.id)}
                  onOpenLightbox={openLightbox}
                />
              ))}
            </div>
          )}

          {/* Root gallery (loose files) */}
          {hasGallery && (
            <div className="mb-6">
              {hasCampaigns && (
                <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-mist-400">
                  Autres cr&eacute;ations
                </p>
              )}
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
                {project.gallery.map((media, i) => (
                  <MediaThumb
                    key={i}
                    media={media}
                    onClick={() => openLightbox(project.gallery, i)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Empty */}
          {!hasCampaigns && !hasGallery && (
            <div className="rounded-2xl border border-bone-200 p-12 text-center text-mist-500">
              Aucun m&eacute;dia pour ce projet.
            </div>
          )}
        </div>
      </div>

      {/* Lightbox — navigation stays within the current folder */}
      {lightbox && lightbox.group[lightbox.idx] && (
        <Lightbox
          media={lightbox.group[lightbox.idx]}
          onClose={() => setLightbox(null)}
          onPrev={
            lightbox.idx > 0
              ? () => setLightbox((s) => s ? { ...s, idx: s.idx - 1 } : null)
              : undefined
          }
          onNext={
            lightbox.idx < lightbox.group.length - 1
              ? () => setLightbox((s) => s ? { ...s, idx: s.idx + 1 } : null)
              : undefined
          }
        />
      )}
    </>
  );
}
