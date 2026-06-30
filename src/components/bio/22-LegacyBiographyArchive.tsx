import { motion } from "framer-motion";
import BioSectionShell from "./BioSectionShell";
import { fadeUp } from "./bioMotion";

const archiveSections = [
  {
    title: "Detailed Biography",
    items: [
      "Serial Entrepreneur since 1998, Technologist, Angel Investor, Public Speaker since 2008, TEDx Speaker, Business Matchmaking Expert, Government Advisor, Jury National Startup Award, Artist, Author and Community Builder since 2010.",
      "Game Programmer since 1998 from legacy systems to latest game engines, Virtual Reality Specialist since 2006 from VRML to C# using game engines, AR Specialist, AI Coder since 2002, Gen AI Developer since 2023 and Blockchain Specialist since 2017 across fintech, crypto and healthtech.",
      "Founder of one of India’s first game development companies since 1998 and creator of India’s first movie using Gen AI in 2025.",
      "Arijit is a technology, finance, digital banking, Gen AI industry consultant, comics story writer, superhero creator and Gen AI movie maker with experience across technology, finance, art and SDG.",
      "International Record Holder in Technology & Finance.",
      "He started one of India’s first game development companies at the age of 17 in 1998 and began as a bootstrapped entrepreneur with INR 49 in pocket.",
      "He has worked across entrepreneurship education, technology, coding, gaming, VR, AR, MR, animation, international business development, fundraising, innovation, market entry, deeptech and AI.",
      "He has helped villages become more sustainable and self-dependent while bringing entrepreneurs together to network, collaborate and build communities.",
      "He has advised senior leadership across MNCs and small businesses on operating margins, profitability, international business development, risk management, market entry, new technology, deeptech, systems, processes and fundraising.",
      "At the start of his professional career, he was managing 7 countries with 12 new business centers connected with Virtualinfocom’s global gaming, blockchain, AI, AR and VR solutions.",
      "He has been associated with 1000+ world-leading technology, finance and political organizations.",
      "Legacy profile records 12 Million connections, networking reach and business followers from 97+ countries, while the updated website now preserves the stronger current positioning of 102+ countries connected and 60+ countries travelled.",
      "His network includes global experts from technology, AI, game development, government, VC funds, angel investors, C-level executives, politics, spirituality, sports, universities, real estate, tourism, sales, marketing, media, models, actors, directors and producers.",
      "He has acted as a B2B point of contact across Asia, Europe, USA and Australia for business development, technology collaboration, investment conversations and cross-border ecosystem building.",
    ],
  },
  {
    title: "Business Growth Program & Entrepreneur Advisory",
    items: [
      "Arijit helps entrepreneurs move from where they are now to where they want to be — whether they need to pivot, start up, scale, execute an exit strategy or rebuild growth for a changing economy.",
      "His advisory approach focuses on helping business owners work on the business instead of being trapped only in daily operations.",
      "The program direction includes business mapping, growth strategy, hidden opportunity discovery, financial clarity, operations improvement and practical execution systems.",
      "He helps founders develop personalized business maps designed to navigate uncertain economic conditions and identify new growth opportunities.",
      "The advisory framework includes shifting to a growth mindset, improving sales processes, financial clarity, optimization, maximization and incremental changes that can improve business performance.",
      "The program includes the idea of creating at least 30% growth through small optimizations to current sales processes, taking control of financial clarity and reducing fear around accounting.",
      "The program is aimed at entrepreneurs who are serious about growth, hungry for more, passionate about serving clients at the highest level and unwilling to let the economy decide whether their business stagnates or grows.",
      "The outcome focus includes freedom, stronger teams, a capable workforce, more time for family, a culture of innovation, creativity and trust, higher client value, better profitability and greater ability to contribute charitably.",
      "Arijit positions himself as an advisor who helps entrepreneurs reach levels of success that may not have seemed realistic through strategy, systems, technology, funding direction and business clarity.",
    ],
  },
  {
    title: "Consultant, Panelist & Business Chamber",
    items: [
      "Consultant, Asian Development Bank.",
      "Judge for Startup India Award.",
      "Panelist in Industry 4.0 Government of India panel.",
      "Advisory Board Member at World Women Conference and Awards.",
      "Advisory Board Member, World Association for Small and Medium Enterprises.",
      "Star Mentor of Change at NITI Aayog and member of mentor boards in universities across India, USA and Oman.",
      "Senior Advisor, Global Wealth Forum.",
      "Global Advisor, UNACCC.",
      "Director Innovation, Investment, AI — Private Office of His Highness Sheikh Ahmed Bin Faisal Al Qassimi Group of Companies.",
      "Global Ambassador of ICMEI International Chamber of Media and Entertainment Industry.",
      "Global Ambassador of The Diplomatic Club.",
      "Advisory Board Member, The Future of Medicine Foundation USA.",
      "Ex-Hony Secretary of TiE Kolkata, IT sub-committee member CII, President of ELMA 2021 and Ex-Google Business Group Manager.",
      "Advisor and mentor of Startup Pad, Indian Chamber of Commerce.",
      "Board member of Industry Institute Partnership Cell in B. P. Poddar Institute of Management & Technology and Brainware University.",
      "Connected with Bengal Chamber of Commerce, Indian Chamber of Commerce, ASSOCHAM, Merchant Chamber of Commerce, TiE, CII, FICCI, IAMAI, German American Chamber of Commerce and BCC&I.",
      "Connected with McKinsey & Company, Dun & Bradstreet India, Open Chambers and multiple chamber-of-commerce platforms.",
    ],
  },
  {
    title: "Founder, Venture & Company Details",
    items: [
      "Founder and CEO, Coinnovateventures — accelerator program and fund focused on helping create more successful startups.",
      "Founder and CEO, Virtualinfocom — one of India’s early game development, VR app development, animation, AR, XR, blockchain, AI and deeptech companies since 1998.",
      "Virtualinfocom has worked with real actors and models as 3D superheroes, digital humans and game characters, building original game titles, VR applications and creative technology solutions.",
      "Virtualinfocom grew under Arijit’s leadership with a team of over 200 employees and a portfolio of 950+ projects.",
      "Arijit’s dedication to the gaming industry earned awards and recognition including Best Entrepreneur Award from Indian Achievers Forum and Best Animation and Game Development Company Award from International Brand Equity Awards.",
      "Founder, World Leader Summit — one of the world’s large leadership summit and international business club platforms with 95+ country business partnership and programs around mentoring, networking, education, funding, B2B, B2G and incubation.",
      "Founder, Entrepreneursface — helps entrepreneurs move from ideation to execution and fundraising.",
      "Founder, Virtual Reality Sol — one of India’s early virtual reality, live wall and mixed reality studios.",
      "Co-Founder, Glamworldface — media and entertainment platform for creative people.",
      "Founder, imsuperhero — platform for children to create superheroes and share them with the world.",
      "Founder, Animgaming — platform for indie developers to showcase and get funding from global publishers and investors.",
      "Founder, Yogatraining4u — platform connected with yoga, nutrition, MMA, BJJ, rehab and good life.",
      "Founder, Animationreviews — portal for movies, VFX and animation news.",
      "Lead Director, Avaluglobal Investments — Australia.",
      "Founder, Cosplayseller — India’s first ecommerce portal for cosplay items.",
      "Founder, Virtualgamedeveloper — one of India’s early VR, AR and mixed reality solution studios since 2006.",
      "Founder, 8metals — non-profit initiative exploring culture, science and mythology.",
      "Director and Advisor, PhoneQuad LLC — USA.",
      "Founder, Healthplaneta, Artncraftmarket and PropertyPlaneta.",
    ],
  },
  {
    title: "Education, Training & University Work",
    items: [
      "Creator of BSc in Game Development, Virtual Reality and AR syllabus for MAKAUT.",
      "Trained 6000+ students from 2001 to 2008 in his own institute across computer languages, multimedia, animation and game programming.",
      "Conducted 100+ workshops on game development, Android apps, iOS apps, blockchain, machine learning, digital marketing, entrepreneurship and management.",
      "Visiting faculty and advisor across SP Jain, MDI, BIBS, iLead, Digimation UK, NIIT Technologies and other institutions.",
      "Member of Board of Studies in computer science departments and corporate advisory boards in India and UK.",
      "Conducted workshops across SRM University, IIT Kharagpur, NIT, Brainware, iLead, MAKAUT, Manipal University, Techno India, IIM Calcutta and BIBS.",
      "Mentor at Atal Innovation Mission, Government of India.",
      "Served as advisory board member of several universities in India and Europe.",
      "Corporate advisory board member in three universities in India and UK, and serving as visiting faculty to colleges in Asia.",
      "Educational and institutional association includes SP Jain University, NIIT Technologies, MDI, BIBS, Digimation UK and iLead.",
      "Arijit earned an MCA along with Financial Management degrees, BSc in Economics and global certificates.",
    ],
  },
  {
    title: "Programming, Technology & Early Technical Journey",
    items: [
      "Arijit began programming in late 1994 with BASIC before progressing to C and C++ in early 1995 for DOS application development.",
      "He moved into 32-bit development under Windows and then to RAD with Borland’s C++ Builder, essentially Delphi for C++, in 1996.",
      "In 1997 he became involved in internet technologies and progressed to dynamic, database-driven websites.",
      "In 2000, as an artist, he moved into animation, and by late 2001 became a game developer and simulation engineer.",
      "He has worked on AI, ML solutions, virtual reality, MR, game development and digital banking solutions.",
      "He worked on voice tagging, ML scripts, helping universities adopt new technology and train trainers.",
      "His work reflects deep learning through testing and refining predictability of customer purchase potential.",
      "He helped create methodology around real-time facial expression data and analysis.",
      "He helped banks go digital with payment gateway solutions globally.",
      "He worked on blockchain exchanges, crypto-finance systems and digital banking infrastructure.",
    ],
  },
  {
    title: "Games, VR, AR, AI & IP Projects",
    items: [
      "Produced 520+ games, VR and AR projects and gave opportunity to 750+ indie developers globally.",
      "Created 360+ superhero game characters from real actors and celebrities.",
      "Created 54+ superheroes of his own across 21 comics series.",
      "Produced 7+ movies and several short movies as investor and sleeping producer.",
      "Produced 7 short movies, 12 pocket films and worked as VFX co-producer for 2 Spanish movies.",
      "Created approximately 24 short indie movies and 2 long indie movie projects connected with creative IP and film production.",
      "Produced Bengal’s first movie-based game Boss 2 with Actor Jeet.",
      "Created India’s first real actor and actress based RPG game.",
      "Produced Bengal’s first movie-based game Boss 2, Bangladesh superhero movie-based game Bizli, Nepal’s first 3D racing game and Bhutan’s first 3D game.",
      "Produced India’s first RPG mythology-based game Ashwathama the Immortal, where in 2007 he used kalari fighters and real-life shooting of models to create 3D game characters.",
      "Produced Shaktimaan the game and Shaktimaan the Battle with superstar Mukesh Khanna.",
      "Created game titles and character work connected with Subhashree Ganguly, Priyanka Sarkar, Mainak Banerjee, Arjun Chakraborty, Amrita and other regional actors and models.",
      "Produced Fight of the Legends, a superhero-based fighting game series where since 2008 more than 200 models and actors around the world were recruited as 3D game characters, later moving into NFT and metaverse worlds.",
      "Produced Sukhu Dukhu, Lalkamal Nilkamal, Dacoits of Bengal, Desert Drift and Saudi Arabia with Love.",
      "Created games and apps for Nokia, Microsoft and Apple platforms, including early mobile and smartphone game development work.",
      "Developed Asia’s first Intel Ultrabook-based game as software development partner.",
      "Built VR games executed in China, VR theme park experiences in Kiev, Ukraine, and 3D VR games integrated with VR devices based in China.",
      "Built industrial animation and simulation solutions across oil rigging, real estate, medical, technology, FMCG and other sectors.",
      "Created copyright and IP around virtual reality simulation in the medical segment and 3D model-making software.",
      "Marketed several blockchain and crypto projects around the world.",
      "Made several local actors and artists popular globally in TV series and international movie markets in Asia.",
      "The creative research includes digging into science behind mythology and culture, exploring fighting styles from different parts of the world and putting those ideas into gamification and animation.",
    ],
  },
  {
    title: "Investment, Mentoring & Startup Ecosystem",
    items: [
      "Mentor and angel investor connected with IIM Calcutta Innovation Park, Naman Capital, Ah Ventures, FasterCapital Dubai, Maxcap China, Megaline UK, Broffice Ukraine and IIDF Russia.",
      "Fund manager of a VC fund based in USA and angel investor with 8 portfolio companies, with exits from three.",
      "Member of Intellecap Impact Investment Network, partner at Avalu Global Investments and investor-mentor with FasterCapital Dubai.",
      "Member of Naman Capital Mumbai, Ah Ventures Bangalore and advisor at Founder Institute Kolkata.",
      "Council Member, Aldhow Capital VC.",
      "Startup Mentor, Founder Institute.",
      "Mentor and Judge, Techstars Startup Saturday.",
      "Mentor, Government of West Bengal MSME Department and Startup India Government of India initiative.",
      "Business Mentor, FasterCapital Dubai.",
      "In 2008, he became mentor for TATA Udyog Parbo, a joint initiative with NEN.",
      "Co-creator of ICC Startup Pad and managing it since 2015.",
      "Managing Trustee and President of Bong Entrepreneurs.",
      "Advisor to incubators, accelerators, startup hubs, universities and business communities across India, Singapore, USA, China, Japan and Russia.",
      "Advisor to exciting startups including AD Marketing Digital USA, incck Brazil, Smartdomus USA, CeraHeat Finland, TorchIt India, Starbounty India, BrOffice Ukraine, SBO Singapore, vrerd, Adarsh Group and covid-19 telemedicine.",
      "Advisor to B Incubators, TCDIC, CIIE, PDPU, co-working spaces and incubation centers in Asia.",
      "Advisor to innovation center in Japan and MSME clusters in India with scalable business opportunities.",
      "Helped entrepreneurs incubate ideas, build go-to-market strategy, launch products, manage risk, reduce cost and scale beyond industry benchmarks.",
      "Helped thousands of startups grow as an active mentor and consultant.",
      "Created communities to go global and angel funds to support startup growth and scale.",
    ],
  },
  {
    title: "Crypto, Blockchain & Digital Asset Leadership",
    items: [
      "Blockchain Specialist since 2017 across fintech, crypto, healthtech and digital asset ecosystems.",
      "Marketed several blockchain and crypto projects globally across Asia, Europe, Middle East and emerging markets.",
      "Former Chief Business Development Officer (CBDO) for blockchain and crypto ventures.",
      "Former Chief Marketing Officer (CMO) of Broffice Ukraine, one of the early blockchain-powered co-working ecosystem initiatives.",
      "Consultant to crypto gaming and blockchain betting platforms based in Europe.",
      "Worked on crypto gaming, blockchain gaming and tokenized engagement ecosystems across Europe and Asia.",
      "Worked with blockchain exchanges, crypto finance platforms, smart-contract ecosystems and digital asset communities.",
      "Advisor and ecosystem builder for blockchain startups, crypto ventures and Web3 innovation programs.",
      "Speaker at Thailand Blockchain Forum, Dubai Blockchain Conference, Malaysia Next Wave of Crypto and international blockchain platforms.",
      "Worked on blockchain solutions across healthcare, finance, real estate, energy and smart-city applications.",
      "Built and supported global blockchain business-development, fundraising and market-entry initiatives.",
    ],
  },
  {
    title: "Judge, Jury & Startup Evaluation",
    items: [
      "Judge and jury member in 260+ events, startup hubs and business plan competitions.",
      "Judge for Dare to be Digital game development competition in the UK.",
      "Judge and mentor across IIT, IIM, XLRI, JU and approximately 25 universities and startup hubs in India.",
      "Judge for i2i, NEN, ICC Startup Pad, CIIE Power of Ideas, iStart, GoDigital UK, Casual Connect USA, HULT Prize, NASSCOM GDC 2017 and 2018, TATA Social and IIM Kolkata business plan competitions.",
      "Mentor and judge for Techstars Startup Saturday and active speaker-mentor in cybersecurity projects.",
      "Judge for Unicorn Battle USA.",
      "Judge for Hult Prize.",
      "Judge for Casual Connect international indie game developer competition.",
      "Judge for entrepreneurship drives and business plan competitions across iStart, CIIE and GoDigital UK.",
      "Judge at Indian Institute of Foreign Trade Vivaan and other national/international startup competitions.",
    ],
  },
  {
    title: "Keynote Speaker, Moderator & Resource Person",
    items: [
      "Speaker in 2100+ events worldwide across entrepreneurship, technology, innovation, game development, VR, AR, NFT, blockchain, AI, digital banking, SDG, creativity, arts and media.",
      "TEDx Speaker, Ghana Business Summit with Vice President of Ghana, China VR Film Festival, Thailand Blockchain Forum, Go International Finland, Next Growth Nepal and CNBC India.",
      "Speaker across IITs, IIMs, NITs, XLRI, CII, ICC, ASSOCHAM, FICCI, TiE, IAMAI and multiple chambers of commerce.",
      "Speaker at American Association of Precision Medicine, Diplomatic World Europe, Unicorn Battle USA, Games Gathering Ukraine, Korea Game Conference, Dubai Blockchain Conference and World Women Conference USA.",
      "Invited as resource person by institutions including IIM, IIT, XLRI, NIT, VSSUT, Brainware, ICAI, NSHM, BESU/IIST Shibpur, IIFT, Praxis, Globsyn, SRM, Poornima, Camellia, iLead, IEM, BP Poddar, Heritage Institute and SP Jain.",
      "International keynote platforms include Bengal Chamber of Commerce, China Virtual Reality, Indian Chamber of Commerce, Finland Smart City, National Entrepreneurs Network, Thailand Blockchain, ASSOCHAM, Malaysia Future of VR, Merchant Chamber of Commerce, Nepal Product Development for Startups, TiE, Ukraine Indian Superheroes, South Korea DeepTech and Malaysia Next Wave of Crypto.",
      "Speaker at Games Gathering Kiev, Good Game Show Korea, Passion for Game Singapore, Startup Saturday, IIT EDC, IIM Innovation Lab, Digimation UK, FICCI Frames, Next Growth Conclave Nepal, Franchise India, IAMAI, NAB China, Xian Film Festival China and Children Film Festival India.",
      "Speaker at MDI Gurgaon, MDI Murshidabad, XLRI Jamshedpur, BESU/IIST Shibpur, Campdain Family Connect, Dream Institute of Technology, UEM, IEM, Vivekananda University, Poornima University, UPS University, Chitkara University, Axis Bank, Government of Himachal, International Conference on Cybercrime and Cyber Security and International Conference on AI.",
      "Television and media platforms include DD National, CNBC India, Kantipur TV, TV9, CNBC, DD Bangla and regional/national public platforms.",
    ],
  },
  {
    title: "IT, ITES & Technology Projects",
    items: [
      "Created applications for mining industry and school management systems between 1998 and 2000 using VB 6.0 and SQL Server.",
      "Created three applications, two XR solutions and two animated videos for marine-industry training and made training simulation for Schlumberger in 2010.",
      "Helped several SMEs update legacy applications and migrate old processes to newer technology since 2010.",
      "Implemented AI into marketing applications, financial analysis apps, automation, gaming apps and social network applications.",
      "Worked on VR helmet systems, VRML, headset, cave and boomtube-based experiences using latest game engines.",
      "Built AR solutions for healthcare, edtech and real estate.",
      "Worked on blockchain wallets, Thailand crypto cafÃ©, smart-home blockchain, fintech blockchain and blockchain real-estate solutions.",
      "Worked on blockchain ecosystems across healthcare, finance and energy.",
      "Worked on crypto exchanges, token ecosystems, blockchain wallets and decentralized business platforms.",
      "Supported blockchain-based gaming and betting ecosystems for international markets.",
      "CMO of Smartdomus USA, responsible for expansion in EU, Middle East and Asia.",
      "Worked on marketing and business development for approximately 12 mid-level product companies and brought new B2B customers.",
      "Created apps, XR and animation for marine industry and training simulations.",
      "Worked on open-source simulated medical virtual reality systems, smart virtual reality hub, oil rigging simulation using drones, blockchain exchanges and AI simulators.",
      "Development and deployment of a replacement email system and domain-control system.",
      "Part of smart city projects and smart virtual reality hub development.",
    ],
  },
  {
    title: "Non-IT Business Projects",
    items: [
      "International business development for one of the largest Ukraine-based coworking places.",
      "New market development and business development for products for visually impaired users.",
      "CMO for a UK-based geriatric solution company, exited in 2016.",
      "Business development for tailor-made shoe company based in Ukraine.",
      "Managing partner and business expansion lead for Redcarpet.",
      "Business development for Yogatraining, a health and nutrition startup based in Thailand.",
      "Business development for Bridge, a B2B platform based in the Middle East and expanded into USA.",
      "Helped develop new markets and customers for GoInternational, a Nordic B2B platform, with exit in 2018.",
      "International business development for ELINE ring-based gesture control system.",
      "Consulted SMEs from India to export products to UAE, EU and USA, mainly in food, processed food, wine and garments industry.",
      "Hosted West Bengal’s first cosplay show at ITC Sonar Bangla jointly with PRSI and another 5-star property event introducing Virtualinfocom’s real models as cosplay artists.",
      "Helped five fashion startups promote their brands worldwide.",
      "Served as consultant to global banks since 2017.",
      "Supported and structured around 65 SMEs and MSMEs in India, Dubai and Africa to grow business, finance structure, technology and networks.",
      "Worked in music through early self-created music, game background scores and voiceovers.",
      "Worked across Web 3.0, HTML5 games and HTML-based websites for around 15 years while leading teams.",
      "As president of ELMA, worked on upward branding of the electronics industry.",
      "Built a blockchain-powered co-working place in 2018 jointly with Ukraine partners.",
      "Structured an Asia-based AgriTech drone-service solution running as white-label support.",
      "In 2012, helped as service provider to communications department in Indian defence.",
    ],
  },
  {
    title: "Achievements, Creation & Industry Involvement",
    items: [
      "Star Enterprise of the Year 2011.",
      "Achievers and Innovator Award from Education Minister in 2012.",
      "Top 10 Asian Company from Red Herring in 2012.",
      "Ranked among top 50 blockchain thought leaders, listed at number 14 by Thinkers360.",
      "Creator of first Indian mythology-led 3D games, original superhero IP, comics, gaming club and online training initiatives.",
      "Writer of books on animation, game development, Object C, OpenGL and creative technology.",
      "Creator of first Indian gaming club, first Indian game store on resources and early cloud-based classroom for mobile apps, animation and game development.",
      "Pioneer in online training on mobile apps, animation, website design and game development across West Bengal, Rajasthan and Nigeria.",
      "Co-producer of VFX films based in Spain and France.",
      "Creator of Tech-Art concept in India as a CSR activity through which 36 families became entrepreneurs.",
      "Supporting the cause of bootstrapping and running MentorOnRoad in East India.",
      "In 2008, became mentor for TATA Udyog Parbo, a joint initiative with NEN.",
      "Writer of comics such as Archer, Mahavir, Nutron and Haglu.",
      "Creator of first Hindu mythological game Mahabharat.",
      "Advisory board and course content creator of animation colleges in South India.",
      "Best game development institute in 2010.",
      "Member of NEN Entrepreneurship Educator Panel.",
      "Copyright on virtual reality simulation medical segment solution.",
      "Copyright and IP on 3D model-making software that translates 2D drawing into 3D polygon.",
      "First company to make characters using real people to become game characters.",
      "Responsible for 200+ games for iOS, Android, Microsoft and VR platforms with 3D characters motion captured and created by his team.",
      "Created mythology-based science fiction comics series released on Amazon Kindle.",
      "Worked on VFX and co-production of Spanish films and event hosting for entrepreneurs.",
    ],
  },
  {
    title: "Networking Programs & Business Community",
    items: [
      "Hosted several hundred networking lunches to connect entrepreneurs, investors, business owners and ecosystem participants with specific B2B and B2C agendas.",
      "These networking lunches were structured as small, value-driven sessions for like-minded members of his network to meet, exchange value and create real business conversations.",
      "Started brainstorming dinners in 2016 to connect successful entrepreneurs and curate high-value business conversations.",
      "For brainstorming dinners, Arijit and his team selected the right attendees carefully, ensured shared relevance among guests and created seating structures that improved the chances of meaningful business discussion.",
      "Built structured networking environments where attendees are selected around business relevance, commonality and real value exchange.",
      "Created one large community that brought 350+ business houses together and connected national and international entrepreneurs with local community contribution.",
      "Opened one of the first virtual networking spaces in India and built community-led entrepreneurship spaces.",
      "Built global networks including experts from technology, AI, game development, government, VC funds, angel investors, C-level executives, politics, spirituality, sports, universities, real estate, tourism, sales, marketing, media, models, actors, directors and producers.",
    ],
  },
  {
    title: "Brief Intro & Personal Positioning",
    items: [
      "A technologist, founder of technology companies, non-executive director of others and a restless entrepreneur with a passion for creating feedback loops between innovation, teams and revenue streams.",
      "An entrepreneur since 1998 and founder of Virtualinfocom, one of India’s first game development companies.",
      "Founder of India’s first B2B portal on game development and India’s first portal on cosplay.",
      "Active advisor and speaker in cybersecurity and financial management forums for cybercrime and security.",
      "Creator of one of India’s first Virtual Reality training institutes and maker of Virtual Reality labs in the Middle East and India.",
      "Contributor and structure creator for smart city projects in parts of the world.",
      "Creator of a media portal with 275+ celebrities, models and actors from India, UK and Japan.",
      "World-first-style work in converting real celebrities into 3D simulation.",
      "Kolkata’s first movie-based game Boss 2, Bangladesh’s first superhero movie-based game Bizli, Nepal’s first 3D racing game and Bhutan’s first 3D game maker.",
      "Helped raise funds for several companies around the world.",
      "Early adopter and evangelist of blockchain, crypto, digital assets and decentralized business ecosystems.",
      "B2B point of contact for Asia, Europe, USA and Australia across entrepreneurship, technology, investment, market entry and cross-border business collaboration.",
    ],
  },
  {
    title: "Languages",
    items: ["English", "Bengali", "Sanskrit", "Hindi", "French"],
  },
];

