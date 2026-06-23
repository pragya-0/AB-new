import { motion } from "framer-motion";
import { fadeUp } from "./bioMotion";
import { stats } from "../../data/bio/bioStats";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const metricMotion = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function StatsSection() {
  const [years, ...supporting] = stats;

  return (
    <section className="bg-[#eef5ff] px-5 py-14 md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <motion.div
          {...fadeUp}
          className="grid gap-10 border-y border-[#c3ddff] py-12 lg:grid-cols-[0.42fr_1fr] lg:items-center"
        >
          <div>
            <p className="text-[108px] font-black leading-none tracking-[-0.1em] text-[#0057ff] md:text-[150px]">
              {years[0]}
            </p>

            <h2 className="mt-4 max-w-[520px] text-[42px] font-black leading-[0.88] tracking-[-0.07em] text-[#07101f] md:text-[68px]">
              Years Building Innovation
            </h2>

            <p className="mt-6 text-[11px] font-black uppercase tracking-[0.22em] text-[#0057ff]">
              Technology • Entrepreneurship • Creativity • Global Collaboration
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-x-10 gap-y-8 sm:grid-cols-2 xl:grid-cols-3"
          >
            {supporting.map(([value, label]) => (
              <motion.div
                key={`${value}-${label}`}
                variants={metricMotion}
                className="group border-b border-[#c3ddff] pb-6"
              >
                <p className="text-[52px] font-black leading-none tracking-[-0.08em] text-[#0057ff] md:text-[70px]">
                  {value}
                </p>

                <p className="mt-4 text-[12px] font-black uppercase leading-5 tracking-[0.2em] text-[#07101f]">
                  {label}
                </p>

                <div className="mt-5 h-[3px] w-10 rounded-full bg-[#0057ff] transition duration-300 group-hover:w-24" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}