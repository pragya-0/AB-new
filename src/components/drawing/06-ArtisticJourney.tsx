import { motion } from "framer-motion";

export default function ArtisticJourney() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 text-[#081120] sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            x: [0, -50, 20, 0],
            y: [0, 30, -10, 0],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 bottom-0 h-[480px] w-[480px] rounded-full bg-sky-400/10 blur-3xl"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_45%,#eef6ff_100%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-700 sm:text-sm">
            THE CREATIVE FOUNDATION
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Before Technology,
            <br />
            There Was Imagination.
          </h2>

          <div className="mx-auto mt-10 max-w-3xl space-y-6 text-lg leading-9 text-slate-600">
            <p>
              Long before founding technology companies, mentoring
              entrepreneurs and building global innovation platforms,
              Arijit Bhattacharyya spent countless hours drawing people,
              characters and imagined worlds.
            </p>

            <p>
              Portraits sharpened observation. Comic art became an
              exploration of storytelling. Digital illustration transformed
              imagination into characters that later inspired games,
              animation, immersive experiences and original intellectual
              properties.
            </p>

            <p>
              Creativity was never a separate chapter of the journey.
              It became the common thread connecting art, technology,
              entrepreneurship and innovation throughout his career.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            whileHover={{
              y: -6,
              boxShadow: "0 35px 80px rgba(37,99,235,.15)",
            }}
            className="mx-auto mt-16 max-w-3xl rounded-[2rem] border border-blue-100 bg-white/90 px-8 py-10 shadow-2xl backdrop-blur"
          >
            <blockquote className="text-2xl font-bold leading-relaxed text-slate-900 sm:text-3xl">
              “Technology changes.
              <br />
              Imagination creates what technology
              <br />
              will eventually build.”
            </blockquote>

            <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
              — Arijit Bhattacharyya
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}