"use client";

export default function PlayersBanner() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 md:py-28">
      {/* Red accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-red-600/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-red-600/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:gap-16 md:text-left">
          {/* Content */}
          <div className="flex-1">
            <span className="inline-block rounded-full border border-red-500/30 bg-red-600/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-red-400">
              +3 Players
            </span>
            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Votre image,{" "}
              <span className="italic text-red-500">votre avantage.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base text-white/60 md:text-lg">
              +3 Players accompagne les athletes dans la construction de leur
              marque personnelle. Personal branding, shooting photo, contenus
              r&eacute;seaux &mdash; on vous place sous les projecteurs.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4">
            <a
              href="/plaquette-plus3-players.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-red-500 hover:shadow-lg hover:shadow-red-600/25"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              D&eacute;couvrir +3 Players
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
            <span className="text-xs text-white/30">
              T&eacute;l&eacute;charger la plaquette PDF
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
