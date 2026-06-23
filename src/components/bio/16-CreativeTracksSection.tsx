import { motion } from "framer-motion";
import BioSectionShell from "./BioSectionShell";
import SmartImage from "./SmartImage";
import BioPill from "./BioPill";
import { fadeUp } from "./bioMotion";
import { creativeTracks } from "../../data/bio/creativeData";

export default function CreativeTracksSection() {
  return (
    <BioSectionShell
      eyebrow="Technology • Entrepreneurship • Creativity • Global Networks"
      title="The Dimensions Behind The Journey."
      text="For nearly three decades, technology, entrepreneurship, storytelling and international collaboration have evolved together rather than separately."
    >
      <div className="grid gap-6 lg:grid-cols-4">
        {creativeTracks.map((item, index) => (
          <motion.article
            key={item.title}
            {...fadeUp}
            className={`group overflow-hidden rounded-[30px] border border-[#bdd9ff] bg-white shadow-[0_24px_80px_rgba(0,87,255,0.10)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_100px_rgba(0,87,255,0.16)] ${
              index === 0 || index === 3 ? "lg:col-span-2" : ""
            }`}
          >
            <div className="relative h-[340px] overflow-hidden bg-black">
              <SmartImage
                src={item.image}
                fallbacks={item.fallbacks}
                alt={item.title}
                className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/16 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.32em] text-[#8bb7ff]">
                  Journey Dimension
                </p>

                <h3 className="text-[34px] font-black leading-[0.9] tracking-[-0.06em] text-white md:text-[46px]">
                  {item.title}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-[15px] leading-7 text-[#475569]">
                {item.text}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <BioPill key={tag}>{tag}</BioPill>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </BioSectionShell>
  );
}