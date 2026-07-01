import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MetaTags from "../components/common/MetaTags";
import {
  archivePosts,
  blogPath,
  type BlogPost,
} from "../components/blog/blogData";

function getPostSlug(post: BlogPost) {
  return post.slug || post.id;
}

function cleanDisplayText(value = "", maxLength = 260) {
  const cleaned = value
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<!doctype[\s\S]*?>/gi, " ")
    .replace(/<\/?(html|head|body|section|nav|footer|iframe)[^>]*>/gi, " ")
    .replace(/\/title>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&rsquo;/gi, "’")
    .replace(/&lsquo;/gi, "‘")
    .replace(/&mdash;/gi, "—")
    .replace(/&ndash;/gi, "–")
    .replace(/\s+/g, " ")
    .trim();

  if (cleaned.length <= maxLength) return cleaned;

  return `${cleaned.slice(0, maxLength).replace(/\s+\S*$/, "")}...`;
}

function getDisplayTitle(post: BlogPost) {
  let title = post.title || "Untitled Article";

  if (/\/title>|<link|<\/head>|<body|<section|<nav|<script/i.test(title)) {
    title = title.split(
      /\/title>|<link|<\/head>|<body|<section|<nav|<script/i
    )[0];
  }

  return cleanDisplayText(title, 140) || "Untitled Article";
}

function getDisplayExcerpt(post: BlogPost) {
  const source =
    post.excerpt ||
    post.seoDescription ||
    post.content?.[0] ||
    "Read this legacy article by Arijit Bhattacharyya.";

  return cleanDisplayText(source, 320);
}

function getPostImage(post: BlogPost) {
  return (
    post.images?.[0] ||
    post.image ||
    `${blogPath}arijit-bhattacharyya.jpg`
  );
}

function getPostAlt(post: BlogPost) {
  return cleanDisplayText(
    post.alt || `${getDisplayTitle(post)} by Arijit Bhattacharyya`,
    180
  );
}

function normalizeText(value = "") {
  return cleanDisplayText(value, 10000).toLowerCase().trim();
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const featuredPost = archivePosts[0];

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(
        archivePosts
          .map((post) => String(post.category || "Blog"))
          .filter(Boolean)
      )
    );

    return ["All", ...unique];
  }, []);

  const filteredPosts = useMemo(() => {
    const query = normalizeText(searchTerm);

    return archivePosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || String(post.category) === activeCategory;

      const searchableText = normalizeText(
        [
          getDisplayTitle(post),
          post.category,
          getDisplayExcerpt(post),
          post.seoTitle,
          post.seoDescription,
          post.originalFile,
          post.legacyUrl,
        ]
          .filter(Boolean)
          .join(" ")
      );

      const matchesSearch = !query || searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <>
      <MetaTags
        title="Arijit Bhattacharyya Ideas & Insights | AI, VR, AR, Startups, Entrepreneurship"
        description="Explore selected writing by Arijit Bhattacharyya on entrepreneurship, artificial intelligence, virtual reality, augmented reality, startups, innovation, gaming, technology and leadership."
        image={`${blogPath}arijit-bhattacharyya.jpg`}
      />

      <Navbar />

      <main className="bg-[#03070d] text-white">
        <section className="relative overflow-hidden px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(37,99,235,0.35),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(14,165,233,0.18),transparent_30%)]" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#03070d] to-transparent" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
                  Ideas & Insights
                </p>

                <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
                  Ideas on Technology, Startups & Innovation
                </h1>

                <p className="mt-6 max-w-2xl text-base font-normal leading-8 text-slate-300 sm:text-lg">
                  Selected writing by Arijit Bhattacharyya across AI, VR, AR, entrepreneurship, leadership, gaming, investments and the future of digital ecosystems.
                </p>

              </div>

              {featuredPost && (
                <Link
                  to={`/blog/${getPostSlug(featuredPost)}`}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-4 shadow-2xl shadow-black/30 backdrop-blur transition hover:-translate-y-1 hover:border-blue-300/50"
                >
                  <div className="overflow-hidden rounded-[1.5rem] bg-[#07111f]">
                    <img
                      src={getPostImage(featuredPost)}
                      alt={getPostAlt(featuredPost)}
                      className="h-64 w-full object-contain object-center transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-3">
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
                      Featured Article
                    </p>

                    <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.03em] text-white">
                      {getDisplayTitle(featuredPost)}
                    </h2>

                    <p className="mt-3 line-clamp-3 text-sm font-normal leading-6 text-slate-300">
                      {getDisplayExcerpt(featuredPost)}
                    </p>

                    <span className="mt-5 inline-flex items-center text-sm font-bold text-blue-200">
                      Read article
                      <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#03070d_0%,#07111f_46%,#03070d_100%)] px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-5">
              <div className="grid gap-4 lg:grid-cols-[1fr_340px] lg:items-center">
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition ${
                        activeCategory === category
                          ? "bg-white text-[#03070d]"
                          : "border border-white/10 bg-white/[0.06] text-slate-200 hover:border-blue-300/50 hover:text-white"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <label className="relative block">
                  <span className="sr-only">Search blog articles</span>
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search articles..."
                    className="w-full rounded-full border border-white/10 bg-[#03070d]/80 py-3 pl-11 pr-4 text-sm font-normal text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300"
                  />
                </label>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
                  Articles
                </p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.03em] sm:text-3xl">
          Explore the Writing
        </h2>
              </div>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${getPostSlug(post)}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.06] shadow-xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-blue-300/50 hover:bg-white/[0.085]"
                  >
                    <div className="bg-[#07111f] p-3">
                      <div className="overflow-hidden rounded-[1.25rem] bg-[#03070d]">
                        <img
                          src={getPostImage(post)}
                          alt={getPostAlt(post)}
                          className="h-52 w-full object-contain object-center transition duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                        {post.category || "Blog"}
                      </p>

                      <h3 className="mt-3 text-xl font-extrabold leading-tight tracking-[-0.025em] text-white">
                        {getDisplayTitle(post)}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-sm font-normal leading-6 text-slate-300">
                        {getDisplayExcerpt(post)}
                      </p>

                      <span className="mt-5 inline-flex items-center text-sm font-bold text-blue-200">
                        Read article
                        <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-10 text-center">
                <p className="text-lg font-bold text-white">
                  No matching posts yet.
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Try another keyword or category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}