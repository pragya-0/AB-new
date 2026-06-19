const navLinks = [
  { label: "Bio", href: "/bio" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Technology", href: "/technology" },
  { label: "Creative", href: "/creative" },
  { label: "Media", href: "/media" },
  { label: "Speaking", href: "/speaking" },
  { label: "Books", href: "/books" },
  { label: "Podcast", href: "/podcast" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#0057ff] via-[#0078ff] to-[#00b7d8] py-1.5 text-center text-[13px] font-semibold tracking-wide text-white">
        29+ Years of Innovation • Founder of Virtualinfocom • Global Speaker •
        AI • Gaming • DeepTech
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
        <div className="mx-auto max-w-[1700px] px-6 lg:px-10">
          <div className="flex h-[78px] items-center justify-between gap-8">
            <a href="/" className="shrink-0 text-white">
              <h1 className="text-[24px] font-black tracking-[0.08em] lg:text-[27px]">
                ARIJIT BHATTACHARYYA
              </h1>
            </a>

            <nav className="hidden flex-1 items-center justify-center gap-9 lg:flex">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[15px] font-semibold text-white/78 transition duration-300 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden shrink-0 lg:flex">
              <a
                href="/speaking"
                className="rounded-full bg-[#0057ff] px-8 py-3.5 text-[14px] font-black uppercase tracking-[0.16em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#1672ff]"
              >
                Invite To Speak
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}