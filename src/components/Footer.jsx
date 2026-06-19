import { profile } from "../content.js";

export default function Footer() {
  return (
    <footer className="border-t border-(--color-border) px-5 sm:px-8 py-8">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-(--color-faint)">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
        </p>
        <p className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-(--color-green) animate-pulse" />
          status: open to opportunities
        </p>
      </div>
    </footer>
  );
}
