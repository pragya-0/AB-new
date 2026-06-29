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
  | "UK"
  | "Japan"
  | "Taiwan"
  | "South Korea";

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

export const pressNewsRoot = "/assets/pressnews/";
export const pressPath = `${pressNewsRoot}01_images_preserved_structure/`;
export const latestPath = `${pressPath}latest-speaks/`;

/*
  Put the CNBC screenshot here for this exact path:
  public/assets/pressnews/cnbc-awaaz-udaan-business-finance-panel-arijit-bhattacharyya.jpg

  If your file is .jpeg instead of .jpg, change only this one constant.
*/
export const cnbcAwaazImage = `${pressNewsRoot}cnbc-awaaz-udaan-business-finance-panel-arijit-bhattacharyya.jpg`;

export const pressSeo = {
  title:
    "Press News | Arijit Bhattacharyya | Media Coverage, TV Interviews, AI, VR, AR, Startup & Global Recognition",
  description:
    "Press news, newspaper clippings, television interviews, media stories and verified archive coverage featuring Arijit Bhattacharyya across entrepreneurship, AI, VR, AR, blockchain, startup mentoring, gaming, innovation, finance, media, entertainment technology, Kolkata, India and international business platforms.",
  keywords:
    "Arijit Bhattacharyya press, Arijit Bhattacharyya news, Arijit Bhattacharya, Arijit Bhattacharjee, entrepreneur from Kolkata, Kolkata entrepreneur, Indian entrepreneur, angel investor, serial entrepreneur, innovator, AI speaker, VR speaker, AR speaker, blockchain speaker, startup mentor, technology speaker, Virtualinfocom, CNBC Awaaz, Dainik Bhaskar, Hindustan Times, AIMA, IIT ISM, Arka Jain University, East India Startup Showcase, ICC Startup Pad, Indian Chamber of Commerce, ASSOCHAM, Bengal Chamber of Commerce, FICCI Frames, GATO, Axis Bank Evolve, IIM Bodh Gaya, IIM Calcutta VR, Japan gaming industry, Square Enix, China Blockchain RAW 2018, media coverage, press coverage, global recognition",
};

export const heroStats: PressStat[] = [
  { value: "100+", label: "Media Mentions & Features", icon: "news" },
  { value: "25+", label: "TV, Video & Interview Appearances", icon: "tv" },
  { value: "20+", label: "Countries Connected Through Coverage", icon: "global" },
  { value: "1998", label: "Founder Journey Since", icon: "award" },
];

export const featuredStories: PressStory[] = [
  {
    id: "cnbc-awaaz-udaan-business-finance-panel",
    title: "CNBC Awaaz Udaan — Business & Finance Panel",
    outlet: "CNBC Awaaz",
    publisher: "CNBC Awaaz",
    category: "Television",
    type: "TV",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Business Television",
    summary:
      "A verified television panel screenshot from CNBC Awaaz Udaan showing Arijit Bhattacharyya as Founder-Director, Virtualinfocom, in a business and finance discussion.",
    image: cnbcAwaazImage,
    alt:
      "CNBC Awaaz Udaan television panel featuring Arijit Bhattacharyya Founder Director of Virtualinfocom",
    sourceType: "Press Asset",
    tags: ["CNBC Awaaz", "TV", "Business", "Finance"],
    featured: true,
  },
  {
    id: "east-india-startup-showcase-2026",
    title: "East India Startup Showcase Day — Investors Eye Rs 4.6 Cr",
    outlet: "Mail News Service",
    publisher: "Mail News Service",
    category: "Newspaper",
    type: "Newspaper",
    region: "India",
    country: "India",
    year: "2026",
    eyebrow: "Startup Press",
    summary:
      "Press coverage from Jamshedpur on the East India Startup Showcase Day, where investors showed interest in promising startups and the regional startup ecosystem.",
    image: `${pressPath}1772780640236 (1).jfif.jpeg`,
    alt:
      "English newspaper clipping about East India Startup Showcase Day and investors eyeing Rs 4.6 crore in startups with Arijit Bhattacharyya mentioned",
    sourceType: "Press Asset",
    tags: ["Startup", "Jamshedpur", "Investment", "2026"],
    featured: true,
  },
  {
    id: "iit-ism-ciie-coinnovate-mou",
    title: "IIT ISM CIIE Foundation MoU with Coinnovate Ventures",
    outlet: "Hindi Press Archive",
    publisher: "Hindi Press Archive",
    category: "Newspaper",
    type: "Newspaper",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Institutional Collaboration",
    summary:
      "Hindi press coverage about an IIT ISM CIIE Foundation collaboration connected to innovation, incubation, entrepreneurship and Coinnovate Ventures.",
    image: `${pressPath}IIT ISM MOU.jpeg`,
    alt:
      "Hindi newspaper clipping about IIT ISM CIIE Foundation MoU with Coinnovate Ventures and Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["IIT ISM", "MoU", "Coinnovate Ventures", "Startup"],
    featured: true,
  },
  {
    id: "japan-yasuhiro-fukushima-square-enix",
    title: "With Yasuhiro Fukushima, Founder of Square Enix",
    outlet: "Japan Gaming Industry Archive",
    publisher: "Japan Gaming Industry Archive",
    category: "International",
    type: "International",
    region: "Japan",
    country: "Japan",
    year: "Legacy",
    eyebrow: "Japan Gaming Industry",
    summary:
      "International gaming-industry archive image with Yasuhiro Fukushima, founder of Square Enix, connected to Arijit Bhattacharyya's global gaming and entertainment technology network.",
    image: `${pressPath}japan.jpg`,
    alt:
      "Arijit Bhattacharyya with Yasuhiro Fukushima founder of Square Enix Japan gaming industry connection",
    sourceType: "Press Asset",
    tags: ["Japan", "Square Enix", "Gaming", "International"],
    featured: true,
  },
];

