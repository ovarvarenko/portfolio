import { useEffect, useRef, useState, type RefObject } from "react";
import { createPortal } from "react-dom";
import "./CursorFollowLabel.css";

interface CursorFollowLabelProps {
  targetRef: RefObject<HTMLElement | null>;
  text: string;
}

const OFFSET_X = 16;
const OFFSET_Y = 16;
const LERP = 0.25;

export function CursorFollowLabel({ targetRef, text }: CursorFollowLabelProps) {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;

    const handleEnter = (event: MouseEvent) => {
      mouse.current = { x: event.clientX, y: event.clientY };
      pos.current = { x: event.clientX, y: event.clientY };
      setActive(true);
    };
    const handleMove = (event: MouseEvent) => {
      mouse.current = { x: event.clientX, y: event.clientY };
    };
    const handleLeave = () => setActive(false);

    target.addEventListener("mouseenter", handleEnter);
    target.addEventListener("mousemove", handleMove);
    target.addEventListener("mouseleave", handleLeave);
    return () => {
      target.removeEventListener("mouseenter", handleEnter);
      target.removeEventListener("mousemove", handleMove);
      target.removeEventListener("mouseleave", handleLeave);
    };
  }, [targetRef]);

  useEffect(() => {
    if (!active) return;

    let rafId: number;

    const tick = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * LERP;
      pos.current.y += (mouse.current.y - pos.current.y) * LERP;

      const wrapper = wrapperRef.current;
      const label = labelRef.current;
      if (wrapper && label) {
        const { width, height } = label.getBoundingClientRect();
        let left = pos.current.x + OFFSET_X;
        let top = pos.current.y + OFFSET_Y;

        if (left + width > window.innerWidth) {
          left = pos.current.x - OFFSET_X - width;
        }
        if (top + height > window.innerHeight) {
          top = pos.current.y - OFFSET_Y - height;
        }

        wrapper.style.transform = `translate(${left}px, ${top}px)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [active]);

  if (!mounted) return null;

  return createPortal(
    <div className="cursor-follow-label-wrapper" ref={wrapperRef} aria-hidden="true">
      <div className={`cursor-follow-label${active ? " is-active" : ""}`} ref={labelRef}>
        {text}
      </div>
    </div>,
    document.body,
  );
}
