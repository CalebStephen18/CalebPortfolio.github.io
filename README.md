# calebstephen.com

Personal portfolio and writing, built with Next.js, TypeScript, and Tailwind CSS. Deployed on Vercel.

## Development

```bash
npm install
npm run dev
```

## Writing

Blog posts live in `content/blog/*.mdx`. Each file needs frontmatter:

```md
---
title: "Post title"
date: "YYYY-MM-DD"
excerpt: "One-line summary shown on the writing index."
---

Post content in Markdown/MDX.
```

Add a new `.mdx` file and it appears automatically on `/blog` and in the homepage writing teaser.