export const authorityLogos: AuthorityLogo[] = [
  { name: "CNBC Awaaz", type: "Television", image: cnbcAwaazImage },
  { name: "Dainik Bhaskar", type: "Newspaper", image: `${pressPath}1772780640480.jfif.jpeg` },
  { name: "AIMA", type: "Institution", image: `${pressPath}1.jpg` },
  { name: "IIT ISM", type: "Institution", image: `${pressPath}IIT ISM MOU.jpeg` },
  { name: "Hindustan Times", type: "Newspaper", image: `${pressPath}hindustan-times-startup.jpg` },
  { name: "The Telegraph", type: "Newspaper", image: `${pressPath}agartala.jpg` },
  { name: "ICC Startup Pad", type: "Institution", image: `${pressPath}arijit_bhattacharyya_ICC.jpg` },
  { name: "FICCI FRAMES", type: "Institution", image: `${pressPath}2019/ficci.jpg` },
  { name: "GATO", type: "Institution", image: `${pressPath}IAMAI_Delhi_gamedev.png` },
  { name: "Axis Bank Evolve", type: "Institution", image: `${pressPath}2020/axis-bank-spk.jpg` },
  { name: "ASSOCHAM", type: "Institution", image: `${pressPath}assocham.jpg` },
  { name: "Bengal Chamber", type: "Institution", image: `${pressPath}bcc&i.jpg` },
];

export const mediaLogos = authorityLogos;

export const mediaAuthorityGrid: PressStory[] = [
  {
    id: "aima-news-lmas-2026",
    title: "AIMA News from LMAs — Chandigarh Management Association Programme",
    outlet: "AIMA",
    publisher: "All India Management Association",
    category: "Magazine",
    type: "Magazine",
    region: "India",
    country: "India",
    year: "2026",
    eyebrow: "Current Press",
    summary:
      "AIMA News from LMAs April 2026 mentions Dr. Arijit Bhattacharyya in connection with Chandigarh Management Association programming and management ecosystem activity.",
    image: `${pressPath}1.jpg`,
    alt:
      "AIMA News from LMAs April 2026 clipping mentioning Dr Arijit Bhattacharyya and Chandigarh Management Association programme",
    sourceType: "Press Asset",
    tags: ["AIMA", "CMA", "Management", "2026"],
  },
  {
    id: "east-india-startup-showcase-english",
    title: "East India Startup Showcase Day — Investors Eye Rs 4.6 Cr",
    outlet: "Mail News Service",
    publisher: "Mail News Service",
    category: "Newspaper",
    type: "Newspaper",
    region: "India",
    country: "India",
    year: "2026",
    eyebrow: "Startup Newspaper",
    summary:
      "English newspaper coverage of the East India Startup Showcase Day, highlighting investor interest and startups from the eastern region.",
    image: `${pressPath}1772780640236 (1).jfif.jpeg`,
    alt:
      "English newspaper clipping about East India Startup Showcase Day and investors eyeing Rs 4.6 crore in promising startups",
    sourceType: "Press Asset",
    tags: ["Startup", "Investment", "Jamshedpur", "2026"],
  },
  {
    id: "dainik-bhaskar-east-india-startup-2026",
    title: "Dainik Bhaskar: East India Startup Exhibition Day 2026",
    outlet: "Dainik Bhaskar",
    publisher: "Dainik Bhaskar",
    category: "Newspaper",
    type: "Newspaper",
    region: "India",
    country: "India",
    year: "2026",
    eyebrow: "Hindi Newspaper",
    summary:
      "Dainik Bhaskar coverage from 03-03-2026 reporting investor interest of approximately Rs 4.6 crore in 11 startups at an East India startup exhibition.",
    image: `${pressPath}1772780640480.jfif.jpeg`,
    alt:
      "Dainik Bhaskar Hindi newspaper clipping about East India Startup Exhibition Day 2026 and investment interest in startups",
    sourceType: "Press Asset",
    tags: ["Dainik Bhaskar", "Startup", "Investment", "Jharkhand"],
  },
  {
    id: "campus-prabhat-arka-jain-startup",
    title: "Campus Prabhat: Arka Jain Startup Exhibition Attracts Rs 4.6 Cr Interest",
    outlet: "Campus Prabhat",
    publisher: "Campus Prabhat",
    category: "Newspaper",
    type: "Newspaper",
    region: "India",
    country: "India",
    year: "2026",
    eyebrow: "Regional Press",
    summary:
      "Campus Prabhat coverage of an Arka Jain University startup exhibition where investors showed interest after startup presentations.",
    image: `${pressPath}1772780644383.jfif.jpeg`,
    alt:
      "Campus Prabhat Hindi newspaper clipping about Arka Jain University startup exhibition and Rs 4.6 crore investment interest",
    sourceType: "Press Asset",
    tags: ["Campus Prabhat", "Arka Jain", "Startup", "Investment"],
  },
  {
    id: "iit-ism-mou-media",
    title: "IIT ISM CIIE Foundation MoU with Coinnovate Ventures",
    outlet: "Hindi Press Archive",
    publisher: "Hindi Press Archive",
    category: "Newspaper",
    type: "Newspaper",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Institutional Press",
    summary:
      "Press clipping documenting innovation and startup-culture collaboration connected to IIT ISM CIIE Foundation and Coinnovate Ventures.",
    image: `${pressPath}IIT ISM MOU.jpeg`,
    alt:
      "Hindi newspaper clipping showing IIT ISM CIIE Foundation MoU with Coinnovate Ventures and Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["IIT ISM", "CIIE", "MoU", "Startup"],
  },
  {
    id: "hindustan-times-bihar-startup-pad-2016",
    title: "Hindustan Times: Bihar Start Up Pad 2016",
    outlet: "Hindustan Times",
    publisher: "Hindustan Times",
    category: "Newspaper",
    type: "Newspaper",
    region: "India",
    country: "India",
    year: "2016",
    eyebrow: "Startup Press",
    summary:
      "Hindustan Times coverage about Bihar's startup initiative and Start Up Pad 2016, documenting regional founder and investment ecosystem activity.",
    image: `${pressPath}hindustan-times-startup.jpg`,
    alt:
      "Hindustan Times newspaper clipping Bihar move to promote business ideas and assist entrepreneurs at Start Up Pad 2016",
    sourceType: "Press Asset",
    tags: ["Hindustan Times", "Bihar", "Startup Pad", "2016"],
  },
  {
    id: "the-telegraph-enabling-northeast-agartala",
    title: "The Telegraph — Enabling the Northeast, Agartala 2011",
    outlet: "The Telegraph",
    publisher: "The Telegraph",
    category: "Newspaper",
    type: "Newspaper",
    region: "India",
    country: "India",
    year: "2011",
    eyebrow: "Regional Business Media",
    summary:
      "Legacy coverage from The Telegraph's Enabling the Northeast event in Agartala, Tripura, preserving early regional business and technology ecosystem proof.",
    image: `${pressPath}agartala.jpg`,
    alt:
      "The Telegraph Enabling the Northeast Agartala 2011 event table with Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["The Telegraph", "Agartala", "Northeast", "2011"],
  },
  {
    id: "magazine-feature-global-speaking",
    title: "Magazine Feature with Global Speaking Highlights",
    outlet: "Magazine Feature",
    publisher: "Magazine Feature",
    category: "Magazine",
    type: "Magazine",
    region: "Global",
    country: "Global",
    year: "2021",
    eyebrow: "Magazine Interview",
    summary:
      "A magazine spread featuring Arijit Bhattacharyya's global speaking, business activity and international network-building narrative.",
    image: `${pressPath}2021/magazine-news-1.jpg`,
    alt:
      "Magazine interview spread featuring Arijit Bhattacharyya global speaking and business activity",
    sourceType: "Press Asset",
    tags: ["Magazine", "Interview", "Global", "Speaking"],
  },
];

