export type PressCategory =
  | "Profile"
  | "Television"
  | "Newspaper"
  | "Magazine"
  | "Interview"
  | "Speaker Profile"
  | "International"
  | "Award"
  | "Event"
  | "Legacy Archive";

export type PressRegion =
  | "India"
  | "Global"
  | "China"
  | "Nepal"
  | "Finland"
  | "Thailand"
  | "Bhutan"
  | "Singapore"
  | "UAE"
  | "UK";

export type PressStoryType =
  | "Newspaper"
  | "Magazine"
  | "TV"
  | "Interview"
  | "Event"
  | "Award"
  | "International";

export type PressStory = {
  id: string;
  title: string;
  outlet: string;
  publisher: string;
  category: PressCategory;
  type: PressStoryType;
  region: PressRegion;
  country: PressRegion;
  year?: string;
  eyebrow: string;
  summary: string;
  image: string;
  alt: string;
  url?: string;
  sourceType:
    | "External Profile"
    | "Legacy Website"
    | "Press Asset"
    | "Speaker Profile"
    | "PDF Profile";
  tags: string[];
  featured?: boolean;
};

export type PressStat = {
  value: string;
  label: string;
  icon: "news" | "tv" | "award" | "global";
};

export type AuthorityLogo = {
  name: string;
  type: "Media" | "Television" | "Newspaper" | "Platform" | "Institution";
  image?: string;
};

export type InternationalCoverage = {
  id: string;
  country: PressRegion;
  publisher: string;
  title: string;
  summary: string;
  image: string;
  alt: string;
  tags: string[];
  url?: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  outlet: string;
  summary: string;
  image: string;
  alt: string;
};

export const pressPath = "/assets/pressnews/";
export const latestPath = pressPath;

export const pressSeo = {
  title:
    "Press News | Arijit Bhattacharyya | Media Coverage, Interviews, TV & Global Recognition",
  description:
    "Press, television, interviews, media stories and global recognition featuring Arijit Bhattacharyya across entrepreneurship, AI, VR, blockchain, startup mentoring, gaming and innovation.",
  keywords:
    "Arijit Bhattacharyya press, Arijit Bhattacharyya news, BrilliantRead Arijit Bhattacharyya, TEDx speaker, angel investor, serial entrepreneur, Virtualinfocom, Economic Times, TV9 Bengali, CNBC, Josh Talks, Nepal TV, China Film Festival, startup mentor, AI speaker",
};

export const heroStats: PressStat[] = [
  { value: "100+", label: "Media Mentions & Features", icon: "news" },
  { value: "25+", label: "TV, Video & Interview Appearances", icon: "tv" },
  { value: "20+", label: "Countries Connected Through Coverage", icon: "global" },
  { value: "1998", label: "Founder Journey Since", icon: "award" },
];

