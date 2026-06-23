import { useEffect } from "react";
import { motion } from "framer-motion";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { fadeUp } from "../components/bio/bioMotion";

const speaking = "/assets/speaking/";

const stats = [
  ["2100+", "Events Worldwide"],
  ["102+", "Countries Network"],
  ["47+", "Countries Travelled"],
  ["29+", "Years of Innovation"],
];

const featuredStages = [
  ["TEDx Speaker", "Entrepreneurship, innovation and technology storytelling.", `${speaking}tedx.jpg.jpeg`],
  ["Dubai AI & Blockchain", "AI, blockchain, future technology and global business.", `${speaking}arijit-dubai-ai-blockchain-.jpg.jpeg`],
  ["Ghana Business Summit", "International business, investment and leadership platform.", `${speaking}ghana.jpg`],
  ["Axis Bank", "MSME, entrepreneurship, finance and business growth.", `${speaking}axis-bank-bhub.jpg`],
  ["NTPC", "Technology, transformation and institutional innovation.", `${speaking}ntpc.jpg.jpeg`],
  ["South Korea", "Deeptech, gaming, innovation and international collaboration.", `${speaking}SKorea.png`],
];

const timeline = [
  {
    year: "2008+",
    label: "Public Speaking Begins",
    title: "From early stages to a global speaking journey.",
    text: "Entrepreneurship, gaming, innovation and technology conversations across founder communities, institutions and business platforms.",
    images: [
      [`${speaking}1.jpg.jpeg`, "Early speaking archive"],
      [`${speaking}banner3.jpg`, "Technology talk"],
      [`${speaking}banner4.jpg`, "Public stage"],
    ],
  },
  {
    year: "2018",
    label: "Startup Forums",
    title: "CII, TiE, Techstars and startup ecosystem conversations.",
    text: "A year of public platforms, startup communities, chambers, entrepreneurship events and technology storytelling.",
    images: [
      [`${speaking}netaji_subhas.jpg`, "Netaji Subhas stage"],
      [`${speaking}TiE-ahmedabad.png`, "TiE Ahmedabad"],
      [`${speaking}CII.jpg`, "CII"],
      [`${speaking}techstars.png`, "Techstars"],
    ],
  },
  {
    year: "2019",
    label: "Gaming, VR and DeepTech",
    title: "Gaming, VR, blockchain and media conversations.",
    text: "Speaking across gaming, virtual reality, blockchain, innovation, media and deep technology ecosystems.",
    images: [
      [`${speaking}Thailand_blockchain.jpg`, "Thailand Blockchain"],
      [`${speaking}CNBC.jpg`, "CNBC"],
      [`${speaking}gaming.jpg`, "Gaming"],
      [`${speaking}china.jpg.jpeg`, "China VR"],
    ],
  },
  {
    year: "2020",
    label: "Digital Leadership",
    title: "Webinars, digital growth and cross-border learning.",
    text: "A shift into online leadership, digital business, startup mentoring and global webinar-led conversations.",
    images: [
      [`${speaking}world-leadership-webiner.jpg`, "World Leadership Webinar"],
      [`${speaking}media-next.jpg`, "Media Next"],
      [`${speaking}techno-vr-ar.jpg`, "VR AR Talk"],
      [`${speaking}startup-grid.jpg`, "Startup Grid"],
    ],
  },
  {
    year: "2021",
    label: "AI, Blockchain and Education",
    title: "AI education and blockchain entered the main stage.",
    text: "AI, blockchain, supply chain, education and summit-led conversations for future-ready ecosystems.",
    images: [
      [`${speaking}2021/AI-world-summit.jpg`, "AI World Summit"],
      [`${speaking}2021/AI-blockchain.jpg`, "AI Blockchain"],
      [`${speaking}2021/AI-Education.jpg`, "AI Education"],
      [`${speaking}2021/AI-Supply-Chain.jpg`, "AI Supply Chain"],
    ],
  },
  {
    year: "2022",
    label: "Metaverse and Global Platforms",
    title: "Dubai, Ghana, WISE and global innovation stages.",
    text: "International speaking across Africa, Middle East, Web3, metaverse, investment and innovation forums.",
    images: [
      [`${speaking}2022/Dubai.jpg`, "Dubai"],
      [`${speaking}2022/ghana-index.jpg`, "Ghana"],
      [`${speaking}2022/metaverse.jpg`, "Metaverse"],
      [`${speaking}2022/WISE.jpg`, "WISE"],
      [`${speaking}2022/UPES.jpg`, "UPES"],
      [`${speaking}2022/TV9-games.jpg`, "TV9 Games"],
    ],
  },
  {
    year: "2023",
    label: "Corporate and Institutions",
    title: "Axis Bank, XLRI and business transformation platforms.",
    text: "Corporate speaking across MSME growth, banking, entrepreneurship, institutions and founder ecosystems.",
    images: [
      [`${speaking}2023/Axis-Bank-Pune.jpg`, "Axis Bank Pune"],
      [`${speaking}2023/Axis-Bank-Bhubaneswar.jpg`, "Axis Bank Bhubaneswar"],
      [`${speaking}2023/VyparJagat.jpg`, "Vyapar Jagat"],
      [`${speaking}2023/XLRI.jpg`, "XLRI"],
      [`${speaking}NTPC.jpg`, "NTPC"],
      [`${speaking}deeptech-training.jpg`, "DeepTech Training"],
    ],
  },
  {
    year: "2024–25",
    label: "Global Innovation",
    title: "AI, deeptech, South Korea, Kazakhstan and global leadership.",
    text: "Future-skill conversations across AI, deeptech, startup funding, global business and international collaboration.",
    images: [
      [`${speaking}dubai-speaker2.png`, "Dubai Keynote"],
      [`${speaking}south-mou.png`, "South Korea MOU"],
      [`${speaking}kazak.png`, "Kazakhstan"],
      [`${speaking}Liberia.png`, "Liberia"],
      [`${speaking}Nagaland.png`, "Nagaland"],
      [`${speaking}KIVU9665.JPG.jpeg`, "Global Panel"],
    ],
  },
];