export const additionalMediaAuthority: PressStory[] = [];

export const mediaAuthority: PressStory[] = [
  ...mediaAuthorityGrid,
  ...additionalMediaAuthority,
];

export const tvAndVideoCoverage: PressStory[] = [
  {
    id: "cnbc-awaaz-udaan-business-finance",
    title: "CNBC Awaaz Udaan — Business & Finance Panel",
    outlet: "CNBC Awaaz",
    publisher: "CNBC Awaaz",
    category: "Television",
    type: "TV",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Business Television",
    summary:
      "A CNBC Awaaz Udaan television panel screenshot showing Arijit Bhattacharyya as Founder-Director of Virtualinfocom in a business and finance discussion.",
    image: cnbcAwaazImage,
    alt:
      "CNBC Awaaz Udaan business and finance panel screenshot featuring Arijit Bhattacharyya Founder Director Virtualinfocom",
    sourceType: "Press Asset",
    tags: ["CNBC Awaaz", "TV", "Business", "Finance"],
  },
  {
    id: "jharkhand-media-interview-dd-india",
    title: "Jharkhand Media Interview / DD India Coverage",
    outlet: "Regional Media / DD India",
    publisher: "Regional Media / DD India",
    category: "Television",
    type: "TV",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Regional Television",
    summary:
      "Outdoor media interview connected to Jharkhand coverage, with DD India and regional media microphones visible.",
    image: `${pressPath}jharkhand news.jpeg`,
    alt:
      "Arijit Bhattacharyya giving Jharkhand media interview with DD India microphone visible",
    sourceType: "Press Asset",
    tags: ["Jharkhand", "DD India", "Media Interview"],
  },
  {
    id: "dd-bangla-vr-archive",
    title: "DD Bangla Television Appearance",
    outlet: "DD Bangla",
    publisher: "DD Bangla",
    category: "Television",
    type: "TV",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Public Television",
    summary:
      "DD Bangla archive item connected to Arijit Bhattacharyya's public communication around technology, VR and innovation. Keep title safe until exact episode title is confirmed.",
    image: `${pressPath}2019/DD-Bangla.jpg`,
    alt:
      "DD Bangla television archive image featuring Arijit Bhattacharyya in a technology or VR discussion",
    sourceType: "Press Asset",
    tags: ["DD Bangla", "Television", "VR"],
  },
];

export const additionalTvCoverage: PressStory[] = [];

export const completeTvAndVideoCoverage: PressStory[] = [
  ...tvAndVideoCoverage,
  ...additionalTvCoverage,
];

