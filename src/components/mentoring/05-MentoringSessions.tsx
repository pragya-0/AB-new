import { motion } from "framer-motion";
import BioSectionShell from "../bio/BioSectionShell";
import { fadeUp } from "../bio/bioMotion";

const asset = "/assets/mentoring/";

const featureSessions = [
  {
    title: "Business Finland",
    meta: "Finland • Market Expansion • Global Business",
    image: "7.jpg",
    text: "International market-development, business expansion and cross-border innovation conversations.",
  },
  {
    title: "ICC Startup Pad",
    meta: "Indian Chamber of Commerce • Startup Ecosystem",
    image: "11.jpg",
    text: "Founder mentoring, startup guidance and ecosystem-building through ICC Startup Pad.",
  },
];

const sessionImages = [
  {
    title: "IIMC Innovation Park",
    meta: "Founder Mentoring • Business Strategy",
    image: "14.jpg",
  },
  {
    title: "IIT & Student Founders",
    meta: "Technology • Future Skills",
    image: "3.jpg",
  },
  {
    title: "Google Business Group",
    meta: "Entrepreneurship • Digital Growth",
    image: "9.jpg",
  },
  {
    title: "University Mentoring",
    meta: "Students • Innovation • Startups",
    image: "12.jpg",
  },
  {
    title: "MSME & Business Growth",
    meta: "Regional Business • Scaleup",
    image: "15.jpg",
  },
  {
    title: "Startup Rooms",
    meta: "Founders • Partners • Mentoring",
    image: "4.jpg",
  },
];

const sessionPlatforms = [
  "Business Finland",
  "Indian Chamber of Commerce",
  "ICC Startup Pad",
  "National Entrepreneurs Network",
  "ASSOCHAM",
  "MSME West Bengal",
  "College Students",
  "University Students",
  "Nordic Business",
  "IIT",
  "IIM Calcutta Innovation Park",
  "Google Business Group",
  "PDPU Incubation",
  "Indian Institute of Foreign Trade",
  "IIT Hyderabad",
  "EvolveX",
  "Malbazar",
  "Jalpaiguri",
  "Founder Institute",
  "Techstars",
  "HULT",
];

const networkingProof = [
  {
    title: "Networking Lunches",
    text: "Several hundred curated networking lunches for six to twelve like-minded members to exchange value, explore business opportunities and discuss specific B2B and B2C agendas.",
  },
  {
    title: "Brainstorming Dinners",
    text: "Since 2016, curated dinners connecting entrepreneurs with carefully selected attendees and meaningful business conversations.",
  },
  {
    title: "Business Matchmaking",
    text: "Guided introductions, partnership mapping and structured rooms where founders meet relevant experts, partners, investors and decision makers.",
  },
];

export default function MentoringSessions() {
  return (
    <BioSectionShell
      eyebrow="Mentoring Sessions"
      title="Founder Rooms, Startup Platforms & Global Business Sessions"
      text="A selected mentoring archive across startup forums, universities, banks, business chambers, innovation ecosystems and international market-development platforms."
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
              <img
                src={`${asset}${item.image}`}
                alt={`Arijit Bhattacharyya mentoring session at ${item.title}`}
                className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8bb7ff]">
                  {item.meta}
                </p>

                <h3 className="max-w-[720px] text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[46px]">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-[680px] text-[15px] font-normal leading-[1.75] text-white/72 md:text-[16px]">
                  {item.text}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        {...fadeUp}
        className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
      >
        {sessionImages.map((item) => (
          <article
            key={item.title}
            className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-2 shadow-[0_22px_75px_rgba(0,0,0,0.26)] transition duration-500 hover:-translate-y-1 hover:border-[#58a0ff]/45"
          >
            <div className="relative h-[300px] overflow-hidden rounded-[22px] bg-black sm:h-[340px]">
              <img
                src={`${asset}${item.image}`}
                alt={`Arijit Bhattacharyya mentoring session at ${item.title}`}
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

      <motion.div
        {...fadeUp}
        className="mt-7 overflow-hidden rounded-[30px] border border-[#58a0ff]/20 bg-[#0057ff]/10 p-5 sm:p-6 md:rounded-[36px] md:p-8"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7fb8ff]">
          Few Mentoring & Business Sessions
        </p>

        <h3 className="mt-4 max-w-[980px] text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[46px]">
          Mentoring founders, students and business communities across
          institutions and ecosystems.
        </h3>

        <p className="mt-5 max-w-[920px] text-[16px] font-normal leading-[1.8] text-white/66 md:text-[18px]">
          From Business Finland and ICC Startup Pad to IIT, IIM, Google Business
          Group, National Entrepreneurs Network, banking ecosystems and regional
          business sessions, the mentoring work connects founders with real
          ecosystem support.
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {sessionPlatforms.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/20 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/68 sm:text-[10px]"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div {...fadeUp} className="mt-7 grid gap-5 lg:grid-cols-3">
        {networkingProof.map((item) => (
          <article
            key={item.title}
            className="rounded-[28px] border border-white/10 bg-white/[0.045] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#58a0ff]/45 sm:p-6 md:rounded-[34px] md:p-8"
          >
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#58a0ff]">
              Business Community
            </p>

            <h3 className="text-[24px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[28px]">
              {item.title}
            </h3>

            <p className="mt-4 text-[15px] font-normal leading-[1.75] text-white/65 md:text-[16px]">
              {item.text}
            </p>
          </article>
        ))}
      </motion.div>
    </BioSectionShell>
  );
}
