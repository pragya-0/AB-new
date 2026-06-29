type TimelineItem = {
  period: string;
  title: string;
  text: string;
  image: string;
  tags: string[];
  gold?: boolean;
};

const timeline: TimelineItem[] = [
  {
    period: "1998",
    title: "Virtualinfocom Begins",
    text:
      "The founder journey begins with Virtualinfocom, technology training, software work, game development, animation and original digital IP creation from Kolkata.",
    image: "/assets/ventures/timeline-1998-virtualinfocom.png",
    tags: ["Virtualinfocom", "Founder Journey", "Digital IP"],
  },
  {
    period: "2000",
    title: "Programming & Grassroots Technology Education",
    text:
      "The work expands into programming, technology education and grassroots learning initiatives, connecting students and young creators with early software skills.",
    image: "/assets/ventures/timeline-1998-virtualinfocom.png",
    tags: ["Programming", "Education", "Technology Training"],
  },
  {
    period: "2002",
    title: "Early 3D Game & Indian Game Development Direction",
    text:
      "The journey moves deeper into early 3D game development, Indian game production, characters, animation pipelines and interactive entertainment technology.",
    image: "/assets/ventures/timeline-1998-virtualinfocom.png",
    tags: ["3D Games", "Game Development", "Animation"],
  },
  {
    period: "2004",
    title: "VRML, Immersive Web & Early Virtual Reality",
    text:
      "The technology direction expands into VRML, immersive web thinking and early virtual reality experiments before VR became mainstream in India.",
    image: "/assets/ventures/timeline-2006-vr.png",
    tags: ["VRML", "Virtual Reality", "Immersive Web"],
  },
  {
    period: "2006",
    title: "Games, RPG, Animation & VR Direction",
    text:
      "The ecosystem moves into PC games, RPG direction, animation, virtual reality, interactive storytelling and entertainment technology-led IP.",
    image: "/assets/ventures/timeline-2006-vr.png",
    tags: ["Games", "RPG", "VR"],
  },
  {
    period: "2008–Present",
    title: "Angel Investor, Business Chambers & Startup Ecosystem",
    text:
      "The angel investor journey begins and continues across startups, founder networks, ICC, Infocom Startup Forum, business chambers and entrepreneurship platforms.",
    image: "/assets/ventures/timeline-2010-community.png",
    tags: ["Angel Investor", "Startup Ecosystem", "Ongoing"],
  },
  {
    period: "2015",
    title: "Middle East, Southeast Asia & Global Expansion",
    text:
      "The work expands further into Middle East and Southeast Asia networks, international business connections, cosplay ecosystems and global market access.",
    image: "/assets/ventures/timeline-2020-global-business.png",
    tags: ["Global Expansion", "Middle East", "Southeast Asia"],
  },
  {
    period: "2016",
    title: "Blockchain, Movie-Based Games & IP Ecosystem",
    text:
      "The journey connects blockchain, future technology, movie-based games, superhero characters, original IP and entertainment technology ecosystems.",
    image: "/assets/ventures/timeline-2016-blockchain.png",
    tags: ["Blockchain", "Movie Games", "IP"],
  },
  {
    period: "2018",
    title: "Riding Tiger Platform & Learning Direction",
    text:
      "The Riding Tiger direction strengthens content-led learning, entrepreneurship conversations, founder education and global knowledge-sharing formats.",
    image: "/assets/ventures/timeline-2020-global-business.png",
    tags: ["Riding Tiger", "Learning", "Founder Conversations"],
  },
  {
    period: "2019",
    title: "World Leader Summit Direction",
    text:
      "The global platform direction expands through World Leader Summit, connecting leadership, innovation, entrepreneurship, policy, business and international communities.",
    image: "/assets/ventures/timeline-2020-global-business.png",
    tags: ["World Leader Summit", "Leadership", "Global Platform"],
  },
  {
    period: "2020",
    title: "Dubai Investor Platforms, Future of Medicine & ADB Work",
    text:
      "The work connects Dubai investor platforms, future-focused industry conversations, startup ecosystems, global business matchmaking and Asian Development Bank consultant work.",
    image: "/assets/ventures/timeline-2020-global-business.png",
    tags: ["Dubai", "ADB", "Investor Platforms"],
  },
  {
    period: "2021",
    title: "Africa, Coinnovate Ventures & Global Startup Networks",
    text:
      "The journey expands through Africa-linked leadership platforms, Coinnovate Ventures, startup acceleration, investment conversations and global founder ecosystems.",
    image: "/assets/ventures/timeline-2020-global-business.png",
    tags: ["Africa", "Coinnovate", "Startups"],
  },
  {
    period: "2023",
    title: "GenAI, Smart Cities & Deeptech Direction",
    text:
      "The direction moves into GenAI, AI-led content, music videos, smart city thinking, deeptech, digital transformation and future industry applications.",
    image: "/assets/ventures/timeline-2025-ai-films.png",
    tags: ["GenAI", "Smart Cities", "Deeptech"],
  },
  {
    period: "2025",
    title: "GenAI Movie & Digital Human Direction",
    text:
      "The creative technology direction expands into GenAI movie experiments, digital humans, AI-led storytelling, characters and future media production.",
    image: "/assets/ventures/timeline-2025-ai-films.png",
    tags: ["GenAI Movie", "Digital Human", "Future Media"],
  },
  {
    period: "2026",
    title: "8 Metals, Cera Heat & Future Industry Thinking",
    text:
      "The journey continues into advanced materials, energy, Cera Heat, 8 Metals, symbolic geometry and future industry exploration.",
    image: "/assets/ventures/timeline-2026-8metals.png",
    tags: ["8 Metals", "Cera Heat", "Future Industry"],
    gold: true,
  },
];

