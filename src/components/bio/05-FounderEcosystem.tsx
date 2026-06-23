import { motion } from "framer-motion";
import BioSectionShell from "./BioSectionShell";
import { fadeUp } from "./bioMotion";

const pillars = [
  {
    title: "Technology & DeepTech",
    line: "Where imagination meets emerging technology.",
    text: "AI, games, VR, AR, blockchain and deep technology have remained central to the innovation journey — not as isolated skills, but as engines for building products, platforms and future-facing experiences.",
    meta: "AI • Gaming • VR / AR • Blockchain",
    large: true,
  },
  {
    title: "Entrepreneurship & Investment",
    line: "Building founders, not just companies.",
    text: "Founder mentoring, venture ecosystems, investor conversations and business growth sit at the center of Arijit’s work with startups, institutions and global business networks.",
    meta: "Mentoring • Investors • Startups • Growth",
    large: false,
  },
  {
    title: "Creative Storytelling",
    line: "Turning ideas into worlds and characters.",
    text: "Films, superheroes, comics, characters, models and visual worlds form the creative side of the ecosystem — where technology meets imagination and original IP.",
    meta: "Films • Characters • Comics • Media",
    large: true,
  },
  {
    title: "Education & Future Skills",
    line: "Passing knowledge to future generations.",
    text: "The ecosystem also grows through students, founders, professionals and institutions learning emerging technologies, entrepreneurship and future-ready thinking.",
    meta: "Students • Universities • AI Training",
    large: false,
  },
  {
    title: "Global Collaboration",
    line: "Connecting innovation across borders.",
    text: "International summits, diplomacy-led forums, speaking engagements and cross-border conversations connect the work to a wider global innovation network.",
    meta: "Speaking • Summits • Diplomacy",
    large: true,
  },
  {
    title: "Communities & Social Impact",
    line: "Technology becomes meaningful when it improves lives.",
    text: "Beyond ventures and platforms, the larger mission includes communities built around founders, creators, students, youth and social initiatives.",
    meta: "Founders • Creators • Youth • Impact",
    large: false,
  },
];

export default function FounderEcosystem() {
  return (
    <BioSectionShell
      eyebrow="Innovation Ecosystem"
      title="The Architecture Behind the Ecosystem"
      text="One journey. Multiple worlds connected by technology, creativity and global collaboration."
    >
      <div className="relative overflow-hidden rounded-[42px] border border-[#d8e7ff] bg-[#f7fbff] px-6 py-4 shadow-[0_30px_100px_rgba(0,87,255,0.10)] md:px-10 md:py-6">
        <div className="pointer-events-none absolute left-[-14%] top-[-18%] h-[420px] w-[420px] rounded-full bg-[#0057ff]/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[-22%] right-[-10%] h-[460px] w-[460px] rounded-full bg-[#58a0ff]/14 blur-[120px]" />

        <div className="relative">
          {pillars.map((pillar, index) => {
            const inset = index % 2 !== 0;
            const showDivider = index === 1 || index === 3 || index === 5;

            return (
              <motion.article
                key={pillar.title}
                {...fadeUp}
                className={`relative py-12 md:py-16 ${
                  inset ? "lg:pl-[12%]" : ""
                }`}
              >
                <div className="grid gap-8 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
                  <div>
                    <div className="mb-6 h-[3px] w-20 rounded-full bg-[#0057ff]" />

                    <h3
                      className={`max-w-[720px] font-black leading-[0.88] tracking-[-0.075em] text-[#07101f] ${
                        pillar.large
                          ? "text-[44px] md:text-[72px]"
                          : "text-[38px] md:text-[52px]"
                      }`}
                    >
                      {pillar.title}
                    </h3>

                    <p className="mt-5 max-w-[620px] text-[20px] font-black leading-tight tracking-[-0.035em] text-[#0057ff] md:text-[26px]">
                      {pillar.line}
                    </p>
                  </div>

                  <div>
                    <p className="max-w-[760px] text-[17px] leading-9 text-[#334155] md:text-[18px]">
                      {pillar.text}
                    </p>

                    <p className="mt-7 text-[11px] font-black uppercase tracking-[0.24em] text-[#0057ff]">
                      {pillar.meta}
                    </p>
                  </div>
                </div>

                {showDivider && index !== pillars.length - 1 && (
                  <div className="mt-12 h-px w-full bg-[#d8e7ff]" />
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </BioSectionShell>
  );
}