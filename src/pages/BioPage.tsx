import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const stats = [
  { value: "29+", label: "Years Since 1998" },
  { value: "102+", label: "Countries Connected" },
  { value: "7000+", label: "Startups Mentored" },
  { value: "12M+", label: "Global Network" },
  { value: "2100+", label: "Events Worldwide" },
  { value: "60,000+", label: "Students Trained" },
  { value: "43+", label: "Superheroes Created" },
  { value: "350+", label: "Models To Characters" },
];

const timeline = [
  {
    year: "1998",
    title: "Founded Virtualinfocom",
    text: "Built one of India’s early game development, VR, AR and animation companies from Kolkata.",
    image: "/assets/bio/IMG_0847.JPG.jpeg",
  },
  {
    year: "2001",
    title: "Games & Simulation",
    text: "Expanded into 2D, 3D games, simulations, Indian IP and mythology-inspired game worlds.",
    image: "/assets/bio/boss2.jpg.jpeg",
  },
  {
    year: "2006",
    title: "VR & Digital Humans",
    text: "Created real actors, models and celebrities as digital game characters and immersive experiences.",
    image: "/assets/bio/banner7.jpg",
  },
  {
    year: "2017",
    title: "Blockchain & DeepTech",
    text: "Worked across fintech, digital banking, blockchain, AI and emerging technology ecosystems.",
    image: "/assets/bio/banner9.jpg",
  },
  {
    year: "2023",
    title: "Gen AI & Global Forums",
    text: "Expanded into Gen AI education, AI music, AI films, future skills and international innovation forums.",
    image: "/assets/bio/IMG_1569.JPG.jpeg",
  },
  {
    year: "2026",
    title: "Creative Innovation Universe",
    text: "Continuing to build across books, films, characters, games, media, education and global platforms.",
    image: "/assets/bio/KIVU9665.JPG.jpeg",
  },
];

const philosophyPills = [
  "AI",
  "Gaming",
  "VR / AR",
  "Blockchain",
  "Books",
  "Movies",
  "Media",
  "Entrepreneurship",
  "Education",
  "DeepTech",
  "Digital Humans",
  "Global Business",
];

const leadershipCards = [
  {
    title: "Global Innovation Networks",
    text: "Connecting entrepreneurs, investors, institutions and business leaders across international markets.",
    image: "/assets/bio/south-mou.png",
  },
  {
    title: "Technology Leadership",
    text: "Working across AI, deeptech, gaming, VR, blockchain, training and digital transformation.",
    image: "/assets/bio/dev-google.png",
  },
  {
    title: "Institutional Training",
    text: "Workshops and sessions across universities, corporations and technology ecosystems.",
    image: "/assets/bio/ntpc.jpg.jpeg",
  },
  {
    title: "Founder & Business Networks",
    text: "Building bridges between founders, mentors, investors and international business communities.",
    image: "/assets/bio/SEFH1150.JPG.jpeg",
  },
];

const philanthropy = [
  {
    title: "Education & Youth",
    text: "Supporting students, communities and young learners through training, exposure and guidance.",
    image: "/assets/bio/Philanthropy/8.jpg",
  },
  {
    title: "Grassroots Communities",
    text: "Participating in local community programs and social development initiatives.",
    image: "/assets/bio/Philanthropy/1.jpg",
  },
  {
    title: "Children & Humanitarian Work",
    text: "Community engagement beyond business, focused on people, dignity and inclusion.",
    image: "/assets/bio/Philanthropy/4.jpg",
  },
  {
    title: "Women & Rural Impact",
    text: "Supporting livelihoods, local communities and grassroots empowerment programs.",
    image: "/assets/bio/Philanthropy/6.jpg",
  },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-[#0057ff]">
      {children}
    </p>
  );
}

