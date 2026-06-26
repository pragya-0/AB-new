import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Mail,
  Mic2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function BlogCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#07111f] via-[#03070d] to-black text-white">
      {/* Animated Background */}

      <motion.div
        className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[140px]"
        animate={{
          x: [0, 45, 0],
          y: [0, 25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-44 bottom-0 h-[460px] w-[460px] rounded-full bg-sky-500/15 blur-[150px]"
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
          scale: [1.08, 1, 1.08],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] backdrop-blur-xl"
        >
          <div className="grid items-center gap-12 p-8 sm:p-10 lg:grid-cols-[1fr_420px] lg:p-16">
            {/* Left */}

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-blue-300">
                Continue the Conversation
              </p>

              <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Ideas become valuable
                <br />
                when they create
                <br />
                conversations.
              </h2>

              <p className="mt-7 max-w-2xl text-base font-normal leading-8 text-slate-300 sm:text-lg">
                The articles are only one part of the journey. Continue exploring
                Arijit Bhattacharyya's work across keynote speaking, technology,
                startups, venture building, AI, immersive media and global
                innovation.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/speaking"
                  className="group inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-bold text-[#07111f] transition hover:-translate-y-1 hover:bg-blue-50"
                >
                  <Mic2 className="mr-2 h-4 w-4" />
                  Explore Speaking

                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </a>

                <a
                  href="/books"
                  className="group inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-500/10"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Explore Books
                </a>
              </div>
            </div>

            {/* Right */}

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-5 rounded-[2rem] bg-blue-500/20 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.07] p-8 backdrop-blur-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#07111f] shadow-xl">
                  <Mail className="h-7 w-7" />
                </div>

                <h3 className="mt-7 text-3xl font-extrabold tracking-[-0.03em] text-white">
                  Connect with Arijit
                </h3>

                <p className="mt-4 text-sm font-normal leading-7 text-slate-300">
                  Looking for a keynote speaker, AI strategist, startup mentor,
                  investor, technology advisor or collaboration opportunity?
                </p>

                <a
                  href="/contact"
                  className="group mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-500"
                >
                  Contact Arijit

                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </a>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
                    Knowledge Philosophy
                  </p>

                  <p className="mt-3 text-sm font-normal leading-7 text-slate-300">
                    Technology evolves quickly, but meaningful innovation always
                    begins with curiosity, execution and the willingness to keep
                    learning.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}