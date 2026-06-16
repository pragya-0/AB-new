export default function Navbar() {
  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-blue-700 to-cyan-500 text-center text-white text-sm py-2">
        29+ Years of Innovation • Global Entrepreneur • AI • VR • Gaming • Blockchain
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-black border-b border-white/10">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-10">

          <div className="h-24 flex items-center justify-between">

            {/* Logo */}
            <div className="text-white">
              <h1 className="text-3xl font-bold tracking-wider">
                ARIJIT BHATTACHARYYA
              </h1>
            </div>

            {/* Menu */}
            <nav className="hidden lg:flex items-center gap-10">

              <a
                href="#"
                className="text-white/80 hover:text-white transition"
              >
                About
              </a>

              <a
                href="#"
                className="text-white/80 hover:text-white transition"
              >
                Ventures
              </a>

              <a
                href="#"
                className="text-white/80 hover:text-white transition"
              >
                Books
              </a>

              <a
                href="#"
                className="text-white/80 hover:text-white transition"
              >
                Media
              </a>

              <a
                href="#"
                className="text-white/80 hover:text-white transition"
              >
                Speaking
              </a>

              <a
                href="#"
                className="text-white/80 hover:text-white transition"
              >
                Blog
              </a>

              <a
                href="#"
                className="text-white/80 hover:text-white transition"
              >
                Contact
              </a>

            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-5">

              <button className="text-white hover:text-blue-400 transition">
                Search
              </button>

              <button className="rounded-full bg-blue-600 px-7 py-3 text-white font-semibold hover:bg-blue-500 transition">
                START HERE
              </button>

            </div>

          </div>

        </div>
      </header>
    </>
  );
}