import { gsap } from "gsap";

/**
 * Drives `[data-scroll-parallax="<yPercent>"]` elements with a scroll-scrubbed
 * vertical drift. Pair with an ancestor that clips overflow and an element
 * sized larger than its frame, so the drift reads as movement inside a fixed
 * window rather than the element escaping its box. No-ops under
 * prefers-reduced-motion.
 */
export function initScrollParallax(root: ParentNode = document) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  root.querySelectorAll<HTMLElement>("[data-scroll-parallax]").forEach((el) => {
    gsap.to(el, {
      yPercent: parseFloat(el.dataset.scrollParallax ?? "20"),
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
}
