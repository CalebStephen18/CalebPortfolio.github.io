import Image from "next/image";
import { projects } from "@/lib/data";
import { ArrowUpRightIcon } from "./icons";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-hairline px-6 py-section">
      <div className="mx-auto max-w-content">
        <p className="font-mono text-caption-uppercase text-primary-glow">Projects</p>
        <h2 className="mt-4 text-display-sm text-ink sm:text-display-md">Selected work</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col overflow-hidden rounded-xl border border-hairline bg-surface-card transition-colors hover:border-hairline-strong"
            >
              {project.image && (
                <div className="relative h-40 w-full overflow-hidden bg-canvas-deep">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-90 transition-opacity group-hover:opacity-100"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-title-md text-body-strong">{project.title}</h3>
                  <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-primary-glow" />
                </div>
                <p className="mt-2 flex-1 text-body-sm text-body">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface-card-elevated px-[10px] py-1 font-mono text-caption-uppercase text-body-strong"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
