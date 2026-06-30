import { motion } from "framer-motion";
import { fadeUp } from "./bioMotion";

type BioSectionShellProps = {
  id?: string;
  eyebrow: string;
  title: string;
  text?: string;
  dark?: boolean;
  children: React.ReactNode;
  className?: string;
};

export default function BioSectionShell({
  id,
  eyebrow,
  title,
  text,
  dark = false,
  children,
  className = "",
}: BioSectionShellProps) {
  return (
    <section
      id={id}
      className={`${dark ? "bg-[#03070d] text-white" : "bg-[#f4f8ff] text-[#07101f]"} px-5 py-20 md:px-10 ${className}`}
    >
      <div className="mx-auto max-w-[1500px]">
        <motion.div {...fadeUp} className="mb-10 grid gap-7 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.38em] text-[#1262ff]">
              {eyebrow}
            </p>
            <h2 className="max-w-[760px] text-[38px] font-black leading-[0.9] tracking-[-0.07em] md:text-[58px]">
              {title}
            </h2>
          </div>

          {text ? (
            <p className={`max-w-[760px] text-[16px] leading-8 ${dark ? "text-white/68" : "text-[#334155]"}`}>
              {text}
            </p>
          ) : null}
        </motion.div>

        {children}
      </div>
    </section>
  );
}

