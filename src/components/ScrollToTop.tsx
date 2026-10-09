import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getLenisInstance } from "../hooks/useLenis";

// Clearance for the fixed header when landing on an in-page anchor.
const HASH_SCROLL_OFFSET = -100;

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const lenis = getLenisInstance();

    // "/#logistics" etc.: wait for the target to render, then jump to it.
    // Content above it (images, cards) can still change height right after
    // navigation, so keep re-aligning while the page settles — unless the
    // visitor starts scrolling themselves.
    if (hash) {
      let frame = 0;
      let tries = 0;
      let observer: ResizeObserver | null = null;
      let settleTimer: ReturnType<typeof setTimeout> | undefined;

      const align = (target: HTMLElement) => {
        if (lenis) {
          // Lenis caches the scroll limit; refresh it so the new page's
          // height is used rather than the previous page's.
          lenis.resize();
          lenis.scrollTo(target, { immediate: true, force: true, offset: HASH_SCROLL_OFFSET });
        } else {
          window.scrollTo(0, target.getBoundingClientRect().top + window.scrollY + HASH_SCROLL_OFFSET);
        }
      };

      const stop = () => {
        observer?.disconnect();
        observer = null;
        clearTimeout(settleTimer);
        window.removeEventListener("wheel", stop);
        window.removeEventListener("touchstart", stop);
        window.removeEventListener("keydown", stop);
      };

      const jump = () => {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (!target) {
          if (tries++ < 60) frame = requestAnimationFrame(jump);
          return;
        }
        align(target);
        observer = new ResizeObserver(() => align(target));
        observer.observe(document.body);
        settleTimer = setTimeout(stop, 2000);
        window.addEventListener("wheel", stop, { passive: true });
        window.addEventListener("touchstart", stop, { passive: true });
        window.addEventListener("keydown", stop);
      };

      jump();
      return () => {
        cancelAnimationFrame(frame);
        stop();
      };
    }

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
