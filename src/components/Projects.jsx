import { Github, ExternalLink, CheckCircle2 } from "lucide-react";
import { projects } from "../content.js";
import SectionHeading from "./SectionHeading.jsx";
import TerminalFrame from "./TerminalFrame.jsx";
import useReveal from "../hooks/useReveal.js";

const ACCENT_MAP = {
  cyan: { text: "text-(--color-cyan)", border: "hover:border-(--color-cyan)/50", glow: "hover:shadow-[0_0_30px_-12px_var(--color-cyan)]" },
  green: { text: "text-(--color-green)", border: "hover:border-(--color-green)/50", glow: "hover:shadow-[0_0_30px_-12px_var(--color-green)]" },
  amber: { text: "text-(--color-amber)", border: "hover:border-(--color-amber)/50", glow: "hover:shadow-[0_0_30px_-12px_var(--color-amber)]" },
};

export default function Projects() {
  return (
    <section id="projects" className="px-5 sm:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          cmd="ls -la ./projects"
          title="Featured Projects"
          description="A mix of applied ML, core CS fundamentals, and automation work — chosen to show range, not just volume."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay }) {
  const ref = useReveal();
  const accent = ACCENT_MAP[project.accent] ?? ACCENT_MAP.green;

  return (
    <div ref={ref} className="reveal h-full" style={{ transitionDelay: `${delay}ms` }}>
      <TerminalFrame
        label={project.category}
        className={`h-full flex flex-col transition-all duration-300 ${accent.border} ${accent.glow}`}
      >
        <div className="flex-1 flex flex-col">
          <h3 className={`font-mono text-lg font-bold text-(--color-text)`}>{project.title}</h3>
          <p className="mt-2.5 text-sm text-(--color-muted) leading-relaxed">{project.blurb}</p>

          <ul className="mt-4 space-y-2 flex-1">
            {project.impact.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-(--color-muted)">
                <CheckCircle2 className={`h-4 w-4 mt-0.5 shrink-0 ${accent.text}`} />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded border border-(--color-border-bright) px-2 py-0.5 font-mono text-[11px] text-(--color-faint)"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 pt-5 border-t border-(--color-border) flex items-center gap-4">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 font-mono text-xs text-(--color-muted) hover:${accent.text} transition-colors`}
            >
              <Github className="h-4 w-4" /> Source
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 font-mono text-xs text-(--color-muted) hover:${accent.text} transition-colors`}
            >
              <ExternalLink className="h-4 w-4" /> Live demo
            </a>
          )}
        </div>
      </TerminalFrame>
    </div>
  );
}
