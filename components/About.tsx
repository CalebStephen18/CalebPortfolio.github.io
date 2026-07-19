import { stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-t border-hairline px-6 py-section">
      <div className="mx-auto max-w-content">
        <p className="font-mono text-caption-uppercase text-primary-glow">About</p>

        <div className="mt-6 grid gap-12 lg:grid-cols-[1.2fr,1fr]">
          <div className="space-y-5 text-body-md text-body">
            <p>
              I build agentic AI systems that are actually load-bearing — not chatbots wrapped
              in a demo. As Senior AI/ML Engineer at Express Analytics, I lead a team of engineers
              building kAInet, our agentic marketing platform: architecture, orchestration, client
              strategy, and hiring.
            </p>
            <p>
              Before this, I did AI research at the Max Planck Institute for Radio Astronomy,
              worked at a startup building AI-powered chat systems, and studied at Karunya
              Institute of Technology &amp; Sciences, where I published 7 papers and 1 patent.
            </p>
            <p>
              I&apos;m starting to write about what actually goes into production agentic
              systems — orchestration, tool design, evals, and the gap between agent demos and
              agents that hold up.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-center rounded-lg bg-surface-card px-4 py-6 text-center"
              >
                <span className="font-mono text-caption-uppercase text-body-strong">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
