import { motion } from "framer-motion";

import BioSectionShell from "../bio/BioSectionShell";
import SmartImage from "../bio/SmartImage";
import { fadeUp } from "../bio/bioMotion";

const speaking = "/assets/speaking/";

type LatestSpeakItem = {
  title: string;
  location: string;
  role: string;
  topic: string;
  description: string;
  image: string;
  alt: string;
  featured?: boolean;
};

const latestSpeaks: LatestSpeakItem[] = [
  {
    title: "Digital Bridge Kazakhstan",
    location: "Kazakhstan • Central Asia",
    role: "International Speaker",
    topic: "AI Monetization • Physical-Digital Assets • India-MENA Access",
    description:
      "A high-value international technology platform connected with artificial intelligence, digital economies, physical-digital assets and cross-border innovation access.",
    image: `${speaking}2025/digital-bridge-kazakhstan.png`,
    alt: "Arijit Bhattacharyya speaking at Digital Bridge Kazakhstan on AI monetization and digital economy",
    featured: true,
  },
  {
    title: "Axis Bank Evolve Pune",
    location: "Pune • India",
    role: "Speaker",
    topic: "MSME Digitization • Business Growth • Digital Economy",
    description:
      "A business-facing platform focused on MSME transformation, digital adoption, entrepreneurship and growth.",
    image: `${speaking}2023/Axis-Bank-Pune.jpg`,
    alt: "Arijit Bhattacharyya speaking at Axis Bank Evolve Pune on MSME digitization",
  },
  {
    title: "Axis Bank Evolve Bhubaneswar",
    location: "Bhubaneswar • India",
    role: "Speaker",
    topic: "Import Export • MSME Growth • Digital Business",
    description:
      "A regional business forum connected with MSME growth, import-export opportunities and digital business transformation.",
    image: `${speaking}2023/Axis-Bank-Bhubaneswar.jpg`,
    alt: "Arijit Bhattacharyya speaking at Axis Bank Evolve Bhubaneswar on MSME growth and digital business",
  },
  {
    title: "XLRI InGenium",
    location: "XLRI • India",
    role: "Speaker",
    topic: "Startup Ecosystem • Founder Competition • Innovation",
    description:
      "An academic entrepreneurship platform connected with startup thinking, founder evaluation and student innovation.",
    image: `${speaking}2023/XLRI.jpg`,
    alt: "Arijit Bhattacharyya at XLRI InGenium speaking on startups and innovation",
  },
  {
    title: "Vyapaar Jagat USA",
    location: "USA • Global Business Platform",
    role: "Keynote Speaker",
    topic: "Venture Capital • Startup Growth • Global Innovation",
    description:
      "A venture-capital and global-business platform discussing founder growth, startup investment and international opportunity.",
    image: `${speaking}2023/VyparJagat.jpg`,
    alt: "Arijit Bhattacharyya at Vyapaar Jagat USA speaking on venture capital and startup growth",
  },
];

export default function SpeakingTopics() {
  const featured = latestSpeaks.find((item) => item.featured);
  const regularItems = latestSpeaks.filter((item) => !item.featured);

  return (
    <BioSectionShell
      id="latest-speaking-proof"
      eyebrow="Latest Speaks"
      title="Recent Global & Business Speaking Proof"
      text="Selected recent appearances across international technology platforms, business forums, MSME transformation, venture capital and startup innovation."
    >
      <div className="space-y-6">
        {featured && (
          <motion.article
            {...fadeUp}
            className="overflow-hidden rounded-[34px] border border-[#2d74ff]/20 bg-gradient-to-br from-[#07152f] via-[#0b1d3f] to-[#03070d] shadow-[0_30px_90px_rgba(45,116,255,0.18)]"
          >
            <div className="grid gap-0 lg:grid-cols-[1.18fr_0.82fr] lg:items-stretch">
              <div className="flex min-h-[300px] items-center justify-center bg-[#08182f] p-4 sm:min-h-[390px] lg:min-h-[430px]">
                <SmartImage
                  src={featured.image}
                  alt={featured.alt}
                  className="h-auto max-h-full w-auto max-w-full rounded-[26px] object-contain object-center"
                />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <div className="mb-5 flex flex-wrap gap-3">
                  <span className="rounded-full bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0b4fd8]">
                    Highlight
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                    {featured.role}
                  </span>
                </div>

                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8bb8ff]">
                  {featured.location}
                </p>

                <h3 className="max-w-[680px] text-[34px] font-extrabold leading-[1.02] tracking-[-0.045em] text-white sm:text-[46px] md:text-[58px]">
                  {featured.title}
                </h3>

                <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-white/70">
                  {featured.topic}
                </p>

                <p className="mt-5 max-w-[680px] text-[15px] font-normal leading-7 text-white/72 md:text-[16px] md:leading-8">
                  {featured.description}
                </p>
              </div>
            </div>
          </motion.article>
        )}

        <div className="grid gap-5 md:grid-cols-2">
          {regularItems.map((item) => (
            <motion.article
              key={item.title}
              {...fadeUp}
              className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#2d74ff]/35 hover:shadow-[0_26px_90px_rgba(45,116,255,0.14)]"
            >
              <div className="flex h-[300px] items-center justify-center border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-[#eef5ff] p-4 sm:h-[330px] lg:h-[350px]">
                <SmartImage
                  src={item.image}
                  alt={item.alt}
                  className="h-auto max-h-full w-auto max-w-full rounded-[22px] object-contain object-center transition duration-500"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
           
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2d74ff]">
                  {item.location}
                </p>

                <h3 className="text-[26px] font-extrabold leading-[1.04] tracking-[-0.04em] text-slate-950 sm:text-[30px]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {item.topic}
                </p>

                <p className="mt-4 text-[14px] font-normal leading-7 text-slate-600 sm:text-[15px]">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </BioSectionShell>
  );
}