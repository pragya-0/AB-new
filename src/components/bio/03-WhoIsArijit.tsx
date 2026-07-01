import { motion } from "framer-motion";
import BioSectionShell from "./BioSectionShell";
import { fadeUp } from "./bioMotion";

const identities = [
  {
    title: "Technologist",
    line: "Building products and platforms through AI, VR, AR, games and emerging technologies.",
    text: "Programming since the mid-1990s across BASIC, C and C++, Arijit’s work grew into game engines, VRML, immersive media, AI systems, blockchain platforms, digital humans and Gen AI-led innovation.",
    roles: "AI • VR / AR • Gaming • Blockchain • Digital Humans • DeepTech",
  },
  {
    title: "Entrepreneur",
    line: "Creating ventures, ecosystems and opportunities across industries.",
    text: "A serial entrepreneur since 1998, he has built ventures across game development, animation, VR, AR, XR, blockchain, AI, deeptech, media, investment networks, founder communities and international business development.",
    roles: "Virtualinfocom • Coinnovateventures • World Leader Summit • Startups",
  },
  {
    title: "Public Voice",
    line: "Sharing ideas across institutions, summits, governments and global platforms.",
    text: "As a public speaker since 2008, TEDx speaker, government advisor, jury member and business matchmaking expert, he has contributed to conversations across technology, startup ecosystems, investment, policy, education and global business.",
    roles: "TEDx • Govt Advisor • National Startup Award Jury • Global Forums",
  },
  {
    title: "Creator",
    line: "Turning imagination into books, characters, stories and visual worlds.",
    text: "Beyond business, the creative side includes books, drawings, comics, superheroes, game characters, model-to-superhero IP, digital humans, epic research, AI films and original storytelling universes.",
    roles: "Books • Art • Comics • Superheroes • Gen AI Films • Creative IP",
  },
];

const proofPoints = [
  "Serial Entrepreneur since 1998",
  "International Record Holder in Technology & Finance",
  "Public Speaker since 2008",
  "TEDx Speaker and Business Matchmaking Expert",
  "Government Advisor and Jury, National Startup Award",
  "Community Builder since 2010",
  "Game Programmer since 1998, from legacy systems to latest game engines",
  "Virtual Reality Specialist since 2006, from VRML to C# using game engines",
  "AR Specialist, AI Coder since 2002 and Gen AI Developer since 2023",
  "Blockchain Specialist since 2017 across fintech, crypto and healthtech",
  "Globe Trotter with 101+ countries business network",
  "Founder of one of India’s first game development companies since 1998",
  "Creator of India’s first movie using Gen AI in 2025",
];

const biographyParagraphs = [
  "Arijit Bhattacharyya is a serial entrepreneur since 1998, technologist, angel investor, public speaker since 2008, TEDx speaker, business matchmaking expert, government advisor, jury member for the National Startup Award, artist, author, community builder since 2010, game programmer since 1998 from legacy systems to latest game engines, virtual reality specialist since 2006 from VRML to C# using game engines, AR specialist, AI coder since 2002, Gen AI developer since 2023, blockchain specialist since 2017 mainly in fintech, crypto and healthtech, and a globe trotter with a business network across 101+ countries. He is the founder of one of India’s first game development companies since 1998 and creator of India’s first movie using Gen AI in 2025.",
  "He is an International Record Holder in Technology & Finance, with decades of work across technology, finance, digital banking, entrepreneurship, investment, education, media and creative IP.",
  "Arijit plays a pivotal role in uplifting cities and countries through a multifaceted approach that blends technology, education, business delegation, innovation and funding. His leadership supports the adoption of cutting-edge technologies that transform urban planning, smart city development and future-ready business ecosystems.",
  "He is a rare combination of technology and investment specialist. He has conducted workshops on DeepTech, Gen AI, encryption, game development, angel investment, VC funding, industry automation, HR management and technology optimisation across Fortune 500 companies, Navratna companies and universities globally — including IIT, NTPC, IIM, SP Jain Global and IIFT.",
  "By advocating accessible education, he empowers future generations with the skills needed for a technology-driven world. Through strategic business delegations, he fosters international partnerships, opens doors for collaboration and supports economic growth.",
  "His support for innovative startups and ventures, combined with targeted funding initiatives, accelerates entrepreneurship, creates new opportunities and contributes to sustainable development. This holistic approach is focused on lasting progress and prosperity for the communities he serves.",
  "With decades of experience in finance and technology, Arijit is also an artist, comics story writer, superhero creator, Gen AI movie maker and Gen AI industry consultant with a rare combination of technology, finance and digital banking knowledge.",
  "While doing his graduation at the age of 17, Arijit started one of India’s first game development companies in 1998 with an education and training vertical and India’s own game, AR, VR, blockchain, AI and Gen AI studio. He is a bootstrapped entrepreneur who started with INR 49 in pocket, and while doing his Masters in Computer Application, created several 2D and 3D games from his Kolkata-based company.",
  "He has helped thousands of startups begin and grow their ventures, mentored founders across global ecosystems, trained thousands of students in technology, animation, IT, digital marketing, entrepreneurship and management, and built communities that bring entrepreneurs together to network, collaborate and foster long-term ecosystem development.",
];

