import { motion } from "framer-motion";
import BioSectionShell from "./BioSectionShell";
import { fadeUp } from "./bioMotion";

const pillars = [
  {
    title: "Technology & DeepTech",
    line: "Where imagination meets emerging technology.",
    text: "AI, games, VR, AR, XR, blockchain and deep technology have remained central to the innovation journey — not as isolated skills, but as engines for building products, platforms, smart-city solutions, digital humans and future-facing experiences.",
    meta: "AI • Gaming • VR / AR / XR • Blockchain • DeepTech",
    large: true,
  },
  {
    title: "Entrepreneurship & Investment",
    line: "Building founders, not just companies.",
    text: "Founder mentoring, venture ecosystems, investor conversations, business matchmaking and growth strategy sit at the center of Arijit’s work with startups, institutions, SMEs, MSMEs and global business networks.",
    meta: "Mentoring • Investors • Startups • Growth • Funding",
    large: false,
  },
  {
    title: "Creative Storytelling",
    line: "Turning ideas into worlds, characters and IP.",
    text: "Films, superheroes, comics, characters, models, digital humans and visual worlds form the creative side of the ecosystem — where technology meets imagination, mythology research, original IP and Gen AI-led storytelling.",
    meta: "Films • Characters • Comics • Superheroes • Creative IP",
    large: true,
  },
  {
    title: "Education & Future Skills",
    line: "Passing knowledge to future generations.",
    text: "The ecosystem also grows through students, founders, professionals and institutions learning emerging technologies, entrepreneurship, AI, game development, animation, digital transformation and future-ready business thinking.",
    meta: "Students • Universities • AI Training • Game Development",
    large: false,
  },
  {
    title: "Global Collaboration",
    line: "Connecting innovation across borders.",
    text: "International summits, business delegations, diplomacy-led forums, speaking engagements, startup exchanges and cross-border partnerships connect the work to a wider global innovation and business development network.",
    meta: "Speaking • Summits • Diplomacy • Market Entry",
    large: true,
  },
  {
    title: "Communities & Social Impact",
    line: "Technology becomes meaningful when it improves lives.",
    text: "Beyond ventures and platforms, the larger mission includes communities built around founders, creators, students, youth, villages, women-led participation, sustainability and social initiatives.",
    meta: "Founders • Creators • Youth • Villages • Impact",
    large: false,
  },
];

const ventures = [
  {
    name: "Virtualinfocom",
    role: "Founder & CEO",
    text: "Founded in 1998, Virtualinfocom is one of India’s early game development, animation, VR, AR, XR, blockchain, AI and deeptech studios, known for real actors and models as 3D superheroes, digital humans, game titles and technology solutions.",
  },
  {
    name: "Coinnovateventures",
    role: "Founder & CEO",
    text: "Accelerator program and fund focused on helping create more successful startups through mentoring, funding conversations, growth strategy and startup ecosystem support.",
  },
  {
    name: "World Leader Summit",
    role: "Founder",
    text: "A global leadership summit and international business club with a 95+ country partnership network, built around mentoring, networking, education, funding, B2B, B2G and incubation.",
  },
  {
    name: "Entrepreneursface",
    role: "Founder",
    text: "A platform helping entrepreneurs move from idea stage to execution, business development, fundraising and startup growth.",
  },
  {
    name: "Virtual Reality Sol",
    role: "Founder",
    text: "One of India’s early virtual reality, live wall, mixed reality and immersive technology studios.",
  },
  {
    name: "Glamworldface",
    role: "Co-Founder",
    text: "A media and entertainment platform for creative people across India, UK, Ukraine and global creative markets.",
  },
  {
    name: "imsuperhero",
    role: "Founder",
    text: "A platform for children and creators to build their own superheroes and share original character worlds.",
  },
  {
    name: "Animgaming",
    role: "Founder",
    text: "A platform for indie developers to showcase projects and connect with global publishers, funding and investor opportunities.",
  },
  {
    name: "Yogatraining4u",
    role: "Founder / Investor",
    text: "A wellness and training platform connected with yoga, nutrition, MMA, BJJ, fighters and healthy living.",
  },
  {
    name: "Animationreviews",
    role: "Founder",
    text: "A portal for animation, VFX, movies and entertainment industry news and reviews.",
  },
  {
    name: "Cosplayseller",
    role: "Founder",
    text: "India’s first ecommerce portal for cosplay items, connected with original superhero characters and creative commerce.",
  },
  {
    name: "Virtualgamedeveloper",
    role: "Founder / Investor",
    text: "A VR, AR, mixed reality, game and movie-making company connected with immersive storytelling and technology production.",
  },
  {
    name: "Avaluglobal Investments",
    role: "Lead Director",
    text: "Australia-linked investment and global business platform connected with startup, investment and growth networks.",
  },
  {
    name: "Healthplaneta",
    role: "Founder",
    text: "A platform focused on health, nutrition and wellness-oriented knowledge.",
  },
  {
    name: "Artncraftmarket",
    role: "Founder",
    text: "A marketplace connecting artists, art buyers, sellers and creative communities.",
  },
  {
    name: "PropertyPlaneta",
    role: "Founder",
    text: "A platform for real estate listing, buying, selling and property-sector opportunities.",
  },
  {
    name: "8metals",
    role: "Founder",
    text: "A non-profit initiative exploring the culture, science and mythology behind traditional knowledge systems.",
  },
  {
    name: "PhoneQuad LLC",
    role: "Director & Advisor",
    text: "USA-linked advisory role connected with technology, business and platform development.",
  },
];

