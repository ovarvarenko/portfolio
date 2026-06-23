import { useEffect, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";
import "./LoadingOverlay.css";

const SHADER_LOAD_DELAY = 1200;
const FADE_DURATION = 600;

export function LoadingOverlay() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    if (isMobile) return;

    const fadeTimer = setTimeout(() => setFadingOut(true), SHADER_LOAD_DELAY);
    const unmountTimer = setTimeout(() => setMounted(false), SHADER_LOAD_DELAY + FADE_DURATION);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, [isMobile]);

  if (isMobile || !mounted) return null;

  return (
    <div
      className={`loading-overlay ${fadingOut ? "loading-overlay--fade-out" : ""}`}
      aria-hidden="true"
    />
  );
}
