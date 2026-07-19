import TerminalMockup from "./TerminalMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-section pt-24">
      <div className="glow-spotlight pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-content text-center">
        <p className="font-mono text-caption-uppercase text-primary-glow">Senior AI/ML Engineer</p>

        <h1 className="mx-auto mt-4 max-w-3xl text-display-sm text-ink sm:text-display-lg md:text-display-mega">
          Hi, I&apos;m Caleb Stephen.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-body-md text-body">
          I build agentic AI systems that are actually load-bearing — I lead engineering on
          kAInet, Express Analytics&apos; agentic marketing platform — architecture, LangGraph
          multi-agent orchestration, and evaluation for systems businesses actually depend on.
          Not demos.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <TerminalMockup />
        </div>
      </div>
    </section>
  );
}
