import { useEffect } from "react";

type MetaEntry =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string };

const MANAGED_ATTR = "data-managed-seo";

function setMeta(entries: MetaEntry[]) {
  // Remove previously managed meta tags
  document.head.querySelectorAll(`[${MANAGED_ATTR}]`).forEach((n) => n.remove());

  for (const entry of entries) {
    if ("title" in entry) {
      document.title = entry.title;
      continue;
    }
    const el = document.createElement("meta");
    if ("name" in entry) el.setAttribute("name", entry.name);
    else if ("property" in entry) el.setAttribute("property", entry.property);
    el.setAttribute("content", entry.content);
    el.setAttribute(MANAGED_ATTR, "");
    document.head.appendChild(el);
  }
}

export function useSeo(meta: MetaEntry[]) {
  useEffect(() => {
    setMeta(meta);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
