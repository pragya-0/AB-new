import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Newspaper,
  Calendar,
  Mic,
  Globe2,
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    icon: Newspaper,
    title: "Press Interviews",
    text: "Feature stories, founder interviews, expert opinions and media interactions covering AI, entrepreneurship, innovation, startups and emerging technologies.",
  },
  {
    icon: Mic,
    title: "Keynote Speaking",
    text: "Conference keynotes, university talks, business summits, corporate leadership sessions and technology forums across global audiences.",
  },
  {
    icon: Calendar,
    title: "Media Invitations",
    text: "Television panels, podcasts, fireside chats, roundtables, business magazines and international event participation.",
  },
  {
    icon: Globe2,
    title: "Global Collaborations",
    text: "International partnerships with governments, institutions, innovation ecosystems, accelerators and technology organizations.",
  },
];

export default function PressCTA() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,.22),transparent_34%),radial-gradient(circle_at_82%_78%,rgba(14,165,233,.16),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl shadow-[0_30px_90px_rgba(0,0,0,.35)] sm:p-10 lg:p-14"
        >
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            {/* Left */}

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-300">
                Press & Media
              </p>

              <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Continue the
                <br />
                Conversation.
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
                Over the past three decades, Arijit Bhattacharyya has been
                featured across newspapers, television channels, business
                magazines, international platforms, technology communities and
                startup ecosystems. If you're looking for an experienced
                keynote speaker, AI strategist, entrepreneur, investor, mentor
                or technology thought leader, let's connect.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-full bg-white px-7 py-4 text-sm font-bold text-[#07111f] transition hover:-translate-y-1 hover:bg-blue-100"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Arijit
                </Link>

                <Link
                  to="/speaking"
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:border-blue-400 hover:bg-blue-600"
                >
                  Explore Speaking
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right */}

            <div className="grid gap-5 sm:grid-cols-2">
              {services.map((item, index) => (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.05,
                  }}
                  className="group rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.08]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
                    <item.icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold tracking-[-0.02em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {item.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}