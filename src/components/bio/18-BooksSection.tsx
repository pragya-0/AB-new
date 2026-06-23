import { motion } from "framer-motion";
import BioSectionShell from "./BioSectionShell";
import SmartImage from "./SmartImage";
import { fadeUp } from "./bioMotion";
import { books } from "../../data/bio/booksData";

const bookLinks: Record<string, string> = {
  "The VR Sega": "https://www.amazon.com/dp/B0CD6MSZHC",
  "The Power of Generic AI": "https://www.amazon.in/dp/B0CCZCG3NL",
  "The Legend Comes Alive":
    "https://www.amazon.com/Archer-legend-comes-alive-Book-ebook/dp/B011UYF1RG",
  "Experts Can Blow It":
    "https://www.amazon.com/Experts-Can-Blow-Raising-capital-ebook/dp/B0BSSGL1KW",
  "Empowering Africa": "https://www.amazon.com/dp/B0CDN7NK4W",
  "The Future of Entrepreneurship": "https://www.amazon.com/dp/B0CL2PYQ95",
};

function getBookLink(title: string) {
  return (
    bookLinks[title] ??
    Object.entries(bookLinks).find(([key]) => title.includes(key))?.[1] ??
    "/books"
  );
}

export default function BooksSection() {
  return (
    <BioSectionShell
      eyebrow="Author Library"
      title="Books Across AI, Entrepreneurship, VR & Creative Worlds"
      text="A published author library spanning artificial intelligence, entrepreneurship, virtual reality, leadership, Africa and mythology-inspired creative storytelling."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {books.map(([title, subtitle, image]) => (
          <motion.article
            key={title}
            {...fadeUp}
            className="group flex h-full flex-col rounded-[26px] border border-[#bdd9ff] bg-white p-5 shadow-[0_20px_70px_rgba(0,87,255,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_90px_rgba(0,87,255,0.16)]"
          >
            <div className="flex h-[300px] items-center justify-center rounded-[20px] bg-[#eef5ff] p-4">
              <SmartImage
                src={image}
                alt={title}
                className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col">
              <p className="mt-5 text-[10px] font-black uppercase tracking-[0.28em] text-[#0057ff]">
                Published Book
              </p>

              <h3 className="mt-3 text-[20px] font-black leading-tight tracking-[-0.045em] text-[#07101f]">
                {title}
              </h3>

              <p className="mt-3 flex-1 text-[13px] leading-6 text-[#64748b]">
                {subtitle}
              </p>

              <a
                href={getBookLink(title)}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-fit rounded-full border border-[#bdd9ff] bg-[#0057ff] px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#07101f]"
              >
                View on Amazon →
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </BioSectionShell>
  );
}