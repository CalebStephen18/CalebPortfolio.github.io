import Image from "next/image";
import { projects } from "@/lib/data";
import { ArrowUpRightIcon } from "./icons";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./Motion";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-hairline px-6 py-section">
      <div className="mx-auto max-w-content">
        <SectionHeading title="Projects" subtitle="Selected work" />

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.title} className="h-full">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-hairline bg-surface-card transition-all duration-200 hover:-translate-y-1 hover:border-hairline-strong"
              >
                {project.image && (
                  <div className="relative h-40 w-full overflow-hidden bg-canvas-deep">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
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
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
