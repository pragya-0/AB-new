import { motion } from "framer-motion";
import { BookOpen, BrainCircuit, Rocket } from "lucide-react";
import { blogPath } from "./blogData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const heroImages = [
  {
    src: `${blogPath}Arijit_Bhattacharyya-blog.jpg`,
    alt: "Arijit Bhattacharyya writing and insights portrait",
  },
  {
    src: `${blogPath}Arijit_Bhattacharyya-cyber.jpg`,
    alt: "Arijit Bhattacharyya cyber security and technology archive",
  },
  {
    src: `${blogPath}arijit-bhattacharyya.jpg`,
    alt: "Arijit Bhattacharyya portrait for ideas and insights",
  },
  {
    src: `${blogPath}kolkata-businessmen.jpg`,
    alt: "Arijit Bhattacharyya Kolkata business and leadership photograph",
  },
  {
    src: `${blogPath}Arijit-life-story.jpg`,
    alt: "Arijit Bhattacharyya life story archive image",
  },
  {
    src: `${blogPath}leadership-arijit.jpg`,
    alt: "Arijit Bhattacharyya leadership and entrepreneurship portrait",
  },
];
export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] text-white">
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.34, 0.2] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-52 -top-52 h-[620px] w-[620px] rounded-full bg-blue-600 blur-[140px]"
        />
        <motion.div
          animate={{ scale: [1.08, 1, 1.08], opacity: [0.12, 0.24, 0.12] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-56 -left-56 h-[600px] w-[600px] rounded-full bg-sky-500 blur-[150px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:56px_56px] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#03070d]/10 via-[#03070d]/40 to-[#03070d]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:min-h-[calc(100vh-88px)] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8 lg:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-blue-300">
            Ideas & Insights
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl xl:text-[82px]">
            Ideas That
            <br />
            Build the Future.
          </h1>

          <p className="mt-7 max-w-2xl text-base font-normal leading-8 text-slate-300 sm:text-lg">
            Selected writing by Arijit Bhattacharyya — covering
            entrepreneurship, artificial intelligence, venture capital, virtual reality,
            blockchain, gaming, leadership, culture, society and life stories.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {[
              { icon: Rocket, text: "Founder Since 1998" },
              { icon: BrainCircuit, text: "AI • Entrepreneurship • Innovation" },
              { icon: BookOpen, text: "Selected Founder Writing" },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.text}
                  className="flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur sm:px-5"
                >
                  <Icon className="mr-2 h-4 w-4 text-blue-300" />
                  <span className="text-sm font-semibold">{item.text}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.08 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-4 lg:rounded-[2.5rem]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(59,130,246,0.2),transparent_35%)]" />

          <div className="relative overflow-hidden rounded-[1.5rem] bg-[#06101f] lg:rounded-[2rem]">
            <motion.div
              className="flex w-max gap-4 p-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...heroImages, ...heroImages].map((image, index) => (
                <article
                  key={`${image.src}-${index}`}
                  className="w-[210px] shrink-0 overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.06] sm:w-[250px] lg:w-[285px]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                </article>
              ))}
            </motion.div>
          </div>

          <div className="relative mt-4 grid gap-3 sm:grid-cols-3">
            {[
              "Founder insights",
              "Technology notes",
              "Life stories",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
