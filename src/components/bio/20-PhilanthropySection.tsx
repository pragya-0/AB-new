import { motion } from "framer-motion";
import BioSectionShell from "./BioSectionShell";
import SmartImage from "./SmartImage";
import { fadeUp } from "./bioMotion";
import { philanthropyPath } from "../../data/bio/bioAssets";

const impactPillars = [
  {
    title: "Education",
    text: "Guidance, exposure and learning opportunities for students and young learners.",
  },
  {
    title: "Community Development",
    text: "Grassroots participation and people-first initiatives beyond the business ecosystem.",
  },
  {
    title: "Women & Youth",
    text: "Community participation, women’s groups and youth-focused social initiatives.",
  },
];

const impactPhotos = [
  {
    title: "Community Learning Programs",
    text: "Connecting education, exposure and opportunity with communities beyond traditional innovation hubs.",
    image: `${philanthropyPath}3.jpg`,
    featured: true,
  },
  {
    title: "Women & Community Initiatives",
    text: "Supporting participation, learning and local leadership through community engagement.",
    image: `${philanthropyPath}6.jpg`,
  },
    {
    title: "Student Mentorship & Learning",
    text: "Supporting students through learning, confidence-building and early entrepreneurship guidance.",
    image: `${philanthropyPath}1.jpg`,
  },
];

function ImpactPhoto({
  title,
  text,
  image,
  featured,
}: {
  title: string;
  text: string;
  image: string;
  featured?: boolean;
}) {
  if (featured) {
    return (
      <motion.article
        {...fadeUp}
        className="group overflow-hidden bg-[#eef5ff] rounded-[30px] border border-[#bdd9ff] bg-white shadow-[0_18px_60px_rgba(0,87,255,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(0,87,255,0.13)] lg:col-span-2"
      >
        <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative h-[360px] overflow-hidden bg-[#eef5ff] md:h-[430px]">
            <SmartImage
              src={image}
              fallbacks={[`${philanthropyPath}4.jpg`, `${philanthropyPath}8.jpg`]}
              alt={title}
              className="h-full w-full object-contain object-center transition duration-700 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center p-7 md:p-9">
            <h3 className="text-[34px] font-extrabold leading-[0.92] tracking-[-0.06em] text-[#07101f] md:text-[48px]">
              {title}
            </h3>

            <p className="mt-5 max-w-[620px] text-[15px] leading-8 text-[#64748b]">
              {text}
            </p>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      {...fadeUp}
      className="group overflow-hidden bg-[#eef5ff] rounded-[28px] border border-[#bdd9ff] bg-white shadow-[0_18px_60px_rgba(0,87,255,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(0,87,255,0.13)]"
    >
 <div className="relative aspect-[16/9] overflow-hidden bg-[#eef5ff]">
  <SmartImage
    src={image}
    alt={title}
    className="h-full w-full object-contain"
  />
</div>

      <div className="p-6">
        <h3 className="text-[26px] font-extrabold leading-tight tracking-[-0.045em] text-[#07101f]">
          {title}
        </h3>

        <p className="mt-4 text-[14px] leading-7 text-[#64748b]">{text}</p>
      </div>
    </motion.article>
  );
}

export default function PhilanthropySection() {
  return (
    <BioSectionShell
      eyebrow="Social Impact"
      title="Innovation Matters When More People Benefit From It"
      text="A compact human-impact section connecting technology, entrepreneurship and education with students, communities and grassroots initiatives."
    >
      <div className="space-y-7">
        <motion.article
          {...fadeUp}
          className="overflow-hidden rounded-[38px] border border-[#bdd9ff] bg-white shadow-[0_28px_100px_rgba(0,87,255,0.12)]"
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative h-[400px] overflow-hidden md:h-[460px]">
              <SmartImage
                src={`${philanthropyPath}4.jpg`}
                fallbacks={[`${philanthropyPath}3.jpg`, `${philanthropyPath}8.jpg`]}
                alt="Community impact and social initiatives"
                className="h-full w-full object-contain object-center transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/8 to-transparent" />

              <div className="absolute bottom-7 left-7 right-7">
                <h3 className="max-w-[720px] text-[34px] font-extrabold leading-[0.92] tracking-[-0.06em] text-white md:text-[48px]">
                  Extending innovation beyond the boardroom.
                </h3>
              </div>
            </div>

            <div className="flex flex-col justify-center bg-[#f7faff] p-7 md:p-10">
              <h3 className="max-w-[720px] text-[34px] font-extrabold leading-[0.92] tracking-[-0.06em] text-[#07101f] md:text-[48px]">
                Technology becomes meaningful when it creates opportunities beyond business.
              </h3>

              <p className="mt-6 max-w-[720px] text-[16px] leading-8 text-[#475569]">
                Beyond ventures and platforms, this part of the journey connects
                students, communities, grassroots programs and social initiatives
                with the larger innovation ecosystem.
              </p>
            </div>
          </div>
        </motion.article>

        <div className="grid gap-5 md:grid-cols-3">
          {impactPillars.map((pillar) => (
            <motion.article
              key={pillar.title}
              {...fadeUp}
              className="rounded-[26px] border border-[#bdd9ff] bg-white p-6 shadow-[0_18px_60px_rgba(0,87,255,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(0,87,255,0.13)]"
            >
              <h3 className="text-[26px] font-extrabold leading-tight tracking-[-0.045em] text-[#07101f]">
                {pillar.title}
              </h3>

              <p className="mt-4 text-[14px] leading-7 text-[#64748b]">
                {pillar.text}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {impactPhotos.map((photo) => (
            <ImpactPhoto
              key={photo.title}
              title={photo.title}
              text={photo.text}
              image={photo.image}
              featured={photo.featured}
            />
          ))}
        </div>
      </div>
    </BioSectionShell>
  );
}