export const internationalCoverage: InternationalCoverage[] = [
  {
    id: "japan-square-enix-yasuhiro-fukushima",
    country: "Japan",
    publisher: "Japan Gaming Industry Archive",
    title: "With Yasuhiro Fukushima, Founder of Square Enix",
    summary:
      "Japan gaming-industry archive image with Yasuhiro Fukushima, founder of Square Enix, connected to Arijit Bhattacharyya's international gaming and entertainment technology network.",
    image: `${pressPath}japan.jpg`,
    alt:
      "Arijit Bhattacharyya with Yasuhiro Fukushima founder of Square Enix Japan gaming industry archive",
    tags: ["Japan", "Square Enix", "Gaming"],
  },
  {
    id: "china-blockchain-raw-2018",
    country: "China",
    publisher: "China Blockchain / RAW 2018",
    title: "China Blockchain / RAW 2018 Media Interview",
    summary:
      "China media and blockchain-related archive item. This must not be labelled as China Film Festival unless separately confirmed.",
    image: `${pressPath}2020/China-blockchain.jpg`,
    alt:
      "China media interview archive for blockchain or RAW 2018 coverage featuring Arijit Bhattacharyya",
    tags: ["China", "Blockchain", "RAW 2018"],
  },
  {
    id: "china-film-festival-xian-pending",
    country: "China",
    publisher: "China Film Festival / Xian Film Festival",
    title: "China Film Festival / Xian Film Festival — Pending Confirmation",
    summary:
      "International China creative-media archive asset. Use this title only as a pending label until Sir confirms the exact China Film Festival or Xian Film Festival context.",
    image: `${pressPath}china-films.jpg`,
    alt:
      "Pending confirmation China Film Festival or Xian Film Festival archive image featuring Arijit Bhattacharyya",
    tags: ["China", "Film Festival", "Verify"],
  },
  {
    id: "china-film-festival-speaking-pending",
    country: "China",
    publisher: "China Film Festival",
    title: "China Film Festival Speaking Session — Pending Confirmation",
    summary:
      "China event speaking image from the archive. Keep as pending confirmation before using a final film-festival caption.",
    image: `${pressPath}China_film_fest.jpg`,
    alt:
      "Pending confirmation China Film Festival speaking session image featuring Arijit Bhattacharyya",
    tags: ["China", "Speaking", "Verify"],
  },
  {
    id: "china-creative-media-pending",
    country: "China",
    publisher: "China Creative Media Archive",
    title: "China International Creative Media Event — Pending Confirmation",
    summary:
      "China creative-media archive image. Keep title safe until exact event name is confirmed.",
    image: `${pressPath}arijit_bhattacharyya-films.jpg`,
    alt:
      "Pending confirmation China international creative media event featuring Arijit Bhattacharyya",
    tags: ["China", "Creative Media", "Verify"],
  },
  {
    id: "finland-business-innovation-pending",
    country: "Finland",
    publisher: "Finland Business Archive",
    title: "Finland Business / Innovation Session — Pending Confirmation",
    summary:
      "Finland-linked archive image. Use only after final confirmation of the event, country context and title.",
    image: `${latestPath}finland.jpg`,
    alt:
      "Pending confirmation Finland business or innovation session featuring Arijit Bhattacharyya",
    tags: ["Finland", "Business", "Verify"],
  },
  {
    id: "finland-india-connection-pending",
    country: "Finland",
    publisher: "Finland India Archive",
    title: "Finland–India Business / Innovation Connection — Pending Confirmation",
    summary:
      "Finland–India archive image. Keep title safe until Sir confirms the exact context.",
    image: `${pressPath}2018/Finland_India.jpg`,
    alt:
      "Pending confirmation Finland India business innovation connection image featuring Arijit Bhattacharyya",
    tags: ["Finland", "India", "Verify"],
  },
  {
    id: "vibrant-saurashtra-pending",
    country: "India",
    publisher: "Vibrant Saurashtra",
    title: "Vibrant Saurashtra Expo and Summit — Pending Confirmation",
    summary:
      "Regional business-event archive item likely connected to Vibrant Saurashtra. Correct spelling is Saurashtra; final context should be confirmed.",
    image: `${pressPath}saourastra.jpeg`,
    alt:
      "Pending confirmation Vibrant Saurashtra Expo and Summit archive image featuring Arijit Bhattacharyya",
    tags: ["Saurashtra", "Business", "Verify"],
  },
];

export const additionalInternationalCoverage: InternationalCoverage[] = [];

export const completeInternationalCoverage: InternationalCoverage[] = [
  ...internationalCoverage,
  ...additionalInternationalCoverage,
];

