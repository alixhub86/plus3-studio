import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Heading */}
        <div className="reveal mb-16 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-mist-500">
              Ce qu'on fait
            </span>
            <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-6xl">
              Nos expertises
            </h2>
          </div>
          <p className="max-w-md text-sm text-mist-500 md:text-right">
            Chaque projet est porté par un spécialiste dédié, avec le soutien de
            tout le collectif.
          </p>
        </div>

        {/* Cards — full-width horizontal */}
        <div className="flex flex-col gap-5">
          {services.map((service, i) => (
            <article
              key={service.id}
              className={`reveal reveal-delay-${i + 1} group relative flex flex-col overflow-hidden rounded-2xl border border-bone-200 transition-all duration-500 hover:border-ink/20 md:flex-row md:items-center`}
            >
              {/* Left: big number + icon */}
              <div className="flex items-center gap-6 bg-ink p-8 md:w-72 md:flex-col md:items-start md:gap-4 md:p-10">
                <span className="text-5xl font-extrabold text-white/10 md:text-7xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime text-sm font-bold tracking-wider text-ink">
                  {service.initials}
                </div>
              </div>

              {/* Right: content */}
              <div className="flex flex-1 flex-col justify-center p-8 md:p-10">
                <h3 className="text-2xl font-bold leading-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-mist-500">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-bone-200" />
                  <span className="text-xs text-mist-400">
                    {service.author}
                  </span>
                </div>
              </div>

              {/* Hover accent */}
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-lime transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
