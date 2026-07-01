import { motion } from "framer-motion";

import SmartImage from "../bio/SmartImage";

const stats = [
  "Since 1998",
  "Founder-led innovation journey",
  "Digital Humans",
  "Simulation Systems",
  "Smart City Systems",
];

export default function VRHero() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(37,99,235,0.28),transparent_34%),radial-gradient(circle_at_86%_18%,rgba(14,165,233,0.16),transparent_34%),linear-gradient(180deg,#03070d_0%,#07111f_52%,#03070d_100%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300 sm:text-sm">
            Immersive Technology • Digital Humans • Future-Ready Systems
          </p>

          <h1 className="mt-5 max-w-5xl text-[40px] font-extrabold leading-[1.04] tracking-[-0.04em] sm:text-[50px] lg:text-[58px] xl:text-[64px]">
            VR, AR & AI Before They Became Mainstream.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
            Arijit Bhattacharyya has been building immersive and intelligent
            technology systems since the early days of game development, 3D
            graphics and VRML. His work connects Virtual Reality, Augmented
            Reality, Artificial Intelligence, Digital Humans, simulation systems
            and interactive experiences across entertainment, enterprise,
            education and future-city innovation.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Through Virtualinfocom, his founder-led technology journey spans
            healthcare, defence training, banking, manufacturing, education,
            tourism, real estate, recruitment, digital training, movies,
            smart-city systems, Nokia collaborations and global technology ecosystems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {stats.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="relative"
        >
          <div className="absolute -inset-5 rounded-[2.5rem] bg-blue-500/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl backdrop-blur sm:p-4">
            <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#05070b] sm:min-h-[560px] lg:min-h-[650px]">
              <SmartImage
                src="/assets/thought-leadership/metaverse-VR.jpg"
                alt="Arijit Bhattacharyya VR AR AI GenAI digital humans immersive technology, virtual reality, augmented reality, XR, simulation, robotics and digital twin technologies"
                className="h-full w-full object-cover opacity-90 transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#03070d]/85 via-[#03070d]/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-[1.4rem] border border-white/10 bg-[#03070d]/70 p-5 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                  Immersive Technology
                </p>

                <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                  Games, AI, VR, AR, XR, Digital Humans & Enterprise Simulation
                </h2>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}