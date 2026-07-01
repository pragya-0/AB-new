import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle } from "lucide-react";

import { featuredGlobalEvent, globalEventCards } from "../../data/speakingEvents";

type EventItem = {
  title: string;
  subtitle: string;
  image: string;
  image2?: string;
  videoUrl?: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function WatchLink({ url }: { url?: string }) {
  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Watch event video"
      className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#0057ff] px-6 py-3 text-sm font-bold text-white shadow-[0_18px_45px_rgba(0,87,255,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#1b6cff] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
    >
      <PlayCircle size={17} />
      Watch Event
    </a>
  );
}

function EventImage({
  src,
  alt,
  large = false,
}: {
  src: string;
  alt: string;
  large?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-[#02050b] ${
        large ? "min-h-[340px] sm:min-h-[460px] lg:min-h-[560px]" : "h-[260px] sm:h-[310px] lg:h-[340px]"
      }`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-contain object-center p-2 transition duration-[6500ms] group-hover:scale-[1.035]"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/26 via-transparent to-transparent" />
    </div>
  );
}

function EventCard({ event }: { event: EventItem }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -7 }}
      transition={{ type: "spring", stiffness: 230, damping: 22 }}
      className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_20px_90px_rgba(15,23,42,0.08)] transition duration-500 hover:border-[#0057ff]/25 hover:shadow-[0_38px_110px_rgba(0,87,255,0.16)] sm:rounded-[34px]"
    >
      <EventImage
        src={event.image}
        alt={`${event.title} global speaking event featuring Arijit Bhattacharyya`}
      />

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="text-[25px] font-bold leading-[1.05] tracking-[-0.05em] text-black sm:text-[30px] md:text-[34px]">
          {event.title}
        </h3>

        <p className="mt-5 flex-1 text-[16px] font-normal leading-8 text-black/60 sm:text-[17px]">
          {event.subtitle}
        </p>

        <WatchLink url={event.videoUrl} />
      </div>
    </motion.article>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <motion.div variants={fadeUp} className="mb-8 mt-16 sm:mt-20 md:mt-24">
      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#0057ff] sm:text-sm">
        {children}
      </p>
    </motion.div>
  );
}

export default function GlobalEventsSection() {
  const globalEvents = globalEventCards.slice(0, 5);
  const institutionalEvents = globalEventCards.slice(5);

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(0,87,255,.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,.10),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f8fbff_45%,#eef5ff_75%,#ffffff_100%)] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24">
      <div className="pointer-events-none absolute right-[-260px] top-[-220px] h-[680px] w-[680px] rounded-full bg-[#0057ff]/10 blur-[170px]" />
      <div className="pointer-events-none absolute bottom-[-180px] left-[-240px] h-[520px] w-[520px] rounded-full bg-sky-400/10 blur-[140px]" />
      <div className="pointer-events-none absolute left-1/2 top-[35%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-white blur-[120px]" />

      <motion.div
        className="relative z-10 mx-auto max-w-[1500px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.14 }}
        transition={{ staggerChildren: 0.08 }}
      >
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end xl:mb-16">
          <div>
            <motion.p
              variants={fadeUp}
              className="mb-5 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#0057ff] sm:text-sm"
            >
              Global Speaking
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="max-w-[760px] text-[36px] font-extrabold leading-[1.04] tracking-[-0.06em] text-black sm:text-[48px] lg:text-[64px]"
            >
              Ideas Shared Across Global Stages
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="max-w-[620px] text-[16px] font-normal leading-8 text-black/62 sm:text-[18px] lg:justify-self-end"
          >
            From AI and blockchain to entrepreneurship, deeptech and startup
            ecosystems, Arijit Bhattacharyya has spoken across international
            platforms, universities and innovation forums.
          </motion.p>
        </div>

        <motion.article
          variants={fadeUp}
          whileHover={{ y: -7 }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
          className="group overflow-hidden rounded-[30px] border border-white bg-white/90 shadow-[0_35px_120px_rgba(15,23,42,0.10)] backdrop-blur-xl transition duration-500 hover:shadow-[0_55px_160px_rgba(0,87,255,0.18)] sm:rounded-[42px]"
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <EventImage
              src={featuredGlobalEvent.image}
              alt={`${featuredGlobalEvent.title} featured global speaking stage of Arijit Bhattacharyya`}
              large
            />

            <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12">
              {featuredGlobalEvent.image2 && (
                <div className="mb-8 overflow-hidden rounded-[24px] bg-[#eef4ff] p-3 shadow-[inset_0_0_0_1px_rgba(0,87,255,0.08)] sm:rounded-[28px] sm:p-4">
                  <img
                    src={featuredGlobalEvent.image2}
                    alt={`${featuredGlobalEvent.title} supporting event image`}
                    className="h-[220px] w-full rounded-[18px] object-contain object-center sm:h-[280px]"
                  />
                </div>
              )}

              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0057ff] sm:text-sm">
                Featured Stage
              </p>

              <h3 className="max-w-[760px] text-[32px] font-extrabold leading-[1.02] tracking-[-0.055em] text-black sm:text-[42px] md:text-[52px]">
                {featuredGlobalEvent.title}
              </h3>

              <p className="mt-6 max-w-[540px] text-[16px] font-normal leading-8 text-black/62 sm:text-[18px]">
                {featuredGlobalEvent.subtitle}
              </p>

            </div>
          </div>
        </motion.article>

        <SectionLabel>Speaker in Global Events</SectionLabel>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {globalEvents.slice(0, 2).map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3 lg:gap-8">
          {globalEvents.slice(2, 5).map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>

        <SectionLabel>More Institutional Stages</SectionLabel>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 lg:gap-8">
          {institutionalEvents.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>

        <motion.div variants={fadeUp} className="mt-16 text-center sm:mt-20">
          <p className="mx-auto mb-6 max-w-[720px] text-[16px] font-normal leading-8 text-black/55 sm:text-[18px]">
            From TEDx and Digital Bridge Kazakhstan to IIT Dhanbad, XLRI and
            international AI forums across Asia, Europe and Africa.
          </p>

          <Link
            to="/speaking"
            aria-label="Explore Arijit Bhattacharyya global speaking conferences"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#0057ff]/15 bg-white px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#0057ff] shadow-[0_20px_60px_rgba(0,87,255,0.12)] transition duration-300 hover:-translate-y-1 hover:bg-[#0057ff] hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 sm:w-auto sm:px-10 sm:py-5 sm:tracking-[0.25em]"
          >
            Explore 102+ Global Conferences
            <ArrowUpRight size={17} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

