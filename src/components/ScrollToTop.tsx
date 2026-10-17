import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getLenisInstance } from "../hooks/useLenis";

// Clearance above an anchored section comes from its CSS scroll-margin-top
// (header height + 24px on desktop). Lenis and scrollIntoView apply it
// themselves; only the manual window.scrollTo fallback needs it spelled out.
function scrollMargin(target: HTMLElement) {
  return parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
}

export function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  const previousPathname = useRef<string | null>(null);

  useEffect(() => {
    const lenis = getLenisInstance();
    const samePage = previousPathname.current === pathname;
    previousPathname.current = pathname;

    // Header anchor clicked on the page it points to: glide there.
    if (hash && samePage) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!target) return;
      if (lenis) {
        lenis.scrollTo(target);
      } else {
        // Smooth via html { scroll-behavior }, instant with reduced motion.
        target.scrollIntoView({ block: "start" });
      }
      return;
    }

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
          lenis.scrollTo(target, { immediate: true, force: true });
        } else {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - scrollMargin(target),
            behavior: "instant",
          });
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
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash, key]);

  return null;
}
