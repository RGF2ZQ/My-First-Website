import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, ShieldCheck } from "lucide-react";
import { profile, bootLines } from "../content.js";
import TerminalFrame from "./TerminalFrame.jsx";

const TYPE_SPEED = 28; // ms per character — fast enough to not feel slow on repeat visits
const LINE_PAUSE = 280; // pause between completed lines

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState("prompt"); // "prompt" -> typing the `$ cmd`, "output" -> revealing result
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIndex >= bootLines.length) {
      setDone(true);
      return;
    }
    const current = bootLines[lineIndex];
    const target = phase === "prompt" ? current.prompt : current.output;

    if (charIndex < target.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), TYPE_SPEED);
      return () => clearTimeout(t);
    }

    // finished this phase
    const t = setTimeout(() => {
      if (phase === "prompt") {
        setPhase("output");
        setCharIndex(0);
      } else {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
        setPhase("prompt");
      }
    }, LINE_PAUSE);
    return () => clearTimeout(t);
  }, [charIndex, phase, lineIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 px-5 sm:px-8 bg-grid bg-vignette"
    >
      {/* Scanline accent confined to the hero — subtle, not overwhelming */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-(--color-green)/10 to-transparent animate-scan" />
      </div>

      <div className="relative mx-auto max-w-6xl w-full grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        {/* Left: pitch */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-(--color-green)/30 bg-(--color-green)/5 px-3 py-1 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-(--color-green) animate-pulse" />
            <span className="font-mono text-xs text-(--color-green)">{profile.focus}</span>
          </div>

          <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-(--color-text) tracking-tight">
            Hi, I'm {profile.name.split(" ")[0]}.
            <br />
            <span className="text-(--color-muted)">I build things,</span>
            <br />
            <span className="text-(--color-green)">then break them on purpose.</span>
          </h1>

          <p className="mt-6 max-w-xl text-(--color-muted) leading-relaxed">
            {profile.role} with a growing focus on cybersecurity — bridging applied data
            science with security analysis. Currently sharpening offense-and-defense
            fundamentals through hands-on labs while building real software.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-(--color-green) px-5 py-2.5 font-mono text-sm font-semibold text-(--color-void) hover:bg-(--color-green)/90 transition-colors"
            >
              View projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-(--color-border-bright) px-5 py-2.5 font-mono text-sm text-(--color-text) hover:border-(--color-green)/50 hover:text-(--color-green) transition-colors"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--color-faint) hover:text-(--color-green) transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--color-faint) hover:text-(--color-green) transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={profile.links.tryhackme}
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--color-faint) hover:text-(--color-green) transition-colors"
              aria-label="TryHackMe"
            >
              <ShieldCheck className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Right: terminal boot sequence */}
        <TerminalFrame label="~/alex-carter — zsh">
          <div className="font-mono text-sm leading-relaxed min-h-[220px]">
            {bootLines.slice(0, lineIndex).map((line, i) => (
              <div key={i} className="mb-3">
                <p>
                  <span className="text-(--color-cyan)">guest@portfolio</span>
                  <span className="text-(--color-faint)">:~$ </span>
                  <span className="text-(--color-text)">{line.prompt}</span>
                </p>
                <p className="text-(--color-green) pl-0.5">{line.output}</p>
              </div>
            ))}

            {!done && lineIndex < bootLines.length && (
              <div>
                <p>
                  <span className="text-(--color-cyan)">guest@portfolio</span>
                  <span className="text-(--color-faint)">:~$ </span>
                  <span className="text-(--color-text)">
                    {phase === "prompt" ? bootLines[lineIndex].prompt.slice(0, charIndex) : bootLines[lineIndex].prompt}
                  </span>
                  {phase === "prompt" && <Caret />}
                </p>
                {phase === "output" && (
                  <p className="text-(--color-green) pl-0.5">
                    {bootLines[lineIndex].output.slice(0, charIndex)}
                    <Caret />
                  </p>
                )}
              </div>
            )}

            {done && (
              <p>
                <span className="text-(--color-cyan)">guest@portfolio</span>
                <span className="text-(--color-faint)">:~$ </span>
                <Caret />
              </p>
            )}
          </div>
        </TerminalFrame>
      </div>
    </section>
  );
}

function Caret() {
  return <span className="inline-block w-2 h-4 align-middle bg-(--color-green) animate-blink ml-0.5" />;
}
