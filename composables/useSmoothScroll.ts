import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

let lenis: Lenis | null = null;

function prefersReducedMotion() {
  return (
    import.meta.client &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function useSmoothScroll() {
  function init() {
    if (!import.meta.client || lenis || prefersReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);
    lenis = new Lenis({ duration: 1.1, smoothWheel: true });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
  }

  function raf(time: number) {
    lenis?.raf(time * 1000);
  }

  function destroy() {
    gsap.ticker.remove(raf);
    lenis?.destroy();
    lenis = null;
  }

  function stop() {
    document.body.style.overflow = "hidden";
    lenis?.stop();
  }

  function start() {
    document.body.style.overflow = "";
    lenis?.start();
  }

  function scrollTo(
    target: string | number | HTMLElement,
    options: { offset?: number } = {}
  ) {
    const offset = options.offset ?? 0;

    if (typeof target === "string") {
      const el = document.querySelector<HTMLElement>(target);
      if (!el) return;
      target = el;
    }

    if (lenis) {
      lenis.scrollTo(target, { offset, duration: 1.1 });
      return;
    }

    const behavior = prefersReducedMotion() ? "auto" : "smooth";
    if (typeof target === "number") {
      window.scrollTo({ top: target, behavior });
      return;
    }
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY + offset,
      behavior,
    });
  }

  return { init, destroy, stop, start, scrollTo };
}