export const featuredStories: PressStory[] = [
  {
    id: "brilliantread-interview",
    title:
      "Interview with Arijit Bhattacharyya, Angel Investor, Serial Entrepreneur, Mentor & TEDx Speaker",
    outlet: "BrilliantRead",
    publisher: "BrilliantRead",
    category: "Interview",
    type: "Interview",
    region: "India",
    country: "India",
    year: "2020s",
    eyebrow: "Founder Interview",
    summary:
      "A long-form interview positioning Arijit Bhattacharyya as an angel investor, serial entrepreneur, mentor and TEDx speaker, useful for current credibility beyond legacy press clippings.",
    image: `${pressPath}latest-speaks/Arijit-Bhattacharyya.jpg`,
    alt:
      "Arijit Bhattacharyya featured interview as angel investor serial entrepreneur mentor and TEDx speaker",
    url:
      "https://www.brilliantread.com/interview-with-arijit-bhattacharyya-angel-investor-serial-entrepreneur-mentor-tedx-speaker/",
    sourceType: "External Profile",
    tags: ["Interview", "Angel Investor", "TEDx", "Entrepreneurship"],
    featured: true,
  },
  {
    id: "digitalconfex-speaker-profile",
    title: "Serial Entrepreneur, Angel Investor, Public Speaker and AI Evangelist",
    outlet: "DigitalConfex",
    publisher: "DigitalConfex",
    category: "Speaker Profile",
    type: "Interview",
    region: "Global",
    country: "Global",
    year: "2023",
    eyebrow: "Global Speaker Profile",
    summary:
      "DigitalConfex profiles Arijit as a serial entrepreneur since 1998, angel investor, public speaker, government advisor, game programmer, VR specialist, AI evangelist and blockchain specialist.",
    image: `${pressPath}latest-speaks/Arijit_Bhattacharyya-talk.jpg`,
    alt:
      "Arijit Bhattacharyya DigitalConfex speaker profile for AI entrepreneurship VR blockchain and startup mentoring",
    url: "https://digitalconfex.com/speaker/arijit-bhattacharyya/",
    sourceType: "Speaker Profile",
    tags: ["AI", "VR", "Blockchain", "Speaker"],
    featured: true,
  },
  {
    id: "diplomatic-club-profile",
    title: "Entrepreneur Since 1998, TEDx and International Speaker",
    outlet: "The Diplomatic Club",
    publisher: "The Diplomatic Club",
    category: "Profile",
    type: "International",
    region: "Global",
    country: "Global",
    year: "2024",
    eyebrow: "Business Diplomacy",
    summary:
      "The Diplomatic Club presents Arijit Bhattacharyya as an entrepreneur since 1998, TEDx and international speaker, angel investor, business matchmaking expert and government advisory voice.",
    image: `${pressPath}2021/diplomatic-world.jpg`,
    alt:
      "Arijit Bhattacharyya profile in The Diplomatic Club entrepreneur TEDx international speaker",
    url: "https://www.thediplomaticclub.org/arijit-bhattacharyya/",
    sourceType: "External Profile",
    tags: ["Diplomacy", "International", "TEDx", "Advisory"],
    featured: true,
  },
  {
    id: "official-profile-pdf",
    title: "Official Profile: Technology, Startups, AI, VR and Global Innovation",
    outlet: "Official Profile PDF",
    publisher: "Official Profile PDF",
    category: "Profile",
    type: "Interview",
    region: "Global",
    country: "Global",
    year: "2023",
    eyebrow: "Verified Profile",
    summary:
      "The profile PDF consolidates key credibility points including startup mentoring, global speaking, Startup India Award jury work, Asian Development Bank consulting, blockchain thought leadership and university engagement.",
    image: `${pressPath}2018/Arijit_Bhattacharyya.jpg`,
    alt:
      "Official profile of Arijit Bhattacharyya covering technology startup mentoring AI VR and global innovation",
    url:
      "https://digitalconfex.com/wp-content/uploads/2023/06/Arijit-Bhattacharyya_1998-brief.pdf",
    sourceType: "PDF Profile",
    tags: ["Profile", "Startup India", "ADB", "Global Speaker"],
    featured: true,
  },
];

export const authorityLogos: AuthorityLogo[] = [
  { name: "Economic Times", type: "Newspaper", image: `${pressPath}2018/economic-times.jpg` },
  { name: "Times of India", type: "Newspaper", image: `${pressPath}2024/timesofindia-s.jpg` },
  { name: "The Hindu", type: "Newspaper", image: `${pressPath}2019/the-hindu.png` },
  { name: "Anandabazar Patrika", type: "Newspaper", image: `${pressPath}2020/anandabazar-abp.jpg` },
  { name: "TV9 Bengali", type: "Television", image: `${pressPath}latest-speaks/TV9.jpg` },
  { name: "CNBC", type: "Television", image: `${pressPath}latest-speaks/cnbc.jpg` },
  { name: "DD Bangla", type: "Television", image: `${pressPath}2019/DD-Bangla.jpg` },
  { name: "Josh Talks", type: "Platform", image: `${pressPath}2018/Josh-Talk_Bengali.jpg` },
  { name: "Nepal TV", type: "Television", image: `${pressPath}latest-speaks/nepal.jpg` },
  { name: "Kantipur Media", type: "Media", image: `${pressPath}2018/kantipur_media.jpg` },
  { name: "DigitalConfex", type: "Platform" },
  { name: "BrilliantRead", type: "Media" },
];