export default function WhoIsArijit() {
  return (
    <BioSectionShell
      eyebrow="Positioning"
      title="Technology. Business. Creativity. Influence."
      text="Arijit Bhattacharyya's work is not defined by one title. It moves across multiple worlds — technology, entrepreneurship, investment, public influence and creative world-building."
      dark
    >
      <motion.div
        {...fadeUp}
        className="mb-6 overflow-hidden rounded-[28px] border border-[#58a0ff]/20 bg-white/[0.04] p-5 sm:p-6 md:mb-8 md:rounded-[34px] md:p-8"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7fb8ff]">
          Biography Overview
        </p>

        <div className="mt-6">
          <h3 className="max-w-[980px] text-[30px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[42px]">
            A founder journey across technology, finance, education, investment
            and creative IP.
          </h3>

          <p className="mt-4 max-w-[760px] text-[15px] font-normal leading-[1.7] text-white/65 md:text-[16px]">
            This section preserves the full biography context from the legacy
            profile while presenting it in a cleaner, more readable structure.
          </p>

          <div className="mt-8 columns-1 gap-8 lg:columns-2">
            {biographyParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-5 break-inside-avoid text-[15px] font-normal leading-[1.8] tracking-[-0.01em] text-white/70 md:text-[16px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-2">
        {identities.map((item) => (
          <motion.article
            key={item.title}
            {...fadeUp}
            className="group relative min-h-[320px] overflow-hidden rounded-[28px] border border-white/10 bg-[#080d13] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)] transition duration-300 hover:-translate-y-1 hover:border-[#58a0ff]/55 sm:p-7 md:rounded-[38px] md:p-9 lg:min-h-[360px]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,87,255,0.22),transparent_38%)] opacity-70 transition duration-300 group-hover:opacity-100" />
            <div className="pointer-events-none absolute bottom-[-100px] right-[-90px] h-[260px] w-[260px] rounded-full bg-[#58a0ff]/10 blur-[90px]" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="mb-6 h-[3px] w-16 rounded-full bg-[#58a0ff] md:w-20" />

                <h3 className="text-[34px] font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-[40px] md:text-[48px]">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-[620px] text-[19px] font-bold leading-[1.18] tracking-[-0.03em] text-[#8bb7ff] md:text-[24px]">
                  {item.line}
                </p>
              </div>

              <div className="mt-8">
                <p className="max-w-[680px] text-[15px] font-normal leading-[1.75] text-white/65 md:text-[16px]">
                  {item.text}
                </p>

                <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">
                  {item.roles}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        {...fadeUp}
        className="mt-6 rounded-[28px] border border-[#58a0ff]/20 bg-[#0057ff]/10 p-5 sm:p-6 md:mt-8 md:rounded-[36px] md:p-8"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7fb8ff]">
          Authority Snapshot
        </p>

        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {proofPoints.map((point) => (
            <div
              key={point}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-[15px] font-normal leading-[1.65] text-white/72"
            >
              {point}
            </div>
          ))}
        </div>
      </motion.div>
    </BioSectionShell>
  );
}
