import { motion } from "framer-motion";

export default function FutureXR() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 text-[#081120] sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,.07),transparent_40%),linear-gradient(180deg,#ffffff_0%,#f8fbff_48%,#eef6ff_100%)]" />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-700 sm:text-sm">Future of XR</p>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Immersive technology is becoming the next interface of imagination.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
            From early VRML and game engines to AI, AR, digital humans and spatial computing, Arijit Bhattacharyya’s immersive work reflects a long-term belief: the future of technology will be experienced, not just viewed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}