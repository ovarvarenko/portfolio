import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import { useReducedMotion } from "../hooks/useReducedMotion";
import "./CompareSlider.css";

interface CompareSliderProps {
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
  alt: string;
}

export function CompareSlider({ before, after, beforeLabel, afterLabel, alt }: CompareSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const beforeImgRef = useRef<HTMLImageElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const hintPlayedRef = useRef(false);
  const reducedMotion = useReducedMotion();

  const applyPosition = useCallback((pct: number) => {
    const clamped = Math.min(100, Math.max(0, pct));
    if (beforeImgRef.current) {
      beforeImgRef.current.style.clipPath = `inset(0 ${100 - clamped}% 0 0)`;
    }
    if (handleRef.current) {
      handleRef.current.style.left = `${clamped}%`;
      handleRef.current.setAttribute("aria-valuenow", String(Math.round(clamped)));
    }
  }, []);

  const positionFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return 50;
    const rect = el.getBoundingClientRect();
    return ((clientX - rect.left) / rect.width) * 100;
  }, []);

  useEffect(() => {
    applyPosition(50);
  }, [applyPosition]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || hintPlayedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting || hintPlayedRef.current) return;
        hintPlayedRef.current = true;
        observer.disconnect();

        if (reducedMotion) {
          applyPosition(50);
          return;
        }

        const state = { pct: 50 };
        gsap.timeline()
          .to(state, {
            pct: 66,
            duration: 0.9,
            ease: "sine.inOut",
            onUpdate: () => applyPosition(state.pct),
          })
          .to(state, {
            pct: 34,
            duration: 1.1,
            ease: "sine.inOut",
            onUpdate: () => applyPosition(state.pct),
          })
          .to(state, {
            pct: 50,
            duration: 0.7,
            ease: "sine.inOut",
            onUpdate: () => applyPosition(state.pct),
          });
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [applyPosition, reducedMotion]);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    applyPosition(positionFromClientX(e.clientX));
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    applyPosition(positionFromClientX(e.clientX));
  };

  const onPointerUp = (e: React.PointerEvent) => {
    draggingRef.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const current = Number(handleRef.current?.getAttribute("aria-valuenow") ?? 50);
    if (e.key === "ArrowLeft") {
      applyPosition(current - 5);
    } else if (e.key === "ArrowRight") {
      applyPosition(current + 5);
    }
  };

  return (
    <div
      className="compare-slider"
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <img className="compare-slider__img compare-slider__img--after" src={after} alt={`${alt} — ${afterLabel.toLowerCase()}`} loading="lazy" />
      <img
        className="compare-slider__img compare-slider__img--before"
        ref={beforeImgRef}
        src={before}
        alt={`${alt} — ${beforeLabel.toLowerCase()}`}
        loading="lazy"
      />

      <span className="compare-slider__tag compare-slider__tag--before">{beforeLabel}</span>
      <span className="compare-slider__tag compare-slider__tag--after">{afterLabel}</span>

      <div
        className="compare-slider__handle"
        ref={handleRef}
        role="slider"
        tabIndex={0}
        aria-label={`Compare ${beforeLabel.toLowerCase()} and ${afterLabel.toLowerCase()} theme`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={50}
        onKeyDown={onKeyDown}
      >
        <span className="compare-slider__grip" aria-hidden="true">
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M5 1L1 5L5 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 1L13 5L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}
