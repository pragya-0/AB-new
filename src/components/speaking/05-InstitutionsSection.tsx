import { motion } from "framer-motion";

import SmartImage from "../bio/SmartImage";
import { fadeUp } from "../bio/bioMotion";

type InstitutionCard = {
  title: string;
  label: string;
  meta: string;
  text: string;
  image: string;
  fallbacks?: string[];
  alt: string;
  imageWrapClass: string;
  imageClass: string;
};

const institutionCards: InstitutionCard[] = [
  {
    title: "IIM Bodh Gaya",
    label: "Management School Platform",
    meta: "Technology Application • Startup Ecosystem",
    text: "A management-institution platform where technology application, entrepreneurship and India’s startup ecosystem were brought into a leadership-learning context.",
    image: "/assets/press/2020/IIM_Bodhgaya.jpg",
    alt: "Arijit Bhattacharyya speaking at IIM Bodh Gaya on technology application and startup ecosystem",
    imageWrapClass: "min-h-[230px] sm:min-h-[260px] lg:min-h-[300px]",
    imageClass: "h-full w-full object-contain p-4 sm:p-5",
  },
  {
    title: "IIT Kharagpur GES",
    label: "Engineering & Entrepreneurship",
    meta: "Startup Funding • Founder Readiness",
    text: "An engineering and entrepreneurship platform connecting founder readiness, startup funding conversations and innovation-led business thinking.",
    image: "/assets/press/latest-speaks/IIT_Khagarpur-GES.png",
    fallbacks: ["/assets/press/IIT-Kharagpur.jpg"],
    alt: "Arijit Bhattacharyya at IIT Kharagpur Global Entrepreneurship Summit",
    imageWrapClass: "min-h-[230px] sm:min-h-[260px] lg:min-h-[300px]",
    imageClass: "h-full w-full object-contain p-3 sm:p-4",
  },
  {
    title: "NIT Durgapur Arohan",
    label: "Student Innovation Platform",
    meta: "Investor • Judge • Founder Evaluation",
    text: "A student innovation platform where emerging ideas were reviewed through the lens of founder evaluation, investor thinking and market readiness.",
    image: "/assets/press/latest-speaks/NIT_Durgapore.jpg",
    alt: "Arijit Bhattacharyya at NIT Durgapur Arohan as investor judge and innovation evaluator",
    imageWrapClass: "min-h-[210px] sm:min-h-[240px] lg:min-h-[255px]",
    imageClass: "h-full w-full object-contain p-4 sm:p-5",
  },
  {
    title: "UPES Hackathon",
    label: "Hackathon & Jury Platform",
    meta: "Chief Guest • Jury • Student Innovation",
    text: "A hackathon and innovation forum focused on student-led problem solving, technology ideas and jury-led evaluation of future-ready concepts.",
    image: "/assets/speaking/2022/UPES.jpg",
    alt: "Arijit Bhattacharyya at UPES hackathon as chief guest jury member for student innovation",
    imageWrapClass: "min-h-[210px] sm:min-h-[240px] lg:min-h-[255px]",
    imageClass: "h-full w-full object-contain p-3 sm:p-4",
  },
  {
    title: "SNU VR/AR/Metaverse",
    label: "Future Technology Forum",
    meta: "VR • AR • Metaverse • Future Skills",
    text: "A future-technology academic forum focused on immersive media, VR, AR, metaverse thinking and the skills needed for the next digital economy.",
    image: "/assets/speaking/2022/SNU.jpg",
    alt: "Arijit Bhattacharyya speaking at SNU on VR AR metaverse and future skills",
    imageWrapClass: "min-h-[210px] sm:min-h-[240px] lg:min-h-[255px]",
    imageClass: "h-full w-full object-contain p-3 sm:p-4",
  },
];

const firstRow = institutionCards.slice(0, 2);
const secondRow = institutionCards.slice(2);

function InstitutionCardItem({
  card,
  index,
}: {
  card: InstitutionCard;
  index: number;
}) {
  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      className="group overflow-hidden rounded-[2rem] border border-sky-100/80 bg-white shadow-[0_24px_80px_rgba(14,42,82,0.08)] transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_32px_100px_rgba(14,42,82,0.14)]"
    >
      <div
        className={`flex items-center justify-center border-b border-sky-100 bg-gradient-to-br from-white via-sky-50 to-blue-100/70 ${card.imageWrapClass}`}
      >
        <SmartImage
          src={card.image}
          fallbacks={card.fallbacks}
          alt={card.alt}
          className={`${card.imageClass} transition duration-500 group-hover:scale-[1.02]`}
        />
      </div>

      <div className="p-6 sm:p-7">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-blue-950 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
            {card.label}
          </span>

          <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-900">
            {card.meta}
          </span>
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-[1.65rem]">
          {card.title}
        </h3>

        <p className="mt-3 text-[15px] leading-7 text-slate-600 sm:text-base">
          {card.text}
        </p>
      </div>
    </motion.article>
  );
}

export default function InstitutionsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-blue-100/70 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="max-w-4xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-700">
            Institutional Proof
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Where Academia Meets Innovation Leadership
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
            From IIMs and IITs to national hackathons and future-technology forums,
            Arijit Bhattacharyya has engaged with students, founders and institutions
            as a speaker, jury member, investor and innovation resource person.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-12 grid gap-6 lg:grid-cols-2"
        >
          {firstRow.map((card, index) => (
            <InstitutionCardItem key={card.title} card={card} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {secondRow.map((card, index) => (
            <InstitutionCardItem
              key={card.title}
              card={card}
              index={index + firstRow.length}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}