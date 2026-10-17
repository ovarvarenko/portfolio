import { useEffect, useState } from "react";

const HERO_ID = "top";
const CONTACT_ID = "contact";

/**
 * Returns the id of the section currently in view, or null while the hero is
 * in view. A section is "current" when it crosses a thin line ~35% down the
 * viewport; between sections the previous one stays active. When no section
 * is on the line, Contact counts once half of it is visible, since at the page
 * end it may never reach that line.
 */
export function useActiveSection(ids: string[], enabled: boolean): string | null {
  const [active, setActive] = useState<string | null>(null);
  const idsKey = ids.join(",");

  useEffect(() => {
    if (!enabled) return;

    const sectionIds = idsKey.split(",");
    const onLine = new Set<string>();
    let contactVisible = false;
    let current: string | null = null;

    const update = () => {
      const hit = sectionIds.find((id) => onLine.has(id));
      if (hit) current = hit;
      else if (onLine.has(HERO_ID)) current = null;
      else if (contactVisible && sectionIds.includes(CONTACT_ID)) current = CONTACT_ID;
      setActive(current);
    };

    const lineObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) onLine.add(entry.target.id);
          else onLine.delete(entry.target.id);
        }
        update();
      },
      { rootMargin: "-35% 0px -64% 0px" },
    );

    const contactObserver = new IntersectionObserver(
      ([entry]) => {
        contactVisible = entry.intersectionRatio >= 0.5;
        update();
      },
      { threshold: [0, 0.5, 1] },
    );

    let frame = 0;
    let tries = 0;
    const observe = () => {
      const elements = [HERO_ID, ...sectionIds]
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => Boolean(el));
      // Sections render in the same commit, but retry briefly just in case.
      if (elements.length < sectionIds.length && tries++ < 30) {
        frame = requestAnimationFrame(observe);
        return;
      }
      elements.forEach((el) => lineObserver.observe(el));
      const contact = document.getElementById(CONTACT_ID);
      if (contact) contactObserver.observe(contact);
    };
    observe();

    return () => {
      cancelAnimationFrame(frame);
      lineObserver.disconnect();
      contactObserver.disconnect();
      setActive(null);
    };
  }, [idsKey, enabled]);

  return enabled ? active : null;
}
