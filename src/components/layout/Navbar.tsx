import { useState } from "react";
import { Menu, X } from "lucide-react";

const mainLinks = [
  { label: "Bio", href: "/bio" },
  { label: "Latest Speaks", href: "/speaking" },
  { label: "Technology", href: "/technology" },
  { label: "Mentoring", href: "/mentoring" },
  { label: "Investments", href: "/ecosystem" },
  { label: "Press News", href: "/press" },
  { label: "Drawing", href: "/drawing" },
];

const secondaryLinks = [
  { label: "Virtual Reality", href: "/virtual-reality" },
  { label: "Media Entertainment", href: "/media" },
  { label: "Photography", href: "/photography" },
  { label: "Blog", href: "/blog" },
  { label: "Books", href: "/books" },
  { label: "Podcast", href: "/podcast" },
];

const allLinks = [...mainLinks, ...secondaryLinks];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] px-4 py-1.5 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-white sm:text-[12px] md:text-[13px] md:tracking-[0.18em]">
        29+ Years of Innovation • Founder of Virtualinfocom • Global Speaker •
        AI • Gaming • DeepTech
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
        <div className="mx-auto max-w-[1700px] px-5 sm:px-6 lg:px-10">
          <div className="flex h-[72px] items-center justify-between gap-5 md:h-[82px] lg:gap-8">
            <a href="/" className="shrink-0 text-white">
              <h1 className="text-[18px] font-extrabold uppercase leading-none tracking-[0.08em] sm:text-[22px] lg:text-[26px]">
                ARIJIT BHATTACHARYYA
              </h1>
            </a>

            <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-8">
              {mainLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[15px] font-semibold tracking-[-0.01em] text-white/80 transition duration-300 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              onClick={() => setMenuOpen(true)}
              className="flex text-white transition hover:text-[#6FB1FC]"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu size={32} strokeWidth={2.1} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          <aside className="fixed right-0 top-0 z-[100] h-screen w-full max-w-[420px] overflow-y-auto bg-gradient-to-b from-[#0052D4] via-[#4364F7] to-[#6FB1FC] p-7 text-white shadow-2xl sm:p-10">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute right-6 top-6 transition hover:opacity-70"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>

            <div className="mt-14 space-y-9">
              <div className="lg:hidden">
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/65">
                  Main
                </p>

                <div className="grid gap-4">
                  {allLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-[22px] font-bold leading-[1.05] tracking-[-0.03em] transition hover:translate-x-2 sm:text-[26px]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block">
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/65">
                  Explore
                </p>

                <div className="grid gap-4">
                  {secondaryLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-[22px] font-bold leading-[1.05] tracking-[-0.03em] text-white/90 transition hover:translate-x-2 sm:text-[26px]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="h-px bg-white/20" />

              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block rounded-full border border-white/20 bg-white/10 px-6 py-4 text-center text-[12px] font-bold uppercase tracking-[0.18em] transition hover:bg-white/20"
              >
                Connect With Arijit
              </a>
            </div>
          </aside>
        </>
      )}
    </>
  );
}