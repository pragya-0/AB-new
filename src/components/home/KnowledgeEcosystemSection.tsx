import { motion } from "framer-motion";

const stats = [
  { value: "720+", label: "Videos" },
  { value: "48K+", label: "LinkedIn Followers" },
  { value: "36M+", label: "Google Maps Views • Level 9" },
  { value: "7000+", label: "Startups Mentored" },
  { value: "60,000+", label: "Students Trained" },
];

const featuredPodcastVideos = [
  {
    title: "Riding Tiger with Arijit",
    category: "Riding Tiger",
    videoId: "pDBLqJp55QY",
  },
  {
    title: "Riding Tiger with Saswata Chatterjee",
    category: "Cinema & Leadership",
    videoId: "xxrd9jTFN1k",
  },
  {
    title: "H.E. Dr. O. Favour AYODELE",
    category: "Nigeria Presidential Candidate 2023",
    videoId: "vyMFNqY6ZCY",
  },
];

const aiEducationVideos = [
  {
    title: "AI Song Creation",
    category: "AI Song",
    videoId: "atIBOFDKYBc",
  },
  {
    title: "GenAI Creative Storytelling",
    category: "Generative AI",
    videoId: "m1qoI_icpPo",
  },
  {
    title: "AI Music, Video & Future Skills",
    category: "AI Learning",
    videoId: "FaYHcRzxbhc",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

type VideoCard = {
  title: string;
  category: string;
  videoId: string;
};

function VideoStrip({
  eyebrow,
  title,
  videos,
}: {
  eyebrow: string;
  title: string;
  videos: VideoCard[];
}) {
  return (
    <motion.div variants={fadeUp} className="mt-14 sm:mt-16">
      <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4d8cff]">
            {eyebrow}
          </p>

          <h3 className="mt-3 max-w-[760px] text-[24px] font-extrabold leading-tight tracking-[-0.045em] text-white md:text-[32px]">
            {title}
          </h3>
        </div>

        <p className="text-sm font-semibold text-white/42">
          Curated highlights from 720+ videos
        </p>
      </div>

      <div className="flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
        {videos.map((video) => (
          <a
            key={video.videoId}
            href={`https://www.youtube.com/watch?v=${video.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Watch ${video.title} on YouTube`}
            className="group min-w-[82%] snap-start overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.045] shadow-[0_20px_80px_rgba(0,87,255,0.1)] transition duration-500 hover:-translate-y-2 hover:border-[#4d8cff]/45 hover:bg-white/[0.07] md:min-w-0"
          >
            <div className="relative aspect-video overflow-hidden bg-black">
              <img
                src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                alt={`${video.title} video thumbnail`}
                className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

              <div className="absolute left-4 top-4 rounded-full bg-black/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
                {video.category}
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 shadow-[0_0_40px_rgba(220,38,38,0.5)] transition duration-500 group-hover:scale-110 md:h-16 md:w-16">
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    className="ml-1 h-8 w-8"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="p-5">
              <h4 className="text-[17px] font-bold leading-tight tracking-[-0.035em] text-white md:text-[18px]">
                {video.title}
              </h4>

              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8bb7ff]">
                Watch on YouTube →
              </p>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export default function KnowledgeEcosystemSection() {
  return (
    <motion.section
      className="relative overflow-hidden bg-[#02050b] px-5 py-16 text-white md:px-10 md:py-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      transition={{ staggerChildren: 0.08 }}
    >
      <div className="absolute left-[-250px] top-[-180px] h-[600px] w-[600px] rounded-full bg-[#0057ff]/15 blur-[180px]" />
      <div className="absolute right-[-250px] bottom-[-180px] h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-[180px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,87,255,0.12),transparent_42%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <motion.div variants={fadeUp} className="mb-8 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#4d8cff] md:text-sm">
            Knowledge Ecosystem
          </p>

          <h2 className="mx-auto max-w-[820px] text-[30px] font-extrabold leading-tight tracking-[-0.05em] md:text-[42px]">
            Riding Tiger Podcast & Learning Ecosystem
          </h2>

          <p className="mx-auto mt-4 max-w-[720px] text-[15px] font-normal leading-7 text-white/58 md:text-[16px]">
            Conversations with founders, diplomats, actors, creators and
            innovators — plus future-skill learning for students, creators and
            entrepreneurs.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mx-auto max-w-[980px] overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.05] shadow-[0_25px_90px_rgba(0,87,255,0.13)]"
        >
          <img
            src="/assets/podcast/podcasthero.png"
            alt="Riding Tiger with Arijit podcast and learning ecosystem"
            className="h-[170px] w-full object-cover object-top md:h-[230px] lg:h-[270px] xl:h-[300px]"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mx-auto mt-7 grid max-w-[1180px] gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-[22px] border border-white/10 bg-white/[0.045] p-5 text-center shadow-[0_18px_55px_rgba(0,87,255,0.08)]"
            >
              <p className="text-[30px] font-bold tracking-[-0.055em] text-[#8bb7ff]">
                {item.value}
              </p>

              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        <VideoStrip
          eyebrow="Riding Tiger Podcast"
          title="Entrepreneurs, actors and global leaders in conversation."
          videos={featuredPodcastVideos}
        />

        <VideoStrip
          eyebrow="AI & Learning Hub"
          title="AI songs, GenAI storytelling and future-skill education."
          videos={aiEducationVideos}
        />

        <motion.div
          variants={fadeUp}
          className="mt-14 flex flex-col items-center justify-center gap-4 text-center"
        >
          <p className="max-w-[720px] text-[15px] font-normal leading-7 text-white/55">
            Explore a growing library of conversations, learning videos and
            future-skill content across entrepreneurship, artificial
            intelligence, technology and global leadership.
          </p>

          <a
            href="https://youtube.com/@ArijitBhattacharyya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore Arijit Bhattacharyya YouTube channel with 720 plus videos"
            className="rounded-full bg-[#0057ff] px-10 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#0b66ff] focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-[#02050b]"
          >
            Explore 720+ Videos →
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
