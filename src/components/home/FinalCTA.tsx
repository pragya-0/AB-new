import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const legacyPillars = [
  {
    title: "Technology",
    text: "AI, VR, gaming, blockchain and future-facing digital products.",
  },
  {
    title: "Entrepreneurship",
    text: "Founder ecosystems, startups, investment networks and global platforms.",
  },
  {
    title: "Creativity",
    text: "Books, films, characters, media, storytelling and original IP.",
  },
  {
    title: "Education",
    text: "Students, creators, future skills and practical technology learning.",
  },
];

const legacyImages = [
  {
    src: "/assets/speaking/banner4.jpg",
    alt: "Arijit Bhattacharyya speaking at a global innovation and technology event",
    label: "Global Speaking & Innovation",
  },
  {
    src: "/assets/hero/DD Bangla.jpeg",
    alt: "Arijit Bhattacharyya featured on DD Bangla media platform",
    label: "Media, Public Conversations & Thought Leadership",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function FinalCTA() {
  const [activeImage, setActiveImage] = useState(0);
  const currentImage = legacyImages[activeImage];

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] px-5 py-18 text-[#07111f] md:px-10 md:py-22 lg:py-24">
      <div className="pointer-events-none absolute left-[-220px] top-[-160px] h-[520px] w-[520px] rounded-full bg-[#0057ff]/14 blur-[170px]" />
      <div className="pointer-events-none absolute right-[-180px] bottom-[-180px] h-[480px] w-[480px] rounded-full bg-cyan-400/18 blur-[160px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[240px] bg-gradient-to-t from-[#0057ff]/10 to-transparent" />

      <motion.div
        className="relative z-10 mx-auto max-w-[1500px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        transition={{ staggerChildren: 0.08 }}
      >
        <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center xl:gap-14">
          {/* LEFT CONTENT */}
          <motion.div variants={fadeUp}>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#0057ff] md:text-sm">
              Legacy & Future
            </p>

            <h2 className="max-w-[780px] text-[40px] font-extrabold leading-[0.98] tracking-[-0.06em] text-[#07111f] sm:text-[52px] md:text-[62px]">
              A journey built on technology, people and ideas that keep moving forward.
            </h2>

            <p className="mt-7 max-w-[720px] text-[17px] font-normal leading-8 text-slate-600 md:text-[18px]">
              Since 1998, Arijit Bhattacharyya’s work has connected technology,
              entrepreneurship, creativity, education and global ecosystems into
              one long-term mission: turning knowledge into action and action
              into impact.
            </p>

            <p className="mt-5 max-w-[720px] text-[16px] font-normal leading-8 text-slate-600">
              From Kolkata to international platforms, the story continues
              through mentoring, media conversations, future skills, startup
              ecosystems and technology-led innovation.
            </p>

            <div className="mt-8 grid max-w-[760px] gap-4 sm:grid-cols-2">
              {legacyPillars.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="rounded-[24px] border border-blue-100 bg-white p-5 shadow-[0_18px_55px_rgba(0,87,255,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#0057ff]/25"
                >
                  <h3 className="text-[19px] font-bold tracking-[-0.04em] text-[#07111f]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] font-normal leading-7 text-slate-500">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-[26px] border border-[#0057ff]/12 bg-[#0057ff]/6 p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#0057ff]">
                Built From Kolkata. Connected To The World.
              </p>

              <p className="mt-3 max-w-[680px] text-[16px] font-normal leading-8 text-slate-600">
                The next chapter continues across AI, deep technology, media,
                learning platforms, startup ecosystems and global collaboration.
              </p>
            </div>

            <div className="mt-8">
              <Link
                to="/mentoring"
                aria-label="Invite Arijit Bhattacharyya to mentor founders, students or innovation teams"
                className="inline-flex items-center justify-center rounded-full bg-[#0057ff] px-9 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_18px_50px_rgba(0,87,255,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#0b66ff] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#f8fafc]"
              >
                Invite To Mentor →
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE CAROUSEL */}
          <motion.div variants={fadeUp} className="relative">
            <div className="absolute -inset-6 rounded-[42px] bg-[#0057ff]/14 blur-3xl" />

            <div className="relative overflow-hidden rounded-[34px] border border-blue-100 bg-white p-3 shadow-[0_36px_110px_rgba(0,87,255,0.14)]">
              <div className="relative overflow-hidden rounded-[26px] bg-[#07111f]">
                {/* Soft background fill */}
                <img
                  src={currentImage.src}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full scale-110 object-cover object-center opacity-32 blur-2xl"
                />

                <div className="absolute inset-0 bg-[#07111f]/22" />

                {/* Main image fully visible */}
                <motion.img
                  key={currentImage.src}
                  src={currentImage.src}
                  alt={currentImage.alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="relative z-10 h-[340px] w-full object-contain object-center p-2 sm:h-[430px] md:h-[500px] lg:h-[540px]"
                />
              </div>

              {/* Clean caption below image — no text over image */}
              <div className="flex flex-col gap-4 px-2 py-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0057ff]">
                    {currentImage.label}
                  </p>

                  <p className="mt-2 max-w-[560px] text-[15px] font-normal leading-7 text-slate-600">
                    A body of work connecting technology, media, mentorship and
                    entrepreneurship into one future-facing ecosystem.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {legacyImages.map((image, index) => {
                    const isActive = index === activeImage;

                    return (
                      <button
                        key={image.src}
                        type="button"
                        aria-label={`Show legacy image ${index + 1}`}
                        onClick={() => setActiveImage(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          isActive
                            ? "w-8 bg-[#0057ff]"
                            : "w-2.5 bg-slate-300 hover:bg-slate-400"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