export const mediaLogos = authorityLogos;

export const mediaAuthorityGrid: PressStory[] = [
  {
    id: "economic-times-press",
    title: "Press News About Arijit in Economic Times",
    outlet: "Economic Times",
    publisher: "Economic Times",
    category: "Newspaper",
    type: "Newspaper",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "National Business Media",
    summary:
      "Legacy press coverage connecting Arijit Bhattacharyya’s work with entrepreneurship, innovation, startup building and technology leadership.",
    image: `${pressPath}2018/economic-times.jpg`,
    alt: "Economic Times press coverage about Arijit Bhattacharyya",
    sourceType: "Legacy Website",
    tags: ["Economic Times", "Business", "Startup"],
  },
  {
    id: "times-of-india-2024",
    title: "Times of India Coverage",
    outlet: "Times of India",
    publisher: "Times of India",
    category: "Newspaper",
    type: "Newspaper",
    region: "India",
    country: "India",
    year: "2024",
    eyebrow: "National Newspaper",
    summary:
      "Times of India coverage included in the legacy press archive, supporting Arijit’s public positioning across innovation and entrepreneurship.",
    image: `${pressPath}2024/timesofindia-s.jpg`,
    alt: "Times of India press coverage of Arijit Bhattacharyya",
    sourceType: "Legacy Website",
    tags: ["Times of India", "Press", "Innovation"],
  },
  {
    id: "anandabazar-2024",
    title: "Anandabazar Coverage",
    outlet: "Anandabazar Patrika",
    publisher: "Anandabazar Patrika",
    category: "Newspaper",
    type: "Newspaper",
    region: "India",
    country: "India",
    year: "2024",
    eyebrow: "Bengali Press",
    summary:
      "Bengali press coverage from Anandabazar strengthens regional credibility around Arijit’s work in technology, gaming, startups and public speaking.",
    image: `${pressPath}2020/anandabazar-abp.jpg`,
    alt: "Anandabazar press coverage of Arijit Bhattacharyya",
    sourceType: "Legacy Website",
    tags: ["Anandabazar", "Bengal", "Press"],
  },
  {
    id: "the-hindu-coverage",
    title: "The Hindu Coverage",
    outlet: "The Hindu",
    publisher: "The Hindu",
    category: "Newspaper",
    type: "Newspaper",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "National Publication",
    summary:
      "The Hindu coverage forms part of the old press archive and adds national publication credibility to the press page.",
    image: `${pressPath}2019/the-hindu.png`,
    alt: "The Hindu article coverage connected to Arijit Bhattacharyya",
    sourceType: "Legacy Website",
    tags: ["The Hindu", "Publication", "Technology"],
  },
  {
    id: "aajkal-coverage",
    title: "Aajkal Coverage",
    outlet: "Aajkal",
    publisher: "Aajkal",
    category: "Newspaper",
    type: "Newspaper",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Regional Press",
    summary:
      "Regional newspaper coverage from Aajkal documenting Arijit’s work in innovation, entrepreneurship and media technology.",
    image: `${pressPath}2020/aajkal.jpg`,
    alt: "Aajkal newspaper coverage of Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["Aajkal", "Bengali Press", "Legacy"],
  },
  {
    id: "diplomatic-world",
    title: "Diplomatic World Feature",
    outlet: "Diplomatic World",
    publisher: "Diplomatic World",
    category: "Magazine",
    type: "Magazine",
    region: "Global",
    country: "Global",
    year: "Legacy",
    eyebrow: "Magazine Feature",
    summary:
      "Diplomatic World coverage connects Arijit’s work with international networks, public diplomacy, business collaboration and innovation.",
    image: `${pressPath}2021/diplomatic-world-one.jpg`,
    alt: "Diplomatic World magazine feature about Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["Diplomatic World", "Global", "Magazine"],
  },
];

