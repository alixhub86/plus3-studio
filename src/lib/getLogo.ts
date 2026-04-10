import fs from "node:fs";
import path from "node:path";
import { site } from "@/data/site";

/**
 * Cherche un logo dans /public selon les noms et extensions courants.
 * Renvoie le chemin web (ex: "/logo.svg") s'il existe, sinon `null`.
 *
 * Cherche dans cet ordre :
 *   /public/logo.svg
 *   /public/logo.png
 *   /public/logo.webp
 *   /public/logo.jpg
 *
 * Et aussi le chemin déclaré dans site.logo.src au cas où.
 */
export function getLogoPath(): string | null {
  const candidates = [
    site.logo.src,
    "/logo.svg",
    "/logo.png",
    "/logo.webp",
    "/logo.jpg",
    "/logo.jpeg",
  ];

  const seen = new Set<string>();
  for (const c of candidates) {
    if (seen.has(c)) continue;
    seen.add(c);
    const filePath = path.join(process.cwd(), "public", c.replace(/^\//, ""));
    if (fs.existsSync(filePath)) return c;
  }
  return null;
}
