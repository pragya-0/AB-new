import { motion } from "framer-motion";
import {
  BrainCircuit,
  Gamepad2,
  Globe2,
  Landmark,
  Lightbulb,
  Rocket,
} from "lucide-react";
import { archivePosts, knowledgeTracks } from "./blogData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const icons = {
  "Entrepreneurship & Startup Capital": Rocket,
  "AI, DeepTech & Future Technology": BrainCircuit,
  "VR, Gaming & Metaverse": Gamepad2,
  "Leadership & Founder Psychology": Lightbulb,
  "Creative IP, Mythology & Culture": Landmark,
  "Society, Economy & Life": Globe2,
};

const topicMap: Record<string, string[]> = {
  "Entrepreneurship & Startup Capital": [
    "Funding",
    "VC",
    "Pitch Decks",
    "Scaling",
    "Founder Lessons",
  ],
  "AI, DeepTech & Future Technology": [
    "AI",
    "Blockchain",
    "Cybersecurity",
    "Fintech",
    "Future Systems",
  ],
  "VR, Gaming & Metaverse": [
    "VR",
    "AR",
    "Gaming",
    "Metaverse",
    "Simulation",
  ],
  "Leadership & Founder Psychology": [
    "Mindset",
    "Public Speaking",
    "Burnout",
    "Decision Making",
    "Purpose",
  ],
  "Creative IP, Mythology & Culture": [
    "Superheroes",
    "Cosplay",
    "Mythology",
    "Culture",
    "Storytelling",
  ],
  "Society, Economy & Life": [
    "Life Stories",
    "Economy",
    "Health",
    "Climate",
    "Human Impact",
  ],
};

export default function KnowledgeTracks() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"
        animate={{ x: [0, 34, 0], y: [0, 24, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-20 h-[420px] w-[420px] rounded-full bg-sky-500/14 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -22, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-300 sm:text-sm">
              Explore the Archive
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-5xl">
              A map of the ideas Arijit writes about.
            </h2>
          </div>

          <p className="max-w-2xl text-base font-normal leading-8 text-slate-300 sm:text-lg lg:ml-auto">
            The legacy blog is broad, so this section gives visitors a quick
            mental map before they enter the full archive below — from startup
            capital and AI to leadership, mythology, gaming and life stories.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {knowledgeTracks.map((track, index) => {
            const Icon =
              icons[track.title as keyof typeof icons] ?? Lightbulb;

            const count = archivePosts.filter(
              (post) => post.category === track.category
            ).length;

            const topics = topicMap[track.title] ?? [];

            return (
              <motion.article
                key={track.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.22 }}
                transition={{
                  duration: 0.56,
                  ease: "easeOut",
                  delay: index * 0.04,
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.065] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[0.09] sm:p-7"
              >
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
                  <div className="absolute -bottom-24 left-8 h-60 w-60 rounded-full bg-sky-500/14 blur-3xl" />
                </div>

                <div className="relative">
                  <div className="mb-7 flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#07111f] shadow-xl shadow-black/20 transition duration-300 group-hover:bg-blue-500 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-100 backdrop-blur">
                      {count} Posts
                    </span>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
                    {track.countLabel}
                  </p>

                  <h3 className="mt-4 text-2xl font-bold tracking-[-0.025em] text-white sm:text-3xl">
                    {track.title}
                  </h3>

                  <p className="mt-4 text-sm font-normal leading-7 text-slate-300">
                    {track.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-[11px] font-semibold text-slate-200"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}