export const mediaAuthority = mediaAuthorityGrid;

export const tvAndVideoCoverage: PressStory[] = [
  {
    id: "tv9-game-development-vr",
    title: "TV9 Bengali Game Development and VR Coverage",
    outlet: "TV9 Bengali",
    publisher: "TV9 Bengali",
    category: "Television",
    type: "TV",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Television Feature",
    summary:
      "TV9 Bengali coverage on game development, VR and Arijit’s role in building technology-led entertainment from Bengal.",
    image: `${pressPath}latest-speaks/TV9.jpg`,
    alt: "TV9 Bengali coverage on Arijit Bhattacharyya game development and VR",
    sourceType: "Legacy Website",
    tags: ["TV9", "VR", "Game Development"],
  },
  {
    id: "cnbc-talk",
    title: "Talk in CNBC",
    outlet: "CNBC",
    publisher: "CNBC",
    category: "Television",
    type: "TV",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Business Television",
    summary:
      "CNBC appearance from the legacy archive, adding business media validation around entrepreneurship, markets and technology.",
    image: `${pressPath}latest-speaks/cnbc.jpg`,
    alt: "CNBC television talk featuring Arijit Bhattacharyya",
    sourceType: "Legacy Website",
    tags: ["CNBC", "Business Media", "TV"],
  },
  {
    id: "dd-bangla-vr-growth",
    title: "Speaking on Growth of VR in Television",
    outlet: "DD Bangla",
    publisher: "DD Bangla",
    category: "Television",
    type: "TV",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Public Television",
    summary:
      "Television coverage discussing the growth of virtual reality and Arijit’s contribution to immersive technology education and development.",
    image: `${pressPath}2019/DD-Bangla.jpg`,
    alt: "DD Bangla television coverage on VR growth featuring Arijit Bhattacharyya",
    sourceType: "Legacy Website",
    tags: ["DD Bangla", "VR", "Television"],
  },
  {
    id: "josh-talk-bengali",
    title: "Josh Talk Bengali",
    outlet: "Josh Talks",
    publisher: "Josh Talks",
    category: "Interview",
    type: "Interview",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Founder Storytelling",
    summary:
      "Josh Talks appearance presenting Arijit’s entrepreneurial journey, technology work and founder lessons to a broader Bengali-speaking audience.",
    image: `${pressPath}2018/Josh-Talk_Bengali.jpg`,
    alt: "Josh Talk Bengali featuring Arijit Bhattacharyya",
    sourceType: "Legacy Website",
    tags: ["Josh Talks", "Storytelling", "Bengali"],
  },
  {
    id: "tedx-talk",
    title: "TEDx Talk",
    outlet: "TEDx",
    publisher: "TEDx",
    category: "Interview",
    type: "Interview",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "TEDx Speaker",
    summary:
      "TEDx speaker credibility connected to Arijit’s public work in technology, entrepreneurship, innovation and storytelling.",
    image: `${pressPath}2019/tedx.jpg`,
    alt: "Arijit Bhattacharyya TEDx speaker coverage",
    sourceType: "Press Asset",
    tags: ["TEDx", "Speaker", "Ideas"],
  },
  {
    id: "nepal-tv",
    title: "Nepal TV / Good Morning Nepal",
    outlet: "Nepal TV",
    publisher: "Nepal TV",
    category: "Television",
    type: "TV",
    region: "Nepal",
    country: "Nepal",
    year: "Legacy",
    eyebrow: "International Television",
    summary:
      "Nepal TV and Good Morning Nepal coverage documenting cross-border startup mentoring, entrepreneurship and regional innovation conversations.",
    image: `${pressPath}latest-speaks/nepal.jpg`,
    alt: "Nepal TV and Good Morning Nepal coverage featuring Arijit Bhattacharyya",
    sourceType: "Legacy Website",
    tags: ["Nepal TV", "International", "Startup"],
  },
];

