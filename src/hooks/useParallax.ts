import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "./useReducedMotion";
import { useIsMobile } from "./useIsMobile";

gsap.registerPlugin(ScrollTrigger);

export function useParallax(ref: RefObject<Element | null>, distance = 40) {
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reducedMotion || isMobile) {
      gsap.set(el, { clearProps: "transform" });
      return;
    }

    const tween = gsap.fromTo(
      el,
      { y: -distance },
      {
        y: distance,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [ref, reducedMotion, isMobile, distance]);
}
