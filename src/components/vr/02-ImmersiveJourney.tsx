import { motion } from "framer-motion";

const journey = [
  {
    title: "Games",
    text: "The foundation began with game programming, 2D and 3D worlds, interactive mechanics and original entertainment IP.",
  },
  {
    title: "3D Graphics",
    text: "The work expanded into modelling, animation, real-time visuals, rendering systems and character development.",
  },
  {
    title: "Virtual Reality",
    text: "VRML, VR games, simulations and immersive applications became a natural extension of game and 3D engineering.",
  },
  {
    title: "AR / MR",
    text: "Augmented and mixed reality opened new possibilities for training, education, tourism, real estate and experiences.",
  },
  {
    title: "AI & Immersive Computing",
    text: "Today the same creative-technical path connects AI, digital humans, spatial interfaces and future storytelling systems.",
  },
];

export default function ImmersiveJourney() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 text-[#081120] sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,.09),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,.07),transparent_38%),linear-gradient(180deg,#ffffff_0%,#f8fbff_48%,#eef6ff_100%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 border-b border-slate-200 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700 sm:text-sm">
              Immersive Journey
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              From game worlds to immersive computing.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:justify-self-end">
            Arijit's VR work did not start as a trend. It grew from decades of
            building games, 3D characters, simulations, graphics systems and
            interactive digital experiences.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {journey.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.25 },
              }}
              className="group relative overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:border-blue-300 hover:shadow-[0_22px_60px_rgba(37,99,235,0.13)]"
            >
              <h3 className="text-2xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-blue-700">
                {item.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                {item.text}
              </p>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.25 + index * 0.08,
                  duration: 0.5,
                }}
                className="absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