export default function VenturesTimelineSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8fc] px-5 py-20 sm:px-6 md:px-10 md:py-28">
      <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#0057ff]/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-[-180px] left-[-180px] h-[520px] w-[520px] rounded-full bg-[#0057ff]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="max-w-[1040px]">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#0057ff]">
            Founder History • 1998 To 2026
          </p>

          <h2 className="max-w-[980px] text-[36px] font-extrabold leading-[0.98] tracking-[-0.05em] text-black sm:text-[44px] md:text-[58px]">
            A 1998–2026 journey across technology, games, AI, investment and
            global ecosystems.
          </h2>

          <p className="mt-6 max-w-[900px] text-[17px] font-normal leading-8 tracking-[-0.01em] text-black/62 md:text-[18px]">
            From Virtualinfocom in 1998 to AI, VR, AR, blockchain, startup
            mentoring, angel investing, World Leader Summit, GenAI storytelling
            and future industry ventures, this history gives visitors a clear
            reason to enter the deeper pages.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {timeline.map((item) => {
            const isGold = item.gold === true;

            return (
              <article
                key={item.period}
                className={`group overflow-hidden rounded-[30px] border bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] transition duration-500 hover:-translate-y-1 ${
                  isGold ? "border-[#d9a73a]/30" : "border-black/8"
                }`}
              >
                <div className="relative h-[220px] overflow-hidden bg-[#07111f] sm:h-[240px]">
                  <img
                    src={item.image}
                    alt={`${item.title} in Arijit Bhattacharyya founder history timeline`}
                    className="h-full w-full object-cover opacity-95 transition duration-700 group-hover:scale-[1.04]"
                  />

                  <div
                    className={`absolute inset-0 ${
                      isGold
                        ? "bg-gradient-to-t from-[#1b1202]/90 via-[#d9a73a]/10 to-transparent"
                        : "bg-gradient-to-t from-black/82 via-[#0057ff]/10 to-transparent"
                    }`}
                  />

                  <div className="absolute bottom-5 left-5 right-5">
                    <p
                      className={`text-[30px] font-bold leading-none tracking-[-0.055em] sm:text-[34px] ${
                        isGold ? "text-[#f2c766]" : "text-white"
                      }`}
                    >
                      {item.period}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-[23px] font-bold leading-[1.05] tracking-[-0.035em] text-black md:text-[24px]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] font-normal leading-7 text-black/62">
                    {item.text}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full border px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] ${
                          isGold
                            ? "border-[#d9a73a]/30 bg-[#d9a73a]/10 text-[#8a620f]"
                            : "border-[#0057ff]/15 bg-[#0057ff]/8 text-[#0057ff]"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