export const legacyPressArchive: PressStory[] = [
  {
    id: "icc-startup-pad-patna-2016",
    title: "ICC StartUp Pad Patna 2016 Panel",
    outlet: "Indian Chamber of Commerce",
    publisher: "ICC StartUp Pad",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "2016",
    eyebrow: "Startup Platform",
    summary:
      "ICC StartUp Pad Patna 2016 event image documenting startup mentoring, pitching and regional ecosystem development.",
    image: `${pressPath}arijit_bhattacharyya_ICC.jpg`,
    alt:
      "ICC StartUp Pad Patna 2016 panel featuring Arijit Bhattacharyya at Indian Chamber of Commerce event",
    sourceType: "Press Asset",
    tags: ["ICC", "Startup Pad", "Patna", "2016"],
  },
  {
    id: "icc-startup-pad-kolkata",
    title: "ICC Startup Pad Kolkata — Entrepreneurial Ecosystem Session",
    outlet: "Indian Chamber of Commerce",
    publisher: "ICC Startup Pad",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "2019",
    eyebrow: "Startup Ecosystem",
    summary:
      "ICC Startup Pad Kolkata event proof connected to startup platforms, mentoring and entrepreneurial ecosystem conversations.",
    image: `${pressPath}2019/ICC.jpg`,
    alt:
      "ICC Startup Pad Kolkata event with Arijit Bhattacharyya speaking at podium",
    sourceType: "Press Asset",
    tags: ["ICC", "Startup", "Kolkata"],
  },
  {
    id: "iift-kolkata-avaan-business-plan",
    title: "IIFT Kolkata Avaan Business Plan / Entrepreneurship Summit",
    outlet: "IIFT Kolkata",
    publisher: "Indian Institute of Foreign Trade Kolkata",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "2019",
    eyebrow: "Institutional Startup Platform",
    summary:
      "IIFT Kolkata Avaan business plan and entrepreneurship summit image documenting institutional startup engagement.",
    image: `${pressPath}2019/business-plan.png`,
    alt:
      "IIFT Kolkata Avaan business plan entrepreneurship summit recognition with Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["IIFT Kolkata", "Business Plan", "Startup"],
  },
  {
    id: "iim-bodh-gaya-yes-2020",
    title: "IIM Bodh Gaya YES 2020 Youth Entrepreneurship Summit",
    outlet: "IIM Bodh Gaya",
    publisher: "IIM Bodh Gaya",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "2020",
    eyebrow: "Youth Entrepreneurship",
    summary:
      "IIM Bodh Gaya YES 2020 archive image connected to youth entrepreneurship, startup mentoring and management education.",
    image: `${pressPath}2020/IIM_Bodhgaya.jpg`,
    alt:
      "IIM Bodh Gaya YES 2020 Youth Entrepreneurship Summit lamp lighting with Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["IIM Bodh Gaya", "YES 2020", "Entrepreneurship"],
  },
  {
    id: "axis-bank-evolve-sme",
    title: "Axis Bank Evolve SME Knowledge Series",
    outlet: "Axis Bank",
    publisher: "Axis Bank Evolve",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "2020",
    eyebrow: "Corporate Speaking",
    summary:
      "Axis Bank Evolve SME Knowledge Series image documenting a corporate speaking engagement connected to business, finance and entrepreneurship.",
    image: `${pressPath}2020/axis-bank-spk.jpg`,
    alt:
      "Axis Bank Evolve SME Knowledge Series speaking engagement with Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["Axis Bank", "SME", "Finance", "Speaking"],
  },
  {
    id: "calcutta-chamber-commerce-sustainability",
    title: "Calcutta Chamber of Commerce Sustainability / Business Panel",
    outlet: "Calcutta Chamber of Commerce",
    publisher: "Calcutta Chamber of Commerce",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "2020",
    eyebrow: "Business Chamber",
    summary:
      "Calcutta Chamber of Commerce event image documenting business, sustainability and chamber-network engagement.",
    image: `${pressPath}2020/calcutta-chamber-of-commerce.jpg`,
    alt:
      "Calcutta Chamber of Commerce sustainability business panel featuring Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["Calcutta Chamber", "Business", "Sustainability"],
  },
  {
    id: "assocham-business-startup-panel",
    title: "ASSOCHAM Business / Startup Panel",
    outlet: "ASSOCHAM",
    publisher: "ASSOCHAM",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Business Chamber",
    summary:
      "ASSOCHAM event archive image connected to entrepreneurship, business development and industry-platform conversations.",
    image: `${pressPath}assocham.jpg`,
    alt:
      "ASSOCHAM business startup panel with Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["ASSOCHAM", "Business", "Startup"],
  },
  {
    id: "bengal-chamber-commerce-industry",
    title: "Bengal Chamber of Commerce & Industry Speaking Session",
    outlet: "Bengal Chamber of Commerce & Industry",
    publisher: "BCC&I",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Business Chamber",
    summary:
      "BCC&I archive image documenting business chamber engagement connected to entrepreneurship and Bengal's industry ecosystem.",
    image: `${pressPath}bcc&i.jpg`,
    alt:
      "Bengal Chamber of Commerce and Industry event with Arijit Bhattacharyya speaking",
    sourceType: "Press Asset",
    tags: ["BCC&I", "Business Chamber", "Bengal"],
  },
  {
    id: "indian-chamber-commerce-session",
    title: "Indian Chamber of Commerce Startup / Business Session",
    outlet: "Indian Chamber of Commerce",
    publisher: "Indian Chamber of Commerce",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Business Chamber",
    summary:
      "Indian Chamber of Commerce event archive image documenting startup and business ecosystem engagement.",
    image: `${pressPath}Indian_Chamber_of_Commerce.jpg`,
    alt:
      "Indian Chamber of Commerce startup and business session with Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["Indian Chamber", "Startup", "Business"],
  },
  {
    id: "odisha-msme-trade-fair-2016",
    title: "Odisha MSME Trade Fair 2016 — Leading Change with Technology",
    outlet: "Odisha MSME Trade Fair",
    publisher: "Odisha MSME Trade Fair",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "2016",
    eyebrow: "Technology + Business",
    summary:
      "Odisha MSME Trade Fair 2016 event proof connected to leading change with technology and regional business ecosystem activity.",
    image: `${pressPath}odisha.jpg`,
    alt:
      "Odisha MSME Trade Fair 2016 Leading Change with Technology panel featuring Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["Odisha", "MSME", "Technology", "Business"],
  },
  {
    id: "nen-wadhwani-entrepreneurship-workshop",
    title: "NEN Wadhwani Foundation Entrepreneurship Workshop",
    outlet: "NEN / Wadhwani Foundation",
    publisher: "NEN / Wadhwani Foundation",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Entrepreneurship Workshop",
    summary:
      "NEN Wadhwani Foundation workshop image documenting entrepreneurship education and founder mentoring.",
    image: `${pressPath}angel.jpg`,
    alt:
      "NEN Wadhwani Foundation Creating Jobs Through Entrepreneurship workshop with Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["NEN", "Wadhwani Foundation", "Entrepreneurship"],
  },
  {
    id: "gato-2017-gaming-for-tomorrow",
    title: "GATO 2017 — Gaming for Tomorrow Panel",
    outlet: "GATO",
    publisher: "GATO",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "2017",
    eyebrow: "Gaming + Immersive Tech",
    summary:
      "GATO 2017 event image documenting gaming, VR, AR and entertainment technology industry conversations.",
    image: `${pressPath}IAMAI_Delhi_gamedev.png`,
    alt:
      "GATO 2017 Gaming for Tomorrow panel featuring Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["GATO", "Gaming", "VR", "AR"],
  },
  {
    id: "ficci-frames-2017-mumbai",
    title: "FICCI FRAMES 2017 Mumbai — Media & Entertainment Panel",
    outlet: "FICCI FRAMES",
    publisher: "FICCI",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "2017",
    eyebrow: "Creative Industry",
    summary:
      "FICCI FRAMES 2017 Mumbai image documenting media, entertainment, creative technology and industry-platform presence.",
    image: `${pressPath}2019/ficci.jpg`,
    alt:
      "FICCI FRAMES 2017 Mumbai media and entertainment panel with Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["FICCI", "FRAMES", "Entertainment", "Creative Media"],
  },
  {
    id: "economic-forum-2018",
    title: "Economic Forum 2018 — Taking the Big Leap Forward",
    outlet: "Economic Forum",
    publisher: "Economic Forum Kolkata",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "2018",
    eyebrow: "Business Forum",
    summary:
      "Corrected archive image from Economic Forum 2018 in Kolkata. This replaces the earlier wrong ICC Startupad / American Center label.",
    image: `${pressPath}2018/ICC_Startupad_American_Center-Arijit.jpg`,
    alt:
      "Economic Forum 2018 Taking the Big Leap Forward Kolkata panel with Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["Economic Forum", "Kolkata", "Business"],
  },
  {
    id: "franchise-india-summit-2016",
    title: "Franchise India Summit 2016",
    outlet: "Franchise India",
    publisher: "Franchise India",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "2016",
    eyebrow: "Business Platform",
    summary:
      "Franchise India Summit archive image connected to business models, entrepreneurship and scaling conversations.",
    image: `${pressPath}franchise-india.jpg`,
    alt:
      "Franchise India Summit 2016 with Arijit Bhattacharyya speaking",
    sourceType: "Press Asset",
    tags: ["Franchise India", "Business", "Startup"],
  },
  {
    id: "one-day-finance-clinic",
    title: "One Day Finance Clinic for Startups and MSMEs",
    outlet: "Finance Clinic",
    publisher: "Finance Clinic",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Startup Finance",
    summary:
      "Finance Clinic archive image connected to startup finance, MSMEs, investment readiness and business planning.",
    image: `${pressPath}finance-clinic.jpg`,
    alt:
      "One Day Finance Clinic for startups and MSMEs with Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["Finance Clinic", "MSME", "Startup Finance"],
  },
  {
    id: "jharkhand-technology-industry-summit",
    title: "Jharkhand Technology / Industry Summit Speaking Session",
    outlet: "Jharkhand Technology Event",
    publisher: "Jharkhand Technology Event",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Regional Technology",
    summary:
      "Jharkhand event image documenting regional technology, entrepreneurship and industry engagement.",
    image: `${pressPath}jharkhand.jpg`,
    alt:
      "Arijit Bhattacharyya speaking at a Jharkhand technology or industry summit",
    sourceType: "Press Asset",
    tags: ["Jharkhand", "Technology", "Regional"],
  },
  {
    id: "jharkhand-startup-government",
    title: "Jharkhand Startup Programme with Government Officials",
    outlet: "Jharkhand Startup Programme",
    publisher: "Jharkhand Startup Programme",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Startup + Government",
    summary:
      "Jharkhand startup programme image with government and institutional representatives, documenting regional startup ecosystem engagement.",
    image: `${pressPath}Jharkhand_IAS.jpg`,
    alt:
      "Jharkhand startup programme table with Arijit Bhattacharyya and government officials",
    sourceType: "Press Asset",
    tags: ["Jharkhand", "Startup", "Government"],
  },
];

