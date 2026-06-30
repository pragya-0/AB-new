import { motion } from "framer-motion";
import SmartImage from "./SmartImage";
import { fadeUp } from "./bioMotion";
import { bio } from "../../data/bio/bioAssets";

const proofCards = [
  {
    title: "Virtualinfocom Founded",
    text: "Games, VR, AR, animation and digital IP since 1998.",
  },
  {
    title: "Technology + Imagination",
    text: "AI, gaming, blockchain, education and creative storytelling.",
  },
  {
    title: "Global Network",
    text: "Mentoring founders, students and institutions across countries.",
  },
];

export default function OriginStory() {
  return (
    <section className="bg-white px-5 py-22 md:px-10">
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-[38px] border border-[#dbe7f7] bg-[#f5f8fc] p-2 shadow-[0_28px_90px_rgba(15,23,42,0.10)]"
        >
          <div className="relative overflow-hidden rounded-[30px] bg-black">
            <SmartImage
              src="/assets/speaking/IMG_6406.JPG.jpeg"
              fallbacks={[
                "/assets/press/latest-speaks/keynote.jpg",
                `${bio}boss2.jpg.jpeg`,
                `${bio}IMG_0847.JPG.jpeg`,
              ]}
              alt="Arijit Bhattacharyya origin story"
              className="h-[360px] w-full object-cover object-center md:h-[540px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-transparent" />

            <div className="absolute bottom-7 left-7 right-7">
              <p className="text-[10px] font-black uppercase tracking-[0.34em] text-[#8bb7ff]">
                Kolkata • 1998
              </p>

              <h3 className="mt-3 max-w-[620px] text-[32px] font-black leading-[0.95] tracking-[-0.055em] text-white md:text-[46px]">
                From one early technology studio to a global innovation
                ecosystem.
              </h3>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp}>
          <p className="mb-5 text-[11px] font-black uppercase tracking-[0.4em] text-[#0057ff]">
            Origin Story
          </p>

          <h2 className="max-w-[850px] text-[40px] font-black leading-[0.92] tracking-[-0.065em] text-[#07101f] md:text-[60px]">
            From Kolkata to a global innovation ecosystem.
          </h2>

          <div className="mt-8 max-w-[780px] space-y-5 text-[16px] leading-8 text-[#334155] md:text-[17px]">
            <p>
              Arijit Bhattacharyya began building in Kolkata in the late 1990s,
              when India’s gaming, animation, VR and digital IP ecosystem was
              still emerging.
            </p>

            <p>
              What started with Virtualinfocom in 1998 grew into a wider world
              of games, AI, blockchain, startup mentoring, investment networks,
              education, creative storytelling and global forums.
            </p>

            <p>
              The thread has stayed consistent: use technology and imagination
              to build platforms for students, founders, creators, businesses
              and innovators.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {proofCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[24px] border border-[#dbe7f7] bg-[#f8fbff] p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
              >
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#0057ff]">
                  {card.title}
                </p>

                <p className="mt-3 text-[13px] leading-6 text-[#475569]">
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
