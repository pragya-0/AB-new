import { motion } from "framer-motion";

import BioSectionShell from "../bio/BioSectionShell";
import SmartImage from "../bio/SmartImage";
import { fadeUp } from "../bio/bioMotion";

const asset = "/assets/mentoring/";

const featureSessions = [
  {
    title: "Business Finland",
    meta: "Finland • Global Expansion • Market Access",
    image: "7.jpg",
    alt: "Arijit Bhattacharyya speaking with founders during Business Finland mentoring session on global expansion and market access",
    points: [
      "Cross-border business mentoring",
      "Market-entry discussions",
      "Founder ecosystem engagement",
      "International innovation collaboration",
    ],
  },
  {
    title: "ICC Startup Pad",
    meta: "Indian Chamber of Commerce • Startup Ecosystem",
    image: "11.jpg",
    alt: "Arijit Bhattacharyya mentoring startup founders at Indian Chamber of Commerce ICC Startup Pad entrepreneurship ecosystem",
    points: [
      "Founder mentoring and startup guidance",
      "Business model and pitch direction",
      "Startup ecosystem building",
      "Industry and chamber-backed support",
    ],
  },
];

const galleryItems = [
  {
    title: "IIMC Innovation Park",
    meta: "Founder Mentoring • Business Strategy",
    image: "14.jpg",
    alt: "Arijit Bhattacharyya conducting entrepreneurship and startup mentoring workshop at IIM Calcutta Innovation Park",
  },
  {
    title: "IIT & Student Founders",
    meta: "Technology • Innovation • Future Skills",
    image: "3.jpg",
    alt: "Arijit Bhattacharyya mentoring student founders at IIT innovation ecosystem on technology and entrepreneurship",
  },
  {
    title: "Google Business Group",
    meta: "Entrepreneurship • Digital Growth",
    image: "9.jpg",
    alt: "Arijit Bhattacharyya mentoring entrepreneurs at Google Business Group innovation and digital growth event",
  },
  {
    title: "University Mentoring",
    meta: "Students • Innovation • Startups",
    image: "12.jpg",
    alt: "Arijit Bhattacharyya startup mentor speaking with university students on innovation and entrepreneurship",
  },
  {
    title: "MSME & Business Growth",
    meta: "Regional Business • Scaleup",
    image: "15.jpg",
    alt: "Arijit Bhattacharyya business mentor working with MSME founders on regional business growth and scaleup",
  },
  {
    title: "Startup Rooms",
    meta: "Founders • Partners • Mentoring",
    image: "4.jpg",
    alt: "Arijit Bhattacharyya mentoring founders in startup room with partners investors and business ecosystem leaders",
  },
];

export default function MentoringSessions() {
  return (
    <BioSectionShell
      eyebrow="Mentoring Sessions"
      title="Real Mentoring Proof Across Institutions, Accelerators & Business Platforms"
      text="A selected archive of founder mentoring, institutional sessions, accelerator ecosystems and business-development platforms connected with Arijit Bhattacharyya’s advisory work."
      dark
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {featureSessions.map((item) => (
          <motion.article
            key={item.title}
            {...fadeUp}
            className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] shadow-[0_28px_95px_rgba(0,0,0,0.32)] transition duration-500 hover:-translate-y-1 hover:border-[#58a0ff]/45 md:rounded-[38px]"
          >
            <div className="relative h-[420px] overflow-hidden bg-black sm:h-[520px] lg:h-[620px]">
              <SmartImage
                src={`${asset}${item.image}`}
                alt={item.alt}
                className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/28 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8bb7ff]">
                  {item.meta}
                </p>

                <h3 className="max-w-[720px] text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[46px]">
                  {item.title}
                </h3>

                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {item.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-[13px] font-semibold leading-5 text-white/76 backdrop-blur-sm md:text-[14px]"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        {...fadeUp}
        className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
      >
        {galleryItems.map((item) => (
          <article
            key={item.title}
            className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-2 shadow-[0_22px_75px_rgba(0,0,0,0.26)] transition duration-500 hover:-translate-y-1 hover:border-[#58a0ff]/45"
          >
            <div className="relative h-[300px] overflow-hidden rounded-[22px] bg-black sm:h-[340px]">
              <SmartImage
                src={`${asset}${item.image}`}
                alt={item.alt}
                className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/14 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8bb7ff]">
                  {item.meta}
                </p>

                <h3 className="text-[24px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[28px]">
                  {item.title}
                </h3>
              </div>
            </div>
          </article>
        ))}
      </motion.div>

    </BioSectionShell>
  );
}
