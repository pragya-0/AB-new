import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function InvestmentSupportCTA() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-16 text-white sm:px-6 sm:py-20 md:py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.24),transparent_34%),radial-gradient(circle_at_82%_70%,rgba(14,165,233,0.14),transparent_34%),linear-gradient(180deg,#03070d_0%,#07111f_55%,#03070d_100%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur sm:rounded-[2rem] sm:p-8 md:p-10 lg:p-14"
        >
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300 sm:text-sm sm:tracking-[0.28em]">
                Investment Support
              </p>

              <h2 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Looking for angel investment, venture capital support or
                international market expansion? Let&apos;s talk.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
                Start a direct conversation about scale-up strategy,
                international market expansion, investor connections, startup
                growth, strategic partnerships and ecosystem building.
              </p>
            </div>

            <div className="rounded-[1.25rem] border border-white/10 bg-[#07111f]/80 p-5 sm:rounded-[1.5rem] sm:p-7 lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300 sm:text-sm sm:tracking-[0.22em]">
                Direct Contact
              </p>

              <a
                href="mailto:arijit@virtualinfocom.net"
                className="mt-5 flex flex-col gap-4 rounded-2xl bg-white p-5 text-[#03070d] transition hover:bg-blue-100 min-[420px]:flex-row min-[420px]:items-center"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Mail size={22} />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 sm:text-sm">
                    Email
                  </span>
                  <span className="block break-words text-base font-bold sm:text-lg">
                    arijit@virtualinfocom.net
                  </span>
                </span>
              </a>

              <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                {[
                  "Angel Investment",
                  "Venture Capital",
                  "Startup Bengal",
                  "Market Expansion",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-200 sm:px-4 sm:text-xs sm:tracking-[0.14em]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href="mailto:arijit@virtualinfocom.net"
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-500 sm:px-7 sm:py-4"
              >
                Email Arijit <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
