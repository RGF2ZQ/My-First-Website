# Portfolio — React + Tailwind (Terminal / Cyber theme)

A personal portfolio built for a CS + Data Science student targeting cybersecurity roles.
Dark "terminal" aesthetic, typed boot-sequence hero, scroll reveals, fully responsive.

## Tech stack
- **React 18** + **Vite** (fast dev server, instant HMR)
- **Tailwind CSS v4** (CSS-first config — theme tokens live in `src/index.css`)
- **lucide-react** for icons
- No backend — it's a static site. Contact form uses a `mailto:` link (see note below if you want a real form).

---

## 1. Run it locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

```bash
npm run build      # production build → /dist
npm run preview    # preview the production build locally
```

---

## 2. Customize everything in one place

Almost all editable content lives in **`src/content.js`**. You should not need to touch
component files to update your information. Open that file and edit:

| What | Field |
|---|---|
| Name, role, email, location | `profile` |
| GitHub / LinkedIn / TryHackMe links | `profile.links` |
| Resume file path | `profile.resumeUrl` |
| Hero terminal typed lines | `bootLines` |
| Professional summary paragraph | `summary` |
| Skills by category | `skills` |
| Projects (title, bullets, stack, links) | `projects` |
| Security labs / TryHackMe progress | `securityLabs` |
| Education + coursework | `education` |

### Add your resume
Drop your resume PDF into `public/resume.pdf` (exact filename), or change
`profile.resumeUrl` in `content.js` to point wherever you put it.

### Swap project GitHub links
In `content.js`, each project has `links: { github: "#", demo: null }`. Replace `"#"`
with your real repo URL. If a project has a live demo, set `demo: "https://..."` and a
"Live demo" link will automatically appear on the card.

### Change colors
Theme tokens are defined as CSS variables in `src/index.css` under `@theme`:

```css
--color-void: #0a0e14;     /* page background */
--color-green: #39ff8c;    /* primary accent */
--color-cyan: #22d3ee;     /* secondary accent */
--color-amber: #ffb454;    /* tertiary accent (3rd project card, "in progress" labels) */
```

Change the hex values and every component updates automatically — colors aren't
hardcoded in components, they reference these tokens (e.g. `bg-(--color-green)`).

### Change fonts
Fonts are loaded in `index.html` via Google Fonts (`JetBrains Mono` + `Inter`) and
mapped to `--font-mono` / `--font-sans` in `src/index.css`. Swap the Google Fonts link
and the variable values to use different typefaces.

---

## 3. Project structure

```
src/
  content.js              ← EDIT THIS for all text/data
  index.css               ← theme tokens, global styles, animations
  App.jsx                 ← assembles all sections
  main.jsx                ← React entry point
  hooks/
    useReveal.js           ← scroll-reveal animation hook
  components/
    Navbar.jsx
    Hero.jsx               ← typed terminal boot sequence (signature element)
    About.jsx
    Skills.jsx
    Projects.jsx
    SecurityLabs.jsx
    Contact.jsx
    Footer.jsx
    TerminalFrame.jsx      ← reusable terminal-window panel chrome
    SectionHeading.jsx
public/
  favicon.svg
  resume.pdf               ← add your resume here
```

---

## 4. Recommended cybersecurity projects to add

The site already includes a "Security Interests & Labs" section tracking your current
progress honestly (in-progress / planned). As you complete real work, **move items from
`securityLabs` into `projects`** in `content.js` with impact-style bullets. Strong
options, roughly easiest → most impressive:

1. **TryHackMe SOC Level 1 path** — finish it, screenshot your profile badge/stats, link it.
2. **Home lab network capture + Wireshark analysis** — set up a small VM lab (e.g. VirtualBox + Kali + a vulnerable target VM), capture traffic, write up how you identified a specific attack pattern (e.g. port scan, ARP spoofing). A short write-up turns this into a real "project."
3. **OWASP Juice Shop or DVWA walkthrough** — pick 3–5 vulnerabilities (SQLi, XSS, broken auth), document how you found and exploited them, and what the fix would be. Recruiters love seeing the *fix*, not just the exploit — it shows you think defensively.
4. **Log analysis / anomaly detection with your ML skills** — this is your strongest differentiator. Take a public dataset (e.g. CICIDS2017, NSL-KDD) and train a model with scikit-learn to flag anomalous network traffic. This single project ties your data science skills directly to security and is genuinely rare among entry-level candidates.
5. **CTF write-ups** — even mid-tier TryHackMe/HackTheBox room write-ups, published as short blog posts or GitHub markdown files, demonstrate communication skills security teams value highly.
6. **A small SIEM-style dashboard** — ingest sample logs (even a CSV of fake auth logs) and build a simple Python/pandas script or small web dashboard that flags suspicious login patterns (impossible travel, brute force attempts). Combines your data viz + security interest directly.

Aim to have **at least one of #3 or #4 done** before applying to internships — it's the
single biggest credibility signal for an entry-level security/AI-security role.

---

## 5. Deployment

### Option A — Vercel (recommended, easiest for React/Vite)
1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → "Add New Project" → import your repo.
3. Vercel auto-detects Vite. Leave build command as `npm run build` and output directory as `dist`.
4. Click **Deploy**. You'll get a live URL (e.g. `your-name.vercel.app`) in under a minute.
5. (Optional) Add a custom domain under Project → Settings → Domains.

### Option B — Netlify
1. Push to GitHub.
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Import an existing project."
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy. Netlify gives you a URL like `your-name.netlify.app`.

### Option C — GitHub Pages
GitHub Pages needs a base path config since it serves from a subpath unless you use a
custom domain or the `username.github.io` repo name.

1. Install the GH Pages helper:
   ```bash
   npm install -D gh-pages
   ```
2. In `vite.config.js`, add a `base` matching your repo name:
   ```js
   export default defineConfig({
     plugins: [react(), tailwindcss()],
     base: "/your-repo-name/",
   });
   ```
3. Add to `package.json` scripts:
   ```json
   "deploy": "vite build && gh-pages -d dist"
   ```
4. Run `npm run deploy`. Enable Pages in your repo settings (Settings → Pages → branch: `gh-pages`).

**Recommendation:** Use **Vercel**. It has zero config for Vite projects, free SSL, instant
redeploys on every git push, and no base-path headaches — best value for a portfolio you'll
keep updating.

---

## 6. Before you apply to internships — checklist

- [ ] Replace all placeholder GitHub links in `content.js` with real repo URLs
- [ ] Add `public/resume.pdf`
- [ ] Update `profile.email`, `profile.links` (GitHub/LinkedIn/TryHackMe) with real URLs
- [ ] Update `education` with your real school name
- [ ] Complete at least one real security project and move it from `securityLabs` to `projects`
- [ ] Test on an actual phone, not just browser devtools
- [ ] Run `npm run build` once before deploying to catch any errors early
- [ ] Check all links work (no `href="#"` left over)

---

## Note on the contact form
This site uses a `mailto:` link rather than a backend contact form, since static
hosting (Vercel/Netlify/GitHub Pages) has no server to receive form submissions for free
without a third-party service. If you want a real in-page form later, Netlify Forms or
Formspree both work with zero backend code — ask and I can wire one in.
