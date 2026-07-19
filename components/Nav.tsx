"use client";

import { useState } from "react";
import Link from "next/link";
import { GithubIcon, LinkedInIcon } from "./icons";
import { social } from "@/lib/data";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/blog", label: "Writing" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-hairline bg-canvas/80 backdrop-blur">
      <div className="mx-auto flex h-full max-w-content items-center justify-between px-6">
        <Link
          href="/"
          aria-label="Home"
          className="flex h-[34px] w-[34px] items-center justify-center rounded-md border border-hairline-strong font-mono text-caption font-semibold text-body-strong"
        >
          CS
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-nav-link text-body transition-colors hover:text-body-strong">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-body transition-colors hover:text-body-strong">
            <GithubIcon className="h-5 w-5" />
          </a>
          <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-body transition-colors hover:text-body-strong">
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href="/#contact"
            className="rounded-md bg-primary px-[18px] py-[10px] text-button text-white transition-colors hover:bg-primary-active"
          >
            Get in touch
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span className="block h-[1.5px] w-5 bg-body-strong" />
            <span className="block h-[1.5px] w-5 bg-body-strong" />
            <span className="block h-[1.5px] w-5 bg-body-strong" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline bg-canvas px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-nav-link text-body"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon className="h-5 w-5 text-body" />
              </a>
              <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedInIcon className="h-5 w-5 text-body" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
