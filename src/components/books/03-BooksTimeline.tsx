import { motion } from "framer-motion";
import {
  BrainCircuit,
  Gamepad2,
  Globe2,
  Landmark,
  Network,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const ideaJourney = [
  {
    icon: Gamepad2,
    label: "Mythology • IP • Storytelling",
    title: "Building original worlds, not just writing stories.",
    description:
      "The Legend Comes Alive connects Arijit’s long-running work in characters, mythology-led storytelling, comics, games and entertainment IP. It reflects the creative side of his technology journey — where stories become worlds, and worlds can expand into games, films and digital experiences.",
  },
  {
    icon: Landmark,
    label: "Startup Capital • Founder Reality",
    title: "Challenging the easy advice around fundraising.",
    description:
      "Experts Can Blow It looks at the difficult, often misunderstood early stage of building a venture. Instead of treating fundraising as a glamorous milestone, it positions capital as a strategic decision shaped by timing, clarity, founder discipline and ecosystem understanding.",
  },
  {
    icon: BrainCircuit,
    label: "Artificial Intelligence • Future Business",
    title: "Reading the AI decade through the eyes of a founder.",
    description:
      "The Future of Entrepreneurship and The Power of Generic AI place artificial intelligence at the centre of business transformation. The focus is not only on tools, but on how founders, students, institutions and organisations must rethink decision-making, creativity, scale and opportunity.",
  },
  {
    icon: Sparkles,
    label: "Virtual Reality • Immersive Technology",
    title: "Exploring the shift from screens to experiences.",
    description:
      "The VR Sega studies virtual reality as a social, educational, healthcare, entertainment and workplace technology. The idea is larger than gadgets: immersive computing changes how people learn, collaborate, train, heal, play and imagine future digital environments.",
  },
  {
    icon: Globe2,
    label: "Blockchain • Africa • Inclusion",
    title: "Technology as infrastructure for emerging economies.",
    description:
      "Empowering Africa frames blockchain as more than a financial trend. It looks at digital trust, education, inclusion and economic participation — asking how technology can support new systems of opportunity across Africa and other emerging innovation ecosystems.",
  },
  {
    icon: Network,
    label: "One Connected Body of Work",
    title: "A library shaped by building, speaking and mentoring.",
    description:
      "Together, the books mirror Arijit Bhattacharyya’s broader professional identity: founder, technologist, speaker, mentor, investor and creator. The collection moves across business, deep technology and imagination — the same territories that define the AB NEW personal brand.",
  },
];

export default function BooksTimeline() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.22),transparent_34%),radial-gradient(circle_at_82%_50%,rgba(14,165,233,0.13),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-300">
            Ideas Journey
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-5xl">
            A library moving between technology, capital, worlds and societies.
          </h2>

          <p className="mt-5 text-base font-normal leading-8 text-slate-300 sm:text-lg">
            Based on the old website’s book collection and Amazon-listed themes, this section
            positions the books as a connected body of work — not a date-by-date archive.
            The focus is on the evolution of ideas: from original IP and founder capital to
            AI, VR, blockchain and emerging-market transformation.
          </p>
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-blue-400 via-white/20 to-transparent md:left-1/2 md:block" />

          <div className="space-y-8 md:space-y-0">
            {ideaJourney.map((item, index) => {
              const isRight = index % 2 !== 0;
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={[
                    "relative grid gap-6 md:grid-cols-2 md:gap-12",
                    index !== 0 ? "md:-mt-4" : "",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "relative",
                      isRight ? "md:col-start-2" : "md:pr-6",
                    ].join(" ")}
                  >
                    <div className="absolute -left-1 top-7 hidden h-4 w-4 rounded-full border-4 border-[#03070d] bg-blue-300 shadow-[0_0_0_6px_rgba(59,130,246,0.18)] md:block md:left-auto md:right-[-2.45rem]" />

                    {isRight && (
                      <div className="absolute -left-[2.45rem] top-7 hidden h-4 w-4 rounded-full border-4 border-[#03070d] bg-blue-300 shadow-[0_0_0_6px_rgba(59,130,246,0.18)] md:block" />
                    )}

                    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[0.1] sm:p-8">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#07111f] shadow-xl shadow-black/20 transition duration-300 group-hover:bg-blue-500 group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>

                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
                        {item.label}
                      </p>

                      <h3 className="mt-4 text-2xl font-bold tracking-[-0.025em] text-white sm:text-3xl">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm font-normal leading-7 text-slate-300 sm:text-base">
                        {item.description}
                      </p>
                    </article>
                  </div>

                  <div
                    className={
                      isRight
                        ? "hidden md:block md:col-start-1 md:row-start-1"
                        : "hidden md:block"
                    }
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}