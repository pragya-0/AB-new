const mediaLogos = [
  { name: "TEDx", image: "/assets/press/tedx.png", height: "h-[46px]" },
  { name: "CNBC TV18", image: "/assets/press/cnbc.png", height: "h-[72px]" },
  { name: "The Economic Times", image: "/assets/press/ecotimes.png", height: "h-[36px]" },
  { name: "Business Standard", image: "/assets/press/business standard.png", height: "h-[34px]" },
  { name: "Startup India", image: "/assets/press/startupindia.png", height: "h-[62px]" },
  { name: "AWS", image: "/assets/press/aws.png", height: "h-[54px]" },
  { name: "Diplomatic World", image: "/assets/press/diplomatic.png", height: "h-[62px]" },
];

const newsLogos = [
  { name: "Times Of India", image: "/assets/press/TOI.png", height: "h-[72px]" },
  { name: "TV9 Bangla", image: "/assets/press/TV9.png", height: "h-[76px]" },
  { name: "ABP Ananda", image: "/assets/press/ABP bangla.png", height: "h-[74px]" },
  { name: "DD Bangla", image: "/assets/press/DD-bangla.png", height: "h-[74px]" },
  { name: "WASME", image: "/assets/press/wasme.png", height: "h-[78px]" },
  { name: "Bizventure", image: "/assets/press/bizventure-logo.png", height: "h-[56px]" },
];

function LogoCard({
  logo,
}: {
  logo: {
    name: string;
    image: string;
    height: string;
  };
}) {
  return (
    <div className="mx-3 flex h-[122px] min-w-[230px] items-center justify-center rounded-[22px] border border-black/[0.06] bg-white px-8 shadow-[0_10px_30px_rgba(15,23,42,0.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(0,87,255,0.1)]">
      <img
        src={logo.image}
        alt={logo.name}
        className={`${logo.height} max-w-[170px] object-contain`}
      />
    </div>
  );
}

function LogoMarquee({
  logos,
  reverse = false,
}: {
  logos: typeof mediaLogos;
  reverse?: boolean;
}) {
  const repeatedLogos = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden py-3">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

      <div
        className={`flex w-max ${
          reverse ? "animate-logo-marquee-reverse" : "animate-logo-marquee"
        }`}
      >
        {repeatedLogos.map((logo, index) => (
          <LogoCard key={`${logo.name}-${index}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}

export default function FeaturedLogosStrip() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 md:px-10">
      <style>{`
        @keyframes logo-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes logo-marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        .animate-logo-marquee {
          animation: logo-marquee 34s linear infinite;
        }

        .animate-logo-marquee-reverse {
          animation: logo-marquee-reverse 34s linear infinite;
        }

        .animate-logo-marquee:hover,
        .animate-logo-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="absolute right-[-220px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#0057ff]/10 blur-[150px]" />
      <div className="absolute left-[-220px] bottom-[-180px] h-[520px] w-[520px] rounded-full bg-[#0057ff]/8 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <p className="mb-5 text-center text-xs font-black uppercase tracking-[0.55em] text-[#0057ff]">
          Featured In
        </p>

        <h2 className="mx-auto max-w-[980px] text-center text-[38px] font-black leading-[1.05] tracking-[-0.055em] text-black md:text-[54px]">
          Recognized Across Leading Media & Global Platforms
        </h2>

        <p className="mx-auto mt-6 max-w-[760px] text-center text-[17px] leading-8 text-black/60">
          Featured by media networks, startup ecosystems, technology platforms
          and global institutions across India and worldwide.
        </p>

        <div className="mt-16">
          <p className="mb-5 text-center text-[11px] font-black uppercase tracking-[0.36em] text-black/45">
            Global Media & Platforms
          </p>
          <LogoMarquee logos={mediaLogos} />
        </div>

        <div className="mt-8">
          <p className="mb-5 text-center text-[11px] font-black uppercase tracking-[0.36em] text-black/45">
            Television, News & Recognition
          </p>
          <LogoMarquee logos={newsLogos} reverse />
        </div>
      </div>
    </section>
  );
}