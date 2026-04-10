"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

export default function CTA() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    // Fallback: open mailto with pre-filled content.
    // Replace this with a form service (Formspree, Netlify Forms, etc.)
    // when you deploy.
    const subject = encodeURIComponent(`Nouveau projet — ${name}`);
    const body = encodeURIComponent(
      `Nom : ${name}\nEmail : ${email}\n\n${message}`,
    );
    window.open(
      `mailto:${site.email}?subject=${subject}&body=${body}`,
      "_self",
    );
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section
      id="contact"
      className="relative bg-bone-100 py-28 md:py-36"
    >
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-bone-200" />

      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <div className="text-center">
          <span className="reveal text-[10px] uppercase tracking-[0.25em] text-mist-500">
            Contact
          </span>
          <h2 className="reveal reveal-delay-1 mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
            Un projet sportif en t&ecirc;te ?
          </h2>
          <p className="reveal reveal-delay-2 mx-auto mt-4 max-w-xl text-mist-500">
            On en discute autour d'un café — ou d'un terrain.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="reveal reveal-delay-3 mt-12 space-y-5"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-medium uppercase tracking-wider text-mist-500"
              >
                Nom
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Votre nom"
                className="w-full rounded-xl border border-bone-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-ink focus:ring-1 focus:ring-ink"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-medium uppercase tracking-wider text-mist-500"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="votre@email.fr"
                className="w-full rounded-xl border border-bone-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-ink focus:ring-1 focus:ring-ink"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-xs font-medium uppercase tracking-wider text-mist-500"
            >
              Votre projet
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Décrivez brièvement votre projet, vos besoins, votre timing..."
              className="w-full resize-none rounded-xl border border-bone-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-ink focus:ring-1 focus:ring-ink"
            />
          </div>

          <div className="flex flex-wrap items-center gap-5 pt-2">
            <button
              type="submit"
              className="group inline-flex items-center gap-3 rounded-full bg-lime px-7 py-4 text-sm font-semibold text-ink transition-all hover:bg-ink hover:text-lime"
            >
              {sent ? "Message ouvert ✓" : "Envoyer le message"}
              {!sent && (
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              )}
            </button>
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-mist-500 underline decoration-bone-200 underline-offset-4 transition hover:text-ink hover:decoration-ink"
            >
              {site.email}
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