function DarkLabel({ children }: { children: string }) {
  return (
    <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-[#4d8cff]">
      {children}
    </p>
  );
}

export default function BioPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#f5f8fc] text-[#07111f]">
        {/* 01 HERO */}
        <section className="relative overflow-hidden bg-black px-5 py-24 text-white md:px-10">
          <div className="absolute left-[-260px] top-[-220px] h-[620px] w-[620px] rounded-full bg-[#0057ff]/20 blur-[180px]" />
          <div className="absolute right-[-220px] bottom-[-180px] h-[560px] w-[560px] rounded-full bg-cyan-400/10 blur-[170px]" />

          <div className="relative z-10 mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <DarkLabel>BIOGRAPHY</DarkLabel>

              <h1 className="max-w-[850px] text-[46px] font-black leading-[0.94] tracking-[-0.065em] md:text-[78px]">
                Arijit Bhattacharyya
              </h1>

              <p className="mt-7 max-w-[760px] text-[20px] font-semibold leading-8 text-white/82 md:text-[24px]">
                Serial entrepreneur. Technologist. Author. Speaker. Investor.
              </p>

              <p className="mt-6 max-w-[700px] text-[17px] leading-8 text-white/60">
                Building technology, startups, creative IP, education and global
                innovation ecosystems since 1998 — from game development and VR
                to AI, blockchain, films, books and international business
                networks.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#journey"
                  className="rounded-full bg-[#0057ff] px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#1672ff]"
                >
                  Explore Journey →
                </a>

                <a
                  href="/speaking"
                  className="rounded-full border border-[#4d8cff]/35 bg-[#0057ff]/10 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#8bb7ff] transition duration-300 hover:-translate-y-1 hover:bg-[#0057ff] hover:text-white"
                >
                  Invite To Speak →
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[46px] bg-[#0057ff]/18 blur-3xl" />

              <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.05] p-2 shadow-[0_42px_140px_rgba(0,87,255,0.25)]">
                <img
                  src="/assets/bio/banner8.jpg"
                  alt="Arijit Bhattacharyya speaking"
                  className="h-[420px] w-full rounded-[34px] object-cover object-right md:h-[560px]"
                />

                <div className="absolute inset-2 rounded-[34px] bg-gradient-to-t from-black/72 via-black/10 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#8bb7ff]">
                    Since 1998
                  </p>
                  <p className="mt-3 max-w-[520px] text-[24px] font-black leading-tight tracking-[-0.04em] text-white md:text-[30px]">
                    Building technology, creativity and global innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 IMPACT NUMBERS */}
        <section className="px-5 py-16 md:px-10">
          <div className="mx-auto grid max-w-[1500px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="group rounded-[28px] border border-blue-100 bg-white p-7 shadow-xl shadow-blue-100/45 transition duration-500 hover:-translate-y-2 hover:border-[#0057ff]/35"
              >
                <p className="text-[42px] font-black tracking-[-0.06em] text-[#0057ff]">
                  {item.value}
                </p>
                <p className="mt-3 text-xs font-black uppercase tracking-[0.22em] text-slate-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 03 ORIGIN STORY */}
        <section id="journey" className="px-5 py-20 md:px-10">
          <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel>Origin Story</SectionLabel>
              <h2 className="max-w-[700px] text-[42px] font-black leading-[0.98] tracking-[-0.06em] md:text-[62px]">
                From a Kolkata startup journey to a global innovation ecosystem.
              </h2>
            </div>

            <div className="space-y-6 text-[18px] leading-8 text-slate-600">
              <p>
                Arijit Bhattacharyya began programming in the 1990s and founded
                Virtualinfocom in 1998, building from Kolkata at a time when
                India’s game development, VR and digital IP ecosystem was still
                emerging.
              </p>

              <p>
                His work expanded into game development, animation, VR, AR,
                blockchain, AI, deeptech, digital banking, education, startup
                mentoring, global business matchmaking and creative media.
              </p>

              <p>
                The central thread of his journey is clear: bring art and
                technology together, then use that combination to create
                opportunities for founders, students, developers, artists,
                investors and innovators.
              </p>
            </div>
          </div>
        </section>

        {/* 04 TIMELINE */}
        <section className="bg-[#02050b] px-5 py-24 text-white md:px-10">
          <div className="mx-auto max-w-[1500px]">
            <DarkLabel>Journey Since 1998</DarkLabel>

            <h2 className="max-w-[980px] text-[40px] font-black leading-tight tracking-[-0.055em] md:text-[60px]">
              A career built across technology, entrepreneurship and creative
              worlds.
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {timeline.map((item) => (
                <article
                  key={item.year}
                  className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.045] transition duration-500 hover:-translate-y-2 hover:border-[#4d8cff]/45"
                >
                  <div className="relative h-[230px] overflow-hidden bg-black">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/20 to-transparent" />
                    <p className="absolute bottom-5 left-5 text-[42px] font-black tracking-[-0.06em] text-[#8bb7ff]">
                      {item.year}
                    </p>
                  </div>

                  <div className="p-6">
                    <h3 className="text-[24px] font-black tracking-[-0.045em]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-7 text-white/62">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 05 PHILOSOPHY */}
        <section className="px-5 py-24 md:px-10">
          <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="overflow-hidden rounded-[42px] bg-white p-3 shadow-[0_40px_120px_rgba(0,87,255,0.14)]">
              <img
                src="/assets/bio/banner5.jpg"
                alt="Arijit Bhattacharyya in conversation"
                className="h-[420px] w-full rounded-[32px] object-cover object-center md:h-[560px]"
              />
            </div>

            <div>
              <SectionLabel>Core Philosophy</SectionLabel>

              <h2 className="max-w-[720px] text-[42px] font-black leading-[0.98] tracking-[-0.06em] md:text-[62px]">
                Bringing art and technology together.
              </h2>

              <p className="mt-7 text-[18px] leading-8 text-slate-600">
                Across coding, creativity, entrepreneurship, education and
                international collaboration, Arijit’s work has focused on
                transforming imagination into IP, platforms, products,
                communities and business ecosystems.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                {philosophyPills.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blue-100 bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#0057ff] shadow-lg shadow-blue-100/40"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 06 GLOBAL LEADERSHIP */}
        <section className="bg-[#02050b] px-5 py-24 text-white md:px-10">
          <div className="mx-auto max-w-[1500px]">
            <DarkLabel>Global Leadership</DarkLabel>

            <h2 className="max-w-[980px] text-[40px] font-black leading-tight tracking-[-0.055em] md:text-[60px]">
              Connecting innovators, institutions and industries across borders.
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {leadershipCards.map((card) => (
                <article
                  key={card.title}
                  className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] transition duration-500 hover:-translate-y-2 hover:border-[#4d8cff]/45"
                >
                  <div className="relative h-[230px] overflow-hidden bg-black">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-[22px] font-black tracking-[-0.04em]">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-[14px] leading-7 text-white/62">
                      {card.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 07 INDUSTRIES */}
        <section className="px-5 py-16 md:px-10">
          <div className="mx-auto max-w-[1500px]">
            <SectionLabel>Industries Worked In</SectionLabel>

            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <h2 className="text-[40px] font-black leading-tight tracking-[-0.055em] md:text-[58px]">
                Building across technology, finance, media, education and global
                business.
              </h2>

              <p className="text-[17px] leading-8 text-slate-600">
                Instead of being limited to one industry, Arijit’s work has
                moved across domains where technology, entrepreneurship,
                creativity and business transformation meet.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  title: "Technology & DeepTech",
                  image: "/assets/bio/banner9.jpg",
                  tags: ["AI", "DeepTech", "Blockchain", "Digital Systems"],
                },
                {
                  title: "Gaming & Immersive Media",
                  image: "/assets/bio/boss2.jpg.jpeg",
                  tags: ["Games", "VR / AR", "Characters", "Simulation"],
                },
                {
                  title: "Finance & Blockchain",
                  image: "/assets/bio/axis-bank-bhub.jpg",
                  tags: ["FinTech", "Banking", "MSME Growth", "Business Finance"],
                },
                {
                  title: "Education & Training",
                  image: "/assets/bio/ntpc.jpg.jpeg",
                  tags: ["Students", "Workshops", "Future Skills", "AI Training"],
                },
                {
                  title: "Creative Media & Entertainment",
                  image: "/assets/bio/banner7.jpg",
                  tags: ["Films", "Books", "Comics", "Media"],
                },
                {
                  title: "Global Business & Smart Cities",
                  image: "/assets/bio/south-mou.png",
                  tags: ["Startups", "Smart City", "Export", "Global Networks"],
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl shadow-blue-100/35 transition duration-500 hover:-translate-y-2 hover:border-[#0057ff]/35"
                >
                  <div className="relative h-[240px] overflow-hidden bg-slate-200">
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    <h3 className="absolute bottom-5 left-5 right-5 text-[25px] font-black leading-tight tracking-[-0.045em] text-white">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3 p-6">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-blue-100 bg-[#f8fbff] px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-[#0057ff]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 08 SPEAKER + MENTOR */}
        <section className="bg-white px-5 py-16 md:px-10">
          <div className="mx-auto max-w-[1500px]">
            <SectionLabel>Speaker, Mentor & Advisor</SectionLabel>

            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <h2 className="text-[40px] font-black leading-tight tracking-[-0.055em] md:text-[58px]">
                Helping founders, students and innovators build what comes next.
              </h2>

              <p className="text-[17px] leading-8 text-slate-600">
                His mentoring and speaking work connects startup ecosystems,
                academic institutions, public platforms, investors and emerging
                technology communities.
              </p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {[
                {
                  title: "Startup & Government Ecosystem",
                  image: "/assets/bio/IMG_1636.JPG.jpeg",
                  tags: [
                    "Startup India",
                    "Atal Innovation Mission",
                    "STPI",
                    "Asian Development Bank",
                    "Techstars",
                    "Seedstars",
                  ],
                },
                {
                  title: "Academic & Institutional Platforms",
                  image: "/assets/bio/XIRB8638.JPG.jpeg",
                  tags: ["IIT", "IIM", "XLRI", "NIT", "SP Jain", "IIFT"],
                },
                {
                  title: "Global Speaking & Media Platforms",
                  image: "/assets/bio/axis-pune.jpg",
                  tags: [
                    "TEDx",
                    "CNBC India",
                    "TV9",
                    "DD National",
                    "Dubai",
                    "Ghana",
                  ],
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-[34px] border border-blue-100 bg-[#f8fbff] shadow-xl shadow-blue-100/40 transition duration-500 hover:-translate-y-2 hover:border-[#0057ff]/35"
                >
                  <div className="relative h-[270px] overflow-hidden bg-slate-200">
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <h3 className="absolute bottom-6 left-6 right-6 text-[26px] font-black leading-tight tracking-[-0.045em] text-white">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3 p-6">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.13em] text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 09 BOOKS + MOVIES + AI UNIVERSE */}
        <section className="bg-[#02050b] px-5 py-16 text-white md:px-10">
          <div className="mx-auto max-w-[1500px]">
            <DarkLabel>Books, Films & AI Universe</DarkLabel>

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <h2 className="text-[40px] font-black leading-tight tracking-[-0.055em] md:text-[60px]">
                Books, films, superheroes, games and AI storytelling.
              </h2>

              <p className="text-[17px] leading-8 text-white/60">
                A creative universe spanning author work, mythology-inspired IP,
                games, comics, digital characters and AI-led storytelling.
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-[980px] overflow-hidden rounded-[30px] border border-white/10 bg-black p-2 shadow-[0_28px_90px_rgba(0,87,255,0.16)]">
              <img
                src="/assets/podcast/podcasthero.png"
                alt=""
                className="w-full rounded-[24px] object-contain"
              />
            </div>

            <div className="mt-10">
              <div className="mb-7">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#4d8cff]">
                  Author Library
                </p>
                <h3 className="mt-3 text-[30px] font-black tracking-[-0.05em]">
                  Published books and thought leadership
                </h3>
              </div>

              <div className="flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none]">
                {[
                  {
                    title: "The Power of Generic AI",
                    image: "/assets/books/power of Ai.png",
                  },
                  { title: "The VR Sega", image: "/assets/books/Vr.png" },
                  {
                    title: "The Legend Comes Alive",
                    image: "/assets/books/Alive.png",
                  },
                  {
                    title: "Experts Can Blow It",
                    image: "/assets/books/Blow it.png",
                  },
                  { title: "Empowering Africa", image: "/assets/books/Africa.png" },
                  {
                    title: "The Future of Entrepreneurship",
                    image: "/assets/books/entrepreneurship.png",
                  },
                ].map((item) => (
                  <article
                    key={item.title}
                    className="group min-w-[220px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.055] p-4 transition duration-500 hover:-translate-y-2 hover:border-[#4d8cff]/45"
                  >
                    <div className="flex h-[300px] items-center justify-center overflow-hidden rounded-[22px] bg-white/90 p-4">
                      <img
                        src={item.image}
                        alt=""
                        className="max-h-full max-w-full object-contain transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    <h4 className="mt-5 text-[18px] font-black leading-tight tracking-[-0.04em]">
                      {item.title}
                    </h4>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <div className="mb-7">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#4d8cff]">
                  Game & Character Worlds
                </p>
                <h3 className="mt-3 text-[30px] font-black tracking-[-0.05em]">
                  Superheroes, comics, games and digital characters
                </h3>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {[
                  {
                    title: "Comics & Superhero IP",
                    image: "/assets/gameworlds/comics.jpg",
                    text: "Original comics, superhero worlds and Indian storytelling IP.",
                  },
                  {
                    title: "Character Universe",
                    image: "/assets/gameworlds/comics-img3.jpg",
                    text: "Character-driven visual worlds for games, animation and media.",
                  },
                  {
                    title: "Game Worlds",
                    image: "/assets/gameworlds/comics-img4.jpg",
                    text: "Game concepts, mythology-led worlds and entertainment IP.",
                  },
                  {
                    title: "Digital Actors",
                    image: "/assets/gameworlds/comics-img5.jpg",
                    text: "Real people and performers transformed into digital characters.",
                  },
                  {
                    title: "Creative Production",
                    image: "/assets/gameworlds/comics-img6.jpg",
                    text: "Production pipelines across games, media, comics and stories.",
                  },
                  {
                    title: "Models, Films & AI Storytelling",
                    image: "/assets/gallery/model-team-02.jpg",
                    fallbackImage: "/assets/bio/banner7.jpg",
                    text: "AI-led storytelling, model-driven creative work, films and media universes.",
                  },
                ].map((item) => (
                  <article
                    key={item.title}
                    className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] transition duration-500 hover:-translate-y-2 hover:border-[#4d8cff]/45"
                  >
                    <div className="relative h-[230px] overflow-hidden bg-black">
                      <img
                        src={item.image}
                        alt=""
                        onError={(event) => {
                          if ("fallbackImage" in item && item.fallbackImage) {
                            event.currentTarget.src = item.fallbackImage;
                          }
                        }}
                        className="h-full w-full object-contain opacity-90 transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                      <h4 className="absolute bottom-5 left-5 right-5 text-[25px] font-black leading-tight tracking-[-0.045em]">
                        {item.title}
                      </h4>
                    </div>

                    <div className="p-6">
                      <p className="text-[15px] leading-7 text-white/62">
                        {item.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* 10 PHILANTHROPY */}
        <section className="bg-white px-5 py-16 md:px-10">
          <div className="mx-auto max-w-[1500px]">
            <SectionLabel>Philanthropy & Social Impact</SectionLabel>

            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <h2 className="text-[40px] font-black leading-tight tracking-[-0.055em] md:text-[58px]">
                Technology becomes meaningful when it improves lives.
              </h2>

              <p className="text-[17px] leading-8 text-slate-600">
                Beyond entrepreneurship and innovation, Arijit Bhattacharyya’s
                work includes education, community initiatives, grassroots
                programs, women empowerment and humanitarian support.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {philanthropy.map((item) => (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-[30px] border border-slate-200 bg-[#f8fbff] shadow-xl shadow-blue-100/35 transition duration-500 hover:-translate-y-2"
                >
                  <div className="h-[240px] overflow-hidden bg-slate-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-[22px] font-black tracking-[-0.04em]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 11 LEGACY */}
        <section className="relative overflow-hidden bg-[#02050b] px-5 py-16 text-white md:px-10">
          <div className="absolute left-[-240px] top-[-180px] h-[560px] w-[560px] rounded-full bg-[#0057ff]/18 blur-[170px]" />
          <div className="absolute right-[-240px] bottom-[-200px] h-[560px] w-[560px] rounded-full bg-cyan-400/10 blur-[170px]" />

          <div className="relative z-10 mx-auto max-w-[1200px] text-center">
            <DarkLabel>The Work Continues</DarkLabel>

            <h2 className="text-[40px] font-black leading-tight tracking-[-0.06em] md:text-[66px]">
              A biography still being written through ideas, ventures and
              collaborations.
            </h2>

            <p className="mx-auto mt-7 max-w-[760px] text-[17px] leading-8 text-white/60">
              The story is not only about past achievements. It is about the
              next generation of founders, students, creators, investors and
              innovators who will build from here.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/speaking"
                className="rounded-full bg-[#0057ff] px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#1672ff]"
              >
                Invite To Speak →
              </a>

              <a
                href="/books"
                className="rounded-full border border-[#4d8cff]/35 bg-[#0057ff]/10 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#8bb7ff] transition duration-300 hover:-translate-y-1 hover:bg-[#0057ff] hover:text-white"
              >
                Explore Books →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}