export default function FounderEcosystem() {
  return (
    <BioSectionShell
      eyebrow="Innovation Ecosystem"
      title="The Architecture Behind the Ecosystem"
      text="One journey. Multiple worlds connected by technology, creativity, investment, education and global collaboration."
    >
      <div className="relative overflow-hidden rounded-[30px] border border-[#d8e7ff] bg-[#f7fbff] px-5 py-6 shadow-[0_24px_80px_rgba(0,87,255,0.10)] sm:px-6 md:rounded-[42px] md:px-10 md:py-8">
        <div className="pointer-events-none absolute left-[-14%] top-[-18%] h-[420px] w-[420px] rounded-full bg-[#0057ff]/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[-22%] right-[-10%] h-[460px] w-[460px] rounded-full bg-[#58a0ff]/14 blur-[120px]" />

        <div className="relative">
          {pillars.map((pillar, index) => {
            const inset = index % 2 !== 0;
            const showDivider = index < pillars.length - 1;

            return (
              <motion.article
                key={pillar.title}
                {...fadeUp}
                className={`relative py-10 md:py-14 ${
                  inset ? "lg:pl-[8%]" : ""
                }`}
              >
                <div className="grid gap-6 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
                  <div>
                    <div className="mb-5 h-[3px] w-16 rounded-full bg-[#0057ff] md:w-20" />

                    <h3
                      className={`max-w-[720px] font-extrabold leading-[0.98] tracking-[-0.05em] text-[#07101f] ${
                        pillar.large
                          ? "text-[36px] md:text-[58px]"
                          : "text-[32px] md:text-[46px]"
                      }`}
                    >
                      {pillar.title}
                    </h3>

                    <p className="mt-4 max-w-[620px] text-[18px] font-bold leading-[1.2] tracking-[-0.03em] text-[#0057ff] md:text-[24px]">
                      {pillar.line}
                    </p>
                  </div>

                  <div>
                    <p className="max-w-[760px] text-[16px] font-normal leading-[1.85] tracking-[-0.01em] text-[#334155] md:text-[18px]">
                      {pillar.text}
                    </p>

                    <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0057ff]">
                      {pillar.meta}
                    </p>
                  </div>
                </div>

                {showDivider && (
                  <div className="mt-10 h-px w-full bg-[#d8e7ff]" />
                )}
              </motion.article>
            );
          })}
        </div>
      </div>

            <motion.div
        {...fadeUp}
        className="mt-8 overflow-hidden rounded-[30px] border border-white/10 bg-[#03070d] p-5 text-white shadow-[0_28px_90px_rgba(0,0,0,0.30)] sm:p-6 md:rounded-[42px] md:p-9"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7fb8ff]">
          Founder & Venture Network
        </p>

        <div className="mt-5 max-w-[980px]">
          <h3 className="text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[46px]">
            Ventures, platforms and ecosystem brands built across decades.
          </h3>

          <p className="mt-5 max-w-[760px] text-[16px] font-normal leading-[1.8] text-white/68 md:text-[18px]">
            A structured view of the ventures, platforms and ecosystem brands
            connected with technology, gaming, investment, media, wellness,
            creative commerce and global business.
          </p>
        </div>

        <div className="mt-8 space-y-7">
          {[
            {
              label: "Flagship Technology & Investment Ventures",
              items: [
                "Virtualinfocom",
                "Coinnovateventures",
                "World Leader Summit",
                "Virtual Reality Sol",
              ],
            },
            {
              label: "Creative, Media & Community Platforms",
              items: [
                "Glamworldface",
                "imsuperhero",
                "Animgaming",
                "Animationreviews",
                "Cosplayseller",
                "Virtualgamedeveloper",
              ],
            },
            {
              label: "Investment, Wellness & Business Platforms",
              items: [
                "Avaluglobal Investments",
                "Entrepreneursface",
                "Yogatraining4u",
                "Healthplaneta",
                "Artncraftmarket",
                "PropertyPlaneta",
                "8metals",
                "PhoneQuad LLC",
              ],
            },
          ].map((group) => (
            <div
              key={group.label}
              className="rounded-[26px] border border-white/10 bg-white/[0.035] p-5 md:p-6"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#7fb8ff]">
                {group.label}
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {group.items.map((name) => {
                  const venture = ventures.find((item) => item.name === name);

                  if (!venture) return null;

                  return (
                    <article
                      key={venture.name}
                      className="group rounded-[20px] border border-white/10 bg-[#07101b] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#58a0ff]/45 hover:bg-[#0a1626]"
                    >
                      <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#7fb8ff]">
                        {venture.role}
                      </p>

                      <h4 className="mt-3 text-[22px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[24px]">
                        {venture.name}
                      </h4>

                      <p className="mt-4 text-[14px] font-normal leading-[1.7] text-white/65">
                        {venture.text}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </BioSectionShell>
  );
}