const globalArchive = [
  [`${speaking}finland.jpg`, "Finland"],
  [`${speaking}Maldives.jpg`, "Maldives"],
  [`${speaking}Kualalmpur.jpg`, "Kuala Lumpur"],
  [`${speaking}colombia.jpg`, "Colombia"],
  [`${speaking}IIT_Hydrabad.jpg`, "IIT Hyderabad"],
  [`${speaking}meghalaya.png`, "Meghalaya"],
  [`${speaking}mumbai.jpg`, "Mumbai"],
  [`${speaking}DD_bangla.jpg`, "DD Bangla"],
  [`${speaking}nepal-next-growth.jpg`, "Nepal"],
];

const topics = [
  "AI & Generative AI",
  "Entrepreneurship",
  "DeepTech",
  "Startup Funding",
  "Blockchain",
  "Game Development",
  "VR / AR / XR",
  "Digital Banking",
  "Innovation",
  "Global Business",
  "Smart Cities",
  "Future Skills",
  "MSME Growth",
  "Investment",
  "Metaverse",
  "Creator Economy",
];

function SmartImage({
  src,
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      className={className}
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
    />
  );
}

function ImageCard({
  image,
  title,
  tall = false,
}: {
  image: string;
  title: string;
  tall?: boolean;
}) {
  return (
    <div className="group overflow-hidden rounded-[30px] border border-white/12 bg-white/[0.045]">
      <div className={`relative overflow-hidden ${tall ? "h-[560px]" : "h-[420px]"}`}>
        <SmartImage
          src={image}
          className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/0 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-[22px] font-black leading-tight tracking-[-0.045em] text-white">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SpeakingPage() {
  useEffect(() => {
    document.title =
      "Arijit Bhattacharyya Speaker | AI, Entrepreneurship, Deeptech & Innovation";

    const description =
      document.querySelector("meta[name='description']") ||
      document.createElement("meta");

    description.setAttribute("name", "description");
    description.setAttribute(
      "content",
      "Invite Arijit Bhattacharyya for keynote talks, panels and workshops on AI, entrepreneurship, deeptech, blockchain, gaming, VR, startup funding, innovation and global business."
    );
    document.head.appendChild(description);
  }, []);

  return (
    <main className="min-h-screen bg-[#03070d] font-sans text-white">
      <Navbar />

      <section className="relative overflow-hidden px-5 py-16 md:px-10 md:py-20">
        <div className="absolute left-[-240px] top-[-240px] h-[620px] w-[620px] rounded-full bg-[#0057ff]/20 blur-[180px]" />

        <div className="relative z-10 mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <motion.div {...fadeUp}>
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.42em] text-[#58a0ff]">
              Keynote Speaker
            </p>

            <h1 className="max-w-[760px] text-[56px] font-black leading-[0.86] tracking-[-0.08em] md:text-[92px]">
              Speaking Across Continents Since 2008.
            </h1>

            <p className="mt-7 max-w-[760px] text-[18px] leading-8 text-white/68">
              Keynotes, panels and workshops on AI, entrepreneurship, deeptech,
              blockchain, gaming, VR, innovation, funding and global business
              ecosystems.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[22px] border border-white/12 bg-white/[0.045] p-6"
                >
                  <p className="text-[42px] font-black leading-none tracking-[-0.06em] text-[#58a0ff]">
                    {value}
                  </p>
                  <p className="mt-3 text-[10px] font-black uppercase tracking-[0.25em] text-white/56">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="overflow-hidden rounded-[40px] border border-white/12 bg-white/[0.045] p-2 shadow-[0_45px_150px_rgba(0,87,255,0.28)]"
          >
            <SmartImage
              src={`${speaking}axis-pune.jpg`}
              className="h-[460px] w-full rounded-[32px] object-cover object-center md:h-[620px]"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f4f8ff] px-5 py-16 text-[#07101f] md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <motion.div
            {...fadeUp}
            className="mb-10 grid gap-7 lg:grid-cols-[0.75fr_1fr] lg:items-end"
          >
            <div>
              <p className="mb-4 text-[11px] font-black uppercase tracking-[0.4em] text-[#0057ff]">
                Featured Stages
              </p>
              <h2 className="max-w-[780px] text-[42px] font-black leading-[0.9] tracking-[-0.07em] md:text-[66px]">
                Keynotes, summits, banks, institutions and global forums.
              </h2>
            </div>
            <p className="max-w-[720px] text-[16px] leading-8 text-[#334155]">
              Large-format stage proof across TEDx, Dubai, Ghana, Axis Bank,
              NTPC and South Korea.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredStages.map(([title, text, image]) => (
              <motion.article
                key={title}
                {...fadeUp}
                className="group overflow-hidden rounded-[34px] border border-[#bdd9ff] bg-white shadow-[0_22px_70px_rgba(0,87,255,0.10)]"
              >
                <div className="relative h-[460px] overflow-hidden">
                  <SmartImage
                    src={image}
                    className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/6 to-transparent" />
                  <div className="absolute bottom-7 left-7 right-7">
                    <h3 className="text-[40px] font-black leading-tight tracking-[-0.06em] text-white">
                      {title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-white/68">
                      {text}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#03070d] px-5 py-16 md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <motion.div
            {...fadeUp}
            className="mb-10 grid gap-7 lg:grid-cols-[0.8fr_1fr] lg:items-end"
          >
            <div>
              <p className="mb-4 text-[11px] font-black uppercase tracking-[0.4em] text-[#58a0ff]">
                Documentary Timeline
              </p>
              <h2 className="max-w-[820px] text-[42px] font-black leading-[0.9] tracking-[-0.07em] md:text-[66px]">
                A speaking journey across years, sectors and countries.
              </h2>
            </div>
            <p className="max-w-[720px] text-[16px] leading-8 text-white/64">
              Built like a visual archive: large images first, then story.
            </p>
          </motion.div>

          <div className="space-y-12">
            {timeline.map((era) => (
              <motion.section
                key={era.year}
                {...fadeUp}
                className="rounded-[40px] border border-white/12 bg-white/[0.04] p-5 md:p-7"
              >
                <div className="mb-7 grid gap-5 lg:grid-cols-[0.28fr_0.72fr] lg:items-end">
                  <div>
                    <p className="text-[72px] font-black leading-none tracking-[-0.09em] text-[#8bb7ff] md:text-[96px]">
                      {era.year}
                    </p>
                    <p className="mt-3 text-[10px] font-black uppercase tracking-[0.32em] text-[#58a0ff]">
                      {era.label}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[40px] font-black leading-[0.92] tracking-[-0.065em] text-white md:text-[64px]">
                      {era.title}
                    </h3>
                    <p className="mt-4 max-w-[900px] text-[16px] leading-8 text-white/64">
                      {era.text}
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 lg:grid-cols-2">
                  {era.images.map(([image, title], imageIndex) => (
                    <ImageCard
                      key={`${era.year}-${title}`}
                      image={image}
                      title={title}
                      tall={imageIndex === 0}
                    />
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 text-[#07101f] md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <motion.div {...fadeUp} className="mb-10">
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.4em] text-[#0057ff]">
              Global Archive
            </p>
            <h2 className="max-w-[900px] text-[42px] font-black leading-[0.9] tracking-[-0.07em] md:text-[66px]">
              Large-format moments from global innovation stages.
            </h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {globalArchive.map(([image, title], index) => (
              <motion.article
                key={title}
                {...fadeUp}
                className={`group overflow-hidden rounded-[32px] border border-[#bdd9ff] bg-[#f4f8ff] ${
                  index === 0 || index === 4 ? "lg:col-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden ${index === 0 || index === 4 ? "h-[480px]" : "h-[360px]"}`}>
                  <SmartImage
                    src={image}
                    className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/5 to-transparent" />
                  <h3 className="absolute bottom-6 left-6 right-6 text-[34px] font-black tracking-[-0.055em] text-white">
                    {title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#03070d] px-5 py-16 md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <motion.div
            {...fadeUp}
            className="mb-10 grid gap-7 lg:grid-cols-[0.8fr_1fr] lg:items-end"
          >
            <div>
              <p className="mb-4 text-[11px] font-black uppercase tracking-[0.4em] text-[#58a0ff]">
                Speaking Topics
              </p>
              <h2 className="max-w-[780px] text-[42px] font-black leading-[0.9] tracking-[-0.07em] md:text-[66px]">
                Talks that connect technology, capital and imagination.
              </h2>
            </div>
            <p className="max-w-[720px] text-[16px] leading-8 text-white/64">
              Built for founders, institutions, universities, corporates,
              investors and innovation ecosystems.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {topics.map((topic) => (
              <motion.div
                key={topic}
                {...fadeUp}
                className="rounded-full border border-white/12 bg-white/[0.045] px-5 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white/75"
              >
                {topic}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#03070d] px-5 py-20 text-center md:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,87,255,0.20),transparent_40%)]" />

        <motion.div {...fadeUp} className="relative z-10 mx-auto max-w-[1000px]">
          <p className="mb-5 text-[11px] font-black uppercase tracking-[0.4em] text-[#58a0ff]">
            Invite Arijit
          </p>
          <h2 className="text-[46px] font-black leading-[0.9] tracking-[-0.07em] md:text-[82px]">
            Bring AI, entrepreneurship and global innovation to your stage.
          </h2>
          <p className="mx-auto mt-7 max-w-[720px] text-[17px] leading-8 text-white/64">
            For keynotes, panels, workshops, innovation summits, universities,
            startup forums and corporate leadership programs.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-[#0057ff] px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition duration-300 hover:-translate-y-1"
            >
              Invite To Speak →
            </a>
            <a
              href="/media"
              className="rounded-full border border-[#2d74ff]/45 bg-[#0057ff]/10 px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-[#a8c8ff] transition duration-300 hover:-translate-y-1"
            >
              Watch Media →
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}