import { motion } from "framer-motion";

const futureAreas = [
  "Artificial Intelligence",
  "Generative AI",
  "LLM / NLP",
  "VR",
  "AR",
  "Mixed Reality",
  "Spatial Computing",
  "Digital Humans",
  "Digital Twins",
  "Robotics",
  "Smart Cities",
  "Industry 4.0",
];

export default function FutureXR() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 text-[#081120] sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,.07),transparent_40%),linear-gradient(180deg,#ffffff_0%,#f8fbff_48%,#eef6ff_100%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-700 sm:text-sm">
            Looking Ahead
          </p>

          <h2 className="mx-auto mt-5 max-w-5xl text-[34px] font-extrabold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-[46px] lg:text-[58px]">
            The future belongs to AI-powered VR, AR and immersive computing.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-[17px] leading-9 text-slate-600">
            Arijit Bhattacharyya&apos;s journey began with game development,
            computer graphics and Virtual Reality before expanding into
            Augmented Reality, Mixed Reality, Artificial Intelligence,
            Generative AI, Digital Humans and enterprise immersive platforms.
            Together, these technologies are often described as Extended
            Reality, but for business audiences the value is clearer through VR,
            AR and AI.
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-[17px] leading-9 text-slate-600">
            The next generation of products will combine AI, VR, AR, robotics,
            digital twins, real-time simulation and spatial computing to
            transform healthcare, manufacturing, education, banking, smart
            cities, defence, entertainment and Industry 4.0.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {futureAreas.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-white px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mx-auto mt-16 max-w-5xl rounded-[2rem] border border-blue-100 bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-12 text-center text-white shadow-[0_30px_80px_rgba(37,99,235,0.18)]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-100">
            Vision
          </p>

          <h3 className="mt-4 text-[30px] font-extrabold leading-tight md:text-[42px]">
            Building the next generation of AI, VR, AR and immersive
            technologies.
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-[17px] leading-8 text-blue-50">
            More than two decades of experience across game development,
            immersive computing, Artificial Intelligence, enterprise software,
            simulation systems and digital innovation continue to shape the
            future of technology-driven experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}