export const additionalLegacyPressArchive: PressStory[] = [];

export const completeLegacyPressArchive: PressStory[] = [
  ...legacyPressArchive,
  ...additionalLegacyPressArchive,
];

export const technologyPressArchive: PressStory[] = [
  {
    id: "china-blockchain-raw-2018-tech",
    title: "China Blockchain / RAW 2018 Media Interview",
    outlet: "China Blockchain / RAW 2018",
    publisher: "China Blockchain / RAW 2018",
    category: "International",
    type: "International",
    region: "China",
    country: "China",
    year: "2018",
    eyebrow: "Blockchain Media",
    summary:
      "China media interview archive connected to blockchain / RAW 2018. This must never be labelled as China Film Festival.",
    image: `${pressPath}2020/China-blockchain.jpg`,
    alt:
      "China blockchain RAW 2018 media interview featuring Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["China", "Blockchain", "RAW 2018"],
  },
  {
    id: "iim-calcutta-virtual-reality",
    title: "IIM Calcutta Virtual Reality / Technology Session",
    outlet: "IIM Calcutta",
    publisher: "IIM Calcutta",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "2019",
    eyebrow: "VR, AR & AI",
    summary:
      "IIM Calcutta archive asset connected to virtual reality, technology education, entrepreneurship and innovation. Confirm exact session title before final public wording.",
    image: `${pressPath}2019/IIMC.png`,
    alt:
      "IIM Calcutta virtual reality technology session featuring Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["IIM Calcutta", "VR", "Technology"],
  },
  {
    id: "iimc-virtualreality-latest",
    title: "IIM Calcutta Virtual Reality Session — Confirmation Pending",
    outlet: "IIM Calcutta",
    publisher: "IIM Calcutta",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "VR, AR & AI",
    summary:
      "Second IIMC virtual reality archive image. Use only one IIMC VR image on the live page unless more proof is needed.",
    image: `${latestPath}IIMC-virtualreality.jpg`,
    alt:
      "IIM Calcutta virtual reality session archive image with Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["IIMC", "Virtual Reality", "Verify"],
  },
  {
    id: "smart-city-urban-innovation",
    title: "Smart City / Urban Innovation Session — Pending Confirmation",
    outlet: "Smart City Archive",
    publisher: "Smart City Archive",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Smart City",
    summary:
      "Smart City archive item. Keep this title as pending until Sir confirms the exact smart-city topic and event.",
    image: `${latestPath}smart-city.jpg`,
    alt:
      "Pending confirmation Smart City urban innovation session featuring Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["Smart City", "Technology", "Verify"],
  },
  {
    id: "blockchain-mutual-funds",
    title: "Blockchain and Mutual Funds Speaking Session — Pending Confirmation",
    outlet: "Blockchain / Finance Technology Archive",
    publisher: "Blockchain / Finance Technology Archive",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "Legacy",
    eyebrow: "Blockchain + Finance",
    summary:
      "Archive image connected by filename to blockchain and mutual funds. Confirm the exact topic before final public wording.",
    image: `${latestPath}blockchain-mutual-funds.jpg`,
    alt:
      "Pending confirmation blockchain and mutual funds speaking session with Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["Blockchain", "Mutual Funds", "Finance"],
  },
  {
    id: "gato-vr-ar-gaming-tech",
    title: "GATO 2017 — Gaming, VR and AR Industry Panel",
    outlet: "GATO",
    publisher: "GATO",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "2017",
    eyebrow: "Gaming + Immersive Tech",
    summary:
      "GATO 2017 panel proof connecting Arijit Bhattacharyya with gaming, VR, AR and entertainment technology.",
    image: `${pressPath}IAMAI_Delhi_gamedev.png`,
    alt:
      "GATO 2017 Gaming for Tomorrow panel with Arijit Bhattacharyya connected to VR AR and gaming",
    sourceType: "Press Asset",
    tags: ["Gaming", "VR", "AR"],
  },
  {
    id: "odisha-leading-change-technology",
    title: "Odisha MSME Trade Fair 2016 — Leading Change with Technology",
    outlet: "Odisha MSME Trade Fair",
    publisher: "Odisha MSME Trade Fair",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "2016",
    eyebrow: "Technology + MSME",
    summary:
      "Odisha MSME Trade Fair 2016 image documenting technology-led business ecosystem engagement.",
    image: `${pressPath}odisha.jpg`,
    alt:
      "Odisha MSME Trade Fair 2016 Leading Change with Technology panel featuring Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["Technology", "MSME", "Odisha"],
  },
  {
    id: "technology-research-academy-adviser",
    title: "Technology Research Academy Advisory Profile",
    outlet: "Technology Research Academy",
    publisher: "Technology Research Academy",
    category: "Profile",
    type: "Interview",
    region: "Global",
    country: "Global",
    year: "Legacy",
    eyebrow: "Technology Adviser",
    summary:
      "Advisory/profile proof connecting Arijit Bhattacharyya with AI, VR, gaming, entrepreneurship and technology-research platforms.",
    image: `${pressPath}technology_adviser.jpg`,
    alt:
      "Technology Research Academy advisory profile featuring Arijit Bhattacharyya founder CEO and AI VR gaming expert",
    sourceType: "Press Asset",
    tags: ["Technology Adviser", "AI", "VR", "Gaming"],
  },
];

