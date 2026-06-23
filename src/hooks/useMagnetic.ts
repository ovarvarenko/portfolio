import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { useReducedMotion } from "./useReducedMotion";

const MAX_TRAVEL = 14;

export function useMagnetic(ref: RefObject<HTMLElement | null>) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3" });

    function onMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      xTo(gsap.utils.clamp(-MAX_TRAVEL, MAX_TRAVEL, relX * 0.35));
      yTo(gsap.utils.clamp(-MAX_TRAVEL, MAX_TRAVEL, relY * 0.35));
    }

    function onLeave() {
      xTo(0);
      yTo(0);
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref, reducedMotion]);
}
