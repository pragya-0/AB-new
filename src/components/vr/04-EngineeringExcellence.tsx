import { motion } from "framer-motion";

const techGroups = [
  {
    title: "AI, GenAI & Software Engineering",
    items: [
      "Artificial Intelligence",
      "GenAI",
      "LLM",
      "NLP",
      "Machine Learning",
      "Microsoft .NET",
      "C#",
      "C++",
      "Python",
      "Java",
    ],
  },
  {
    title: "XR, Graphics & Simulation",
    items: [
      "Unity",
      "Unreal Engine",
      "VRML",
      "OpenGL",
      "DirectX",
      "Ray Tracing",
      "CUDA",
      "OpenCL",
      "Motion Capture",
      "Volume Rendering",
    ],
  },
  {
    title: "Enterprise & DeepTech",
    items: [
      "Blockchain",
      "Digital Twins",
      "IoT",
      "Robotics",
      "Smart Cities",
      "FinTech",
      "Digital Banking",
      "Predictive Maintenance",
      "Azure",
      "SQL Server",
    ],
  },
];

const engineeringNotes = [
  "Building immersive technology and simulation platforms since the early days of immersive computing.",
  "Experience across Microsoft technologies, .NET, C#, enterprise software and large-scale application architecture.",
  "Research and development in GPU programming, PowerVR hardware ray tracing, OpenGL, CUDA and advanced rendering pipelines.",
  "Development spanning blockchain ecosystems, digital twins, IoT, robotics, smart cities and predictive maintenance solutions.",
];

export default function EngineeringExcellence() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 text-[#081120] sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,.09),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,.07),transparent_38%),linear-gradient(180deg,#ffffff_0%,#f8fbff_48%,#eef6ff_100%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 border-b border-slate-200 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700 sm:text-sm">
              Engineering Depth Behind Immersive Innovation
            </p>

            <h2 className="mt-4 max-w-4xl text-[34px] font-extrabold leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-[44px] md:text-[52px] lg:text-[58px]">
              The engineering depth behind immersive worlds.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:justify-self-end">
            Engineering experience spans AI, GenAI, VR, AR, XR, graphics
            programming, enterprise software, blockchain, robotics, IoT,
            digital twins, Microsoft technologies, FinTech, digital banking and
            immersive simulation systems. The work combines research, product
            engineering and scalable technology architecture across multiple
            industries.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {techGroups.map((group, groupIndex) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: groupIndex * 0.06 }}
              className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-xl transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_22px_60px_rgba(37,99,235,0.13)]"
            >
              <h3 className="text-[24px] font-bold leading-[1.08] tracking-[-0.03em] text-slate-950 md:text-[28px]">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.13em] text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {engineeringNotes.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="rounded-[1.4rem] border border-blue-100 bg-white/80 p-5 text-base font-bold leading-7 text-slate-800 shadow-lg"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
