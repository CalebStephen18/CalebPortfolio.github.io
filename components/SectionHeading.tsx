import { Reveal } from "./Motion";

/**
 * Consistent, prominent section header: large title + muted subtitle
 * and a small brand accent bar. Replaces the old 11px eyebrow labels.
 */
export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal>
      <h2 className="text-display-md text-ink sm:text-display-lg">{title}</h2>
      {subtitle && <p className="mt-3 text-body-md text-muted">{subtitle}</p>}
      <div className="mt-5 h-0.5 w-12 rounded-full bg-primary" aria-hidden />
    </Reveal>
  );
}
