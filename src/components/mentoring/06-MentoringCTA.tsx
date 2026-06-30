import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

import SmartImage from "../bio/SmartImage";
import { fadeUp } from "../bio/bioMotion";

const asset = "/assets/mentoring/";

const discussionAreas = [
  "Startup Mentoring",
  "Fundraising",
  "AI Transformation",
  "Global Expansion",
  "Institutional Advisory",
  "Private Equity Readiness",
];

export default function MentoringCTA() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-12 text-white sm:px-6 md:px-10 md:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,87,255,0.18),transparent_34%),radial-gradient(circle_at_82%_25%,rgba(56,189,248,0.08),transparent_32%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <motion.div
          {...fadeUp}
          className="overflow-hidden rounded-[28px] border border-[#58a0ff]/20 bg-[#07101f] shadow-[0_30px_100px_rgba(0,87,255,0.16)] md:rounded-[38px]"
        >
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-6 sm:p-7 md:p-9 xl:p-11">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#8bb7ff]">
                Mentoring & Advisory
              </p>

              <h2 className="max-w-[780px] text-[38px] font-extrabold leading-[0.98] tracking-[-0.05em] text-white sm:text-[46px] md:text-[58px]">
                Ready to discuss your next business challenge?
              </h2>

              <p className="mt-6 max-w-[820px] text-[16px] font-normal leading-[1.85] tracking-[-0.01em] text-white/72 md:text-[18px]">
                Bring a real business question. Whether you are preparing for
                fundraising, entering a new market, modernising legacy systems,
                adopting AI, improving operating margins or expanding
                internationally, the discussion is focused on practical
                execution — not generic advice.
              </p>

              <p className="mt-4 max-w-[800px] text-[15px] font-normal leading-[1.8] text-white/62 md:text-[17px]">
                Useful for startup founders, SMEs, MSMEs, manufacturing
                companies, institutional programs, accelerators and
                growth-stage businesses looking for strategic clarity.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {discussionAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/20 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-white/76 sm:text-[11px]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="mailto:arijit@virtualinfocom.net"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0057ff] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.17em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#1f6fff]"
                >
                  <Mail size={16} />
                  Email Arijit
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.08] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.17em] text-white transition duration-300 hover:-translate-y-1 hover:bg-white/14"
                >
                  Open Contact Page
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="flex items-center bg-[#03070d] p-5 sm:p-6 lg:p-7">
              <div className="w-full overflow-hidden rounded-[26px] border border-white/10 bg-black md:rounded-[32px]">
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <SmartImage
                    src={`${asset}banner6-1.jpg`}
                    alt="Arijit Bhattacharyya mentoring advisory for startup scale-up fundraising AI transformation technology upgrade and international market expansion"
                    className="h-full w-full object-contain object-center"
                  />
                </div>

                <div className="border-t border-white/10 bg-black/72 p-5 md:p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8bb7ff]">
                    Contact
                  </p>

                  <h3 className="mt-3 text-[28px] font-bold leading-[1] tracking-[-0.04em] text-white md:text-[38px]">
                    Connect With Arijit
                  </h3>

                  <p className="mt-4 text-[14px] font-normal leading-7 text-white/70 md:text-[15px]">
                    Discuss fundraising, business scalability, AI
                    transformation, legacy-system modernization, manufacturing
                    growth, banking digital transformation, international
                    expansion or strategic partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
