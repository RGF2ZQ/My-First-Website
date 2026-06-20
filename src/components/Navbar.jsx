import { useEffect, useState } from "react";
import { Menu, X, TerminalSquare } from "lucide-react";
import { profile } from "../content.js";

const NAV_ITEMS = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "labs", label: "labs" },
  { id: "contact", label: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-(--color-void)/90 backdrop-blur-md border-b border-(--color-border)" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2 font-mono font-bold text-(--color-text) hover:text-(--color-green) transition-colors"
        >
          <img src="/DALogo.png" alt={profile.name} className="h-6 w-6 rounded-sm" />
          <span>{profile.handle}</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-sm">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-(--color-muted) hover:text-(--color-green) transition-colors"
              >
                <span className="text-(--color-faint)">./</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center rounded-md border border-(--color-green)/40 px-4 py-1.5 font-mono text-sm text-(--color-green) hover:bg-(--color-green)/10 hover:border-(--color-green) transition-colors"
        >
          resume.pdf
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-(--color-text)"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-(--color-void)/95 backdrop-blur-md border-b border-(--color-border) px-5 pb-6 pt-2">
          <ul className="flex flex-col gap-4 font-mono text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="text-(--color-muted) hover:text-(--color-green) transition-colors"
                >
                  <span className="text-(--color-faint)">./</span>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-(--color-green)/40 px-4 py-1.5 text-(--color-green)"
              >
                resume.pdf
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
