export default function Navbar() {
  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#0057ff] via-[#0078ff] to-[#00b7d8] py-1.5 text-center text-[13px] font-medium tracking-wide text-white">
        29+ Years of Innovation • Global Entrepreneur • AI • VR • Gaming •
        Blockchain
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
        <div className="mx-auto max-w-[1700px] px-6 lg:px-10">
          <div className="flex h-[78px] items-center justify-between">
            {/* Logo */}
            <a href="#" className="text-white">
              <h1 className="text-[28px] font-black tracking-[0.08em] lg:text-[31px]">
                ARIJIT BHATTACHARYYA
              </h1>
            </a>

            {/* Menu */}
            <nav className="hidden items-center gap-8 lg:flex">
              {[
                "Bio",
                "Ventures",
                "Books",
                "Media",
                "Speaking",
                "Blog",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[15px] font-medium text-white/78 transition hover:text-white"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Right Side */}
            <div className="hidden items-center gap-6 lg:flex">
              <button className="text-[15px] font-medium text-white transition hover:text-[#2f7cff]">
                Search
              </button>

              <button className="rounded-full bg-[#0057ff] px-8 py-3.5 text-[15px] font-bold text-white transition hover:bg-[#1672ff]">
                START HERE
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}