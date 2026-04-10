import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-ink text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10">
        {/* Brand */}
        <div className="flex flex-col gap-2">
          <span className="font-bold tracking-[-0.04em] text-xl">
            {site.name}
          </span>
          <span className="text-xs text-white/50">
            {site.tagline} — © {year}
          </span>
        </div>

        {/* Socials */}
        <ul className="flex flex-wrap items-center gap-6">
          {site.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-xs uppercase tracking-wider text-white/60 transition hover:text-lime"
              >
                {s.label}
                <span className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Legal */}
        <Link
          href="/mentions-legales"
          className="text-xs text-white/40 transition hover:text-white/70"
        >
          Mentions l&eacute;gales
        </Link>
      </div>
    </footer>
  );
}
