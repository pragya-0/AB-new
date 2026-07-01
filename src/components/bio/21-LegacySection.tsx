import { motion } from "framer-motion";
import SmartImage from "./SmartImage";
import { fadeUp } from "./bioMotion";
import { bio } from "../../data/bio/bioAssets";

const closingStats = [
  ["29+", "Years"],
  ["7000+", "Startups"],
  ["10,000+", "Students"],
  ["102+", "Countries Connected"],
  ["60+", "Countries Travelled"],
];

export default function LegacySection() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-16 text-white sm:px-6 md:px-10 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,87,255,0.16),transparent_36%)]" />
      <div className="absolute bottom-[-220px] left-[-220px] h-[520px] w-[520px] rounded-full bg-[#0057ff]/12 blur-[150px]" />
      <div className="absolute right-[-260px] top-[-240px] h-[560px] w-[560px] rounded-full bg-cyan-400/8 blur-[160px]" />

      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <motion.div {...fadeUp}>
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7fb8ff] md:text-[12px]">
            The Work Continues
          </p>

          <h2 className="max-w-[760px] text-[38px] font-extrabold leading-[0.98] tracking-[-0.05em] text-white sm:text-[44px] md:text-[52px]">
            The Story Is Still Being Written.
          </h2>

          <p className="mt-6 max-w-[760px] text-[16px] font-normal leading-[1.8] tracking-[-0.01em] text-white/68 md:text-[18px]">
            From Virtualinfocom in 1998 to AI, gaming, books, mentoring,
            investment, media, global forums and creative IP, the journey
            continues through platforms built for founders, students, creators
            and future-facing businesses.
          </p>

          <div className="mt-8 grid max-w-[820px] grid-cols-2 gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10 sm:grid-cols-3 xl:grid-cols-5">
            {closingStats.map(([value, label]) => (
              <div key={label} className="bg-[#07101f] p-5">
                <p className="text-[34px] font-bold leading-none tracking-[-0.04em] text-white md:text-[44px]">
                  {value}
                </p>

                <p className="mt-3 text-[10px] font-semibold uppercase leading-5 tracking-[0.2em] text-white/50">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="/mentoring"
              className="inline-flex justify-center rounded-full bg-[#0057ff] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#1672ff] sm:px-8"
            >
              Mentoring & Advisory →
            </a>

            <a
              href="/ecosystem"
              className="inline-flex justify-center rounded-full border border-[#2d74ff]/45 bg-[#0057ff]/10 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a8c8ff] transition duration-300 hover:-translate-y-1 hover:bg-[#0057ff] hover:text-white sm:px-8"
            >
              Explore Ecosystem →
            </a>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-[30px] border border-white/12 bg-white/[0.045] p-2 shadow-[0_40px_140px_rgba(0,87,255,0.22)] md:rounded-[38px]"
        >
          <SmartImage
            src={`${bio}blue-suit-contact.jpeg`}
            fallbacks={[
              `${bio}helicopter-bio.jpeg`,
              `${bio}recognition-award.jpeg`,
            ]}
            alt="Arijit Bhattacharyya global innovation journey across technology mentoring investment media and creative IP since 1998"
            className="h-[360px] w-full rounded-[24px] object-cover object-[center_10%] sm:h-[440px] md:h-[540px] md:rounded-[30px]"
          />

          <div className="absolute inset-2 rounded-[24px] bg-gradient-to-t from-black/58 via-black/4 to-transparent md:rounded-[30px]" />

          <div className="absolute bottom-6 left-6 right-6 md:bottom-7 md:left-7 md:right-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#8bb7ff]">
              Since 1998
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
