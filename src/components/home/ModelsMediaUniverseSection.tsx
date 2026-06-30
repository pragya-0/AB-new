import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clapperboard,
  Gamepad2,
  Image as ImageIcon,
  Play,
  UserRound,
  Video,
} from "lucide-react";

const mediaEntertainmentRoute = "/media-entertainment";

const mediaImages = {
  main: "/assets/gallery/Subhasree_Arijit.jpg",
  topRight: "/assets/gallery/model-runway-01.jpeg",
  middleRight: "/assets/gallery/cosplay.jpg",
  bottomLeft: "/assets/gallery/model-team-01.jpeg",
  bottomMiddle: "/assets/gallery/model-work-02.jpeg",
};

const carouselImages = [
  {
    src: mediaImages.topRight,
    alt: "Runway and model showcase connected with Arijit Bhattacharyya media universe",
  },
  {
    src: mediaImages.middleRight,
    alt: "Cosplay and creative character work connected with Arijit Bhattacharyya media entertainment universe",
  },
];

const capabilities = [
  {
    title: "Films & Media Shoots",
    text: "Concept to camera-ready production.",
    icon: Clapperboard,
  },
  {
    title: "Models & Talent",
    text: "Discovering, grooming and creating faces.",
    icon: UserRound,
  },
  {
    title: "Creative Characters",
    text: "Transforming people into memorable roles.",
    icon: Gamepad2,
  },
  {
    title: "Brand Campaigns",
    text: "Visual identities, faces and promotional stories.",
    icon: ImageIcon,
  },
  {
    title: "Music & Video",
    text: "Performance-led visuals that create impact.",
    icon: Play,
  },
  {
    title: "Media Production",
    text: "Shoots, sets, campaigns and creative execution.",
    icon: Video,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function TalentImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`group relative overflow-hidden bg-[#070711] ${className}`}>
      <img
        src={src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full scale-110 object-cover object-center opacity-55 blur-xl transition duration-[6500ms] group-hover:scale-125"
        onError={(event) => {
          event.currentTarget.src = mediaImages.main;
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-black/28" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,45,141,0.2),transparent_48%)]" />

      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="relative z-10 h-full w-full object-contain object-center p-1 transition duration-[6500ms] group-hover:scale-[1.018] sm:p-1.5"
        onError={(event) => {
          event.currentTarget.src = mediaImages.main;
        }}
      />
    </div>
  );
}

function TalentCarousel({ className = "" }: { className?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % carouselImages.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  const activeImage = carouselImages[activeIndex];

  return (
    <div className={`group relative overflow-hidden bg-[#070711] ${className}`}>
      <img
        key={`${activeImage.src}-blur`}
        src={activeImage.src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full scale-110 object-cover object-center opacity-55 blur-xl transition duration-[6500ms] group-hover:scale-125"
        onError={(event) => {
          event.currentTarget.src = mediaImages.main;
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-black/30" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,45,141,0.22),transparent_48%)]" />

      <motion.img
        key={activeImage.src}
        src={activeImage.src}
        alt={activeImage.alt}
        loading="lazy"
        decoding="async"
        initial={{ opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55 }}
        className="relative z-10 h-full w-full object-contain object-center p-1.5 transition duration-[6500ms] group-hover:scale-[1.018] sm:p-2"
        onError={(event) => {
          event.currentTarget.src = mediaImages.main;
        }}
      />

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/35 px-3 py-2 backdrop-blur-md">
        {carouselImages.map((image, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={image.src}
              type="button"
              aria-label={`Show carousel image ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                isActive ? "w-6 bg-[#ff2d8d]" : "w-2 bg-white/45"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function ModelsMediaUniverseSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fff5fb_52%,#ffffff_100%)] px-4 py-16 text-black sm:px-6 sm:py-20 md:px-10 md:py-24">
      <div className="pointer-events-none absolute right-[-260px] top-[-220px] h-[650px] w-[650px] rounded-full bg-[#ff2d8d]/10 blur-[170px]" />
      <div className="pointer-events-none absolute bottom-[-180px] left-[-220px] h-[520px] w-[520px] rounded-full bg-pink-300/12 blur-[150px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,45,141,0.08),transparent_42%)]" />

      <motion.div
        className="relative z-10 mx-auto max-w-[1500px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.14 }}
        transition={{ staggerChildren: 0.08 }}
      >
        <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-center">
          <div>
            <motion.p
              variants={fadeUp}
              className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ff2d8d] sm:text-sm sm:tracking-[0.34em]"
            >
              Models, Talent & Media Universe
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="max-w-[680px] text-[36px] font-extrabold leading-[1.04] tracking-[-0.06em] text-black sm:text-[48px] lg:text-[60px]"
            >
              Models, Media and{" "}
              <span className="bg-gradient-to-r from-[#ff2d8d] to-[#ff6bb5] bg-clip-text text-transparent">
                Creative Talent
              </span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="mt-7 h-1 w-24 rounded-full bg-[#ff2d8d]"
            />

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-[580px] text-[16px] font-normal leading-8 text-black/65 sm:text-[18px]"
            >
              Worked with 360+ actors and models across films, branding
              campaigns, music videos and creative productions.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9">
              <p className="text-[60px] font-extrabold leading-none tracking-[-0.08em] text-[#ff2d8d] sm:text-[76px]">
                360+
              </p>

              <p className="mt-3 text-[14px] font-bold uppercase tracking-[0.16em] text-black/75 sm:text-[18px] sm:tracking-[0.18em]">
                Actors & Models
              </p>

              <p className="mt-3 max-w-[450px] text-[16px] font-normal leading-7 text-black/62 sm:text-[17px]">
                Discovered, directed and transformed for films, campaigns,
                creative shoots and media-led storytelling.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link
                to={mediaEntertainmentRoute}
                aria-label="Explore talent, models and media entertainment universe by Arijit Bhattacharyya"
                className="mt-9 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#ff2d8d] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_22px_60px_rgba(255,45,141,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#ff4ca2] focus:outline-none focus:ring-2 focus:ring-pink-300 sm:w-auto"
              >
                Explore Talent Universe
                <ArrowUpRight size={17} />
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="relative grid grid-cols-2 gap-2 overflow-hidden rounded-[28px] bg-white p-2 shadow-[0_35px_120px_rgba(255,45,141,0.13)] sm:grid-cols-6 sm:rounded-[34px]"
          >
            <TalentImage
              src={mediaImages.main}
              alt="Arijit Bhattacharyya with actor Subhashree Ganguly in media entertainment work"
              className="col-span-2 min-h-[320px] rounded-[24px] sm:col-span-4 sm:row-span-2 sm:min-h-[430px] sm:rounded-[26px] lg:min-h-[460px]"
            />

            <TalentCarousel className="col-span-2 h-[260px] rounded-[20px] sm:col-span-2 sm:row-span-2 sm:h-[430px] sm:rounded-[24px] lg:h-[460px]" />

            <TalentImage
              src={mediaImages.bottomLeft}
              alt="Model and creative team for media production"
              className="col-span-1 h-[170px] rounded-[20px] sm:col-span-2 sm:h-[190px] sm:rounded-[22px] lg:h-[205px]"
            />

            <TalentImage
              src={mediaImages.bottomMiddle}
              alt="Media shoot and creative production"
              className="col-span-1 h-[170px] rounded-[20px] sm:col-span-2 sm:h-[190px] sm:rounded-[22px] lg:h-[205px]"
            />

            <div className="col-span-2 rounded-[22px] bg-[#02050b] p-6 text-white sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ff2d8d] sm:text-sm">
                Talent Network
              </p>

              <p className="mt-4 text-[16px] font-normal leading-7 text-white/72 sm:text-[18px]">
                Models, actors and creators shaped into media-ready identities.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-14 grid gap-4 rounded-[28px] border border-black/8 bg-white/82 p-5 shadow-[0_24px_80px_rgba(255,45,141,0.08)] backdrop-blur-xl sm:rounded-[30px] md:grid-cols-2 xl:grid-cols-6"
        >
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`rounded-[22px] border border-black/8 bg-white/70 p-5 xl:rounded-none xl:border-0 xl:bg-transparent ${
                  index !== capabilities.length - 1 ? "xl:border-r" : ""
                }`}
              >
                <Icon className="mb-5 h-8 w-8 text-[#ff2d8d]" />

                <h3 className="text-[17px] font-bold tracking-[-0.03em] text-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-[14px] font-normal leading-6 text-black/58">
                  {item.text}
                </p>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
