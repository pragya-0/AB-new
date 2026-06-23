import { motion } from "framer-motion";

import BioSectionShell from "./BioSectionShell";
import SmartImage from "./SmartImage";
import { fadeUp } from "./bioMotion";
import { stories } from "../../data/bio/storiesData";

const storyTags: Record<string, string> = {
  "World Leader Network": "Global Network",
  "Press Features": "Media Archive",
  "AI World Summit": "AI & Future Tech",
  "Global Forums": "International Forums",
  "Conference Archive": "Conference Moments",
  "Global Speaking": "Speaking Archive",
  "Creative Media": "Media & Creative",
  "Recognition Stories": "Recognition",
  "Business Ecosystem": "Business Network",
  "Public Conversations": "Public Voice",
};

function StoryCard({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <motion.article
      {...fadeUp}
      className="group overflow-hidden rounded-[32px] border border-white/10 bg-[#05080d] shadow-[0_24px_90px_rgba(0,0,0,0.34)] transition duration-500 hover:-translate-y-1 hover:border-[#58a0ff]/45 hover:shadow-[0_30px_110px_rgba(0,87,255,0.12)]"
    >
      <div className="relative flex h-[460px] items-center justify-center overflow-hidden bg-[#020407] p-4 md:h-[560px]">
        <SmartImage
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain object-center transition duration-700 group-hover:scale-[1.015]"
        />

        <div className="absolute inset-x-0 bottom-0 h-[26%] bg-gradient-to-t from-black/95 via-black/55 to-transparent" />

        <div className="absolute bottom-6 left-6 right-6">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#8bb7ff]">
            {storyTags[title] ?? "Archive"}
          </p>

          <h3 className="max-w-[760px] text-[28px] font-black leading-[0.92] tracking-[-0.06em] text-white md:text-[40px]">
            {title}
          </h3>
        </div>
      </div>
    </motion.article>
  );
}

export default function StoriesRecognitionSection() {
  return (
    <BioSectionShell
      eyebrow="Visual Archive"
      title="Visual Archive of Global Conversations"
      text="A curated archive of international forums, media appearances, recognition moments, television platforms and global conversations."
      dark
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {stories.map(([title, image]) => (
          <StoryCard
            key={title}
            title={title}
            image={image}
          />
        ))}
      </div>
    </BioSectionShell>
  );
}