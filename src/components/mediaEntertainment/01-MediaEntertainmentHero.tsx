import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Film, Gamepad2, Globe2, Sparkles } from "lucide-react";

const me = "/assets/media-entertainment/";

const slides = [
  {
    label: "Cosplay & Character Culture",
    title: "Films, Games, Celebrities & Digital Worlds.",
    text: "Since 1998, Arijit Bhattacharyya has connected cinema, gaming, animation, virtual reality, cosplay communities, celebrity collaborations and original entertainment IP.",
    image: `${me}cosplay-kolkata.jpg`,
    alt: "Cosplay stage organised by Arijit Bhattacharyya showcasing character culture and entertainment technology",
  },
  {
    label: "China Film Festival",
    title: "Indian creative technology on global film stages.",
    text: "From China Film Festival and Xian speaker platforms to short film events and creative markets, the journey expanded across film, games and immersive media.",
    image: `${me}China_film_fest.jpg`,
    alt: "Arijit Bhattacharyya speaking at China Film Festival on media entertainment and film technology",
  },
  {
    label: "Movie-Based Games",
    title: "When film promotion became interactive entertainment.",
    text: "Movie properties and actors entered digital media through projects connected with Boss 2, Shaktimaan, Raaz, Bizli and regional film promotions.",
    image: `${me}Jeet_Arijit_Bhattacharyya.jpg`,
    alt: "Actor Jeet with Arijit Bhattacharyya during Boss 2 movie based game promotion",
  },
  {
    label: "Entertainment Collaborations",
    title: "Actors, festivals, games and future media in one ecosystem.",
    text: "The media journey brings together film personalities, industry conversations, game talks, cosplay, modelling and digital human production.",
    image: `${me}Dev_Arijit.jpg`,
    alt: "Actor Dev with Arijit Bhattacharyya during entertainment technology and game discussion",
  },
  {
    label: "Future Media",
    title: "AI cinema, epic worlds and digital humans.",
    text: "The newest chapter moves toward GenAI films, AI-assisted visuals, sci-fi worlds, epic-led cinema, virtual characters and interactive screen experiences.",
    image: `${me}WhatsApp Image 2026-06-16 at 19.28.41.jpeg`,
    alt: "Ashwathama AI film and future media poster from Arijit Bhattacharyya entertainment universe",
  },
];

const proof = [
  {
    icon: Film,
    value: "29+",
    label: "Years in media technology",
  },
  {
    icon: Gamepad2,
    value: "500+",
    label: "Games, VR and AR work",
  },
  {
    icon: Sparkles,
    value: "350+",
    label: "Characters and models",
  },
  {
    icon: Globe2,
    value: "Global",
    label: "Film and creative stages",
  },
];

export default function MediaEntertainmentHero() {
  const [active, setActive] = useState(0);
  const current = slides[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % slides.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#03070d] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(37,99,235,.28),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(14,165,233,.16),transparent_32%),linear-gradient(180deg,#03070d_0%,#07111f_54%,#03070d_100%)]" />

      <AnimatePresence mode="wait">
        <motion.img
          key={current.image}
          src={current.image}
          alt=""
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 0.12, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,#03070d_0%,rgba(3,7,13,.96)_36%,rgba(3,7,13,.72)_68%,rgba(3,7,13,.95)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#03070d] to-transparent" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-20 pt-28 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          

          <AnimatePresence mode="wait">
            <motion.div
              key={current.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
            >
             <p className="inline-flex rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
  {current.label}
</p>

              <h1 className="mt-5 text-5xl font-extrabold leading-[0.9] tracking-tight sm:text-6xl xl:text-7xl">
                {current.title.includes("Films") ? (
                  <>
                    The Intersection of
                    <span className="block text-blue-400">Films, Games,</span>
                    Celebrities &
                    <span className="block">Digital Worlds.</span>
                  </>
                ) : (
                  current.title
                )}
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {current.text}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-9 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {proof.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur"
                >
                  <Icon className="h-5 w-5 text-blue-300" aria-hidden="true" />
                  <p className="mt-4 text-2xl font-extrabold text-white">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase leading-5 tracking-[0.15em] text-slate-300">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75 }}
          className="lg:justify-self-end"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-3 shadow-[0_30px_100px_rgba(0,0,0,.45)] backdrop-blur sm:rounded-[2.4rem] sm:p-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,.18),transparent_45%)]" />

            <figure className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#05070b]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.image}
                  src={current.image}
                  alt={current.alt}
                  initial={{ opacity: 0, scale: 1.035 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.985 }}
                  transition={{ duration: 0.55 }}
                  className="h-[340px] w-full object-contain p-3 sm:h-[470px] lg:h-[560px]"
                  loading="eager"
                />
              </AnimatePresence>

              <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                Founder Documentary
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                  Creative Entertainment Ecosystem
                </p>
                <h2 className="mt-2 max-w-xl text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Films, Games, Celebrities, Cosplay & Digital Humans
                </h2>
              </div>
            </figure>

            <div className="relative mt-4 grid grid-cols-5 gap-2" aria-label="Hero carousel position">
              {slides.map((slide, index) => (
                <button
                  key={slide.label}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-1.5 rounded-full transition focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                    active === index ? "bg-blue-400" : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Show ${slide.label}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
