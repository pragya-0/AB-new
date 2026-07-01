import { motion } from "framer-motion";
import {
  
  Building2,
  Globe2,
  Landmark,
  Network,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const ecosystemPoints = [
  {
    icon: Building2,
    label: "Founder-Led Ventures",
    text: "Companies, platforms and IP built from the ground up.",
  },
  {
    icon: Landmark,
    label: "Investment Support",
    text: "Angel investment, venture capital and scale-up guidance.",
  },
  {
    icon: Globe2,
    label: "Global Expansion",
    text: "India-origin ecosystem connected to international markets.",
  },
  {
    icon: Network,
    label: "Industry Network",
    text: "Technology, gaming, media, education and startup communities.",
  },
];

const stats = ["Since 1998", "Venture Ecosystem", "Global Market Expansion"];

export default function VenturesHero() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(37,99,235,0.28),transparent_32%),radial-gradient(circle_at_85%_12%,rgba(14,165,233,0.16),transparent_30%),linear-gradient(180deg,#03070d_0%,#07111f_55%,#03070d_100%)]" />
      <div className="absolute -left-28 top-28 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -right-28 bottom-24 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-200 sm:text-xs sm:tracking-[0.22em]">
              <Sparkles size={14} className="shrink-0" />
              <span className="break-words">
                Ventures • Investments • Market Expansion
              </span>
            </div>

            <h1 className="max-w-5xl text-[2.55rem] font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building Ventures, Investment Ecosystems & Global Market Expansion Since 1998
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Arijit Bhattacharyya’s venture ecosystem connects companies,
              platforms and communities across technology, investment, gaming,
              creative media, education, healthcare, blockchain and
              international market expansion.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {stats.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-200 sm:text-xs"
                >
                  {item}
                </span>
              ))}
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative w-full"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/10 blur-2xl sm:-inset-6 sm:rounded-[2.5rem]" />

            <div className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-3 shadow-2xl backdrop-blur sm:rounded-[2rem] sm:p-4">
              <div className="rounded-[1.25rem] border border-white/10 bg-[#07111f]/90 p-4 sm:rounded-[1.5rem] sm:p-6">
                <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-300 sm:text-xs sm:tracking-[0.24em]">
                      Ecosystem Lens
                    </p>
                    <h2 className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
                      Built across industries
                    </h2>
                  </div>

                  <span className="w-fit rounded-full bg-blue-500/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-200 sm:text-xs sm:tracking-[0.16em]">
                    Since 1998
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {ecosystemPoints.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 + index * 0.08 }}
                        className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition hover:border-blue-300/40 hover:bg-white/[0.075]"
                      >
                        <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">
                          <Icon size={19} />
                        </span>

                        <h3 className="text-sm font-bold text-white">
                          {item.label}
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-slate-400">
                          {item.text}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-5 rounded-2xl bg-white p-5 text-[#03070d]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-700 sm:text-xs sm:tracking-[0.18em]">
                    Investment Keywords
                  </p>
                  <p className="mt-2 text-lg font-extrabold leading-snug sm:text-xl">
                    Angel investment, venture capital, startup Bengal and global
                    scale-up support.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