export const internationalCoverage: InternationalCoverage[] = [
  {
    id: "china-film-festival",
    country: "China",
    publisher: "China Film Festival",
    title: "China Film Festival and Xian Film Festival",
    summary:
      "Coverage and event presence connected to China film festival participation, Xian speaking engagement, entertainment technology and cross-border creative industries.",
    image: `${pressPath}2020/China-blockchain.jpg`,
    alt: "Arijit Bhattacharyya China film festival and Xian coverage",
    tags: ["China", "Film Festival", "Entertainment Technology"],
  },
  {
    id: "nepal-startup-coverage",
    country: "Nepal",
    publisher: "Kantipur Media",
    title: "Nepal Startup and Media Coverage",
    summary:
      "Coverage across Nepal startup events, Kantipur Media, Nepal news and television appearances highlighting regional entrepreneurship work.",
    image: `${pressPath}2018/kantipur_media.jpg`,
    alt: "Kantipur Media and Nepal startup coverage of Arijit Bhattacharyya",
    tags: ["Nepal", "Kantipur", "Startup"],
  },
  {
    id: "finland-india-coverage",
    country: "Finland",
    publisher: "Invest Finland",
    title: "Invest Finland and India",
    summary:
      "Legacy archive coverage connecting international investment, India-Finland collaboration and business ecosystem building.",
    image: `${pressPath}2018/Finland_India.jpg`,
    alt: "Invest Finland and India coverage featuring Arijit Bhattacharyya",
    tags: ["Finland", "India", "Investment"],
  },
  {
    id: "bhutan-coverage",
    country: "Bhutan",
    publisher: "Regional Entrepreneurship",
    title: "Bhutan and Regional Entrepreneurship",
    summary:
      "Regional business and innovation links connected to Bhutan and cross-border startup ecosystem conversations.",
    image: `${pressPath}latest-speaks/bhutan.png`,
    alt: "Bhutan entrepreneurship and regional innovation coverage",
    tags: ["Bhutan", "Regional", "Entrepreneurship"],
  },
  {
    id: "thailand-techsauce",
    country: "Thailand",
    publisher: "Techsauce",
    title: "Techsauce / Startup Thailand",
    summary:
      "International startup ecosystem connection through Techsauce and Thailand-linked entrepreneurship platforms.",
    image: `${pressPath}2018/tech-sauce.jpg`,
    alt: "Techsauce and Thailand startup ecosystem coverage",
    tags: ["Thailand", "Techsauce", "Startup"],
  },
  {
    id: "singapore-ecosystem",
    country: "Singapore",
    publisher: "Asian Business Networks",
    title: "Singapore Business and Technology Ecosystem",
    summary:
      "International technology and startup ecosystem engagement connected to Asian business networks and innovation platforms.",
    image: `${pressPath}latest-speaks/Arijit_Bhattacharyya-UK.jpg`,
    alt: "International business and technology ecosystem coverage of Arijit Bhattacharyya",
    tags: ["Singapore", "Business", "Technology"],
  },
];

