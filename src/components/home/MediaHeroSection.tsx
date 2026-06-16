const heroImage = {
  image: "/assets/speaking/arijit-dubai-ai-blockchain-.jpg.jpeg",
  eyebrow: "Dubai · UAE",
  label: "AI & Blockchain Summit",
};

export default function MediaHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f8f8] px-5 pt-20 pb-14">
      <div className="absolute right-[-160px] top-[-140px] h-[720px] w-[720px] rounded-full bg-[#1b5cff]/18 blur-[180px]" />

      <div className="relative z-10 mx-auto grid max-w-[1740px] items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="max-w-[720px]">
          <p className="mb-6 text-[14px] font-bold uppercase tracking-[0.45em] text-[#1b5cff]">
            Press & Media
          </p>

          <h2 className="text-[60px] font-black leading-[0.95] tracking-[-0.06em] text-black sm:text-[72px] xl:text-[88px]">
            Stories,
            <br />
            Recognition &
            <br />
            <span className="text-[#1b5cff]">Global Conversations</span>
          </h2>

          <p className="mt-8 max-w-[580px] text-[20px] leading-[2] text-[#5c6673]">
            Over the years, Arijit Bhattacharyya&apos;s work in
            entrepreneurship, emerging technologies and global innovation has
            been featured across leading newspapers, television channels and
            business publications.
          </p>

          <div className="mt-11 flex flex-wrap gap-5">
            <button className="h-[64px] rounded-full bg-[#1b5cff] px-11 text-[17px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#0048ff] hover:shadow-[0_18px_45px_rgba(27,92,255,0.28)]">
              Explore Media →
            </button>

            <button className="h-[64px] rounded-full border border-[#1b5cff]/20 bg-white px-11 text-[17px] font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:border-[#1b5cff] hover:text-[#1b5cff] hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              Watch Interviews
            </button>
          </div>
        </div>

        <div className="relative min-h-[560px]">
          <div className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1b5cff]/30 blur-[180px]" />

          <div className="absolute right-0 top-[44px] h-[440px] w-full max-w-[800px] overflow-hidden rounded-[42px] shadow-[0_45px_120px_rgba(27,92,255,0.34)]">
            <img
              src={heroImage.image}
              alt={heroImage.label}
              className="h-full w-full object-cover object-center transition duration-700 hover:scale-[1.03]"
            />

            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/82 via-black/30 to-transparent" />

            <div className="absolute bottom-7 left-7">
              <p className="mb-2 text-xs font-black uppercase tracking-[0.35em] text-[#7fb0ff]">
                {heroImage.eyebrow}
              </p>
              <p className="text-[24px] font-black leading-tight text-white">
                {heroImage.label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}