import { motion } from "framer-motion";

const applications = [
  {
    category: "Healthcare",
    title: "Medical Simulation",
    text: "Virtual patients, medical procedures, medical-student training, equipment operation, treatment protocols, safety workflows and clinical training environments.",
  },
  {
    category: "Defence",
    title: "Defence Simulation",
    text: "Physics-based recoil, tactical environments, training scenarios, interactive weapon systems, defence training modules and real-world simulation experiences.",
  },
  {
    category: "Banking",
    title: "Banking Simulation",
    text: "VR-enabled banking environments, digital banking workflows, customer-service simulation, process training and future-ready financial technology experiences.",
  },
  {
    category: "Industrial Training",
    title: "Ship & Oil Rig Training",
    text: "Immersive marine, ship and oil-rig training environments for safety procedures, equipment handling, operational workflows and high-risk industry simulation.",
  },
  {
    category: "Enterprise",
    title: "Recruitment & Workforce Training",
    text: "VR and AR-based recruitment, onboarding, skill development, workplace process learning and enterprise readiness programs.",
  },
  {
    category: "Collaboration",
    title: "Online Meeting Using VR",
    text: "Immersive meeting rooms, collaborative virtual environments, remote presentation spaces and VR-led communication for distributed teams.",
  },
  {
    category: "Real Estate",
    title: "Virtual Property Tours",
    text: "360° guided tours, construction previews, property visualization, virtual walkthroughs and immersive real-estate experiences.",
  },
  {
    category: "Tourism",
    title: "Immersive Destinations",
    text: "Interactive destination experiences, heritage visualization, virtual tourism and cultural storytelling.",
  },
  {
    category: "Education",
    title: "Learning & Skill Development",
    text: "Immersive education across Unity, Unreal, VRML, OpenGL, Blender, AI-assisted learning and simulation-based instruction.",
  },
  {
    category: "Manufacturing",
    title: "Enterprise Digital Twins",
    text: "Digital twins, predictive maintenance, industrial visualization, manufacturing workflows and smart factory simulations.",
  },
  {
    category: "Smart Cities",
    title: "Connected Infrastructure",
    text: "AI, AR and VR visualization for smart-city systems, connected infrastructure and future urban technologies.",
  },
  {
    category: "Entertainment",
    title: "Games & Movies",
    text: "VR games, AR experiences, digital characters, immersive storytelling and movie-based interactive entertainment.",
  },
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

            <h2 className="mt-4 max-w-4xl text-[34px] font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-[44px] md:text-[52px] lg:text-[58px]">
              Immersive technology built for real-world use.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:justify-self-end">
            Arijit’s VR, AR, AI and simulation work spans entertainment,
            healthcare, defence, banking, recruitment, ship and oil-rig
            training, tourism, real estate, education, manufacturing, smart
            cities and enterprise transformation.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {applications.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.03 }}
              className="group rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-6 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[0.075]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-300">
                {item.category}
              </p>

              <h3 className="mt-3 text-[24px] font-bold leading-[1.08] tracking-[-0.03em] text-white md:text-[28px]">
                {item.title}
              </h3>

              <p className="mt-4 text-[16px] leading-7 text-slate-300">
                {item.text}
              </p>

              <div className="mt-6 h-[3px] w-12 rounded-full bg-blue-400/80 transition-all duration-300 group-hover:w-20" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}