export default function LegacyBiographyArchive() {
  return (
    <BioSectionShell
      eyebrow="Legacy Archive"
      title="Detailed Biography & Legacy Work Since 1998"
      text="A preserved long-form archive of Arijit Bhattacharyya’s biography, advisory roles, speaking platforms, ventures, education work, technology projects, investment relations, business communities and industry involvement."
      dark
    >
      <motion.div
        {...fadeUp}
        className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] md:rounded-[36px]"
      >
        <div className="border-b border-white/10 px-5 py-7 sm:px-6 md:px-10 md:py-9">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#7fb8ff]">
            Preserved from Legacy Biography
          </p>

          <h3 className="max-w-[980px] text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[46px]">
            Full credibility, structured for modern reading.
          </h3>

          <p className="mt-5 max-w-[920px] text-[16px] font-normal leading-[1.8] text-white/66 md:text-[18px]">
            This archive keeps important legacy information visible for SEO,
            credibility and completeness without turning the main Bio page into
            an unreadable wall of text.
          </p>
        </div>

        <div className="divide-y divide-white/10">
          {archiveSections.map((section, index) => (
            <motion.details
              key={section.title}
              {...fadeUp}
              open={index === 0}
              className="group bg-[#030712] px-5 py-5 transition duration-300 open:bg-[#07101f] sm:px-6 md:px-10 md:py-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5">
                <h4 className="text-[24px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[28px]">
                  {section.title}
                </h4>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[20px] font-normal text-[#7fb8ff] transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {section.items.map((item) => (
                  <p
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4 text-[15px] font-normal leading-[1.75] text-white/68 md:text-[16px]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </motion.details>
          ))}
        </div>
      </motion.div>
    </BioSectionShell>
  );
}
