import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const mainLinks = [
  { label: "Bio", href: "/bio.html" },
  { label: "Latest Speaks", href: "/latest-speaks.html" },
  { label: "Technology", href: "/technology.html" },
  { label: "Mentoring", href: "/mentoring.html" },
  { label: "Investments", href: "/investments.html" },
  { label: "Press News", href: "/press-news.html" },
  { label: "Drawing", href: "/drawing.html" },
];

const secondaryLinks = [
  { label: "AR VR AI", href: "/virtual-reality.html" },
  { label: "Media Entertainment", href: "/media-entertainment.html" },
  { label: "Photography", href: "/photography.html" },
  { label: "Blog", href: "/blog.html" },
  { label: "Books", href: "/books.html" },
];

const allLinks = [...mainLinks, ...secondaryLinks];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] px-4 py-1.5 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-white sm:text-[12px] md:text-[13px] md:tracking-[0.18em]">
        29+ Years of Innovation • Founder of Virtualinfocom • Global Speaker •
        AI • Gaming • DeepTech
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
        <div className="mx-auto max-w-[1700px] px-5 sm:px-6 lg:px-10">
          <div className="flex h-[72px] items-center justify-between gap-5 md:h-[82px] lg:gap-8">
            <Link
              to="/"
              className="shrink-0"
              aria-label="Arijit Bhattacharyya Home"
            >
              <h1 className="text-[18px] font-extrabold uppercase tracking-[0.08em] text-white sm:text-[22px] lg:text-[26px]">
                ARIJIT BHATTACHARYYA
              </h1>
            </Link>

            <nav
              className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-8"
              aria-label="Primary navigation"
            >
              {mainLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-[15px] font-semibold text-white/80 transition hover:text-white"
                >
                  {item.label}
                </Link>
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
            onClick={closeMenu}
            aria-label="Close menu overlay"
          />

          <aside
            id="site-menu"
            className="fixed left-1/2 top-1/2 z-[100] h-[760px] max-h-[88vh] w-[352px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md bg-gradient-to-b from-[#0052D4] via-[#4364F7] to-[#6FB1FC] p-7 text-white shadow-2xl sm:w-[420px] lg:left-auto lg:right-0 lg:top-0 lg:h-screen lg:max-h-none lg:w-full lg:max-w-[500px] lg:translate-x-0 lg:translate-y-0 lg:rounded-none lg:p-12"
            aria-label="Site menu"
          >
            <button
              type="button"
              onClick={closeMenu}
              className="absolute right-6 top-6 text-white transition hover:rotate-90 hover:text-white/80"
              aria-label="Close menu"
            >
              <X size={32} strokeWidth={2.4} />
            </button>

            <div className="mt-16 lg:mt-24">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/60 lg:hidden">
                Main
              </p>

              <p className="mb-5 hidden text-xs font-semibold uppercase tracking-[0.32em] text-white/60 lg:block">
                Explore
              </p>

              {/* Mobile / Tablet: show full menu */}
              <div className="grid gap-3 lg:hidden">
                {allLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={closeMenu}
                    className="text-[19px] font-bold leading-tight text-white transition duration-300 hover:translate-x-2 hover:text-white/80 sm:text-[21px]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Desktop: hamburger only shows secondary links */}
              <div className="hidden gap-5 lg:grid">
                {secondaryLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={closeMenu}
                    className="text-[30px] font-bold leading-tight text-white transition duration-300 hover:translate-x-2 hover:text-white/80"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="my-8 h-px bg-white/20" />

              <Link
                to="/contact.html"
                onClick={closeMenu}
                className="block rounded-full border border-white/25 bg-white/10 px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:bg-white/20"
              >
                Connect With Arijit
              </Link>
            </div>
          </aside>
        </>
      )}
    </>
  );
}