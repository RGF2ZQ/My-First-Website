import { Code2, Database, ShieldHalf, Wrench, Lightbulb } from "lucide-react";
import { skills } from "../content.js";
import SectionHeading from "./SectionHeading.jsx";
import TerminalFrame from "./TerminalFrame.jsx";
import useReveal from "../hooks/useReveal.js";

const ICONS = {
  Languages: Code2,
  "Data & ML": Database,
  "Security Tools": ShieldHalf,
  "Platforms & Tools": Wrench,
  Concepts: Lightbulb,
};

export default function Skills() {
  return (
    <section id="skills" className="px-5 sm:px-8 py-20 sm:py-28 bg-(--color-panel)/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          cmd="ls -la ./skills"
          title="Skills & Tools"
          description="What I reach for day to day, organized by category — not a wall of buzzwords."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items], i) => (
            <SkillCard key={category} category={category} items={items} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ category, items, delay }) {
  const ref = useReveal();
  const Icon = ICONS[category] ?? Code2;
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      <TerminalFrame label={`./${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
        <div className="flex items-center gap-2.5 mb-4">
          <Icon className="h-4 w-4 text-(--color-green)" />
          <h3 className="font-mono font-semibold text-(--color-text)">{category}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-md border border-(--color-border-bright) bg-(--color-panel-2) px-2.5 py-1 font-mono text-xs text-(--color-muted)"
            >
              {item}
            </span>
          ))}
        </div>
      </TerminalFrame>
    </div>
  );
}
