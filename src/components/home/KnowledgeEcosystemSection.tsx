

const stats = [
  { value: "720+", label: "Videos" },
 { value: "Global", label: "LinkedIn & Learning Community" },
  { value: "7000+", label: "Startups Mentored" },
  { value: "60,000+", label: "Students Trained" },
];

const featuredPodcastVideos = [
  {
    title: "Life & Career Lessons with Arijit Banerjee",
    category: "Riding Tiger",
    videoId: "CZIJ30aQUB0",
  },
  {
    title: "Shrouq Ahmad Al Hefawi",
    category: "Dubai Entrepreneurship",
    videoId: "onsJfVzCpQI",
  },
  {
    title: "His Excellency Syed Algazi",
    category: "Diplomacy & Leadership",
    videoId: "W3eA1fgbNnM",
  },
];

const aiEducationVideos = [
  {
    title: "Master Gen AI Music Creation",
    category: "AI Music",
    videoId: "fIrBY1_6seQ",
  },
  {
    title: "Generative AI Video Making Class",
    category: "AI Video",
    videoId: "f8N0ErM5RT4",
  },
  {
    title: "Create Viking Style Music with Gen AI",
    category: "Future Skills",
    videoId: "HJcA5ft9lFA",
  },
];

const ecosystemGroups = [
  {
    title: "Government-Backed Innovation",
    text: "Founder education, skill-building and startup ecosystem programs connected with India’s innovation movement.",
    items: ["Startup India", "Atal Innovation Mission", "STPI"],
  },
  {
    title: "Global Startup Platforms",
    text: "International networks supporting entrepreneurship, innovation and emerging-market startup growth.",
    items: ["Seedstars", "Techstars", "Asian Development Bank", "World Leader Summit"],
  },
  {
    title: "Academic & Talent Network",
    text: "Student, founder and professional engagement across technology, management and entrepreneurship institutions.",
    items: ["IIT", "IIM", "NIT", "SP Jain", "Jadavpur University"],
  },
];

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
    <div className="mt-16">
      <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#4d8cff]">
            {eyebrow}
          </p>

          <h3 className="mt-3 max-w-[720px] text-[22px] font-black leading-tight tracking-[-0.045em] text-white md:text-[30px]">
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
            className="group min-w-[82%] snap-start overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.045] shadow-[0_20px_80px_rgba(0,87,255,0.1)] transition duration-500 hover:-translate-y-2 hover:border-[#4d8cff]/45 hover:bg-white/[0.07] md:min-w-0"
          >
            <div className="relative aspect-video overflow-hidden bg-black">
              <img
                src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                alt={video.title}
                className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

              <div className="absolute left-4 top-4 rounded-full bg-black/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
                {video.category}
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 shadow-[0_0_40px_rgba(220,38,38,0.5)] transition duration-500 group-hover:scale-110 md:h-16 md:w-16">
                  <svg viewBox="0 0 24 24" fill="white" className="ml-1 h-8 w-8" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="p-5">
              <h4 className="text-[17px] font-black leading-tight tracking-[-0.035em] text-white md:text-[18px]">
                {video.title}
              </h4>

              <p className="mt-4 text-[11px] font-black uppercase tracking-[0.2em] text-[#8bb7ff]">
                Watch on YouTube →
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function KnowledgeEcosystemSection() {
  return (
    <section className="relative overflow-hidden bg-[#02050b] px-5 py-16 text-white md:px-10">
      <div className="absolute left-[-250px] top-[-180px] h-[600px] w-[600px] rounded-full bg-[#0057ff]/15 blur-[180px]" />
      <div className="absolute right-[-250px] bottom-[-180px] h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-[180px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,87,255,0.12),transparent_42%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="mb-8 text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-[#4d8cff] md:text-sm">
            Knowledge Ecosystem
          </p>

          <h2 className="mx-auto max-w-[780px] text-[28px] font-black leading-tight tracking-[-0.05em] md:text-[38px]">
            Riding Tiger Podcast & Learning Ecosystem
          </h2>

          <p className="mx-auto mt-4 max-w-[680px] text-[15px] leading-7 text-white/58 md:text-[16px]">
            Conversations with founders, diplomats and innovators — plus future-skill learning for students, creators and entrepreneurs.
          </p>
        </div>

        <div className="mx-auto max-w-[950px] overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.05] shadow-[0_25px_90px_rgba(0,87,255,0.13)]">
          <img
            src="/assets/podcast/podcasthero.png"
            alt="Riding Tiger with Arijit"
            className="h-[170px] w-full object-cover object-top md:h-[230px] lg:h-[270px] xl:h-[300px]"
          />
        </div>

        <div className="mx-auto mt-7 grid max-w-[1050px] gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-[22px] border border-white/10 bg-white/[0.045] p-5">
              <p className="text-[30px] font-black tracking-[-0.055em] text-[#8bb7ff]">
                {item.value}
              </p>

              <p className="mt-3 text-[10px] font-black uppercase tracking-[0.23em] text-white/65">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <VideoStrip
          eyebrow="Riding Tiger Podcast"
          title="Entrepreneurs, diplomats and global leaders in conversation."
          videos={featuredPodcastVideos}
        />

        <VideoStrip
          eyebrow="Learning Hub"
          title="Programming, AI and future-skill education."
          videos={aiEducationVideos}
        />

        <div className="mt-16">
          <div className="mb-7">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#4d8cff] md:text-sm">
              Innovation & Mentorship Network
            </p>

            <h3 className="mt-3 max-w-[800px] text-[22px] font-black leading-tight tracking-[-0.045em] text-white md:text-[30px]">
              Mentoring founders, students and innovators across India and global startup networks.
            </h3>

            <p className="mt-4 max-w-[820px] text-[14px] leading-7 text-white/55">
              From Startup India and Atal Innovation Mission to IIT, IIM and global startup platforms, Arijit has worked across founder education, innovation programs and startup ecosystem development.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {ecosystemGroups.map((group) => (
              <div key={group.title} className="rounded-[28px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_20px_75px_rgba(0,87,255,0.08)]">
                <h4 className="text-[21px] font-black tracking-[-0.045em] text-white">
                  {group.title}
                </h4>

                <p className="mt-4 text-[14px] leading-6 text-white/55">
                  {group.text}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[10px] font-black uppercase tracking-[0.13em] text-white/70">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

       <div className="mt-14 flex justify-center">
  <a
    href="https://youtube.com/@ArijitBhattacharyya"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-[#0057ff] px-10 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#0b66ff]"
  >
    Explore 720+ Videos →
  </a>
</div>
      </div>
    </section>
  );
}