import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface CompareSliderProps {
  beforeSrc: string;
  afterSrc: string;
}

const INTRO_SEQUENCE = [50, 68, 34, 50];
const INTRO_STEP_MS = 650;
const INTRO_START_DELAY_MS = 500;

export function CompareSlider({ beforeSrc, afterSrc }: CompareSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const introTimeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [percent, setPercent] = useState(50);
  const [isIntroPlaying, setIsIntroPlaying] = useState(false);
  const reducedMotion = useReducedMotion();

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPercent(Math.min(100, Math.max(0, ratio)));
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    setIsIntroPlaying(true);
    const timeouts = INTRO_SEQUENCE.map((value, i) =>
      setTimeout(() => setPercent(value), INTRO_START_DELAY_MS + i * INTRO_STEP_MS),
    );
    const stopTimeout = setTimeout(
      () => setIsIntroPlaying(false),
      INTRO_START_DELAY_MS + INTRO_SEQUENCE.length * INTRO_STEP_MS,
    );
    introTimeoutsRef.current = [...timeouts, stopTimeout];

    return () => {
      introTimeoutsRef.current.forEach(clearTimeout);
      introTimeoutsRef.current = [];
    };
  }, [reducedMotion]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!draggingRef.current) return;
      updateFromClientX(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!draggingRef.current) return;
      updateFromClientX(e.touches[0].clientX);
    };
    const stopDragging = () => {
      draggingRef.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchend", stopDragging);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [updateFromClientX]);

  const startDragging = () => {
    introTimeoutsRef.current.forEach(clearTimeout);
    introTimeoutsRef.current = [];
    setIsIntroPlaying(false);
    draggingRef.current = true;
  };

  return (
    <div
      className={`case-sync__compare${isIntroPlaying ? " case-sync__compare--intro" : ""}`}
      ref={containerRef}
    >
      <img src={beforeSrc} alt="" className="case-sync__compare-image case-sync__compare-image--back" />
      <img
        src={afterSrc}
        alt=""
        className="case-sync__compare-image case-sync__compare-image--front"
        style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
      />
      <div className="case-sync__compare-divider" style={{ left: `${percent}%` }}>
        <button
          type="button"
          className="case-sync__compare-handle"
          onMouseDown={startDragging}
          onTouchStart={startDragging}
          aria-label="Drag to compare light and dark theme"
        >
          <span className="case-sync__compare-arrow">◄</span>
          <span className="case-sync__compare-arrow">►</span>
        </button>
      </div>
    </div>
  );
}
