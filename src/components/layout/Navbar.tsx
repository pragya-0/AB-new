import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Bio", href: "/bio" },
  { label: "Latest Speaks", href: "/speaking" },
  { label: "Technology", href: "/technology" },
  { label: "Mentoring", href: "/mentoring" },
  { label: "Investments", href: "/ecosystem" },
  { label: "Press News", href: "/press" },
  { label: "Drawing", href: "/drawing" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] py-1.5 text-center text-[13px] font-semibold tracking-wide text-white">
        29+ Years of Innovation • Founder of Virtualinfocom • Global Speaker •
        AI • Gaming • DeepTech
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
        <div className="mx-auto max-w-[1700px] px-6 lg:px-10">
          <div className="flex h-[82px] items-center justify-between gap-8">
            <a href="/" className="shrink-0 text-white">
              <h1 className="text-[24px] font-black tracking-[0.08em] lg:text-[27px]">
                ARIJIT BHATTACHARYYA
              </h1>
            </a>

            <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
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

            <button
              onClick={() => setMenuOpen(true)}
              className="hidden text-white transition hover:text-[#6FB1FC] lg:flex"
              aria-label="Open menu"
            >
              <Menu size={34} strokeWidth={2.2} />
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

          <div className="fixed right-0 top-0 z-[100] h-screen w-[420px] overflow-y-auto bg-gradient-to-b from-[#0052D4] via-[#4364F7] to-[#6FB1FC] p-10 text-white shadow-2xl">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute right-6 top-6"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>

            <div className="mt-16 flex flex-col gap-8">
              <a
                href="/virtual-reality"
                className="text-[28px] font-semibold transition hover:translate-x-2"
              >
                Virtual Reality
              </a>

              <a
                href="/media"
                className="text-[28px] font-semibold transition hover:translate-x-2"
              >
                Media Entertainment
              </a>

              <a
                href="/photography"
                className="text-[28px] font-semibold transition hover:translate-x-2"
              >
                Photography
              </a>

              <a
                href="/blog"
                className="text-[28px] font-semibold transition hover:translate-x-2"
              >
                Blog
              </a>

              <a
                href="/books"
                className="text-[28px] font-semibold transition hover:translate-x-2"
              >
                Books
              </a>

              <a
                href="/podcast"
                className="text-[28px] font-semibold transition hover:translate-x-2"
              >
                Podcast
              </a>

              <div className="my-4 h-px bg-white/20" />

              <a
                href="/speaking"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-center text-[16px] font-black uppercase tracking-[0.18em] transition hover:bg-white/20"
              >
                Invite To Speak
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}