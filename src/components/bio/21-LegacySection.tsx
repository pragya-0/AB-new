import { motion } from "framer-motion";
import SmartImage from "./SmartImage";
import { fadeUp } from "./bioMotion";
import { bio } from "../../data/bio/bioAssets";

const closingStats = [
  ["29+", "Years"],
  ["7000+", "Startups"],
  ["10,000+", "Students"],
  ["102+", "Countries"],
];

export default function LegacySection() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-20 text-white md:px-10 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,87,255,0.16),transparent_36%)]" />
      <div className="absolute left-[-220px] bottom-[-220px] h-[520px] w-[520px] rounded-full bg-[#0057ff]/12 blur-[150px]" />

      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <motion.div {...fadeUp}>
          <p className="mb-5 text-[11px] font-black uppercase tracking-[0.4em] text-[#58a0ff]">
            The Work Continues
          </p>

          <h2 className="max-w-[760px] text-[46px] font-black leading-[0.9] tracking-[-0.07em] md:text-[76px]">
            The Story Is Still Being Written.
          </h2>

          <p className="mt-7 max-w-[760px] text-[17px] leading-8 text-white/66">
            From Virtualinfocom in 1998 to AI, gaming, books, mentoring, media
            and global forums, the journey continues through platforms built for
            founders, students, creators and future-facing businesses.
          </p>

          <div className="mt-8 grid max-w-[760px] grid-cols-2 gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10 sm:grid-cols-4">
            {closingStats.map(([value, label]) => (
              <div key={label} className="bg-[#07101f] p-5">
                <p className="text-[30px] font-black leading-none tracking-[-0.06em] text-white">
                  {value}
                </p>
                <p className="mt-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/48">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/speaking"
              className="rounded-full bg-[#0057ff] px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#1672ff]"
            >
              Invite To Speak →
            </a>

            <a
              href="/ecosystem"
              className="rounded-full border border-[#2d74ff]/45 bg-[#0057ff]/10 px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-[#a8c8ff] transition duration-300 hover:-translate-y-1 hover:bg-[#0057ff] hover:text-white"
            >
              Explore Ecosystem →
            </a>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-[38px] border border-white/12 bg-white/[0.045] p-2 shadow-[0_40px_140px_rgba(0,87,255,0.22)]"
        >
          <SmartImage
            src={`${bio}blue-suit-contact.jpeg`}
            fallbacks={[`${bio}helicopter-bio.jpeg`, `${bio}recognition-award.jpeg`]}
            alt="Arijit Bhattacharyya global innovation journey"
          className="h-[400px] w-full rounded-[30px] object-cover object-[center_10%] md:h-[540px]"
          />

          <div className="absolute inset-2 rounded-[30px] bg-gradient-to-t from-black/58 via-black/4 to-transparent" />

          <div className="absolute bottom-7 left-7 right-7">
            <p className="text-[10px] font-black uppercase tracking-[0.32em] text-[#8bb7ff]">
              Since 1998
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}