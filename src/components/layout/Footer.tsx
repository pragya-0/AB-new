import { ExternalLink } from "lucide-react";

const footerColumns = [
  {
    title: "Profile",
    links: [
      { label: "Biography", href: "/bio" },
      { label: "Technology", href: "/technology" },
      { label: "Mentoring", href: "/mentoring" },
      { label: "Investments", href: "/ecosystem" },
      { label: "Books", href: "/books" },
    ],
  },
  {
    title: "Creative Work",
    links: [
      {
        label: "Riding Tiger Podcast",
        href: "https://www.youtube.com/playlist?list=PLuNg6vVH-PWnLCTRFFkQDYK1r23DjJs7j",
        external: true,
      },
      { label: "Game Worlds", href: "/games" },
      { label: "Animation", href: "/animation" },
      { label: "Drawing & Painting", href: "/drawing" },
      { label: "Photography", href: "/photography" },
    ],
  },
  {
    title: "Media",
    links: [
      { label: "Media Coverage", href: "/media" },
      { label: "Press News", href: "/press" },
      { label: "Latest Speaks", href: "/speaking" },
      { label: "Blog", href: "/blog" },
      {
        label: "YouTube",
        href: "https://youtube.com/@ArijitBhattacharyya",
        external: true,
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/Arijit.Bhattacharyya.vic/",
        external: true,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/arijitbhattacharyya/",
        external: true,
      },
    ],
  },
  {
    title: "Collaborate",
    links: [
      { label: "Speaking & Keynotes", href: "/contact" },
      { label: "Founder Mentoring", href: "/contact" },
      { label: "Venture Advisory", href: "/contact" },
      { label: "Media & Partnerships", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black px-5 py-8 text-white sm:py-9 md:px-10 lg:py-10">
      <div className="pointer-events-none absolute left-[-260px] top-[-260px] h-[500px] w-[500px] rounded-full bg-[#0057ff]/12 blur-[170px]" />
      <div className="pointer-events-none absolute right-[-260px] bottom-[-260px] h-[480px] w-[480px] rounded-full bg-cyan-400/8 blur-[160px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="grid gap-8 border-b border-white/10 pb-8 lg:grid-cols-[0.9fr_1.55fr] lg:gap-14">
          <div>
            <a
              href="/"
              aria-label="Go to Arijit Bhattacharyya homepage"
              className="group inline-block"
            >
              <span className="block text-[24px] font-extrabold uppercase leading-[0.95] tracking-[-0.045em] text-white transition duration-300 group-hover:text-[#9dccff] sm:text-[28px] md:text-[32px]">
                ARIJIT
                <br />
                BHATTACHARYYA
              </span>
            </a>

            <p className="mt-4 max-w-[500px] text-[14px] font-normal leading-[1.75] tracking-[-0.01em] text-white/68 sm:text-[15px]">
              Technology founder, creative technologist, startup mentor, author
              and speaker bringing art, technology, entrepreneurship and
              education together since 1998.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["AI", "Games", "VR / AR", "Blockchain", "GenAI Films"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/55"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-7 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((column) => (
              <nav
                key={column.title}
                aria-label={`${column.title} footer links`}
              >
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#7fb8ff]">
                  {column.title}
                </h3>

                <div className="mt-4 space-y-2">
                  {column.links.map((link) => (
                    <a
                      key={`${column.title}-${link.label}`}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="group flex w-fit items-center gap-1.5 text-[13px] font-normal leading-[1.55] text-white/58 transition duration-300 hover:translate-x-1 hover:text-white sm:text-[14px]"
                    >
                      <span>{link.label}</span>
                      {link.external ? (
                        <ExternalLink
                          aria-hidden="true"
                          className="h-3 w-3 opacity-60 transition duration-300 group-hover:opacity-100"
                          strokeWidth={1.8}
                        />
                      ) : null}
                    </a>
                  ))}
                </div>
              </nav>
            ))}
          </div>
        </div>

        <div className="pt-5">
          <p className="text-[12px] font-normal leading-6 text-white/42">
            © 2026 Arijit Bhattacharyya. Art, technology and entrepreneurship
            since 1998.
          </p>
        </div>
      </div>
    </footer>
  );
}
