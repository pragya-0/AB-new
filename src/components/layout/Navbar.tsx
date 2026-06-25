import { useState } from "react";
import { Menu, X } from "lucide-react";

const mainLinks = [
  { label: "Bio", href: "/bio" },
  { label: "Latest Speaks", href: "/latest-speaks" },
  { label: "Technology", href: "/technology" },
  { label: "Mentoring", href: "/mentoring" },
  { label: "Investments", href: "/investments" },
  { label: "Press News", href: "/press-news" },
  { label: "Drawing", href: "/drawing" },
];

const secondaryLinks = [
  { label: "Virtual Reality", href: "/virtual-reality" },
  { label: "Media Entertainment", href: "/media-entertainment" },
  { label: "Photography", href: "/photography" },
  { label: "Blog", href: "/blog" },
  { label: "Books", href: "/books" },
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
            <a
              href="/"
              className="shrink-0"
              aria-label="Arijit Bhattacharyya Home"
            >
              <h1 className="text-[18px] font-extrabold uppercase tracking-[0.08em] text-white sm:text-[22px] lg:text-[26px]">
                ARIJIT BHATTACHARYYA
              </h1>
            </a>

            <nav
              className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-8"
              aria-label="Primary navigation"
            >
              {mainLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[15px] font-semibold text-white/80 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="text-white transition hover:text-[#6FB1FC]"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="site-menu"
            >
              <Menu size={34} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-md"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu overlay"
          />

          <aside
            id="site-menu"
            className="fixed z-[100] overflow-y-auto bg-gradient-to-b from-[#0052D4] via-[#4364F7] to-[#6FB1FC] text-white shadow-2xl
            left-1/2 top-1/2 h-[760px] max-h-[88vh] w-[352px] -translate-x-1/2 -translate-y-1/2 rounded-md p-7
            sm:w-[420px]
            lg:left-auto lg:right-0 lg:top-0 lg:h-screen lg:max-h-none lg:w-full lg:max-w-[500px] lg:translate-x-0 lg:translate-y-0 lg:rounded-none lg:p-12"
            aria-label="Site menu"
          >
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="absolute right-6 top-6 text-white transition hover:rotate-90 hover:text-white/80"
              aria-label="Close menu"
            >
              <X size={32} strokeWidth={2.4} />
            </button>

            <div className="mt-16 lg:mt-24">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/60 lg:text-xs">
                {window.innerWidth >= 1024 ? "Explore" : "Main"}
              </p>

              <div className="grid gap-3 lg:gap-5">
                {(window.innerWidth >= 1024 ? secondaryLinks : allLinks).map(
                  (item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-[19px] font-bold leading-tight text-white transition duration-300 hover:translate-x-2 hover:text-white/80 sm:text-[21px] lg:text-[30px]"
                    >
                      {item.label}
                    </a>
                  )
                )}
              </div>

              <div className="my-8 h-px bg-white/20" />

              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block rounded-full border border-white/25 bg-white/10 px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:bg-white/20"
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