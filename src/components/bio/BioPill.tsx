type BioPillProps = {
  children: React.ReactNode;
  dark?: boolean;
};

export default function BioPill({ children, dark = false }: BioPillProps) {
  return (
    <span
      className={`rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] ${
        dark
          ? "border-white/14 bg-white/[0.045] text-[#9fc3ff]"
          : "border-[#b9d6ff] bg-white text-[#075cff]"
      }`}
    >
      {children}
    </span>
  );
}
