"use client";

import { useReveal } from "@/hooks/useReveal";

/**
 * Mounts the global IntersectionObserver that animates `.reveal` elements
 * on scroll. Renders nothing — purely a side-effect component so the parent
 * page can stay a server component.
 */
export default function RevealMount() {
  useReveal();
  return null;
}
