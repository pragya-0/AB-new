import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Globe2,
  Handshake,
  Mail,
  Newspaper,
  Network,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const staggerWrap = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const authorityCards = [
  {
    icon: Newspaper,
    title: "Media & Press",
    text: "Founder interviews, business features, technology opinions and public media conversations.",
  },
  {
    icon: Handshake,
    title: "Mentoring & Advisory",
    text: "Startup guidance, founder mentoring, innovation advisory and institutional programs.",
  },
  {
    icon: Network,
    title: "Ecosystem Building",
    text: "Accelerators, chambers, universities, investor networks and entrepreneurship platforms.",
  },
  {
    icon: Globe2,
    title: "Global Platforms",
    text: "International forums, diplomatic networks and cross-border innovation ecosystems.",
  },
];

const proofStats = [
  "Founder since 1998",
  "Mentor & investor",
  "VR • AR • AI",
  "Global platforms",
];

export default function PressCTA() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(37,99,235,.24),transparent_34%),radial-gradient(circle_at_86%_78%,rgba(14,165,233,.16),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-[0_30px_90px_rgba(0,0,0,.38)] backdrop-blur-xl sm:rounded-[2.4rem]"
        >
          <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
            <div className="relative border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10 xl:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(37,99,235,.18),transparent_42%)]" />

              <div className="relative">
                <p className="inline-flex items-center rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-200 sm:text-[11px]">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Press • Mentoring • Ecosystems
                </p>

                <h2 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1] tracking-[-0.045em] text-white sm:text-5xl lg:text-[3.35rem] xl:text-6xl">
                  Connect with Arijit for media, mentoring and global ecosystem work.
                </h2>

                <p className="mt-6 max-w-2xl text-base font-normal leading-8 text-slate-300 sm:text-lg">
                  Arijit Bhattacharyya brings together decades of work across{" "}
                  <span className="font-semibold text-white">
                    entrepreneurship, investment, startup mentoring, VR, AR, AI,
                    gaming, media, innovation and international technology ecosystems.
                  </span>{" "}
                  The press archive reflects a larger body of work across founders,
                  institutions, business communities and global platforms.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {proofStats.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <motion.div
                  variants={staggerWrap}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.22 }}
                  className="mt-8 grid gap-3 sm:grid-cols-2"
                >
                  {authorityCards.map((item) => (
                    <motion.article
                      key={item.title}
                      variants={fadeUp}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      whileHover={{ y: -5 }}
                      className="rounded-[1.25rem] border border-white/10 bg-black/20 p-4 transition duration-300 hover:border-blue-300/35 hover:bg-white/[0.07] sm:p-5"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-950/30">
                        <item.icon className="h-5 w-5" />
                      </div>

                      <h3 className="mt-4 text-base font-bold tracking-[-0.02em] text-white sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm font-normal leading-6 text-slate-300">
                        {item.text}
                      </p>
                    </motion.article>
                  ))}
                </motion.div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#07111f] transition hover:-translate-y-1 hover:bg-blue-100"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Connect With Arijit
                  </Link>

                  <Link
                    to="/mentoring"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-600"
                  >
                    Explore Mentoring
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative p-6 sm:p-8 lg:p-10 xl:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(37,99,235,.14),transparent_34%)]" />

              <motion.div
                variants={staggerWrap}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative grid h-full gap-4"
              >
                <motion.article
                  variants={fadeUp}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  whileHover={{ y: -5 }}
                  className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#07111f] shadow-[0_24px_80px_rgba(0,0,0,.26)]"
                >
                  <div className="relative bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,.16),transparent_36%),#050b16] p-5 sm:p-6">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
                        International Profile
                      </span>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-950/30">
                        <BriefcaseBusiness className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="rounded-[1.35rem] border border-white/10 bg-white p-3 shadow-[0_30px_70px_rgba(0,0,0,.32)]">
                      <img
                        src="/assets/pressnews/diplomatic-world-two.jpg"
                        alt="Diplomatic World magazine feature profile of Arijit Bhattacharyya"
                        loading="lazy"
                        className="h-auto w-full rounded-[1rem] object-contain"
                      />
                    </div>
                  </div>

                  <div className="border-t border-white/10 bg-white/[0.045] p-6 lg:p-7">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-200">
                      Diplomatic World
                    </p>

                    <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl">
                      International Profile Feature
                    </h3>

                    <p className="mt-4 text-sm font-normal leading-7 text-slate-300 sm:text-base">
                      A profile-style international feature supporting Arijit
                      Bhattacharyya’s public credibility across business, innovation,
                      diplomacy, entrepreneurship and global platforms.
                    </p>
                  </div>
                </motion.article>

                <div className="grid gap-4 sm:grid-cols-2">
                  <motion.div
                    variants={fadeUp}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    whileHover={{ y: -5 }}
                    className="rounded-[1.45rem] border border-white/10 bg-white/[0.06] p-5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#07111f]">
                      <Building2 className="h-5 w-5" />
                    </div>

                    <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-200">
                      For institutions
                    </p>

                    <h4 className="mt-2 text-xl font-bold tracking-[-0.03em] text-white">
                      Advisory, mentoring and ecosystem programs.
                    </h4>
                  </motion.div>

                  <motion.div
                    variants={fadeUp}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    whileHover={{ y: -5 }}
                    className="rounded-[1.45rem] border border-white/10 bg-white/[0.06] p-5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#07111f]">
                      <Newspaper className="h-5 w-5" />
                    </div>

                    <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-200">
                      For media
                    </p>

                    <h4 className="mt-2 text-xl font-bold tracking-[-0.03em] text-white">
                      Interviews, profiles and expert commentary.
                    </h4>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}