import { motion } from "framer-motion";
import BioSectionShell from "./BioSectionShell";
import { fadeUp } from "./bioMotion";

const identities = [
  {
    title: "Technologist",
    line: "Building products and platforms through AI, VR, games and emerging technologies.",
    text: "The technology side of Arijit’s journey spans game development, immersive media, blockchain systems, digital humans and AI-led innovation.",
    roles: "AI • VR / AR • Gaming • Blockchain",
  },
  {
    title: "Entrepreneur",
    line: "Creating ventures, ecosystems and opportunities across industries.",
    text: "His work connects venture building, startup mentoring, investment conversations and business growth across multiple sectors.",
    roles: "Ventures • Startups • Investment • Strategy",
  },
  {
    title: "Public Voice",
    line: "Sharing ideas across institutions, summits and global platforms.",
    text: "As a speaker and advisor, he brings technology, entrepreneurship and future-thinking conversations to public stages and international forums.",
    roles: "Speaker • TEDx • Advisor • Global Forums",
  },
  {
    title: "Creator",
    line: "Turning imagination into books, characters, stories and visual worlds.",
    text: "Beyond business, the creative side includes books, drawings, comics, superheroes, media stories and original storytelling universes.",
    roles: "Books • Art • Comics • Characters",
  },
];

export default function WhoIsArijit() {
  return (
<BioSectionShell
  eyebrow=""
  title="Technology. Business. Creativity. Influence."
  text="Arijit Bhattacharyya's work is not defined by one title. It moves across multiple worlds — technology, entrepreneurship, public influence and creative world-building."
  dark
>

      <div className="grid gap-5 lg:grid-cols-2">
        {identities.map((item) => (
          <motion.article
            key={item.title}
            {...fadeUp}
            className="group relative min-h-[360px] overflow-hidden rounded-[38px] border border-white/10 bg-[#080d13] p-8 shadow-[0_28px_95px_rgba(0,0,0,0.34)] transition duration-300 hover:-translate-y-1 hover:border-[#58a0ff]/55 md:p-10"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,87,255,0.22),transparent_38%)] opacity-70 transition duration-300 group-hover:opacity-100" />
            <div className="pointer-events-none absolute bottom-[-100px] right-[-90px] h-[260px] w-[260px] rounded-full bg-[#58a0ff]/10 blur-[90px]" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="mb-7 h-[3px] w-20 rounded-full bg-[#58a0ff]" />

               
                <h3 className="mt-4 text-[48px] font-black leading-[0.88] tracking-[-0.075em] text-white md:text-[70px]">
                  {item.title}
                </h3>

                <p className="mt-6 max-w-[620px] text-[20px] font-black leading-tight tracking-[-0.035em] text-[#8bb7ff] md:text-[25px]">
                  {item.line}
                </p>
              </div>

              <div className="mt-9">
                <p className="max-w-[680px] text-[16px] leading-8 text-white/64">
                  {item.text}
                </p>

                <p className="mt-7 text-[11px] font-black uppercase tracking-[0.22em] text-white/42">
                  {item.roles}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </BioSectionShell>
  );
}