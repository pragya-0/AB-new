import { useEffect } from "react";

type MetaTagsProps = {
  title: string;
  description: string;
  image?: string;
};

export default function MetaTags({ title, description, image = "/assets/bio/helicopter-bio.jpeg" }: MetaTagsProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: "name" | "property", key: string, value: string) => {
      let tag = document.querySelector(selector) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value);
    };

    setMeta("meta[name='description']", "name", "description", description);
    setMeta("meta[property='og:title']", "property", "og:title", title);
    setMeta("meta[property='og:description']", "property", "og:description", description);
    setMeta("meta[property='og:image']", "property", "og:image", image);
    setMeta("meta[name='twitter:title']", "name", "twitter:title", title);
    setMeta("meta[name='twitter:description']", "name", "twitter:description", description);
    setMeta("meta[name='twitter:image']", "name", "twitter:image", image);
  }, [title, description, image]);

  return null;
}
