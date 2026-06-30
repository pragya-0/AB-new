import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { legacySeoByPath } from "../../data/legacySeo";

function upsertMeta(name: string, content?: string) {
  if (!content) return;

  let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

export default function LegacyHead() {
  const location = useLocation();
  const legacy = legacySeoByPath[location.pathname];

  useEffect(() => {
    if (!legacy) return;

    if (legacy.title) {
      document.title = legacy.title;
    }

    upsertMeta("description", legacy.description);
    upsertMeta("keywords", legacy.keywords);
  }, [legacy]);

  return null;
}
