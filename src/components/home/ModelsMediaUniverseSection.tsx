import {
  Clapperboard,
  Gamepad2,
  Image,
  Play,
  UserRound,
  Video,
} from "lucide-react";

const mediaImages = {
  main: "/assets/gallery/Subhasree_Arijit.jpg",
  topRight: "/assets/gallery/model-runway-01.jpeg",
  middleRight: "/assets/gallery/model-team-01.jpeg",
  bottomLeft: "/assets/gallery/model-work-01.jpeg",
  bottomMiddle: "/assets/gallery/model-work-02.jpeg",
};

const capabilities = [
  { title: "Films & Media Shoots", text: "Concept to camera-ready production.", icon: Clapperboard },
  { title: "Models & Talent", text: "Discovering, grooming and creating faces.", icon: UserRound },
  { title: "Creative Characters", text: "Transforming people into memorable roles.", icon: Gamepad2 },
  { title: "Brand Campaigns", text: "Visual identities, faces and promotional stories.", icon: Image },
  { title: "Music & Video", text: "Performance-led visuals that create impact.", icon: Play },
  { title: "Media Production", text: "Shoots, sets, campaigns and creative execution.", icon: Video },
];

export default function ModelsMediaUniverseSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fff5fb_52%,#ffffff_100%)] px-5 py-20 text-black md:px-10">
      <div className="absolute right-[-260px] top-[-220px] h-[650px] w-[650px] rounded-full bg-[#ff2d8d]/10 blur-[170px]" />
      <div className="absolute left-[-220px] bottom-[-180px] h-[520px] w-[520px] rounded-full bg-pink-300/12 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-center">
          <div>
            <p className="mb-6 text-sm font-black uppercase tracking-[0.34em] text-[#ff2d8d]">
              Models, Talent & Media Universe
            </p>

            <h2 className="max-w-[650px] text-[48px] font-black leading-tight tracking-[-0.06em] text-black lg:text-[60px]">
              Models, Media and{" "}
              <span className="bg-gradient-to-r from-[#ff2d8d] to-[#ff6bb5] bg-clip-text text-transparent">
                Creative Talent
              </span>
            </h2>

            <div className="mt-8 h-1 w-24 rounded-full bg-[#ff2d8d]" />

            <p className="mt-8 max-w-[560px] text-[18px] leading-8 text-black/65">
              Worked with 350+ actors and models across films, branding
              campaigns, music videos and creative productions.
            </p>

            <div className="mt-10">
              <p className="text-[76px] font-black leading-none tracking-[-0.08em] text-[#ff2d8d]">
                350+
              </p>

              <p className="mt-3 text-[18px] font-black uppercase tracking-[0.18em] text-black/75">
                Actors & Models
              </p>

              <p className="mt-3 max-w-[430px] text-[17px] leading-7 text-black/62">
                Discovered, directed and transformed for films, campaigns,
                creative shoots and media-led storytelling.
              </p>
            </div>

            <a
              href="/creative"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#ff2d8d] px-8 py-4 text-[16px] font-black text-white shadow-[0_22px_60px_rgba(255,45,141,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#ff4ca2]"
            >
              Explore Talent Universe →
            </a>
          </div>

          <div className="relative grid grid-cols-6 gap-2 overflow-hidden rounded-[34px] bg-white p-2 shadow-[0_35px_120px_rgba(255,45,141,0.13)]">
            <div className="col-span-4 row-span-2 overflow-hidden rounded-[26px]">
              <img
                src={mediaImages.main}
                alt="Models and media universe"
                className="h-full min-h-[430px] w-full object-cover object-center"
              />
            </div>

            <div className="col-span-2 overflow-hidden rounded-[24px]">
              <img
                src={mediaImages.topRight}
                alt="Runway and model showcase"
                className="h-[210px] w-full object-cover object-center"
              />
            </div>

            <div className="col-span-2 overflow-hidden rounded-[24px]">
              <img
                src={mediaImages.middleRight}
                alt="Model and creative team"
                className="h-[210px] w-full object-cover object-center"
              />
            </div>

            <div className="col-span-2 overflow-hidden rounded-[22px]">
              <img
                src={mediaImages.bottomLeft}
                alt="Creative work"
                className="h-[180px] w-full object-cover object-center"
              />
            </div>

            <div className="col-span-2 overflow-hidden rounded-[22px]">
              <img
                src={mediaImages.bottomMiddle}
                alt="Media shoot"
                className="h-[180px] w-full object-cover object-center"
              />
            </div>

            <div className="col-span-2 overflow-hidden rounded-[22px] bg-[#02050b] p-8 text-white">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#ff2d8d]">
                Talent Network
              </p>
              <p className="mt-4 text-[18px] font-semibold leading-7 text-white/72">
                Models, actors and creators shaped into media-ready identities.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 rounded-[30px] border border-black/8 bg-white/82 p-5 shadow-[0_24px_80px_rgba(255,45,141,0.08)] backdrop-blur-xl md:grid-cols-2 lg:grid-cols-6">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="border-black/10 p-5 lg:border-r last:border-r-0"
              >
                <Icon className="mb-5 h-8 w-8 text-[#ff2d8d]" />
                <h3 className="text-[17px] font-black tracking-[-0.03em] text-black">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-6 text-black/58">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}