import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cpu,
  Globe2,
  RadioTower,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const technologyPressArchive = [
  {
    id: "ar-vr-immersive-technology",
    eyebrow: "AR • VR",
    title: "AR, VR & Immersive Technology",
    summary:
      "A focused technology proof point connecting Arijit Bhattacharyya’s work across augmented reality, virtual reality, immersive experiences and future media.",
    image:
      "/assets/pressnews/01_images_preserved_structure/latest-speaks/IIMC-virtualreality.jpg",
    alt: "Arijit Bhattacharyya archive visual connected to AR VR and immersive technology work",
    tags: ["AR", "VR", "Immersive"],
    icon: BrainCircuit,
  },
  {
    id: "international-vr-platform",
    eyebrow: "Global VR",
    title: "Virtual Reality on International Platforms",
    summary:
      "International-facing proof connected to virtual reality, immersive innovation and global technology conversations.",
    image:
      "/assets/pressnews/01_images_preserved_structure/latest-speaks/virtual-reality-china.jpg",
    alt: "Virtual reality China archive visual connected to Arijit Bhattacharyya international technology work",
    tags: ["VR", "Global", "Innovation"],
    icon: Globe2,
  },
  {
    id: "technology-advisory",
    eyebrow: "Tech Advisory",
    title: "Technology Advisory & Innovation",
    summary:
      "A founder-led proof point around innovation strategy, emerging technology, startup guidance and digital transformation.",
    image:
      "/assets/pressnews/01_images_preserved_structure/technology_adviser.jpg",
    alt: "Technology adviser archive visual connected to Arijit Bhattacharyya innovation advisory work",
    tags: ["Advisory", "Innovation", "Tech"],
    icon: Cpu,
  },
  {
    id: "regional-technology-summit",
    eyebrow: "Technology Summit",
    title: "Technology & Industry Summit Coverage",
    summary:
      "Regional technology-industry proof connected to speaking, innovation, startup ecosystems and business transformation.",
    image:
      "/assets/pressnews/01_USE_NOW/Regional_Press___Technology/jharkhand-technology-industry-summit-speaking..jpg",
    alt: "Jharkhand technology industry summit archive visual featuring Arijit Bhattacharyya speaking",
    tags: ["Technology", "Industry", "Speaking"],
    icon: RadioTower,
  },
];

export default function PressTechnologyArchive() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,.22),transparent_34%),radial-gradient(circle_at_82%_80%,rgba(14,165,233,.15),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="inline-flex items-center rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-200">
              <Cpu className="mr-2 h-4 w-4" />
              Technology Press Archive
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              AR, VR and future technology proof.
            </h2>
          </div>

          <p className="max-w-2xl text-base font-normal leading-8 text-slate-300 sm:text-lg lg:ml-auto">
            A focused technology-led archive connecting Arijit Bhattacharyya’s
            work across augmented reality, virtual reality, immersive media,
            innovation advisory, global technology platforms and regional
            technology-industry coverage.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {technologyPressArchive.map((item, index) => (
            <motion.article
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: Math.min(index * 0.035, 0.18),
              }}
              className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.055] shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.08]"
            >
              <div className="relative flex min-h-[245px] items-center justify-center overflow-hidden bg-white p-4 sm:min-h-[265px]">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="relative max-h-[225px] w-full object-contain transition duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute left-4 top-4 rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#07111f] shadow-sm backdrop-blur">
                  {item.eyebrow}
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                      Technology Coverage
                    </p>

                    <h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.025em] text-white">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-950/30">
                    <item.icon className="h-5 w-5" />
                  </div>
                </div>

                <p className="mt-4 text-sm font-normal leading-7 text-slate-300">
                  {item.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