export const creativeMediaArchive: PressStory[] = [
  {
    id: "ficci-frames-2017-creative",
    title: "FICCI FRAMES 2017 Mumbai — Media & Entertainment Panel",
    outlet: "FICCI FRAMES",
    publisher: "FICCI",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "2017",
    eyebrow: "Creative Industry",
    summary:
      "FICCI FRAMES 2017 image documenting Arijit Bhattacharyya's presence in media, entertainment and creative-technology industry conversations.",
    image: `${pressPath}2019/ficci.jpg`,
    alt:
      "FICCI FRAMES 2017 Mumbai media and entertainment panel with Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["FICCI", "FRAMES", "Entertainment"],
  },
  {
    id: "gato-2017-gaming-creative",
    title: "GATO 2017 — Gaming for Tomorrow Panel",
    outlet: "GATO",
    publisher: "GATO",
    category: "Event",
    type: "Event",
    region: "India",
    country: "India",
    year: "2017",
    eyebrow: "Gaming Industry",
    summary:
      "Gaming-industry proof connected to VR, AR, gaming, interactive entertainment and future media platforms.",
    image: `${pressPath}IAMAI_Delhi_gamedev.png`,
    alt:
      "GATO 2017 Gaming for Tomorrow panel featuring Arijit Bhattacharyya gaming and technology industry",
    sourceType: "Press Asset",
    tags: ["Gaming", "Entertainment Technology", "VR"],
  },
  {
    id: "japan-square-enix-creative",
    title: "With Yasuhiro Fukushima, Founder of Square Enix",
    outlet: "Japan Gaming Industry Archive",
    publisher: "Japan Gaming Industry Archive",
    category: "International",
    type: "International",
    region: "Japan",
    country: "Japan",
    year: "Legacy",
    eyebrow: "Japan Gaming Industry",
    summary:
      "Japan gaming-industry connection with Yasuhiro Fukushima, founder of Square Enix, supporting global gaming and entertainment technology credibility.",
    image: `${pressPath}japan.jpg`,
    alt:
      "Arijit Bhattacharyya with Yasuhiro Fukushima founder of Square Enix Japan gaming industry",
    sourceType: "Press Asset",
    tags: ["Japan", "Square Enix", "Gaming"],
  },
  {
    id: "china-film-xian-creative-pending",
    title: "China Film Festival / Xian Film Festival — Pending Confirmation",
    outlet: "China Creative Media Archive",
    publisher: "China Creative Media Archive",
    category: "International",
    type: "International",
    region: "China",
    country: "China",
    year: "Legacy",
    eyebrow: "China Creative Media",
    summary:
      "Use only as a pending creative-media archive item until the exact China Film Festival / Xian Film Festival context is confirmed.",
    image: `${pressPath}china-films.jpg`,
    alt:
      "Pending confirmation China Film Festival or Xian Film Festival archive image with Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["China", "Film Festival", "Verify"],
  },
  {
    id: "china-film-speaking-creative-pending",
    title: "China Film Festival Speaking Session — Pending Confirmation",
    outlet: "China Creative Media Archive",
    publisher: "China Creative Media Archive",
    category: "International",
    type: "International",
    region: "China",
    country: "China",
    year: "Legacy",
    eyebrow: "China Speaking Archive",
    summary:
      "China event speaking image retained with a safe pending label until final context is confirmed.",
    image: `${pressPath}China_film_fest.jpg`,
    alt:
      "Pending confirmation China creative media speaking session with Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["China", "Creative Media", "Verify"],
  },
  {
    id: "china-films-archive-creative-pending",
    title: "China International Creative Media Event — Pending Confirmation",
    outlet: "China Creative Media Archive",
    publisher: "China Creative Media Archive",
    category: "International",
    type: "International",
    region: "China",
    country: "China",
    year: "Legacy",
    eyebrow: "China Film / Media",
    summary:
      "China creative-media archive image. Keep this as pending until Sir confirms exact title and event.",
    image: `${pressPath}arijit_bhattacharyya-films.jpg`,
    alt:
      "Pending confirmation China international creative media event image featuring Arijit Bhattacharyya",
    sourceType: "Press Asset",
    tags: ["China", "Film", "Verify"],
  },
];