export const legacyPressArchive: PressStory[] = [
  {
    id: "icc-startuppad",
    title: "ICC Startuppad",
    outlet: "ICC",
    publisher: "ICC",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "2018",
    eyebrow: "Startup Platform",
    summary:
      "ICC Startuppad coverage from the legacy archive, connecting Arijit with startup mentoring, pitching and business ecosystem development.",
    image: `${pressPath}2018/ICC_Startupad_American_Center.jpg`,
    alt: "ICC Startuppad American Center coverage with Arijit Bhattacharyya",
    sourceType: "Legacy Website",
    tags: ["ICC", "Startup", "Mentoring"],
  },
  {
    id: "nen",
    title: "NEN",
    outlet: "National Entrepreneurship Network",
    publisher: "National Entrepreneurship Network",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Entrepreneurship Network",
    summary:
      "NEN archive item connected to entrepreneurship mentoring, student founders and startup ecosystem development.",
    image: `${pressPath}NEN_kolkata.jpg`,
    alt: "NEN entrepreneurship coverage featuring Arijit Bhattacharyya",
    sourceType: "Legacy Website",
    tags: ["NEN", "Entrepreneurship", "Mentoring"],
  },
  {
    id: "tiecon-punjab",
    title: "TiECon Punjab",
    outlet: "TiE",
    publisher: "TiE",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Founder Ecosystem",
    summary:
      "TiECon Punjab coverage from the archive, documenting founder ecosystem engagement and startup conversations.",
    image: `${pressPath}2018/tiecon_punjab.jpg`,
    alt: "TiECon Punjab coverage featuring Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["TiE", "Punjab", "Startup"],
  },
  {
    id: "iamai",
    title: "IAMAI",
    outlet: "IAMAI",
    publisher: "IAMAI",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Digital Industry",
    summary:
      "IAMAI archive item connected to digital business, internet economy and technology ecosystem work.",
    image: `${pressPath}2018/IAMAI.jpg`,
    alt: "IAMAI event coverage with Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["IAMAI", "Digital", "Industry"],
  },
  {
    id: "ieee-money-on-table",
    title: "IEEE Money on Table",
    outlet: "IEEE",
    publisher: "IEEE",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Technology & Investment",
    summary:
      "IEEE archive coverage linking technology, investment conversations and entrepreneurship education.",
    image: `${pressPath}2018/IEEE-money-on-table.jpg`,
    alt: "IEEE Money on Table event coverage with Arijit Bhattacharyya",
    sourceType: "Legacy Website",
    tags: ["IEEE", "Investment", "Technology"],
  },
  {
    id: "gato-vr-ar-gaming",
    title: "GATO 1.0 — VR, AR and Gaming",
    outlet: "GATO",
    publisher: "GATO",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Gaming & Immersive Tech",
    summary:
      "GATO archive item connected to VR, AR, gaming and emerging entertainment technology.",
    image: `${pressPath}2019/GATO-vr-ar-gaming.png`,
    alt: "GATO VR AR gaming coverage featuring Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["VR", "AR", "Gaming"],
  },
  {
    id: "axis-bank-speaking",
    title: "Axis Bank Speaking Engagement",
    outlet: "Axis Bank",
    publisher: "Axis Bank",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Corporate Speaking",
    summary:
      "Corporate speaking engagement connected to business, finance, entrepreneurship and innovation discussions.",
    image: `${pressPath}2020/axis-bank-spk.jpg`,
    alt: "Axis Bank speaking engagement with Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["Corporate", "Finance", "Speaking"],
  },
  {
    id: "calcutta-chamber-commerce",
    title: "Calcutta Chamber of Commerce",
    outlet: "Calcutta Chamber of Commerce",
    publisher: "Calcutta Chamber of Commerce",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Business Chamber",
    summary:
      "Business chamber engagement connected to entrepreneurship, industry development and Bengal’s business ecosystem.",
    image: `${pressPath}2020/calcutta-chamber-of-commerce.jpg`,
    alt: "Calcutta Chamber of Commerce coverage with Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["Chamber", "Business", "Bengal"],
  },
  {
    id: "iim-bodhgaya",
    title: "IIM Bodh Gaya",
    outlet: "IIM Bodh Gaya",
    publisher: "IIM Bodh Gaya",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Institutional Talk",
    summary:
      "Institutional engagement connected to management education, entrepreneurship and innovation.",
    image: `${pressPath}2020/IIM_Bodhgaya.jpg`,
    alt: "IIM Bodh Gaya event coverage with Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["IIM", "Education", "Entrepreneurship"],
  },
  {
    id: "nit-silchar",
    title: "NIT Silchar Startup Session",
    outlet: "NIT Silchar",
    publisher: "NIT Silchar",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "University Entrepreneurship",
    summary:
      "University startup session connected to mentoring young founders and future technology learners.",
    image: `${pressPath}2019/NIT-Silchar-startup.jpg`,
    alt: "NIT Silchar startup event with Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["NIT", "Startup", "Students"],
  },
  {
    id: "short-film-festival-kolkata",
    title: "Short Film Festival Kolkata",
    outlet: "Kolkata Short Film Festival",
    publisher: "Kolkata Short Film Festival",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Creative Industry",
    summary:
      "Creative and film ecosystem coverage connected to storytelling, media, animation and entertainment technology.",
    image: `${pressPath}2019/short-film-festival-kolkata.jpg`,
    alt: "Short Film Festival Kolkata coverage with Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["Film", "Creative", "Kolkata"],
  },
  {
    id: "mrs-india",
    title: "Mrs India",
    outlet: "Mrs India",
    publisher: "Mrs India",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Creative & Cultural Platform",
    summary:
      "Legacy event item connected to media, culture and public-facing creative platforms.",
    image: `${pressPath}2018/Mrs_India.jpg`,
    alt: "Mrs India event coverage with Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["Culture", "Event", "Media"],
  },
];

