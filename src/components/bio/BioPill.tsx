import React from "react";

type BioPillProps = {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
};

export default function BioPill({
  children,
  dark = false,
  className = "",
}: BioPillProps) {
  return (
    <span
      className={`
        inline-flex items-center justify-center
        rounded-full border
        px-4 py-2
        text-[10px] font-black uppercase tracking-[0.2em]
        transition-all duration-300
        ${dark
          ? "border-white/14 bg-white/[0.045] text-[#9fc3ff]"
          : "border-[#b9d6ff] bg-white text-[#075cff]"
        }
        ${className}
      `}
    >
      {children}
    </span>
  );
}