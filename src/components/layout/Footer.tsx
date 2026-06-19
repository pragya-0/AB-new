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
      { label: "Invite To Speak", href: "/contact" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black px-5 py-16 text-white md:px-10">
      <div className="absolute left-[-220px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#0057ff]/14 blur-[170px]" />
      <div className="absolute right-[-220px] bottom-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-400/8 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.1fr_1.4fr]">
          <div>
            <a
              href="/"
              className="text-[28px] font-black leading-none tracking-[-0.06em] text-white md:text-[36px]"
            >
              ARIJIT
              <br />
              BHATTACHARYYA
            </a>

            <p className="mt-6 max-w-[520px] text-[16px] leading-7 text-white/58">
              Bringing art, technology, entrepreneurship and education together
              since 1998.
            </p>

           <p className="mt-8 max-w-[500px] text-[14px] leading-7 text-white/45">
  Entrepreneur • Technologist • Author • Speaker

  <br />
  Exploring AI, entrepreneurship, creativity and global collaboration.
</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-black uppercase tracking-[0.28em] text-[#4d8cff]">
                  {column.title}
                </h3>

                <div className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <a
                      key={`${column.title}-${link.label}`}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="block text-[14px] font-semibold text-white/58 transition duration-300 hover:translate-x-1 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 pt-8 md:grid-cols-[1fr_auto] md:items-center">
          <p className="text-[13px] leading-6 text-white/45">
            © 2026 Arijit Bhattacharyya. Bringing art and technology together
            since 1998.
          </p>

          <div className="flex flex-wrap gap-4 text-[12px] font-black uppercase tracking-[0.18em] text-white/38">
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