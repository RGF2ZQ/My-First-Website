import { Mail, Github, Linkedin, ShieldCheck, Download } from "lucide-react";
import { profile } from "../content.js";
import SectionHeading from "./SectionHeading.jsx";
import TerminalFrame from "./TerminalFrame.jsx";
import useReveal from "../hooks/useReveal.js";

export default function Contact() {
  const ref = useReveal();
  return (
    <section id="contact" className="px-5 sm:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          cmd="./connect.sh --init"
          title="Let's Connect"
          description="Open to internships, security-adjacent roles, and conversations about applied ML or threat detection."
        />

        <div ref={ref} className="reveal">
          <TerminalFrame label="connect.sh">
            <div className="grid sm:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-(--color-muted) leading-relaxed">
                  The fastest way to reach me is email. I try to respond within a couple of days —
                  feel free to reach out about internships, collaboration, or just to talk security.
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-5 inline-flex items-center gap-2 rounded-md bg-(--color-green) px-5 py-2.5 font-mono text-sm font-semibold text-(--color-void) hover:bg-(--color-green)/90 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {profile.email}
                </a>
              </div>

              <div className="flex flex-col gap-3 sm:items-end">
                <LinkRow href={profile.links.github} icon={Github} label="GitHub" />
                <LinkRow href={profile.links.linkedin} icon={Linkedin} label="LinkedIn" />
                <LinkRow href={profile.links.tryhackme} icon={ShieldCheck} label="TryHackMe" />
                <LinkRow href={profile.resumeUrl} icon={Download} label="Download résumé" />
              </div>
            </div>
          </TerminalFrame>
        </div>
      </div>
    </section>
  );
}

function LinkRow({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 font-mono text-sm text-(--color-muted) hover:text-(--color-cyan) transition-colors"
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}
