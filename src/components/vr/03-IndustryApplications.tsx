import { motion } from "framer-motion";

const applications = [
  [
    "Medical Simulation",
    "Virtual patients, medical procedures, equipment operation, treatment protocols, safety workflows and clinical training environments.",
  ],
  [
    "Defence Simulation",
    "Physics-based recoil, tactical environments, training scenarios, interactive weapon systems and real-world simulation experiences.",
  ],
  [
    "Real Estate VR",
    "360° guided tours, 4K property visualization, construction previews, virtual navigation and commerce-led real estate experiences.",
  ],
  [
    "Tourism Experiences",
    "Immersive destination experiences, heritage visualization, threatened-site preservation and virtual travel storytelling.",
  ],
  [
    "Education & Training",
    "Immersive learning across Unity, Unreal, VRML, C#, C++, OpenGL, Blender, 3D and simulation-based instruction.",
  ],
  [
    "Enterprise Digital Twins",
    "Simulation, visualization, interactive business environments, digital twins and future-ready enterprise interfaces.",
  ],
];

export default function IndustryApplications() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,.24),transparent_34%),radial-gradient(circle_at_86%_20%,rgba(14,165,233,.14),transparent_34%),linear-gradient(180deg,#03070d_0%,#07111f_50%,#03070d_100%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300 sm:text-sm">
              Industry Applications
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Immersive technology built for real-world use.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:justify-self-end">
            Arijit’s VR and simulation work spans entertainment, healthcare,
            defence, tourism, real estate, education and enterprise
            transformation.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {applications.map(([title, text], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-6 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[0.075]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                XR Application
              </p>
              <h3 className="mt-3 text-2xl font-bold text-white">{title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}