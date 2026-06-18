import { featuredGlobalEvent, globalEventCards } from "../../data/speakingEvents";

type EventItem = {
  title: string;
  subtitle: string;
  image: string;
  image2?: string;
  videoUrl?: string;
};

function WatchLink({ url }: { url?: string }) {
  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#0057ff] px-6 py-3 text-sm font-black text-white shadow-[0_18px_45px_rgba(0,87,255,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#1b6cff]"
    >
      Watch Event →
    </a>
  );
}

function EventCard({ event }: { event: EventItem }) {
  return (
    <article className="group overflow-hidden rounded-[34px] border border-black/10 bg-white shadow-[0_20px_90px_rgba(15,23,42,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_38px_110px_rgba(0,87,255,0.16)]">
      <div className="relative h-[340px] overflow-hidden bg-[#02050b]">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover object-center transition duration-[6500ms] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      </div>

      <div className="p-8">
        <h3 className="text-[32px] font-black leading-[0.95] tracking-[-0.06em] text-black md:text-[38px]">
          {event.title}
        </h3>

        <p className="mt-5 text-[16px] leading-8 text-black/60">
          {event.subtitle}
        </p>

        <WatchLink url={event.videoUrl} />
      </div>
    </article>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-10 mt-24">
      <p className="text-[14px] font-black uppercase tracking-[0.35em] text-[#0057ff]">
        {children}
      </p>
    </div>
  );
}

export default function GlobalEventsSection() {
  const globalEvents = globalEventCards.slice(0, 5);
  const institutionalEvents = globalEventCards.slice(5);

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(0,87,255,.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,.10),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f8fbff_45%,#eef5ff_75%,#ffffff_100%)] px-5 py-28 md:px-10">
      <div className="absolute right-[-260px] top-[-220px] h-[680px] w-[680px] rounded-full bg-[#0057ff]/10 blur-[170px]" />
      <div className="absolute left-[-240px] bottom-[-180px] h-[520px] w-[520px] rounded-full bg-sky-400/10 blur-[140px]" />
      <div className="absolute left-1/2 top-[35%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-white blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="mb-20 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.34em] text-[#0057ff]">
              Global Speaking
            </p>

            <h2 className="max-w-[760px] text-[42px] font-black leading-[1.03] tracking-[-0.06em] text-black md:text-[64px]">
              Ideas Shared Across Global Stages
            </h2>
          </div>

          <p className="max-w-[620px] text-[17px] leading-8 text-black/62 lg:justify-self-end">
            From AI and blockchain to entrepreneurship, deeptech and startup
            ecosystems, Arijit Bhattacharyya has spoken across international
            platforms, universities and innovation forums.
          </p>
        </div>

        <article className="group overflow-hidden rounded-[42px] border border-white bg-white/90 shadow-[0_35px_120px_rgba(15,23,42,0.10)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_55px_160px_rgba(0,87,255,0.18)]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[560px] overflow-hidden bg-[#02050b]">
              <img
                src={featuredGlobalEvent.image}
                alt={featuredGlobalEvent.title}
                className="h-full w-full object-cover object-center transition duration-[7000ms] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12">
              {featuredGlobalEvent.image2 && (
                <div className="mb-8 overflow-hidden rounded-[28px] bg-[#eef4ff] p-4 shadow-[inset_0_0_0_1px_rgba(0,87,255,0.08)]">
                  <img
                    src={featuredGlobalEvent.image2}
                    alt={featuredGlobalEvent.title}
                    className="h-[280px] w-full rounded-[20px] object-cover object-center"
                  />
                </div>
              )}

              <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#0057ff]">
                Featured Stage
              </p>

              <h3 className="text-[42px] font-black leading-[0.98] tracking-[-0.06em] text-black md:text-[58px]">
                {featuredGlobalEvent.title}
              </h3>

              <p className="mt-6 max-w-[540px] text-[17px] leading-8 text-black/62">
                {featuredGlobalEvent.subtitle}
              </p>
            </div>
          </div>
        </article>

        <SectionLabel>Global Events</SectionLabel>

        <div className="grid gap-8 lg:grid-cols-2">
          {globalEvents.slice(0, 2).map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {globalEvents.slice(2, 5).map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>

        <SectionLabel>More Institutional Stages</SectionLabel>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {institutionalEvents.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="mx-auto mb-6 max-w-[720px] text-[17px] leading-8 text-black/55">
            From TEDx and Digital Bridge Kazakhstan to IIT Dhanbad, XLRI and
            international AI forums across Asia, Europe and Africa.
          </p>

          <a
            href="/speaking"
            className="inline-flex rounded-full border border-[#0057ff]/15 bg-white px-10 py-5 text-sm font-black uppercase tracking-[0.25em] text-[#0057ff] shadow-[0_20px_60px_rgba(0,87,255,0.12)] transition duration-300 hover:-translate-y-1 hover:bg-[#0057ff] hover:text-white"
          >
            Explore 102+ Global Conferences →
          </a>
        </div>
      </div>
    </section>
  );
}