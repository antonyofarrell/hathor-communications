import { gsap } from "gsap";

// Max travel in px — keeps every layer's motion inside the frame's border
// regardless of how high its data-depth multiplier is.
const MAX_OFFSET = 18;

/**
 * Wires up pointer-driven parallax for any `[data-parallax-frame]` container:
 * children tagged `data-depth="<multiplier>"` drift toward the pointer,
 * clamped so they never appear to escape the container's bounds, and ease
 * back to rest on pointerleave. No-ops under prefers-reduced-motion.
 */
export function initParallaxFrames(root: ParentNode = document) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const clamp = gsap.utils.clamp(-MAX_OFFSET, MAX_OFFSET);

  root.querySelectorAll<HTMLElement>("[data-parallax-frame]").forEach((frame) => {
    const layers = Array.from(frame.querySelectorAll<HTMLElement>("[data-depth]")).map((el) => ({
      depth: parseFloat(el.dataset.depth ?? "1"),
      moveX: gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" }),
      moveY: gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" }),
    }));
    if (!layers.length) return;

    frame.addEventListener("pointermove", (event) => {
      const rect = frame.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width - 0.5;
      const ny = (event.clientY - rect.top) / rect.height - 0.5;

      layers.forEach(({ depth, moveX, moveY }) => {
        moveX(clamp(nx * MAX_OFFSET * 2 * depth));
        moveY(clamp(ny * MAX_OFFSET * 2 * depth));
      });
    });

    frame.addEventListener("pointerleave", () => {
      layers.forEach(({ moveX, moveY }) => {
        moveX(0);
        moveY(0);
      });
    });
  });
}
