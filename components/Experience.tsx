import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./Motion";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-hairline px-6 py-section">
      <div className="mx-auto max-w-content">
        <SectionHeading title="Experience" subtitle="Where I've worked" />

        <Stagger className="mt-12 space-y-4">
          {experience.map((entry) => (
            <StaggerItem key={`${entry.org}-${entry.role}`}>
              <div className="rounded-lg border border-hairline bg-surface-card p-6 transition-colors hover:border-hairline-strong">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-title-md text-body-strong">
                    {entry.role} <span className="text-muted">· {entry.org}</span>
                  </h3>
                  <span className="font-mono text-caption text-muted">{entry.period}</span>
                </div>
                <p className="mt-1 text-body-sm text-muted">{entry.location}</p>

                {entry.highlights && (
                  <ul className="mt-4 space-y-2">
                    {entry.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-body-sm text-body">
                        <span className="text-primary-glow">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {entry.skills && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-surface-card-elevated px-[10px] py-1 font-mono text-caption-uppercase text-body-strong"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
