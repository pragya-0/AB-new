import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { fadeUp } from "../bio/bioMotion";

const asset = "/assets/mentoring/";

const countries = [
  "USA",
  "Singapore",
  "India",
  "China",
  "Thailand",
  "Finland",
  "United Kingdom",
  "Russia",
  "Japan",
  "Taiwan",
];

const expertise = [
  "Business Scaling",
  "Market Entry",
  "Fund Raising",
  "Global Expansion",
  "Technology Upgrade",
  "AI Transformation",
  "Startup Growth",
  "Partnership Development",
];

export default function MentoringCTA() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-12 text-white sm:px-6 md:px-10 md:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,87,255,0.18),transparent_38%)]" />
      <div className="absolute bottom-[-240px] left-[-240px] h-[560px] w-[560px] rounded-full bg-[#0057ff]/12 blur-[160px]" />
      <div className="absolute right-[-240px] top-[-240px] h-[560px] w-[560px] rounded-full bg-cyan-400/7 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <motion.div
          {...fadeUp}
          className="overflow-hidden rounded-[28px] border border-[#58a0ff]/20 bg-[linear-gradient(135deg,rgba(0,87,255,0.18),rgba(255,255,255,0.03))] shadow-[0_30px_100px_rgba(0,87,255,0.18)] md:rounded-[38px]"
        >
          <div className="grid lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
            <div className="p-6 sm:p-7 md:p-9 xl:p-11">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#8bb7ff]">
                Get In Touch
              </p>

              <h2 className="max-w-[900px] text-[38px] font-extrabold leading-[0.96] tracking-[-0.05em] text-white sm:text-[46px] md:text-[56px] xl:text-[64px]">
                Looking for the right partner to scale your business?
              </h2>

              <p className="mt-6 max-w-[820px] text-[15px] font-normal leading-[1.75] tracking-[-0.01em] text-white/70 md:text-[17px]">
                Whether you're entering a new market, raising capital, upgrading
                technology, building partnerships or expanding internationally,
                mentoring engagements help founders and leadership teams move
                faster with fewer blind spots.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {expertise.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/20 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.13em] text-white/78 sm:text-[10px]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-9">
                <h3 className="text-[26px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[34px]">
                  Countries & Ecosystems
                </h3>

                <p className="mt-4 max-w-[720px] text-[15px] font-normal leading-7 text-white/64 md:text-[16px]">
                  For founders exploring expansion opportunities, partnerships
                  or ecosystem access in international markets.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {countries.map((country) => (
                    <span
                      key={country}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-white/72"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative min-h-[440px] overflow-hidden bg-[#05070c] sm:min-h-[520px] lg:min-h-0">
              <img
                src={`${asset}banner6-1.jpg`}
                alt="Arijit Bhattacharyya mentoring advisory connect for business growth fundraising technology transformation and global expansion"
                className="absolute inset-0 h-full w-full object-contain object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-black/0 lg:bg-gradient-to-l lg:from-black/72 lg:via-black/14 lg:to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 md:bottom-7 md:left-7 md:right-7">
                <div className="rounded-[24px] border border-white/10 bg-black/45 p-5 backdrop-blur-md md:p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8bb7ff]">
                    Contact
                  </p>

                  <h3 className="mt-3 text-[28px] font-bold leading-[1] tracking-[-0.04em] text-white md:text-[38px]">
                    Connect With Arijit
                  </h3>

                  <p className="mt-4 text-[14px] font-normal leading-7 text-white/70 md:text-[15px]">
                    Discuss mentoring, business growth, fundraising,
                    international expansion, technology transformation or
                    strategic partnerships.
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      href="mailto:arijit@virtualinfocom.net"
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0057ff] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.17em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#1f6fff]"
                    >
                      <Mail size={15} />
                      Email Arijit
                    </a>

                    <a
                      href="/bio"
                      className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.08] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.17em] text-white transition duration-300 hover:-translate-y-1 hover:bg-white/14"
                    >
                      View Full Biography
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
