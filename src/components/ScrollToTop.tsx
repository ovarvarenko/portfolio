import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getLenisInstance } from "../hooks/useLenis";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = getLenisInstance();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
