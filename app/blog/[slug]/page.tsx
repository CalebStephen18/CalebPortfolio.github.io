import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: `${post.title} — Caleb Stephen`, description: post.excerpt };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-section">
        <span className="font-mono text-caption text-muted">{post.date}</span>
        <h1 className="mt-2 text-display-sm text-ink sm:text-display-md">{post.title}</h1>

        <div className="prose prose-invert prose-headings:font-sans prose-headings:font-medium prose-p:text-body prose-a:text-primary-glow prose-code:font-mono prose-code:text-code mt-10 max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </main>
      <Footer />
    </>
  );
}
