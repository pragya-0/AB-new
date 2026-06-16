export default function AboutPreview() {
  return (
    <section className="bg-white px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-[1700px] overflow-hidden rounded-[40px] bg-white px-10 py-20 lg:px-16">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="mb-6 text-sm font-bold uppercase tracking-[4px] text-blue-600">
              About Arijit
            </p>

            <h2 className="max-w-[650px] text-5xl font-bold leading-tight text-black lg:text-6xl">
              Riding Tigers
              <br />
              Since 1998
            </h2>

            <p className="mt-8 max-w-[620px] text-lg leading-8 text-gray-600">
              From writing his first game code to building global technology
              ventures, investing in startups and connecting businesses across
              continents — the journey has always been about creating impact
              through innovation and entrepreneurship.
            </p>

            <button className="mt-10 rounded-full border border-blue-600 px-8 py-4 font-semibold text-black transition hover:bg-blue-600 hover:text-white">
              Read Full Story →
            </button>
          </div>

          {/* Right */}
          <div className="relative">
            <img
              src="/assets/hero/about-arijit.jpeg"
              alt="Arijit Bhattacharyya"
              className="h-[420px] w-full rounded-[32px] object-cover shadow-2xl lg:h-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}