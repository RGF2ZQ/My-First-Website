import { GraduationCap } from "lucide-react";
import { summary, education } from "../content.js";
import SectionHeading from "./SectionHeading.jsx";
import TerminalFrame from "./TerminalFrame.jsx";
import useReveal from "../hooks/useReveal.js";

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" className="px-5 sm:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading cmd="cat about.md" title="About" />

        <div ref={ref} className="reveal grid lg:grid-cols-[1.4fr_1fr] gap-8">
          <TerminalFrame label="about.md">
            <p className="text-(--color-muted) leading-relaxed whitespace-pre-line">{summary}</p>
          </TerminalFrame>

          <TerminalFrame label="education.json">
            <div className="flex items-start gap-3">
              <GraduationCap className="h-5 w-5 text-(--color-cyan) mt-1 shrink-0" />
              <div>
                <p className="font-mono font-semibold text-(--color-text)">{education.degree}</p>
                <p className="text-sm text-(--color-muted) mt-0.5">{education.school}</p>
                <p className="font-mono text-xs text-(--color-cyan) mt-1">{education.graduation}</p>
              </div>
            </div>

            <div className="mt-5 pt-5 border-t border-(--color-border)">
              <p className="font-mono text-xs text-(--color-faint) mb-2.5 uppercase tracking-wide">
                Relevant coursework
              </p>
              <ul className="space-y-1.5">
                {education.coursework.map((course) => (
                  <li key={course} className="text-sm text-(--color-muted) flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-(--color-green)" />
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </TerminalFrame>
        </div>
      </div>
    </section>
  );
}
