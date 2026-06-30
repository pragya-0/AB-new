import { motion } from "framer-motion";

type Logo = {
  name: string;
  image: string;
  height: string;
};

const mediaLogos: Logo[] = [
  { name: "TEDx", image: "/assets/press/tedx.png", height: "h-[42px]" },
  { name: "CNBC TV18", image: "/assets/press/cnbc.png", height: "h-[60px]" },
  {
    name: "The Economic Times",
    image: "/assets/press/ecotimes.png",
    height: "h-[34px]",
  },
  {
    name: "Business Standard",
    image: "/assets/press/business standard.png",
    height: "h-[32px]",
  },
  {
    name: "Startup India",
    image: "/assets/press/startupindia.png",
    height: "h-[56px]",
  },
  { name: "AWS", image: "/assets/press/aws.png", height: "h-[48px]" },
  {
    name: "Diplomatic World",
    image: "/assets/press/diplomatic.png",
    height: "h-[56px]",
  },
];

const newsLogos: Logo[] = [
  { name: "Times of India", image: "/assets/press/TOI.png", height: "h-[62px]" },
  { name: "TV9 Bangla", image: "/assets/press/TV9.png", height: "h-[66px]" },
  {
    name: "ABP Ananda",
    image: "/assets/press/ABP bangla.png",
    height: "h-[64px]",
  },
  {
    name: "DD Bangla",
    image: "/assets/press/DD-bangla.png",
    height: "h-[64px]",
  },
  { name: "WASME", image: "/assets/press/wasme.png", height: "h-[68px]" },
  {
    name: "Bizventure",
    image: "/assets/press/bizventure-logo.png",
    height: "h-[50px]",
  },
];

const allMobileLogos = [...mediaLogos, ...newsLogos];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

function LogoCard({ logo }: { logo: Logo }) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex h-[112px] items-center justify-center rounded-[22px] border border-black/[0.06] bg-white px-5 shadow-[0_10px_30px_rgba(15,23,42,0.045)] transition-shadow duration-300 hover:shadow-[0_18px_48px_rgba(0,87,255,0.09)] sm:h-[122px] sm:px-8"
    >
      <img
        src={logo.image}
        alt={`${logo.name} recognition and media platform logo`}
        className={`${logo.height} max-w-[150px] object-contain sm:max-w-[170px]`}
      />
    </motion.div>
  );
}

function LogoMarquee({
  logos,
  reverse = false,
}: {
  logos: Logo[];
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
          <div key={`${logo.name}-${index}`} className="mx-3 min-w-[230px]">
            <LogoCard logo={logo} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FeaturedLogosStrip() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-18 sm:px-6 md:px-10 md:py-24">
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

        @media (prefers-reduced-motion: reduce) {
          .animate-logo-marquee,
          .animate-logo-marquee-reverse {
            animation: none;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute right-[-220px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#0057ff]/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-[-180px] left-[-220px] h-[520px] w-[520px] rounded-full bg-[#0057ff]/8 blur-[150px]" />

      <motion.div
        className="relative z-10 mx-auto max-w-[1500px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        transition={{ staggerChildren: 0.08 }}
      >
        <motion.p
          variants={fadeUp}
          className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.44em] text-[#0057ff]"
        >
          Featured In
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="mx-auto max-w-[980px] text-center text-[34px] font-extrabold leading-[1.05] tracking-[-0.055em] text-black sm:text-[44px] md:text-[54px]"
        >
          Recognized Across Leading Media & Global Platforms
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-[760px] text-center text-[16px] font-normal leading-8 text-black/60 sm:text-[17px]"
        >
          Featured by media networks, startup communities, technology platforms
          and global institutions across India and worldwide.
        </motion.p>

        <div className="mt-12 grid grid-cols-2 gap-3 md:hidden">
          {allMobileLogos.map((logo) => (
            <LogoCard key={logo.name} logo={logo} />
          ))}
        </div>

        <div className="mt-16 hidden md:block">
          <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-black/45">
            Global Media & Platforms
          </p>
          <LogoMarquee logos={mediaLogos} />
        </div>

        <div className="mt-8 hidden md:block">
          <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-black/45">
            News & Recognition
          </p>
          <LogoMarquee logos={newsLogos} reverse />
        </div>
      </motion.div>
    </section>
  );
}