import { motion } from "framer-motion";
import { fadeUp } from "./bioMotion";

const metrics = [
  ["29+", "Years Building Innovation"],
  ["102+", "Countries Connected"],
  ["60+", "Countries Travelled"],
  ["7000+", "Startups Mentored"],
  ["10,000+", "Students Trained"],
  ["500+", "Games, VR & AR Projects"],
  ["2100+", "Events & Forums"],
  ["350+", "Models & Character Work"],
];

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
  const [years, ...supporting] = metrics;

  return (
    <section className="bg-[#eef5ff] px-5 py-12 sm:px-6 md:px-10 md:py-14">
      <div className="mx-auto max-w-[1500px]">
        <motion.div
          {...fadeUp}
          className="grid gap-9 border-y border-[#c3ddff] py-10 md:py-12 lg:grid-cols-[0.42fr_1fr] lg:items-center"
        >
          <div>
            <p className="text-[86px] font-bold leading-none tracking-[-0.08em] text-[#0057ff] sm:text-[108px] md:text-[132px] xl:text-[150px]">
              {years[0]}
            </p>

            <h2 className="mt-4 max-w-[560px] text-[38px] font-extrabold leading-[0.98] tracking-[-0.05em] text-[#07101f] md:text-[52px]">
              {years[1]}
            </h2>

            <p className="mt-6 max-w-[620px] text-[10px] font-semibold uppercase leading-6 tracking-[0.22em] text-[#0057ff] md:text-[11px]">
              Technology • Entrepreneurship • Creativity • Global Collaboration
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-x-8 gap-y-7 sm:grid-cols-2 xl:grid-cols-3"
          >
            {supporting.map(([value, label]) => (
              <motion.div
                key={`${value}-${label}`}
                variants={metricMotion}
                className="group border-b border-[#c3ddff] pb-6"
              >
                <p className="text-[44px] font-bold leading-none tracking-[-0.05em] text-[#0057ff] md:text-[56px]">
                  {value}
                </p>

                <p className="mt-4 text-[10px] font-semibold uppercase leading-5 tracking-[0.2em] text-[#07101f] md:text-[11px]">
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
