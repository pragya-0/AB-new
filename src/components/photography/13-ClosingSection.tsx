import { motion } from "framer-motion";
import { fadeUp, getHeroPhoto, smoothEase } from "./photographyUtils";

export default function ClosingSection() {
  const hero = getHeroPhoto();

  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
      {hero && (
        <motion.img
          src={hero.src}
          alt="Arijit Bhattacharyya photography closing visual"
          loading="lazy"
          initial={{ scale: 1.04 }}
          whileInView={{ scale: 1.1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 12, ease: "linear" }}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,.28),transparent_35%)]" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: smoothEase }}
        className="relative mx-auto flex min-h-[48vh] max-w-5xl flex-col justify-center"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-blue-300 sm:text-xs">
          Through The Lens
        </p>

        <h2 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Every journey leaves behind a frame.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
          These photographs close the page as a visual memory of movement —
          places, people, light, food, nature and culture captured along the way.
        </p>
      </motion.div>
    </section>
  );
}