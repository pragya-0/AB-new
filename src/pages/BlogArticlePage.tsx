import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

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

function getArticleContent(post: BlogPost): string[] {
  if (post.content?.length) return post.content;
  return [post.excerpt];
}

function getReadingTime(post: BlogPost) {
  const words = getArticleContent(post).join(" ").trim().split(/\s+/).length;
  return Math.max(2, Math.ceil(words / 180));
}

export default function BlogArticlePage() {
  const { slug } = useParams();

  const postIndex = archivePosts.findIndex(
    (item) => getPostSlug(item) === slug
  );

  const post = postIndex >= 0 ? archivePosts[postIndex] : undefined;

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-screen items-center justify-center bg-[#03070d] px-5 text-center text-white">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Blog Article
            </p>
            <h1 className="mt-4 text-4xl font-extrabold">
              Article not found.
            </h1>
            <Link
              to="/blog"
              className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-[#03070d]"
            >
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const previous = postIndex > 0 ? archivePosts[postIndex - 1] : undefined;
  const next =
    postIndex < archivePosts.length - 1
      ? archivePosts[postIndex + 1]
      : undefined;

  const related = archivePosts
    .filter((item) => item.id !== post.id && item.category === post.category)
    .slice(0, 3);

  const image =
    post.images?.[0] ||
    post.image ||
    `${blogPath}Arijit_Bhattacharyya-blog.jpg`;

  return (
    <>
      <MetaTags
        title={post.seoTitle || `${post.title} | Arijit Bhattacharyya Blog`}
        description={post.seoDescription || post.excerpt}
        image={image}
      />

      <Navbar />

      <main className="bg-[#03070d] text-white">
        <section className="relative overflow-hidden bg-[#03070d] px-5 py-10 text-white sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(37,99,235,0.3),transparent_34%),radial-gradient(circle_at_82%_32%,rgba(14,165,233,0.16),transparent_30%)]" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#03070d] to-transparent" />

          <div className="relative mx-auto max-w-7xl">
            <Link
              to="/blog"
              className="inline-flex items-center text-sm font-bold text-blue-200 transition hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog Archive
            </Link>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
                  {post.category}
                </p>

                <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl xl:text-7xl">
                  {post.title}
                </h1>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Arijit Bhattacharyya • {getReadingTime(post)} min read •
                  Legacy Blog
                </p>
              </div>

              <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/30 backdrop-blur lg:mx-0 lg:ml-auto">
                <img
                  src={image}
                  alt={post.alt}
                  className="max-h-[360px] w-full rounded-[1.5rem] object-contain object-center"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_8%_0%,rgba(37,99,235,0.16),transparent_30%),linear-gradient(180deg,#03070d_0%,#07111f_48%,#03070d_100%)] px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
          <article className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.065] p-5 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="space-y-7">
              {getArticleContent(post).map(
                (paragraph: string, index: number) => (
                  <p
                    key={index}
                    className="text-[15px] font-normal leading-8 text-slate-200 sm:text-base lg:text-[17px] lg:leading-9"
                  >
                    {paragraph}
                  </p>
                )
              )}
            </div>
          </article>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white px-5 py-12 text-[#07111f] sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2">
              {previous && (
                <Link
                  to={`/blog/${getPostSlug(previous)}`}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Previous
                  </p>
                  <h3 className="mt-2 text-lg font-bold">{previous.title}</h3>
                </Link>
              )}

              {next && (
                <Link
                  to={`/blog/${getPostSlug(next)}`}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-right transition hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Next
                  </p>
                  <h3 className="mt-2 text-lg font-bold">{next.title}</h3>
                </Link>
              )}
            </div>

            {related.length > 0 && (
              <div className="mt-14">
                <h2 className="text-2xl font-extrabold tracking-[-0.03em]">
                  Related Articles
                </h2>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {related.map((item) => (
                    <Link
                      key={item.id}
                      to={`/blog/${getPostSlug(item)}`}
                      className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                        {item.category}
                      </p>

                      <h3 className="mt-3 text-base font-bold leading-6">
                        {item.title}
                      </h3>

                      <ArrowRight className="mt-4 h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
