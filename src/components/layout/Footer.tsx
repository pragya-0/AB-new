const footerColumns = [
  {
    title: "About",
    links: [
      { label: "Bio", href: "/bio" },
      { label: "Technology", href: "/technology" },
      { label: "Ventures", href: "/ecosystem" },
      { label: "Books", href: "/books" },
    ],
  },
  {
    title: "Creative",
    links: [
      { label: "Podcast", href: "/podcast" },
      { label: "Photography", href: "/photography" },
      { label: "Drawing & Painting", href: "/creative" },
      { label: "Game Worlds", href: "/games" },
      { label: "Animation", href: "/animation" },
    ],
  },
  {
    title: "Media",
    links: [
      { label: "Speaking", href: "/speaking" },
      { label: "Press News", href: "/press" },
      { label: "Blog", href: "/blog" },
      { label: "YouTube", href: "/youtube" },
      { label: "Latest Speech", href: "/speaking" },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/arijitbhattacharyya/",
        external: true,
      },
      {
        label: "YouTube",
        href: "https://youtube.com/@ArijitBhattacharyya",
        external: true,
      },
      { label: "Mentoring & Advisory", href: "/contact" },
      { label: "Connect With Arijit", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black px-5 py-12 text-white sm:py-14 md:px-10 lg:py-18">
      <div className="absolute left-[-220px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#0057ff]/14 blur-[170px]" />
      <div className="absolute right-[-220px] bottom-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-400/8 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.05fr_1.45fr] lg:gap-16 lg:pb-12">
          <div>
            <a
              href="/"
              className="block text-[28px] font-extrabold leading-[0.95] tracking-[-0.05em] text-white sm:text-[34px] md:text-[38px]"
            >
              ARIJIT
              <br />
              BHATTACHARYYA
            </a>

            <p className="mt-5 max-w-[520px] text-[16px] font-normal leading-[1.8] tracking-[-0.01em] text-white/70 sm:text-[17px]">
              Bringing art, technology, entrepreneurship and education together
              since 1998.
            </p>

            <p className="mt-6 max-w-[520px] text-[14px] font-normal leading-[1.7] text-white/55 sm:text-[15px]">
              Entrepreneur • Technologist • Author • Speaker
              <br />
              Exploring AI, entrepreneurship, creativity and global
              collaboration.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#7fb8ff]">
                  {column.title}
                </h3>

                <div className="mt-5 space-y-2.5 sm:space-y-3">
                  {column.links.map((link) => (
                    <a
                      key={`${column.title}-${link.label}`}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="block text-[14px] font-normal leading-[1.65] text-white/62 transition duration-300 hover:translate-x-1 hover:text-white sm:text-[15px]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 pt-7 md:grid-cols-[1fr_auto] md:items-center md:pt-8">
          <p className="text-[12px] font-normal leading-6 text-white/45 sm:text-[13px]">
            © 2026 Arijit Bhattacharyya. Bringing art and technology together
            since 1998.
          </p>

          <div className="flex flex-wrap gap-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40 sm:text-[12px]">
            <a href="/press" className="transition hover:text-white">
              Press
            </a>
            <a href="/books" className="transition hover:text-white">
              Books
            </a>
            <a href="/podcast" className="transition hover:text-white">
              Podcast
            </a>
            <a href="/contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}