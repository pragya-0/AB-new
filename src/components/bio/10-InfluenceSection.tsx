import { motion } from "framer-motion";
import BioSectionShell from "./BioSectionShell";
import SmartImage from "./SmartImage";
import { fadeUp } from "./bioMotion";
import { influenceCards } from "../../data/bio/influenceData";

export default function InfluenceSection() {
  return (
    <BioSectionShell
      eyebrow="Influence"
      title="Influencing Innovation, Education & Global Ecosystems"
      text="A public-facing innovation career shaped through speaking, mentoring, technology education, founder support and global business collaboration."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {influenceCards.map(([title, text, image]) => (
          <motion.article
            key={title}
            {...fadeUp}
            className="group overflow-hidden rounded-[30px] border border-[#bdd9ff] bg-white shadow-[0_24px_80px_rgba(0,87,255,0.10)] transition duration-300 hover:-translate-y-2"
          >
            <div className="relative h-[430px] overflow-hidden">
              <SmartImage
                src={image}
                alt={title}
                className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/18 to-transparent" />
              <div className="absolute bottom-7 left-7 right-7">
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.32em] text-[#8bb7ff]">
                  Ecosystem
                </p>
                <h3 className="text-[40px] font-black leading-[0.9] tracking-[-0.06em] text-white">
                  {title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-white/70">{text}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </BioSectionShell>
  );
}

