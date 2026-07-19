import { social } from "@/lib/data";
import { GithubIcon, LinkedInIcon, MailIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-hairline px-6 py-16">
      <div className="mx-auto flex max-w-content flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-title-md text-body-strong">Caleb Stephen</p>
          <p className="mt-1 text-body-sm text-muted">{social.location}</p>
        </div>

        <div className="flex gap-10 text-body-sm">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-caption-uppercase text-muted">Contact</span>
            <a href={`mailto:${social.email}`} className="flex items-center gap-2 text-body hover:text-body-strong">
              <MailIcon className="h-4 w-4" /> {social.email}
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-caption-uppercase text-muted">Elsewhere</span>
            <a href={social.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-body hover:text-body-strong">
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
            <a href={social.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-body hover:text-body-strong">
              <LinkedInIcon className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-content text-caption text-muted-soft">
        © {new Date().getFullYear()} Caleb Stephen.
      </p>
    </footer>
  );
}
