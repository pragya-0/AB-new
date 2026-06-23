import { useMemo, useState } from "react";

type SmartImageProps = {
  src: string;
  fallbacks?: string[];
  alt: string;
  className?: string;
};

export default function SmartImage({ src, fallbacks = [], alt, className }: SmartImageProps) {
  const sources = useMemo(() => [src, ...fallbacks], [src, fallbacks]);
  const [index, setIndex] = useState(0);

  return (
    <img
      src={sources[index]}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setIndex((current) => Math.min(current + 1, sources.length - 1))}
    />
  );
}
