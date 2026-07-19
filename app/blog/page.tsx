import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Writing — Caleb Stephen",
  description: "Notes on production agentic AI, orchestration, and building systems that hold up.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-content px-6 py-section">
        <p className="font-mono text-caption-uppercase text-primary-glow">Writing</p>
        <h1 className="mt-4 text-display-sm text-ink sm:text-display-md">Notes on production agentic AI</h1>

        <div className="mt-10 space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-lg border border-hairline bg-surface-card p-6 transition-colors hover:border-hairline-strong"
            >
              <span className="font-mono text-caption text-muted">{post.date}</span>
              <h2 className="mt-2 text-title-md text-body-strong">{post.title}</h2>
              <p className="mt-2 text-body-sm text-body">{post.excerpt}</p>
            </Link>
          ))}

          {posts.length === 0 && <p className="text-body-md text-body">No posts yet — check back soon.</p>}
        </div>
      </main>
      <Footer />
    </>
  );
}
