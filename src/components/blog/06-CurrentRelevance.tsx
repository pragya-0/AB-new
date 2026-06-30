import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Globe2, GraduationCap, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const relevanceCards = [
  {
    icon: Rocket,
    title: "Built from execution",
    text: "These essays come from the ground reality of building companies, products, teams, games, training programs and startup ecosystems — not from theory alone.",
  },
  {
    icon: BrainCircuit,
    title: "Still connected to today",
    text: "The archive continues into Arijit’s current work across AI, GenAI, VR/AR, blockchain, digital business, gaming, education and future technology.",
  },
  {
    icon: Globe2,
    title: "A bridge across industries",
    text: "The themes move across founders, capital, leadership, society, creative IP, technology adoption and global innovation — the same intersections that define his public work today.",
  },
  {
    icon: GraduationCap,
    title: "Designed for readers",
    text: "Legacy articles are preserved, but reorganised as a modern knowledge hub so founders, students, institutions and collaborators can discover the ideas with context.",
  },
];

export default function CurrentRelevance() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white px-5 py-16 text-[#07111f] sm:px-6 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(37,99,235,0.12),transparent_30%),radial-gradient(circle_at_88%_70%,rgba(14,165,233,0.11),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-700 sm:text-sm">
              Why This Archive Matters
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.035em] text-[#07111f] sm:text-5xl">
              Not old content — a record of ideas still shaping the work.
            </h2>
          </div>

          <p className="max-w-2xl text-base font-normal leading-8 text-slate-600 sm:text-lg lg:ml-auto">
            Arijit Bhattacharyya’s blog archive captures the thinking behind years of work across entrepreneurship, artificial intelligence, startup mentoring, gaming, VR/AR, blockchain, education and innovation ecosystems. The page preserves that history while connecting it to his current role as a founder, speaker, mentor, author and technology strategist.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relevanceCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.22 }}
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                  delay: index * 0.04,
                }}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_26px_80px_rgba(15,23,42,0.12)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#07111f] text-white transition duration-300 group-hover:bg-blue-700">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-lg font-bold tracking-[-0.02em] text-[#07111f]">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm font-normal leading-7 text-slate-600">
                  {card.text}
                </p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mt-10 flex flex-col gap-3 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.07)] sm:flex-row sm:items-center sm:justify-between sm:p-7"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
              Continue from the archive
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-[#07111f]">
              Explore how these ideas continue through speaking, mentoring and technology work.
            </h3>
          </div>

          <Link
            to="/speaking"
            className="inline-flex items-center justify-center rounded-full bg-[#07111f] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Explore Speaking Work
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