export const recognitionTimeline: TimelineItem[] = [
  {
    year: "1998",
    title: "Founder Journey Begins",
    outlet: "Virtualinfocom",
    summary:
      "The founder journey began with technology, game development, animation, training and digital IP creation.",
    image: `${pressPath}technology_adviser.jpg`,
    alt:
      "Technology advisory profile connected to Arijit Bhattacharyya founder journey and innovation work",
  },
  {
    year: "2011",
    title: "Regional Business Media Recognition",
    outlet: "The Telegraph — Enabling the Northeast",
    summary:
      "The archive includes early regional business and technology ecosystem proof from Agartala.",
    image: `${pressPath}agartala.jpg`,
    alt:
      "The Telegraph Enabling the Northeast Agartala 2011 event with Arijit Bhattacharyya",
  },
  {
    year: "2016",
    title: "Startup Pad and Regional Founder Platforms",
    outlet: "Hindustan Times / ICC",
    summary:
      "Bihar and Patna startup coverage documents mentoring, founder platforms and regional startup ecosystem development.",
    image: `${pressPath}hindustan-times-startup.jpg`,
    alt:
      "Hindustan Times Bihar Start Up Pad 2016 press clipping featuring startup ecosystem work",
  },
  {
    year: "2017",
    title: "Gaming, VR, AR and Entertainment Technology",
    outlet: "GATO / FICCI FRAMES",
    summary:
      "Industry-event coverage connects the press archive to gaming, VR, AR, media and entertainment technology.",
    image: `${pressPath}IAMAI_Delhi_gamedev.png`,
    alt:
      "GATO 2017 gaming VR AR panel featuring Arijit Bhattacharyya",
  },
  {
    year: "2018",
    title: "International and Business Chamber Platforms",
    outlet: "Economic Forum / Japan Gaming Archive",
    summary:
      "Coverage connects Arijit Bhattacharyya to business forums, global gaming networks and international ecosystem building.",
    image: `${pressPath}japan.jpg`,
    alt:
      "Arijit Bhattacharyya with Yasuhiro Fukushima founder of Square Enix Japan",
  },
  {
    year: "2026",
    title: "Current Startup and Institutional Press",
    outlet: "AIMA / East India Startup Showcase / IIT ISM",
    summary:
      "Recent press assets document startup showcases, institutional collaboration and management ecosystem visibility.",
    image: `${pressPath}1772780640480.jfif.jpeg`,
    alt:
      "Dainik Bhaskar East India Startup Exhibition Day 2026 press clipping",
  },
];

export const pressCta = {
  eyebrow: "Press & Media",
  title: "Continue the Conversation.",
  text:
    "For interviews, keynote speaking, media invitations, panel discussions and verified press references around AI, VR, AR, blockchain, startups, gaming, entrepreneurship and global innovation, connect with Arijit Bhattacharyya.",
  primaryLabel: "Contact Arijit",
  primaryHref: "/contact",
  secondaryLabel: "Explore Speaking",
  secondaryHref: "/speaking",
};
