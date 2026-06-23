import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "./useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

interface RevealOptions {
  y?: number;
  scale?: number;
  duration?: number;
  start?: string;
  delay?: number;
  stagger?: number;
}

export function useScrollReveal(
  ref: RefObject<Element | null>,
  options: RevealOptions = {},
) {
  const reducedMotion = useReducedMotion();
  const { y = 32, scale, duration = 0.8, start = "top 85%", delay = 0, stagger } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reducedMotion) {
      gsap.set(el.children.length && stagger ? el.children : el, { opacity: 1, y: 0, scale: 1 });
      return;
    }

    const targets = stagger ? el.children : el;

    const tween = gsap.fromTo(
      targets,
      { opacity: 0, y, ...(scale !== undefined ? { scale } : {}) },
      {
        opacity: 1,
        y: 0,
        ...(scale !== undefined ? { scale: 1 } : {}),
        duration,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none none",
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [ref, reducedMotion, y, scale, duration, start, delay, stagger]);
}
