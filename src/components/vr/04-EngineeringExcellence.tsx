import { motion } from "framer-motion";

const techGroups = [
  {
    title: "Graphics & Rendering",
    items: ["OpenGL", "DirectX", "Ray Tracing", "CUDA", "OpenCL", "HLSL"],
  },
  {
    title: "Game & XR Systems",
    items: ["Unity", "Unreal Engine", "VRML", "Motion Capture", "Physics", "Rendering"],
  },
  {
    title: "Development Stack",
    items: ["C#", "C++", "Python", "Java", "Blender", "3ds Max", "Volume Rendering", "SQL Server"],
  },
];

const engineeringNotes = [
  "GPU programming and real-time graphics optimization",
  "Custom rendering pipelines optimized for real-time graphics",
  "Procedural level generation, soft-body physics and particle systems",
  "Interactive simulation mechanics for immersive applications",
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
              Engineering Excellence
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              The engineering depth behind immersive worlds.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:justify-self-end">
           Engineering work extended beyond application development into rendering, simulation, GPU programming, physics systems and real-time graphics optimization. This included research on PowerVR hardware ray tracing alongside advanced rendering techniques for immersive environments.
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
              <h3 className="text-2xl font-bold text-slate-950">
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