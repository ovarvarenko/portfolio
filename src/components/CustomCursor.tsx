import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./CustomCursor.css";

const TRAIL_LIFETIME = 450;
const TRAIL_MAX_RADIUS = 7;
const TRAIL_MAX_ALPHA = 0.5;
const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], .project-card, .split-project--clickable';
const PILL_SELECTOR = "a.project-card, .project-card--clickable, .split-project--clickable";

const ENABLE_QUERY = "(hover: hover) and (pointer: fine)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function shouldEnable() {
  return (
    window.matchMedia(ENABLE_QUERY).matches &&
    !window.matchMedia(REDUCED_MOTION_QUERY).matches
  );
}

interface TrailPoint {
  x: number;
  y: number;
  t: number;
}

export function CustomCursor() {
  const [enabled, setEnabled] = useState(() =>
    typeof window !== "undefined" ? shouldEnable() : false,
  );
  const rootRef = useRef<HTMLDivElement>(null);
  const circleLayerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const queries = [ENABLE_QUERY, REDUCED_MOTION_QUERY].map((q) => window.matchMedia(q));
    const update = () => setEnabled(shouldEnable());
    queries.forEach((mq) => mq.addEventListener("change", update));
    return () => queries.forEach((mq) => mq.removeEventListener("change", update));
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const root = rootRef.current;
    const circleLayer = circleLayerRef.current;
    const circle = circleRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const label = labelRef.current;
    if (!root || !label || !circleLayer || !circle || !canvas || !ctx) return;

    const mouse = { x: 0, y: 0 };
    const trail: TrailPoint[] = [];
    let moved = false;
    let trailDrawn = false;
    let rafId = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const handleMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      moved = true;
      root.classList.add("is-visible");
    };

    // Measured once: the pill width can't be animated to "auto".
    const measure = () => {
      circle.style.setProperty("--pill-width", `${Math.ceil(label.scrollWidth) + 36 + 2}px`);
    };
    measure();
    document.fonts?.ready.then(measure);

    const setPill = (on: boolean) => {
      circle.classList.toggle("is-pill", on);
      canvas.classList.toggle("is-hidden", on);
      if (!on) circle.classList.remove("is-pressed");
    };

    const handleOver = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const pill = Boolean(target?.closest?.(PILL_SELECTOR));
      setPill(pill);
      circle.classList.toggle(
        "is-hovering",
        !pill && Boolean(target?.closest?.(INTERACTIVE_SELECTOR)),
      );
    };

    const handleDown = () => circle.classList.add("is-pressed");
    const handleUp = () => circle.classList.remove("is-pressed");

    const handleOut = (event: MouseEvent) => {
      if (!event.relatedTarget) root.classList.remove("is-visible");
    };

    const tick = (now: number) => {
      if (moved) {
        trail.push({ x: mouse.x, y: mouse.y, t: now });
        moved = false;
      }

      circleLayer.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;

      while (trail.length && now - trail[0].t > TRAIL_LIFETIME) trail.shift();

      if (trail.length || trailDrawn) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        for (const point of trail) {
          const life = 1 - (now - point.t) / TRAIL_LIFETIME;
          if (life <= 0) continue;
          ctx.globalAlpha = TRAIL_MAX_ALPHA * life;
          ctx.beginPath();
          ctx.arc(point.x, point.y, TRAIL_MAX_RADIUS * life, 0, Math.PI * 2);
          ctx.fill();
        }
        trailDrawn = trail.length > 0;
      }

      rafId = requestAnimationFrame(tick);
    };

    ctx.fillStyle = "#FFFFFF";
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseover", handleOver, { passive: true });
    document.addEventListener("mousedown", handleDown, { passive: true });
    document.addEventListener("mouseup", handleUp, { passive: true });
    document.addEventListener("mouseout", handleOut, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [enabled]);

  if (!enabled) return null;

  return createPortal(
    <div className="custom-cursor" ref={rootRef} aria-hidden="true">
      <canvas className="custom-cursor__layer custom-cursor__trail" ref={canvasRef} />
      <div className="custom-cursor__layer custom-cursor__layer--circle" ref={circleLayerRef}>
        <div className="custom-cursor__circle" ref={circleRef}>
          <div className="custom-cursor__pill">
            <span className="custom-cursor__label" ref={labelRef}>Open Project</span>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
