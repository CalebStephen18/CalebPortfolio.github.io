"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import TerminalMockup from "./TerminalMockup";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-6 pb-section pt-24">
      <div className="glow-spotlight pointer-events-none absolute inset-0" />

      {!reduce && (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-1/4 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
            animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.15, 0.95, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute right-1/4 top-24 h-64 w-64 translate-x-1/2 rounded-full bg-primary-glow/15 blur-[120px]"
            animate={{ x: [0, -40, 20, 0], y: [0, 25, -15, 0], scale: [1, 0.9, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <motion.div
        className="relative z-10 mx-auto max-w-content text-center"
        variants={container}
        initial={reduce ? false : "hidden"}
        animate="show"
      >
        <motion.p variants={rise} className="font-mono text-caption-uppercase text-primary-glow">
          Senior AI/ML Engineer
        </motion.p>

        <motion.h1
          variants={rise}
          className="mx-auto mt-4 max-w-3xl text-display-sm text-ink sm:text-display-lg md:text-display-mega"
        >
          Hi, I&apos;m Caleb Stephen.
        </motion.h1>

        <motion.p variants={rise} className="mx-auto mt-6 max-w-2xl text-body-md text-body">
          I build agentic AI systems that are actually load-bearing — I lead engineering on
          kAInet, Express Analytics&apos; agentic marketing platform — architecture, LangGraph
          multi-agent orchestration, and evaluation for systems businesses actually depend on.
          Not demos.
        </motion.p>

        <motion.div variants={rise} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-md bg-primary px-[18px] py-[10px] text-button text-white transition-colors hover:bg-primary-active"
          >
            See my work
          </a>
          <a
            href="/blog"
            className="rounded-md border border-hairline-strong px-[18px] py-[10px] text-button text-body-strong transition-colors hover:bg-surface-card"
          >
            Read my writing
          </a>
        </motion.div>

        <motion.div variants={rise} className="mx-auto mt-16 max-w-2xl">
          <TerminalMockup />
        </motion.div>
      </motion.div>
    </section>
  );
}
