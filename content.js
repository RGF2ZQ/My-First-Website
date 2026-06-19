// ============================================================================
// SITE CONTENT — edit everything here. Components just render this data.
// ============================================================================

export const profile = {
  name: "Alex Carter",
  handle: "@alexcarter",
  role: "CS & Data Science Student",
  focus: "Aspiring Security Analyst / AI Security Engineer",
  location: "Based in the United States",
  email: "alex.carter@email.com",
  resumeUrl: "/resume.pdf", // drop your resume PDF into /public and keep this path
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    tryhackme: "https://tryhackme.com/p/yourusername",
  },
};

// Lines typed out in the hero terminal boot sequence.
// Keep early lines short — they set rhythm before the summary line types out.
export const bootLines = [
  { prompt: "whoami", output: "alex_carter — cs + data science student" },
  { prompt: "cat focus.txt", output: "security analysis · applied ML · automation" },
  { prompt: "status --current", output: "open to internships · summer 2027" },
];

export const summary = `I'm a Computer Science and Data Science student who got into security
the way most people in this field do — by getting curious about how things break. I build with
Python, C++, and SQL, train models with pandas and scikit-learn, and spend my spare cycles in
TryHackMe rooms learning how attackers think so I can help stop them. My target is security
analyst and AI security engineer roles: I want to bring data-driven thinking to threat detection,
not just run checklists.`;

export const skills = {
  Languages: ["Python", "C++", "SQL", "JavaScript", "Bash"],
  "Data & ML": ["pandas", "scikit-learn", "NumPy", "Matplotlib", "Jupyter"],
  "Security Tools": ["TryHackMe", "Wireshark", "Nmap", "Burp Suite", "HaloITM"],
  "Platforms & Tools": ["Git / GitHub", "Workday Integrations", "Workato", "REST APIs", "Linux"],
  Concepts: [
    "Network Security Fundamentals",
    "OWASP Top 10",
    "Threat Modeling",
    "Data Structures & Algorithms",
    "Incident Response Basics",
  ],
};

export const projects = [
  {
    title: "Predictive Risk Scoring Model",
    category: "Data Science / ML",
    blurb:
      "A machine learning pipeline that flags high-risk records before a human ever reviews them, cutting manual triage time.",
    impact: [
      "Trained a scikit-learn classifier achieving 88% accuracy on held-out test data",
      "Engineered features from raw tabular data, reducing false positives by ~20% over baseline",
      "Built reproducible preprocessing pipeline with pandas to handle missing/inconsistent records",
    ],
    stack: ["Python", "pandas", "scikit-learn", "Matplotlib", "Jupyter"],
    links: { github: "#", demo: null },
    accent: "cyan",
  },
  {
    title: "Core Data Structures Library",
    category: "Data Structures & Algorithms",
    blurb:
      "Hand-built implementations of linked lists, binary search trees, and hash tables from first principles in C++, with full test coverage.",
    impact: [
      "Implemented BSTs and hash tables with O(log n) / O(1) average-case operations, verified with custom benchmarks",
      "Wrote unit tests covering edge cases (empty trees, collisions, duplicate keys) to harden correctness",
      "Used as a personal reference for technical interview prep and algorithmic problem-solving",
    ],
    stack: ["C++", "Data Structures", "Algorithms", "Unit Testing"],
    links: { github: "#", demo: null },
    accent: "green",
  },
  {
    title: "Workflow Automation Toolkit",
    category: "Automation / Scripting",
    blurb:
      "A set of Python scripts that automate repetitive data and integration tasks, inspired by real Workday/Workato integration work.",
    impact: [
      "Automated multi-step data validation and transformation tasks, saving hours of manual processing per run",
      "Integrated with REST APIs to sync and reconcile records across systems",
      "Added logging and error-handling so failures are traceable instead of silent",
    ],
    stack: ["Python", "REST APIs", "Workato", "Scripting"],
    links: { github: "#", demo: null },
    accent: "amber",
  },
];

// Forward-looking security work — explicitly labeled as in-progress/planned so it reads
// as honest roadmap rather than inflated experience.
export const securityLabs = [
  {
    title: "TryHackMe — SOC Level 1 Path",
    status: "In Progress",
    description:
      "Working through SOC analyst fundamentals: log analysis, SIEM basics, and triage workflows.",
  },
  {
    title: "Home Lab: Network Traffic Analysis",
    status: "Planned",
    description:
      "Setting up a small virtualized lab to capture and analyze traffic with Wireshark, and practice spotting anomalous patterns.",
  },
  {
    title: "Vulnerable Web App Pentesting (DVWA / OWASP Juice Shop)",
    status: "Planned",
    description:
      "Working through OWASP Top 10 vulnerabilities hands-on — SQLi, XSS, broken auth — using intentionally vulnerable apps.",
  },
  {
    title: "ML for Anomaly Detection",
    status: "Planned",
    description:
      "Combining the data science side with security: training models to flag anomalous login or network behavior.",
  },
];

export const education = {
  school: "Your University Name",
  degree: "B.S. in Computer Science & Data Science",
  graduation: "Expected 2028",
  coursework: [
    "Data Structures & Algorithms",
    "Database Systems",
    "Machine Learning",
    "Computer Networks",
    "Statistics & Probability",
  ],
};
