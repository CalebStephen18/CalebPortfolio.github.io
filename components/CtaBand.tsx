import { social } from "@/lib/data";
import { Reveal } from "./Motion";

export default function CtaBand() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-hairline px-6 py-section">
      <div className="glow-spotlight pointer-events-none absolute inset-0" />
      <Reveal className="relative mx-auto max-w-content text-center">
        <h2 className="text-display-md text-ink sm:text-display-lg">Let&apos;s build something.</h2>
        <p className="mx-auto mt-4 max-w-xl text-body-md text-body">
          Open to conversations about agentic AI systems, production ML, or just geeking out over
          multi-agent orchestration.
        </p>
        <a
          href={`mailto:${social.email}`}
          className="mt-8 inline-block rounded-md bg-primary px-[18px] py-[10px] text-button text-white transition-colors hover:bg-primary-active"
        >
          Email me
        </a>
      </Reveal>
    </section>
  );
}
