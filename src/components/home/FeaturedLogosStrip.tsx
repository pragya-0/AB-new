const logos = [
  "ECONOMIC TIMES",
  "TIMES OF INDIA",
  "CNBC",
  "ABP",
  "TV9 BANGLA",
  "HINDUSTAN TIMES",
  "DIPLOMATIC WORLD",
  "ANANDABAZAR",
];

export default function FeaturedLogosStrip() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28">
      <div className="absolute left-1/2 top-0 h-44 w-[60%] -translate-x-1/2 rounded-full bg-[#0057ff]/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.55em] text-white/40">
            Featured In
          </p>

          <h2 className="mt-7 text-[42px] md:text-[58px] font-bold leading-tight text-white">
            Leading Media &
            <br />
            Publications
          </h2>
        </div>

        {/* logo wall */}
        <div className="mx-auto mt-20 max-w-[1200px]">
          <div className="grid gap-y-12 md:grid-cols-4">
            {logos.map((logo) => (
              <div
                key={logo}
                className="text-center text-[28px] font-bold tracking-[-0.03em] text-white/65 transition duration-300 hover:text-[#1b5cff]"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}