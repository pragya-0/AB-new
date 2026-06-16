const logos = [
  {
    name: "TEDx",
    image: "/assets/press/tedx.png",
    height: "h-[58px]",
  },
  {
    name: "CNBC TV18",
    image: "/assets/press/cnbc.png",
    height: "h-[88px]",
  },
  {
    name: "The Economic Times",
    image: "/assets/press/ecotimes.png",
    height: "h-[46px]",
  },
  {
    name: "Business Standard",
    image: "/assets/press/business standard.png",
    height: "h-[42px]",
  },
  {
    name: "Startup India",
    image: "/assets/press/startupindia.png",
    height: "h-[76px]",
  },
  {
    name: "AWS",
    image: "/assets/press/aws.png",
    height: "h-[66px]",
  },
  {
    name: "Diplomatic World",
    image: "/assets/press/diplomatic.png",
    height: "h-[78px]",
  },
  {
    name: "Times Of India",
    image: "/assets/press/TOI.png",
    height: "h-[90px]",
  },
  {
    name: "TV9 Bangla",
    image: "/assets/press/TV9.png",
    height: "h-[92px]",
  },
  {
    name: "ABP Ananda",
    image: "/assets/press/ABP bangla.png",
    height: "h-[90px]",
  },
  {
    name: "DD Bangla",
    image: "/assets/press/DD-bangla.png",
    height: "h-[90px]",
  },
  {
    name: "WASME",
    image: "/assets/press/wasme.png",
    height: "h-[95px]",
  },
  {
    name: "Bizventure",
    image: "/assets/press/bizventure-logo.png",
    height: "h-[70px]",
  },
];

export default function FeaturedLogosStrip() {
  return (
    <section className="relative overflow-hidden bg-[#060606] px-6 py-24">

      <div className="mx-auto max-w-[1500px]">

        <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.55em] text-[#1b5cff]">
          Featured In
        </p>

        <h2 className="mb-16 text-center text-4xl font-black text-white md:text-5xl">
          Recognized Across Leading Media &
          <br />
          Global Platforms
        </h2>

        <div className="grid grid-cols-2 items-center gap-y-16 md:grid-cols-4 lg:grid-cols-7">

          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center transition duration-300 hover:scale-105"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className={`${logo.height} w-auto object-contain`}
              />
            </div>
          ))}

        </div>

      </div>

      {/* blue separator */}
      <div className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#1b5cff] to-transparent" />

    </section>
  );
}