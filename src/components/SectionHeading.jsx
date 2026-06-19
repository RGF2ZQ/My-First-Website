import useReveal from "../hooks/useReveal.js";

/**
 * `cmd` mimics a shell command relevant to the section (e.g. `ls ./projects`)
 * — this is functional labeling, not decoration: it tells the reader what
 * they're about to inspect, consistent with the terminal framing device.
 */
export default function SectionHeading({ cmd, title, description }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal mb-10 sm:mb-14">
      <p className="font-mono text-sm text-(--color-green) mb-3">
        <span className="text-(--color-faint)">$</span> {cmd}
      </p>
      <h2 className="font-mono text-3xl sm:text-4xl font-bold text-(--color-text) tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-(--color-muted) leading-relaxed">{description}</p>
      )}
    </div>
  );
}
