export default function MediaHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f8f8] px-5 pt-20 pb-36">
      <div className="absolute right-[-120px] top-[-120px] h-[620px] w-[620px] rounded-full bg-[#1b5cff]/14 blur-[140px]" />
      <div className="absolute bottom-[-160px] left-[45%] h-[420px] w-[720px] rounded-full bg-[#1b5cff]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto grid max-w-[1740px] items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left */}
        <div className="max-w-[650px]">
          <p className="mb-6 text-[15px] font-bold uppercase tracking-[0.45em] text-[#1b5cff]">
            Press & Media
          </p>

          <h2 className="text-[56px] font-bold leading-[0.98] tracking-[-0.055em] text-black sm:text-[68px] xl:text-[82px]">
            Stories,
            <br />
            Recognition &
            <br />
            <span className="text-[#1b5cff]">Global Conversations</span>
          </h2>

          <p className="mt-8 max-w-[620px] text-[20px] leading-[1.9] text-[#5c6673]">
            Over the years, Arijit Bhattacharyya&apos;s work in
            entrepreneurship, emerging technologies and global innovation has
            been featured across leading newspapers, television channels and
            business publications.
          </p>

          <div className="mt-11 flex flex-wrap gap-5">
            <button className="h-[64px] rounded-full bg-[#1b5cff] px-11 text-[17px] font-semibold text-white transition hover:bg-[#0048ff]">
              Explore Media →
            </button>

            <button className="h-[64px] rounded-full border border-[#1b5cff]/20 bg-white px-11 text-[17px] font-semibold text-black transition hover:border-[#1b5cff] hover:text-[#1b5cff]">
              Watch Interviews
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex min-h-[640px] items-center justify-center">
          <div className="absolute h-[570px] w-[570px] rounded-full bg-[#1b5cff]/24 blur-[95px]" />
          <div className="absolute h-[520px] w-[520px] rounded-full border border-[#1b5cff]/15" />

          {/* Main Oval Image */}
          <div className="relative z-10 overflow-hidden rounded-[48%] border border-white bg-white p-3 shadow-[0_35px_100px_rgba(27,92,255,0.28)]">
            <img
              src="/assets/press/vr.jpg"
              alt="Arijit Bhattacharyya"
              className="h-[620px] w-[520px] scale-[1.18] object-cover object-[center_28%]"
            />
          </div>

          {/* Top Left Card */}
          <div className="absolute left-[-2%] top-[105px] z-20 rotate-[-11deg] overflow-hidden rounded-[18px] bg-white p-2 shadow-[0_25px_65px_rgba(0,0,0,0.22)]">
            <img
              src="/assets/press/economic-times.jpg"
              alt="Economic Times"
              className="h-[165px] w-[120px] object-cover"
            />
          </div>

          {/* Top Right Card */}
          <div className="absolute right-[0%] top-[105px] z-20 rotate-[10deg] overflow-hidden rounded-[18px] bg-white p-2 shadow-[0_25px_65px_rgba(0,0,0,0.22)]">
            <img
              src="/assets/press/timesofindia-s.jpg"
              alt="Times of India"
              className="h-[165px] w-[120px] object-cover"
            />
          </div>

          {/* Bottom Left CNBC */}
          <div className="absolute bottom-[92px] left-[5%] z-20 rotate-[-8deg] overflow-hidden rounded-[18px] bg-white p-2 shadow-[0_25px_65px_rgba(0,0,0,0.22)]">
            <img
              src="/assets/press/cnbc.jpg"
              alt="CNBC"
              className="h-[150px] w-[118px] object-cover object-center"
            />
          </div>

          {/* Bottom Right TV9 */}
        <div className="absolute bottom-[115px] right-[5%] z-20 rotate-[10deg] overflow-hidden rounded-[18px] bg-white p-2 shadow-[0_25px_65px_rgba(0,0,0,0.22)]">
           <img
  src="/assets/press/TV9-2.png"
  alt="TV9 Bangla"
  className="h-[160px] w-[130px] object-cover object-[82%_center]"
/>
          </div>
        </div>
      </div>
    </section>
  );
}