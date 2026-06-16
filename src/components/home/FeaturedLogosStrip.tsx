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
    <section className="relative overflow-hidden bg-[#f6f7fb] px-5 py-14">
      <div className="mx-auto max-w-[1500px]">
        <p className="mb-10 text-center text-xs font-bold uppercase tracking-[0.55em] text-[#1b5cff]">
          Featured In
        </p>

        <div className="mx-auto grid max-w-[1250px] grid-cols-2 gap-x-10 gap-y-8 md:grid-cols-4">
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-center text-[24px] font-black tracking-[-0.04em] text-black/55 transition duration-300 hover:text-[#1b5cff]"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}