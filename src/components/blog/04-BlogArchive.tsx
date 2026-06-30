import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import { archivePosts, blogPath, type BlogCategory, type BlogPost } from "./blogData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const categories: ("All" | BlogCategory)[] = [
  "All",
  "Entrepreneurship & Capital",
  "AI & Future Technology",
  "VR, Gaming & Metaverse",
  "Leadership & Founder Psychology",
  "Creative IP & Culture",
  "Society, Economy & Life",
];

const safeFallbacks = [
  "Arijit_Bhattacharyya-blog.jpg",
  "Arijit-life-story.jpg",
  "leadership-arijit.jpg",
  "startup-kolkata.jpg",
  "Arijit-team-member.png",
  "public-speaking.jpg",
  "venture-capital.jpg",
  "AI-gaming.jpg",
  "cosplay-kolkata.jpg",
  "sundarban.jpg",
];

function getPostSlug(post: BlogPost) {
  return post.slug || post.id;
}

function getPostImages(post: BlogPost, index: number) {
  if (post.images?.length) return post.images;
  if (post.image) return [post.image];
  return [`${blogPath}${safeFallbacks[index % safeFallbacks.length]}`];
}

function getAspectClass(post: BlogPost) {
  if (post.imageAspect === "portrait") return "aspect-[4/5]";
  if (post.imageAspect === "square") return "aspect-square";
  if (post.imageAspect === "wide") return "aspect-[16/7]";
  return "aspect-[4/3]";
}

function ArchiveImage({
  post,
  index,
}: {
  post: BlogPost;
  index: number;
}) {
  const candidates = getPostImages(post, index);
  const [activeIndex, setActiveIndex] = useState(0);

  const src =
    candidates[activeIndex] ||
    `${blogPath}${safeFallbacks[index % safeFallbacks.length]}`;

  return (
    <img
      src={src}
      alt={post.alt}
      loading="lazy"
      onError={() => {
        if (activeIndex < candidates.length - 1) {
          setActiveIndex(activeIndex + 1);
        } else {
          setActiveIndex(candidates.length);
        }
      }}
      className="h-full w-full object-contain object-center p-3 transition duration-700 group-hover:scale-[1.025]"
    />
  );
}

export default function BlogArchive() {
  const [activeCategory, setActiveCategory] =
    useState<"All" | BlogCategory>("All");
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();

    return archivePosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      const searchableText = [
        post.title,
        post.category,
        post.excerpt,
        post.alt,
        ...post.tags,
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesCategory &&
        (cleanQuery.length === 0 || searchableText.includes(cleanQuery))
      );
    });
  }, [activeCategory, query]);

  return (
    <section
      id="blog-archive"
      className="relative overflow-hidden bg-white px-5 py-16 text-[#07111f] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(37,99,235,0.1),transparent_30%),radial-gradient(circle_at_88%_80%,rgba(14,165,233,0.09),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-700 sm:text-sm">
              Legacy Blog Archive
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.035em] text-[#07111f] sm:text-5xl">
              Original blog content, preserved on one page.
            </h2>
          </div>

          <p className="max-w-2xl text-base font-normal leading-8 text-slate-600 sm:text-lg lg:ml-auto">
            Long original previews are preserved here, while every article also gets a
            dedicated reading page for SEO, sharing and better navigation.
          </p>
        </motion.div>

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_18px_60px_rgba(15,23,42,0.07)] sm:p-5">
          <div className="grid gap-4 lg:grid-cols-[1fr_340px] lg:items-center">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={[
                    "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition",
                    activeCategory === category
                      ? "bg-[#07111f] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-700",
                  ].join(" ")}
                >
                  {category}
                </button>
              ))}
            </div>

            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search archive..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm font-normal text-[#07111f] outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:bg-white"
              />
            </label>
          </div>
        </div>

        <p className="mt-6 text-sm font-semibold text-slate-500">
          Showing {filteredPosts.length} of {archivePosts.length} archive entries.
        </p>

        <div className="mt-8 grid gap-6">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.14 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_26px_80px_rgba(15,23,42,0.12)] lg:grid-cols-[360px_1fr]"
            >
              <div className={`relative overflow-hidden bg-[#03070d] ${getAspectClass(post)} lg:aspect-auto`}>
                <ArchiveImage post={post} index={index} />

                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                  {post.category}
                </div>
              </div>

              <div className="p-6 sm:p-7 lg:p-8">
                <div className="mb-4 flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold tracking-[-0.025em] text-[#07111f] sm:text-3xl">
                  {post.title}
                </h3>

                <p className="mt-4 whitespace-pre-line text-sm font-normal leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Preserved from legacy blog
                  </p>

                  <Link
                    to={`/blog/${getPostSlug(post)}`}
                    className="inline-flex items-center rounded-full bg-[#07111f] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
                  >
                    Read Full Article
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
