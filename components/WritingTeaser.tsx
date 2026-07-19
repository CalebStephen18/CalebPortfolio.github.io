import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { ArrowUpRightIcon } from "./icons";
import SectionHeading from "./SectionHeading";
import { Reveal, Stagger, StaggerItem } from "./Motion";

export default function WritingTeaser() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section id="writing" className="border-t border-hairline px-6 py-section">
      <div className="mx-auto max-w-content">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading title="Writing" subtitle="Recent posts" />
          <Reveal>
            <Link href="/blog" className="text-body-sm text-body transition-colors hover:text-body-strong">
              View all posts →
            </Link>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem key={post.slug} className="h-full">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-xl border border-hairline bg-surface-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-hairline-strong"
              >
                <span className="font-mono text-caption text-muted">{post.date}</span>
                <h3 className="mt-3 flex items-start justify-between gap-2 text-title-md text-body-strong">
                  {post.title}
                  <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-primary-glow" />
                </h3>
                <p className="mt-2 text-body-sm text-body">{post.excerpt}</p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
