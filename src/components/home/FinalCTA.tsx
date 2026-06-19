const legacyPillars = [
  { title: "Technology", text: "AI • VR • Gaming • Blockchain" },
  { title: "Entrepreneurship", text: "Founders • Startups • Global Ecosystems" },
  { title: "Creativity", text: "Books • Films • Characters • Media" },
  { title: "Education", text: "Students • Creators • Future Skills" },
];

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] px-5 py-28 md:px-10">
      {/* blue glows */}
      <div className="absolute left-[-200px] top-[-150px] h-[500px] w-[500px] rounded-full bg-[#0057ff]/15 blur-[170px]" />

      <div className="absolute right-[-150px] bottom-[-150px] h-[450px] w-[450px] rounded-full bg-cyan-400/20 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* LEFT */}
          <div>
            <p className="mb-6 text-xs font-black uppercase tracking-[0.35em] text-[#0057ff] md:text-sm">
              Legacy & Future
            </p>

            <h2 className="max-w-[720px] text-[42px] font-black leading-[0.95] tracking-[-0.065em] text-[#07111f] md:text-[64px]">
              Ideas Become Powerful When They Inspire Others.
            </h2>

            <p className="mt-8 max-w-[650px] text-[18px] leading-8 text-slate-600">
              Across technology, entrepreneurship, creativity and education,
              Arijit Bhattacharyya has spent more than two decades building
              communities, mentoring founders and connecting innovation with
              real-world impact.
            </p>

            {/* cards */}
            <div className="mt-10 grid max-w-[720px] gap-5 sm:grid-cols-2">
              {legacyPillars.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-blue-100 bg-white p-6 shadow-xl shadow-blue-100/40"
                >
                  <h3 className="text-[20px] font-black text-[#07111f]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-7 text-slate-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
  <a
    href="/speaking"
    className="rounded-full bg-[#0057ff] px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#0b66ff]"
  >
    Invite To Speak →
  </a>

  <a
    href="/contact"
    className="rounded-full border border-[#4d8cff]/35 bg-[#0057ff]/10 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#8bb7ff] transition duration-300 hover:-translate-y-1 hover:bg-[#0057ff] hover:text-white"
  >
    Get In Touch →
  </a>
</div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute -inset-8 rounded-[50px] bg-[#0057ff]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[40px] border border-blue-100 bg-white p-3 shadow-[0_40px_120px_rgba(0,87,255,0.15)]">
              <img
                src="/assets/speaking/banner4.jpg"
                alt="Arijit Bhattacharyya"
                className="h-[400px] w-full rounded-[32px] object-cover md:h-[560px]"
              />

              <div className="absolute inset-3 rounded-[32px] bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#8bb7ff]">
                  Art × Technology × Entrepreneurship
                </p>

                <h3 className="mt-4 max-w-[520px] text-[30px] font-black leading-tight text-white md:text-[38px]">
                  Bringing Ideas, Industries and Innovators Into One Ecosystem.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}