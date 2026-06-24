import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const asset = "/assets/mentoring/";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

const heroTags = [
  "Mentoring Since 2006",
  "Business Scalability",
  "Private Equity Advisory",
  "Funding & Grants",
  "Market Expansion",
  "Technology Upgrade",
];

const proofStats = [
  ["7000+", "Startups Mentored"],
  ["2100+", "Events & Sessions"],
  ["102+", "Countries Connected"],
  ["60+", "Countries Travelled"],
];

const visualProof = [
  {
    image: "Dubai-Arijit.jpg",
    title: "Global Business",
    text: "International scaleup, market-entry and private-equity conversations.",
  },
  {
    image: "public-speaker.jpg",
    title: "Founder Guidance",
    text: "Mentoring through real stages, forums, leadership rooms and business networks.",
  },
];

export default function MentoringHero() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-14 text-white sm:px-6 md:px-10 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(0,87,255,0.20),transparent_32%),radial-gradient(circle_at_82%_20%,rgba(111,177,252,0.14),transparent_34%)]" />
      <div className="absolute bottom-[-260px] left-[-260px] h-[620px] w-[620px] rounded-full bg-[#0057ff]/14 blur-[170px]" />
      <div className="absolute right-[-260px] top-[-220px] h-[620px] w-[620px] rounded-full bg-cyan-400/8 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="mb-8 flex flex-wrap gap-3">
          {heroTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9cc5ff] backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="grid gap-9 xl:grid-cols-[0.82fr_1.18fr] xl:items-center">
          <motion.div {...fadeUp}>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#7fb8ff] md:text-[12px]">
              Mentoring Sessions Since 2006
            </p>

            <h1 className="max-w-[820px] text-[50px] font-extrabold leading-[0.92] tracking-[-0.06em] text-white sm:text-[62px] md:text-[76px] xl:text-[84px]">
              Gain experience not shared in books.
            </h1>

            <p className="mt-7 max-w-[780px] text-[18px] font-normal leading-[1.75] tracking-[-0.01em] text-white/70">
              Arijit Bhattacharyya is a Business Scalability Expert,
              Technologist, Digital Media Expert and Finance & Growth Consultant
              helping corporates, startups, SMEs, MSMEs and manufacturing
              businesses scale, modernize, raise capital, prepare for private
              equity conversations and expand globally.
            </p>

            <p className="mt-5 max-w-[760px] text-[16px] font-normal leading-[1.75] text-white/62 md:text-[18px]">
              His mentoring focuses on business strategy, market entry,
              fundraising, systems, processes, technology upgrades, AI, AR, VR,
              XR, game development, animation, movies, digital media and
              sustainable business models.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0057ff] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#1672ff]"
              >
                Connect With Arijit <ArrowRight size={16} />
              </a>

              <a
                href="#mentoring-services"
                className="inline-flex items-center justify-center rounded-full border border-[#2d74ff]/45 bg-[#0057ff]/10 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a8c8ff] transition duration-300 hover:-translate-y-1 hover:bg-[#0057ff] hover:text-white"
              >
                Explore Mentoring
              </a>
            </div>

            <div className="mt-8 grid max-w-[760px] grid-cols-2 gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10 sm:grid-cols-4">
              {proofStats.map(([value, label]) => (
                <div key={label} className="bg-[#07101f] p-4 md:p-5">
                  <p className="text-[32px] font-bold leading-none tracking-[-0.04em] text-white md:text-[42px]">
                    {value}
                  </p>

                  <p className="mt-3 text-[10px] font-semibold uppercase leading-5 tracking-[0.18em] text-white/50">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="relative">
            <div className="absolute -inset-5 rounded-[44px] bg-[#0057ff]/16 blur-3xl" />

            <div className="relative grid gap-5">
              <div className="relative overflow-hidden rounded-[30px] border border-white/12 bg-[#07101f] p-2 shadow-[0_38px_120px_rgba(0,87,255,0.22)] md:rounded-[42px]">
                <img
                  src={`${asset}banner3.jpg`}
                  alt="Arijit Bhattacharyya mentoring session business growth startup advisory scaleup funding grants private equity and global expansion"
                  className="h-[360px] w-full rounded-[24px] object-contain object-center sm:h-[470px] md:h-[600px] md:rounded-[34px]"
                />

                <div className="pointer-events-none absolute inset-x-2 bottom-2 h-[44%] rounded-b-[24px] bg-gradient-to-t from-black/88 via-black/40 to-transparent md:rounded-b-[34px]" />

                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8bb7ff]">
                    Business Mentoring / Scaleup / Funding
                  </p>

                  <h2 className="mt-3 max-w-[640px] text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[34px]">
                    Helping founders see blind spots, structure growth and go
                    global.
                  </h2>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {visualProof.map((item) => (
                  <article
                    key={item.title}
                    className="group overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.045] p-2 transition duration-300 hover:-translate-y-1 hover:border-[#58a0ff]/45"
                  >
                    <div className="relative h-[240px] overflow-hidden rounded-[20px] bg-[#07101f] sm:h-[280px] xl:h-[260px]">
                      <img
                        src={`${asset}${item.image}`}
                        alt={`Arijit Bhattacharyya mentoring ${item.title.toLowerCase()} business growth and advisory proof`}
                        className="h-full w-full object-contain object-center p-2 transition duration-700 group-hover:scale-[1.015]"
                      />

                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-black/88 via-black/42 to-transparent" />

                      <div className="absolute bottom-5 left-5 right-5">
                        <h3 className="text-[24px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[28px]">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-[14px] font-normal leading-6 text-white/70">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