export const recognitionTimeline: TimelineItem[] = [
  {
    year: "1998",
    title: "Founder Journey Begins",
    outlet: "Virtualinfocom",
    summary:
      "The founder journey began with technology, game development, animation, training and digital IP creation.",
    image: `${pressPath}latest-speaks/Arijit-Bhattacharya.jpg`,
    alt: "Arijit Bhattacharyya founder journey since 1998",
  },
  {
    year: "2008+",
    title: "Public Speaking and Founder Mentoring",
    outlet: "National & International Forums",
    summary:
      "Speaking work expanded across entrepreneurship, technology, VR, gaming, fundraising, IP and startup ecosystem conversations.",
    image: `${pressPath}2020/public-speaking.jpg`,
    alt: "Arijit Bhattacharyya public speaking and founder mentoring",
  },
  {
    year: "2018",
    title: "Startup, ICC, IEEE and International Ecosystem Coverage",
    outlet: "ICC / IEEE / Media Archive",
    summary:
      "Legacy archive shows coverage across startup platforms, technology forums, investment sessions and international business networks.",
    image: `${pressPath}2018/IEEE-Ah-ventures.jpg`,
    alt: "IEEE startup and investment coverage with Arijit Bhattacharyya",
  },
  {
    year: "2024",
    title: "Regional and National Press Features",
    outlet: "Anandabazar / Times of India / TV9",
    summary:
      "Recent press archive includes regional and national coverage across Bengali press, Times of India and TV9.",
    image: `${pressPath}2024/timesofindia-s.jpg`,
    alt: "Recent national and regional press features of Arijit Bhattacharyya",
  },
];

export const pressCta = {
  eyebrow: "Media & Speaking Enquiries",
  title: "Looking for an AI speaker, founder interview, startup mentor or technology expert?",
  text:
    "Invite Arijit Bhattacharyya for interviews, keynote sessions, panel discussions, business forums, podcasts, documentary features or media conversations on AI, entrepreneurship, VR, blockchain, gaming, startup capital and global innovation.",
  primaryLabel: "Contact Arijit",
  primaryHref: "/contact",
  secondaryLabel: "Explore Speaking",
  secondaryHref: "/speaking",
};


