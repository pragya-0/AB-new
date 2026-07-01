import { motion } from "framer-motion";
import SmartImage from "./SmartImage";
import { fadeUp } from "./bioMotion";
import { bio } from "../../data/bio/bioAssets";

const proofCards = [
  {
    title: "Virtualinfocom",
    text: "The founder-led technology studio that became the base for games, VR, AR, animation and digital IP.",
  },
  {
    title: "Art + Technology",
    text: "A long-running direction connecting creativity, software, characters, education and immersive systems.",
  },
  {
    title: "Global Ecosystem",
    text: "A wider network across founders, students, institutions, investors, forums and creative communities.",
  },
];

export default function OriginStory() {
  return (
    <section className="relative overflow-hidden bg-white py-14 text-[#03070d] sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(37,99,235,0.10),transparent_34%),radial-gradient(circle_at_86%_72%,rgba(14,165,233,0.08),transparent_36%),linear-gradient(180deg,#ffffff_0%,#f7fbff_48%,#ffffff_100%)]" />

      <div className="relative mx-auto grid max-w-[1760px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-12 xl:px-14">
        <motion.div {...fadeUp}>
          <div className="overflow-hidden rounded-[32px] border border-[#dbe7f7] bg-[#f5f8fc] p-2 shadow-sm">
            <div className="overflow-hidden rounded-[26px] bg-slate-950">
              <SmartImage
                src="/assets/speaking/IMG_6406.JPG.jpeg"
                fallbacks={[
                  "/assets/press/latest-speaks/keynote.jpg",
                  `${bio}boss2.jpg.jpeg`,
                  `${bio}IMG_0847.JPG.jpeg`,
                ]}
                alt="Arijit Bhattacharyya at a professional speaking and technology event"
                className="h-[340px] w-full object-cover object-center sm:h-[440px] lg:h-[560px]"
              />
            </div>
          </div>

          <div className="mt-5 rounded-[28px] border border-[#dbe7f7] bg-white p-5 shadow-sm sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#B8792A]">
              Kolkata • Since 1998
            </p>

            <h3 className="mt-3 max-w-2xl text-2xl font-extrabold leading-tight tracking-[-0.035em] text-[#07101f] sm:text-3xl">
              From one early technology studio to a global innovation ecosystem.
            </h3>
          </div>
        </motion.div>

        <motion.div {...fadeUp}>
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#B8792A]">
            Origin Story
          </p>

          <h2 className="max-w-[920px] text-[42px] font-extrabold leading-[0.92] tracking-[-0.05em] text-[#07101f] sm:text-[64px] lg:text-[76px]">
            From Kolkata to a global innovation ecosystem.
          </h2>

          <div className="mt-8 max-w-[820px] space-y-5 text-[17px] leading-8 text-[#334155]">
            <p>
              Arijit Bhattacharyya began building from Kolkata at a time when
              India&apos;s gaming, animation, VR and digital IP ecosystem was
              still taking shape.
            </p>

            <p>
              Virtualinfocom became the foundation for a larger founder-led
              journey across games, immersive technology, artificial
              intelligence, education, startup mentoring, investment networks,
              creative storytelling and global forums.
            </p>

            <p>
              The thread has stayed consistent: bring art and technology
              together, then use that combination to build platforms for
              students, founders, creators, businesses and innovators.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {proofCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[24px] border border-[#dbe7f7] bg-[#f8fbff] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#0057ff]">
                  {card.title}
                </p>

                <p className="mt-3 text-[15px] leading-7 text-[#475569]">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}