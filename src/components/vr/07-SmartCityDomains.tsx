import { motion } from "framer-motion";

const smartCityBlocks = [
  {
    eyebrow: "Traffic Intelligence",
    title: "Traffic Intelligence for Better City Movement",
    text: "Smart traffic study focuses on vehicle movement, junction pressure, signal timing, road-use patterns and congestion behavior so cities can plan better mobility systems before execution.",
  },
  {
    eyebrow: "IoT-Connected Infrastructure",
    title: "Connected Devices, Access & Signaling Systems",
    text: "IoT-led smart city development connects physical infrastructure with digital control layers — including smart door locks, automated door opening, connected devices, building access, sensors and signaling systems.",
  },
  {
    eyebrow: "Clean Water & Environmental Systems",
    title: "Clean Water Infrastructure for Smart Cities",
    text: "A smart-city direction connected with clean-water access, patented water-purification technology, Australian innovation collaboration and Kuala Lumpur city-level implementation possibilities for future-ready urban systems.",
  },
  {
    eyebrow: "Digital Twin Infrastructure",
    title: "Digital Twin Infrastructure for Smart Cities",
    text: "Virtualinfocom’s core strength connects gaming engines, AI, IoT, immersive visualization and simulation into digital twin environments for planning, monitoring, prediction and smarter city operations.",
  },
];

export default function SmartCityDomains() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,.38),transparent_34%),radial-gradient(circle_at_86%_18%,rgba(14,165,233,.22),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,.18),transparent_40%),linear-gradient(180deg,#03070d_0%,#061426_52%,#03070d_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300 sm:text-sm">
              Smart City Solutions
            </p>

            <h2 className="mt-4 max-w-4xl text-[34px] font-extrabold leading-[1.02] tracking-[-0.05em] text-white sm:text-[44px] md:text-[52px] lg:text-[60px]">
              Smart-city systems connecting traffic intelligence, IoT infrastructure, clean-water innovation and digital twin simulation.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-blue-50/78 sm:text-lg lg:justify-self-end">
            A practical smart-city direction connecting AI, IoT, immersive visualization,
            simulation, smart signaling, environmental infrastructure and
            digital twin thinking for future-ready urban systems.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {smartCityBlocks.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="group relative min-h-[360px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-7 shadow-[0_24px_90px_rgba(0,0,0,.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-300/45 hover:bg-white/[0.09]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,.35),transparent_38%),linear-gradient(135deg,rgba(37,99,235,.22),transparent_48%)] opacity-70 transition duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent" />

              <div className="relative">
                <span className="inline-flex rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-200">
                  {item.eyebrow}
                </span>

                <h3 className="mt-7 text-[25px] font-extrabold leading-[1.08] tracking-[-0.04em] text-white md:text-[30px]">
                  {item.title}
                </h3>

                <p className="mt-5 text-[16px] leading-8 text-blue-50/76">
                  {item.text}
                </p>

                <div className="mt-8 h-[3px] w-14 rounded-full bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-600 transition-all duration-300 group-hover:w-24" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}