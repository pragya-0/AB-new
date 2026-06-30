import { useMemo, useState } from "react";
import type { ImgHTMLAttributes } from "react";
import { legacyAltByFilename } from "../../data/legacyImageAlts";

type SmartImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  fallbacks?: string[];
  fit?: "cover" | "contain";
};

function legacyAltForImage(src: string, fallbackAlt: string) {
  const clean = src.split("?")[0].split("#")[0];
  const filename = clean.split("/").pop()?.toLowerCase() || "";

  return legacyAltByFilename[filename] || fallbackAlt;
}

export default function SmartImage({
  src,
  fallbacks = [],
  alt,
  className = "",
  fit = "cover",
  loading = "lazy",
  ...props
}: SmartImageProps) {
  const sources = useMemo(
    () => [src, ...fallbacks].filter(Boolean),
    [src, fallbacks]
  );

  const [index, setIndex] = useState(0);
  const currentSrc = sources[index] || src;

  return (
    <img
      {...props}
      src={currentSrc}
      alt={legacyAltForImage(currentSrc, alt)}
      loading={loading}
      className={className}
      style={{
        objectFit: fit,
        ...props.style,
      }}
      onError={(event) => {
        props.onError?.(event);

        if (index < sources.length - 1) {
          setIndex((current) => current + 1);
        }
      }}
    />
  );
}
