import { Radar } from "lucide-react";
import { securityLabs } from "../content.js";
import SectionHeading from "./SectionHeading.jsx";
import TerminalFrame from "./TerminalFrame.jsx";
import useReveal from "../hooks/useReveal.js";

const STATUS_STYLES = {
  "In Progress": "text-(--color-amber) border-(--color-amber)/30 bg-(--color-amber)/5",
  Planned: "text-(--color-cyan) border-(--color-cyan)/30 bg-(--color-cyan)/5",
  Completed: "text-(--color-green) border-(--color-green)/30 bg-(--color-green)/5",
};

export default function SecurityLabs() {
  return (
    <section id="labs" className="px-5 sm:px-8 py-20 sm:py-28 bg-(--color-panel)/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          cmd="tail -f security-log.txt"
          title="Security Interests & Labs"
          description="My security background is hands-on and growing — here's exactly where things stand, tracked honestly rather than oversold."
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {securityLabs.map((lab, i) => (
            <LabCard key={lab.title} lab={lab} delay={i * 60} />
          ))}
        </div>

        <div className="mt-10 flex items-start gap-3 rounded-lg border border-(--color-border) bg-(--color-panel)/40 p-5">
          <Radar className="h-5 w-5 text-(--color-green) mt-0.5 shrink-0" />
          <p className="text-sm text-(--color-muted) leading-relaxed">
            <span className="font-mono text-(--color-text)">Why this matters:</span> I think the
            strongest security analysts understand systems deeply enough to know what "normal"
            looks like — which is exactly what my data science background trains me to do. I'm
            building toward roles where I can apply that pattern-recognition instinct to threat
            detection and response.
          </p>
        </div>
      </div>
    </section>
  );
}

function LabCard({ lab, delay }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      <TerminalFrame>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-mono font-semibold text-(--color-text) leading-snug">{lab.title}</h3>
          <span
            className={`shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[11px] whitespace-nowrap ${
              STATUS_STYLES[lab.status] ?? STATUS_STYLES.Planned
            }`}
          >
            {lab.status}
          </span>
        </div>
        <p className="mt-2.5 text-sm text-(--color-muted) leading-relaxed">{lab.description}</p>
      </TerminalFrame>
    </div>
  );
}
