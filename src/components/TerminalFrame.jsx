/**
 * Wraps content in a terminal-window frame: dot controls + a path-style label.
 * This is the page's signature structural device — sections look like panes
 * in a terminal/IDE rather than generic cards.
 */
export default function TerminalFrame({ label, children, className = "" }) {
  return (
    <div
      className={`rounded-lg border border-(--color-border) bg-(--color-panel)/60 backdrop-blur-sm overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-(--color-border) bg-(--color-panel-2)/80 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-(--color-danger)/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-(--color-amber)/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-(--color-green)/70" />
        {label && (
          <span className="ml-3 font-mono text-xs text-(--color-faint) tracking-wide">
            {label}
          </span>
        )}
      </div>
      <div className="p-5 sm:p-7">{children}</div>
    </div>
  );
}
