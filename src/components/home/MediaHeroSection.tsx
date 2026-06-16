export default function MediaHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f8f8] px-5 pt-20 pb-24">
      <div className="absolute right-[-120px] top-[-120px] h-[680px] w-[680px] rounded-full bg-[#1b5cff]/18 blur-[170px]" />
      <div className="absolute bottom-[-160px] left-[45%] h-[460px] w-[760px] rounded-full bg-[#1b5cff]/12 blur-[170px]" />

      <div className="relative z-10 mx-auto grid max-w-[1740px] items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="max-w-[700px]">
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

          <p className="mt-8 max-w-[640px] text-[20px] leading-[2] text-[#5c6673]">
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

        <div className="relative flex min-h-[660px] items-center justify-center">
          <div className="absolute h-[610px] w-[610px] rounded-full bg-[#1b5cff]/28 blur-[150px]" />
          <div className="absolute h-[535px] w-[535px] rounded-full border border-[#1b5cff]/15" />

          <div className="relative z-10 overflow-hidden rounded-[48%] border border-white bg-white p-3 shadow-[0_45px_120px_rgba(27,92,255,0.32)]">
            <img
              src="/assets/press/vr.jpg"
              alt="Arijit Bhattacharyya"
              className="h-[620px] w-[520px] scale-[1.24] object-cover object-[center_24%]"
            />
          </div>

          <div className="absolute left-[4%] top-[78px] z-20 rotate-[-10deg] overflow-hidden rounded-[18px] bg-white p-2 shadow-[0_25px_65px_rgba(0,0,0,0.22)]">
            <img
              src="/assets/press/economic-times.jpg"
              alt="Economic Times"
              className="h-[165px] w-[120px] object-cover"
            />
          </div>

          <div className="absolute right-[5%] top-[82px] z-20 rotate-[10deg] overflow-hidden rounded-[18px] bg-white p-2 shadow-[0_25px_65px_rgba(0,0,0,0.22)]">
            <img
              src="/assets/press/timesofindia-s.jpg"
              alt="Times of India"
              className="h-[165px] w-[120px] object-cover"
            />
          </div>

          <div className="absolute bottom-[72px] left-[8%] z-20 rotate-[-8deg] overflow-hidden rounded-[18px] bg-white p-2 shadow-[0_25px_65px_rgba(0,0,0,0.22)]">
            <img
              src="/assets/press/cnbc.jpg"
              alt="CNBC"
              className="h-[150px] w-[118px] object-cover object-center"
            />
          </div>

          <div className="absolute bottom-[82px] right-[6%] z-20 rotate-[10deg] overflow-hidden rounded-[18px] bg-white p-2 shadow-[0_25px_65px_rgba(0,0,0,0.22)]">
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