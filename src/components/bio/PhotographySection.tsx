import { motion } from "framer-motion";

import BioSectionShell from "./BioSectionShell";
import SmartImage from "./SmartImage";
import { fadeUp } from "./bioMotion";
import { photographyStories, photographyMosaic } from "../../data/bio/photographyData";

function BigPhoto({
  title,
  text,
  image,
  className = "",
  imageHeight = "h-[390px]",
}: {
  title: string;
  text?: string;
  image: string;
  className?: string;
  imageHeight?: string;
}) {
  return (
    <motion.article
      {...fadeUp}
      className={`${className} group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] transition duration-500 hover:-translate-y-2`}
    >
      <div className={`relative ${imageHeight} overflow-hidden`}>
        <SmartImage
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/18 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-[30px] font-black leading-[0.95] tracking-[-0.055em] text-white md:text-[42px]">
            {title}
          </h3>
          {text && (
            <p className="mt-3 max-w-[620px] text-[14px] leading-7 text-white/70">
              {text}
            </p>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function PhotographySection() {
  const [globalTravel, models, conferences, food, nature, founder, awards, creative] =
    photographyStories;

  return (
    <BioSectionShell
      eyebrow="Photography & Visual Archives"
      title="Photography, Stories & Visual Archives"
      text="A visual archive of people, cultures, models, stages, travel, recognition moments and creative collaborations."
      dark
    >
      <div className="space-y-6">
        <div className="grid gap-6 xl:grid-cols-2">
          <BigPhoto title={globalTravel[0]} text={globalTravel[1]} image={globalTravel[2]} imageHeight="h-[440px]" />
          <BigPhoto title={models[0]} text={models[1]} image={models[2]} imageHeight="h-[440px]" />
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <BigPhoto title={conferences[0]} text={conferences[1]} image={conferences[2]} imageHeight="h-[400px]" />
          <BigPhoto title={founder[0]} text={founder[1]} image={founder[2]} imageHeight="h-[400px]" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <BigPhoto title={food[0]} text={food[1]} image={food[2]} imageHeight="h-[320px]" />
          <BigPhoto title={nature[0]} text={nature[1]} image={nature[2]} imageHeight="h-[320px]" />
          <BigPhoto title={awards[0]} text={awards[1]} image={awards[2]} imageHeight="h-[320px]" />
          <BigPhoto title={creative[0]} text={creative[1]} image={creative[2]} imageHeight="h-[320px]" />
        </div>

        <motion.div
          {...fadeUp}
          className="rounded-[34px] border border-white/10 bg-white/[0.035] p-5 md:p-7"
        >
          <div className="mb-7">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.36em] text-[#58a0ff]">
              Visual Mosaic
            </p>
            <h3 className="max-w-[1000px] text-[34px] font-black leading-[0.92] tracking-[-0.06em] text-white md:text-[52px]">
              Travel, models, culture, food and founder moments.
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {photographyMosaic.map(([image, title]) => (
              <BigPhoto
                key={`${title}-${image}`}
                title={title}
                image={image}
                imageHeight="h-[280px]"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </BioSectionShell>
  );
}