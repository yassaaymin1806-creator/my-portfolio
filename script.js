/* ==========================================================
   FM Portfolio — script.js
   Contains: data + theme + navigation + visuals + projects +
   certificates + contact + command palette + assistant + main
   ========================================================== */

/* ---------- DATA (edit these to customize your content) ---------- */
/**
 * profile.js
 * Single source of truth for personal / brand information.
 * Edit this file to update your name, links and bio across the entire site.
 */
const PROFILE = {
  name: "Yassa Ayman",
  initials: "YA",
  role: "AI Engineer & Software Developer",
  tagline: "Building Intelligent Digital Experiences.",
  bio: "I build intelligent and scalable digital experiences by combining AI, software engineering, and modern web technologies.",
  longBio:
    "I'm a software developer focused on the point where applied AI meets solid engineering. My work spans building LLM-backed features, structuring full-stack systems, and getting the fundamentals — architecture, data, testing — right before anything ships. I care about software that stays maintainable long after the demo is over.",
  email: "YOUR_EMAIL",
  location: "YOUR_LOCATION",
  availability: "Available for opportunities",
  education: "Computer Science — YOUR_UNIVERSITY",
  focus: "AI-integrated web applications & software architecture",
  social: {
    github: "YOUR_GITHUB_URL",
    linkedin: "YOUR_LINKEDIN_URL",
    email: "mailto:YOUR_EMAIL",
  },
  resume: "resume/Fady-Mosa-Resume.pdf",
  stats: [
    { value: "XX+", label: "Projects" },
    { value: "XX", label: "Certificates" },
    { value: "XX+", label: "Technologies" },
    { value: "XX", label: "Years Building" },
  ],
  exploring: [
    "Generative AI",
    "LLM Applications",
    "AI Agents",
    "Software Architecture",
  ],
  philosophy: [
    {
      index: "01",
      title: "Understand",
      text: "Understand the problem before writing a single line of code.",
    },
    {
      index: "02",
      title: "Design",
      text: "Create a scalable, clear architecture the system can grow into.",
    },
    {
      index: "03",
      title: "Build",
      text: "Turn ideas into real, working software.",
    },
    {
      index: "04",
      title: "Improve",
      text: "Test, measure, and continuously refine what's shipped.",
    },
  ],
  capabilities: [
    {
      title: "AI Applications",
      items: ["AI assistants", "LLM integrations", "Generative AI features"],
    },
    {
      title: "Web Applications",
      items: ["Modern, responsive interfaces", "Performance-first builds"],
    },
    {
      title: "Full-Stack Systems",
      items: ["Frontend", "Backend", "Database design", "API integration"],
    },
    {
      title: "Software Engineering",
      items: ["System analysis", "UML & documentation", "Testing"],
    },
  ],
};

/**
 * skills-data.js
 * Add or remove a skill by editing the arrays below — the UI renders
 * automatically from this file.
 */
const SKILLS = [
  {
    category: "AI & Intelligent Systems",
    icon: "cpu",
    skills: [
      "Generative AI",
      "LLM Applications",
      "Prompt Engineering",
      "AI Assistants",
      "AI APIs",
    ],
  },
  {
    category: "Frontend",
    icon: "layout",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Responsive Design",
    ],
  },
  {
    category: "Backend",
    icon: "server",
    skills: ["Node.js", "Express", "REST APIs", "Authentication", "API Integration"],
  },
  {
    category: "Database",
    icon: "database",
    skills: ["SQL", "Supabase", "Database Design"],
  },
  {
    category: "DevOps & Tools",
    icon: "terminal",
    skills: ["Git", "GitHub", "Docker", "Kubernetes"],
  },
  {
    category: "Software Engineering",
    icon: "grid",
    skills: ["UML", "SRS", "System Analysis", "Architecture", "Testing", "Documentation"],
  },
];

/* Nodes for the interactive technology network visual (hero + skills section) */

/**
 * projects-data.js
 * Add a new project to the portfolio by adding one object to this array.
 * No HTML editing required — the Projects section renders from this file.
 */
const PROJECTS = [
  {
    id: 1,
    title: "SmartHifz",
    category: "AI",
    image: "assets/projects/smarthifz.jpg",
    description:
      "AI-powered Quran memorization and progress tracking platform.",
    overview:
      "SmartHifz helps students memorize the Quran with structured goals, progress tracking, and an AI chatbot that answers questions and adapts guidance to the learner's pace.",
    problem:
      "Manual memorization tracking is inconsistent and gives learners no structured feedback on their pace or weak spots.",
    solution:
      "A dashboard-driven platform that tracks memorization progress against personal goals, backed by an AI assistant for guidance and Q&A.",
    features: [
      "AI chatbot assistant",
      "Progress tracking",
      "Memorization goals",
      "Authentication",
      "Personal dashboard",
    ],
    architecture:
      "React frontend communicating with a Node.js/Express API; AI features are served through a dedicated AI API layer, decoupled from core app logic.",
    challenges:
      "Designing a progress model flexible enough for different memorization plans, and keeping AI responses grounded and useful.",
    lessons:
      "Structuring state around a clear progress schema early made every later feature — goals, streaks, dashboards — far easier to build.",
    technologies: ["React", "Node.js", "Express", "AI APIs"],
    github: "",
    liveDemo: "",
    year: "2026",
    featured: true,
  },
  {
    id: 2,
    title: "WorkerHub",
    category: "Full Stack",
    image: "assets/projects/workerhub.jpg",
    description: "Platform connecting skilled workers with clients.",
    overview:
      "WorkerHub is a two-sided marketplace where clients can find, filter, and book skilled workers, with a full admin dashboard for platform oversight.",
    problem:
      "Finding verified, skilled workers locally is fragmented and mostly informal, with no structured way to compare or book them.",
    solution:
      "A searchable, filterable directory of worker profiles with a booking-request flow, bilingual support, and an admin layer for managing the platform.",
    features: [
      "Worker profiles",
      "Search & filtering",
      "Booking requests",
      "Admin dashboard",
      "Authentication",
      "Arabic / English support",
    ],
    architecture:
      "React frontend on Supabase for auth, database, and storage; i18next drives full bilingual support; Framer Motion handles interface motion.",
    challenges:
      "Designing a data model that works cleanly in both languages and handling right-to-left layout without duplicating components.",
    lessons:
      "Internationalization is far easier when it's planned into the component structure from day one rather than retrofitted.",
    technologies: ["React", "Supabase", "JavaScript", "Framer Motion", "i18next"],
    github: "",
    liveDemo: "",
    year: "2026",
    featured: true,
  },
  {
    id: 3,
    title: "Grand Hotel",
    category: "Software Engineering",
    image: "assets/projects/grand-hotel.jpg",
    description: "Hotel booking and management system.",
    overview:
      "A full booking and management system for a hotel, covering both the guest-facing booking flow and the admin-side management tools.",
    problem:
      "Small hotel operations often rely on manual booking processes with no unified system for clients and administrators.",
    solution:
      "A Flask-based system separating client registration and booking from an admin management layer, backed by a relational data model.",
    features: [
      "Client registration",
      "Admin registration",
      "Authentication",
      "Room booking",
      "Hotel management",
    ],
    architecture:
      "Server-rendered Flask application with a Python backend and a relational database, following a classic MVC structure.",
    challenges:
      "Modeling room availability and booking conflicts correctly, and separating admin permissions cleanly from client access.",
    lessons:
      "Getting the data model and access rules right up front avoided a large class of bugs later in the booking flow.",
    technologies: ["HTML", "CSS", "JavaScript", "Flask", "Python"],
    github: "",
    liveDemo: "",
    year: "2026",
    featured: false,
  },
];

/**
 * certificates-data.js
 * No certificates have been added yet. Add one by pushing an object with
 * this shape into the CERTIFICATES array — the gallery renders automatically.
 *
 * {
 *   id: 1,
 *   title: "Certificate Name",
 *   organization: "Organization",
 *   date: "2026",
 *   category: "AI", // Academic | AI | Programming | Cybersecurity | Web Development | Data
 *   image: "assets/certificates/certificate.jpg",
 *   verificationUrl: "",
 *   description: ""
 * }
 */
const CERTIFICATES = [
  // ============================================================
  //  HOW TO ADD A CERTIFICATE — just fill in the fields below:
  //
  //  id           → unique number (1, 2, 3 …)
  //  title        → name of the certificate
  //  organization → who issued it (Coursera, Google, etc.)
  //  date         → year or "Month Year"
  //  category     → one of: Academic | AI | Programming |
  //                  Cybersecurity | Web Development | Data
  //  image        → put your certificate image inside
  //                  assets/certificates/ and write the path
  //  verificationUrl → link to verify online (or leave "")
  //  description  → short description (shown in viewer)
  // ============================================================

  {
    id: 1,
    title: "اسم الشهادة هنا",
    organization: "اسم الجهة المانحة",
    date: "2024",
    category: "AI",
    image: "assets/certificates/cert-01.jpg",
    verificationUrl: "",
    description: "وصف قصير للشهادة وما تغطيه.",
  },
  {
    id: 2,
    title: "اسم الشهادة هنا",
    organization: "اسم الجهة المانحة",
    date: "2024",
    category: "Programming",
    image: "assets/certificates/cert-02.jpg",
    verificationUrl: "",
    description: "وصف قصير للشهادة وما تغطيه.",
  },
  {
    id: 3,
    title: "اسم الشهادة هنا",
    organization: "اسم الجهة المانحة",
    date: "2024",
    category: "Web Development",
    image: "assets/certificates/cert-03.jpg",
    verificationUrl: "",
    description: "وصف قصير للشهادة وما تغطيه.",
  },
  {
    id: 4,
    title: "اسم الشهادة هنا",
    organization: "اسم الجهة المانحة",
    date: "2023",
    category: "Cybersecurity",
    image: "assets/certificates/cert-04.jpg",
    verificationUrl: "",
    description: "وصف قصير للشهادة وما تغطيه.",
  },
  {
    id: 5,
    title: "اسم الشهادة هنا",
    organization: "اسم الجهة المانحة",
    date: "2023",
    category: "Data",
    image: "assets/certificates/cert-05.jpg",
    verificationUrl: "",
    description: "وصف قصير للشهادة وما تغطيه.",
  },
 
];

/**
 * achievements-data.js (same file, kept together since both are small)
 * Timeline / award-style achievements. Add real entries only.
 */
const ACHIEVEMENTS = [
  {
    id: "academic-excellence",
    title: "Academic Excellence Award",
    organization: "YOUR_UNIVERSITY",
    date: "YOUR_DATE",
    category: "Academic",
    featured: true,
    description: "PLACEHOLDER — replace with the real award description.",
  },
];

/**
 * experience-data.js
 * Powers "My Journey" — the vertical timeline in the Experience section.
 * Entries are rendered in the order given, most recent first is conventional.
 */
const EXPERIENCE = [
  {
    date: "YOUR_DATES",
    title: "Computer Science Education",
    organization: "YOUR_UNIVERSITY",
    description:
      "PLACEHOLDER — describe your degree, focus areas and relevant coursework.",
    skills: ["Software Engineering", "Algorithms", "System Design"],
  },
  {
    date: "YOUR_DATES",
    title: "React Frontend Training",
    organization: "YOUR_PROGRAM",
    description:
      "PLACEHOLDER — describe the training program and what it covered.",
    skills: ["React", "JavaScript", "Responsive Design"],
  },
  {
    date: "YOUR_DATES",
    title: "AI & Software Engineering Projects",
    organization: "Independent / Academic",
    description:
      "Designed and built SmartHifz, WorkerHub and Grand Hotel — spanning AI integration, full-stack systems and structured software engineering.",
    skills: ["AI APIs", "Full-Stack Development", "System Analysis"],
  },
  {
    date: "YOUR_DATES",
    title: "Certifications",
    organization: "Various",
    description:
      "PLACEHOLDER — list certification track once certificates are added.",
    skills: [],
  },
];

const EDUCATION = {
  degree: "Computer Science",
  institution: "YOUR_UNIVERSITY",
  focus: "AI-integrated software systems & web engineering",
  achievements: ["Academic Excellence Award — YOUR_DATE"],
};

/* ---------- APP LOGIC ---------- */
/**
 * theme.js — dark/light mode toggle, persisted to localStorage,
 * defaulting to the visitor's OS preference on first visit.
 */
(function () {
  const STORAGE_KEY = "fm-theme";
  const root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
  }

  function getInitialTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    return prefersLight ? "light" : "dark";
  }

  const initial = getInitialTheme();
  applyTheme(initial);

  function toggleTheme() {
    const isLight = root.getAttribute("data-theme") === "light";
    const next = isLight ? "dark" : "light";
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      /* storage unavailable — theme still applies for this session */
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    document
      .querySelectorAll("[data-theme-toggle]")
      .forEach((btn) => btn.addEventListener("click", toggleTheme));
  });

  window.FM_THEME = { toggleTheme, applyTheme };
})();

/**
 * navigation.js — sticky navbar behaviour, active-section highlighting,
 * and the mobile hamburger menu.
 */
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const navLinkEls = document.querySelectorAll(".nav-links a, .mobile-menu a");
    const sections = document.querySelectorAll("section[id]");

    /* Navbar glass state on scroll */
    function onScroll() {
      if (window.scrollY > 12) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    /* Active section highlighting */
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute("id");
          navLinkEls.forEach((link) => {
            const match = link.getAttribute("href") === `#${id}`;
            link.classList.toggle("active", match);
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => sectionObserver.observe(s));

    /* Mobile menu */
    function closeMobileMenu() {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("no-scroll");
    }
    function openMobileMenu() {
      mobileMenu.classList.add("open");
      hamburger.classList.add("open");
      hamburger.setAttribute("aria-expanded", "true");
      document.body.classList.add("no-scroll");
    }
    hamburger?.addEventListener("click", () => {
      mobileMenu.classList.contains("open") ? closeMobileMenu() : openMobileMenu();
    });
    mobileMenu?.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", closeMobileMenu)
    );
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMobileMenu();
    });

    window.FM_NAV = { closeMobileMenu };
  });
})();

/**
 * animations.js — the two canvas-driven visuals:
 * 1) the hero "digital intelligence core" node graph
 * 2) the interactive technology network in the Skills section
 * Both react subtly to mouse position and are paused under prefers-reduced-motion.
 */
(function () {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function themeColor() {
    const light = document.documentElement.getAttribute("data-theme") === "light";
    return {
      line: light ? "156,95,38" : "201,138,75",
      node: light ? "23,26,31" : "237,239,243",
      accent: light ? "156,95,38" : "201,138,75",
    };
  }

  function buildNodeGraph(canvas, labels, options = {}) {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, dpr = Math.min(window.devicePixelRatio || 1, 2);
    let mouseX = null, mouseY = null;

    const centerLabel = options.center || null;
    let nodes = [];

    function layout() {
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cx = w / 2, cy = h / 2;
      const radius = Math.min(w, h) * 0.36;
      nodes = labels.map((label, i) => {
        const angle = (i / labels.length) * Math.PI * 2 - Math.PI / 2;
        return {
          label,
          baseX: cx + Math.cos(angle) * radius,
          baseY: cy + Math.sin(angle) * radius,
          x: cx + Math.cos(angle) * radius,
          y: cy + Math.sin(angle) * radius,
          phase: Math.random() * Math.PI * 2,
        };
      });
      return { cx, cy };
    }
    let { cx, cy } = layout();
    window.addEventListener("resize", () => {
      ({ cx, cy } = layout());
    });

    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });
    canvas.addEventListener("mouseleave", () => {
      mouseX = null; mouseY = null;
    });

    let t = 0;
    function draw() {
      t += 0.006;
      const c = themeColor();
      ctx.clearRect(0, 0, w, h);

      const parallaxX = mouseX !== null ? (mouseX - cx) * 0.04 : 0;
      const parallaxY = mouseY !== null ? (mouseY - cy) * 0.04 : 0;

      nodes.forEach((n) => {
        n.x = n.baseX + Math.sin(t + n.phase) * 4 + parallaxX;
        n.y = n.baseY + Math.cos(t + n.phase) * 4 + parallaxY;
      });

      // connections
      ctx.lineWidth = 1;
      nodes.forEach((n) => {
        ctx.strokeStyle = `rgba(${c.line},0.16)`;
        ctx.beginPath();
        ctx.moveTo(cx + parallaxX, cy + parallaxY);
        ctx.lineTo(n.x, n.y);
        ctx.stroke();
      });
      for (let i = 0; i < nodes.length; i++) {
        const j = (i + 1) % nodes.length;
        ctx.strokeStyle = `rgba(${c.line},0.07)`;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }

      // center node
      if (centerLabel) {
        const r = Math.min(w, h) * 0.09;
        ctx.beginPath();
        ctx.arc(cx + parallaxX, cy + parallaxY, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c.accent},0.14)`;
        ctx.fill();
        ctx.strokeStyle = `rgba(${c.accent},0.7)`;
        ctx.lineWidth = 1.4;
        ctx.stroke();
        ctx.fillStyle = `rgb(${c.accent})`;
        ctx.font = `600 ${Math.max(12, r * 0.55)}px "Space Grotesk", sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(centerLabel, cx + parallaxX, cy + parallaxY);
      }

      // outer nodes
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 3.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgb(${c.node})`;
        ctx.fill();
        ctx.font = `500 11px "Inter", sans-serif`;
        ctx.fillStyle = `rgba(${c.node},0.7)`;
        ctx.textAlign = "center";
        const labelY = n.y - cy > 0 ? n.y + 16 : n.y - 12;
        ctx.fillText(n.label, n.x, labelY);
      });

      if (!reducedMotion) requestAnimationFrame(draw);
    }
    draw();
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (typeof TECH_NETWORK_NODES === "undefined") return;
    const heroCanvas = document.getElementById("hero-network");
    buildNodeGraph(heroCanvas, TECH_NETWORK_NODES, { center: "AI" });

    const skillsCanvas = document.getElementById("skills-network");
    buildNodeGraph(skillsCanvas, TECH_NETWORK_NODES);
  });
})();

/**
 * projects.js — HTML-driven version
 * Project cards are written directly in index.html.
 * This script handles filtering and the details modal.
 */
(function () {
  let activeFilter = "All";

  function getCards() {
    return Array.from(document.querySelectorAll("#projects-html-grid article.project-card"));
  }

  function applyFilter() {
    getCards().forEach((card, i) => {
      const cat = card.dataset.category || "";
      const show = activeFilter === "All" || cat === activeFilter;
      card.style.display = show ? "" : "none";
      if (show) setTimeout(() => card.classList.add("show"), i * 60);
    });
  }

  function openModal(card) {
    const modal = document.getElementById("project-modal");
    const img   = card.querySelector(".proj-img");
    const tags  = Array.from(card.querySelectorAll(".proj-tags .tag")).map(t => `<span class="tag">${t.textContent}</span>`).join("");
    const gh    = card.dataset.github;
    const demo  = card.dataset.demo;

    modal.querySelector(".modal-content").innerHTML = `
      <div class="modal-project">
        ${img ? `<img src="${img.src}" alt="${card.dataset.title}" class="modal-img">` : ""}
        <div class="modal-body">
          <div class="modal-meta">
            <span class="proj-cat">${card.dataset.category || ""}</span>
            <span class="proj-year">${card.dataset.year || ""}</span>
          </div>
          <h2>${card.dataset.title || ""}</h2>
          <p>${card.dataset.overview || ""}</p>
          ${card.dataset.problem ? `<h4>Problem</h4><p>${card.dataset.problem}</p>` : ""}
          ${card.dataset.solution ? `<h4>Solution</h4><p>${card.dataset.solution}</p>` : ""}
          ${card.dataset.architecture ? `<h4>Architecture</h4><p>${card.dataset.architecture}</p>` : ""}
          ${card.dataset.challenges ? `<h4>Challenges</h4><p>${card.dataset.challenges}</p>` : ""}
          ${card.dataset.lessons ? `<h4>Lessons</h4><p>${card.dataset.lessons}</p>` : ""}
          <div class="modal-tags">${tags}</div>
          <div class="modal-links">
            ${gh ? `<a href="${gh}" class="btn btn-outline" target="_blank" rel="noopener">GitHub →</a>` : ""}
            ${demo ? `<a href="${demo}" class="btn btn-primary" target="_blank" rel="noopener">Live Demo →</a>` : ""}
          </div>
        </div>
      </div>`;

    modal.classList.add("open");
    document.body.classList.add("no-scroll");
  }

  function closeModal() {
    document.getElementById("project-modal").classList.remove("open");
    document.body.classList.remove("no-scroll");
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Initial animation
    applyFilter();

    // Filter buttons
    document.querySelectorAll("[data-project-filter]").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-project-filter]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeFilter = btn.dataset.projectFilter;
        getCards().forEach(c => { c.classList.remove("show"); c.style.display = ""; });
        applyFilter();
      });
    });

    // Details button
    document.getElementById("projects-html-grid")?.addEventListener("click", e => {
      const btn  = e.target.closest(".proj-details-btn");
      const ghBtn = e.target.closest(".proj-github");
      const demoBtn = e.target.closest(".proj-demo");
      if (ghBtn || demoBtn) return; // let links work naturally
      if (btn) { openModal(btn.closest("article")); return; }
    });

    // Modal close
    const modal = document.getElementById("project-modal");
    modal?.querySelector(".modal-close")?.addEventListener("click", closeModal);
    modal?.addEventListener("click", e => { if (e.target === modal) closeModal(); });
    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && modal?.classList.contains("open")) closeModal();
    });
  });
})();

/**
 * certificates.js — HTML-driven version
 * Cards are written directly in index.html inside [data-cert-grid].
 * This script handles: filtering by category, click-to-open viewer,
 * prev/next navigation, keyboard support.
 *
 * Each <article> must have:
 *   data-category="AI"          — for filtering
 *   data-img="path/to/img.jpg"  — for the full-screen viewer
 *   data-title="..."            — for viewer title
 *   data-org="..."              — for viewer subtitle
 *   data-verify=""              — optional verification URL
 */
(function () {
  let activeFilter = "All";
  let viewerIndex  = 0;

  function getCards() {
    const grid = document.querySelector("[data-cert-grid]");
    if (!grid) return [];
    return Array.from(grid.querySelectorAll("article.cert-card"));
  }

  function applyFilter() {
    const cards = getCards();
    let visible = [];
    cards.forEach((card) => {
      const cat = card.dataset.category || "";
      const show = activeFilter === "All" || cat === activeFilter;
      card.style.display = show ? "" : "none";
      if (show) visible.push(card);
    });
    // re-animate visible cards
    visible.forEach((card, i) => {
      card.classList.remove("show");
      setTimeout(() => card.classList.add("show"), i * 60);
    });
  }

  function visibleCards() {
    return getCards().filter(c => c.style.display !== "none");
  }

  function openViewer(index) {
    const cards  = visibleCards();
    if (!cards.length) return;
    viewerIndex  = index;
    const card   = cards[index];
    const viewer = document.getElementById("cert-viewer");

    viewer.querySelector("img").src = (card.dataset.img || "") || (card.querySelector("img") ? card.querySelector("img").getAttribute("src") : "");
    viewer.querySelector("img").alt = card.dataset.title || "";
    viewer.querySelector(".cert-viewer-info h4").textContent = card.dataset.title || "";
    viewer.querySelector(".cert-viewer-info p").textContent  =
      (card.dataset.org || "") + (card.dataset.date ? " · " + card.dataset.date : "");

    const verifyLink = viewer.querySelector(".verify-link");
    const url = card.dataset.verify || "";
    if (url) {
      verifyLink.href = url;
      verifyLink.style.display = "inline-flex";
    } else {
      verifyLink.style.display = "none";
    }

    viewer.classList.add("open");
    document.body.classList.add("no-scroll");
  }

  function closeViewer() {
    document.getElementById("cert-viewer").classList.remove("open");
    document.body.classList.remove("no-scroll");
  }

  function nextCert(dir) {
    const cards = visibleCards();
    if (!cards.length) return;
    viewerIndex = (viewerIndex + dir + cards.length) % cards.length;
    openViewer(viewerIndex);
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Initial animation
    applyFilter();

    // Filter buttons
    document.querySelectorAll("[data-cert-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-cert-filter]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeFilter = btn.dataset.certFilter;
        applyFilter();
      });
    });

    // Click on card → open viewer
    document.querySelector("[data-cert-grid]")?.addEventListener("click", (e) => {
      const card = e.target.closest("article.cert-card");
      if (!card) return;
      const cards = visibleCards();
      const idx   = cards.indexOf(card);
      if (idx !== -1) openViewer(idx);
    });

    // Keyboard on card
    document.querySelector("[data-cert-grid]")?.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const card = e.target.closest("article.cert-card");
      if (!card) return;
      e.preventDefault();
      const cards = visibleCards();
      const idx   = cards.indexOf(card);
      if (idx !== -1) openViewer(idx);
    });

    // Viewer controls
    const viewer = document.getElementById("cert-viewer");
    viewer?.querySelector(".viewer-close")?.addEventListener("click", closeViewer);
    viewer?.querySelector(".viewer-nav.prev")?.addEventListener("click", () => nextCert(-1));
    viewer?.querySelector(".viewer-nav.next")?.addEventListener("click", () => nextCert(1));
    viewer?.addEventListener("click", (e) => { if (e.target === viewer) closeViewer(); });

    document.addEventListener("keydown", (e) => {
      if (!viewer?.classList.contains("open")) return;
      if (e.key === "Escape")     closeViewer();
      if (e.key === "ArrowLeft")  nextCert(-1);
      if (e.key === "ArrowRight") nextCert(1);
    });
  });
})();

/**
 * contact.js — client-side validation and loading/success/error states
 * for the contact form. No backend is connected: see the README for how
 * to wire this up to a real email service.
 */
(function () {
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateField(field) {
    const group = field.closest(".form-group");
    const value = field.value.trim();
    let valid = true;

    if (field.hasAttribute("required") && !value) valid = false;
    if (field.type === "email" && value && !EMAIL_RE.test(value)) valid = false;

    group.classList.toggle("invalid", !valid);
    return valid;
  }

  function setStatus(statusEl, type, message) {
    statusEl.textContent = message;
    statusEl.className = `form-status show ${type}`;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    if (!form) return;
    const fields = form.querySelectorAll("input[required], textarea[required], input[type='email']");
    const submitBtn = form.querySelector("button[type='submit']");
    const statusEl = form.querySelector(".form-status");

    fields.forEach((f) => {
      f.addEventListener("blur", () => validateField(f));
      f.addEventListener("input", () => {
        if (f.closest(".form-group").classList.contains("invalid")) validateField(f);
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let allValid = true;
      fields.forEach((f) => {
        if (!validateField(f)) allValid = false;
      });

      if (!allValid) {
        setStatus(statusEl, "error", "Please fix the highlighted fields before sending.");
        return;
      }

      submitBtn.classList.add("loading");
      submitBtn.disabled = true;
      statusEl.className = "form-status";

      // No backend/email service is connected — this simulates the request
      // so the interface behaves correctly once one is. See README section
      // "Connect a real contact form" to wire this to an actual service.
      setTimeout(() => {
        submitBtn.classList.remove("loading");
        submitBtn.disabled = false;
        setStatus(statusEl, "success", "Message sent successfully.");
        form.reset();
      }, 1100);
    });
  });
})();

/**
 * command-palette.js — Ctrl/Cmd+K command palette: jump to sections,
 * toggle theme, or download the resume. Type to filter, arrow keys to
 * navigate, Enter to run, Escape to close.
 */
(function () {
  const COMMANDS = [
    { label: "Go to Home", tag: "nav", keywords: "home", action: () => scrollToId("home") },
    { label: "Go to About", tag: "nav", keywords: "about", action: () => scrollToId("about") },
    { label: "Go to Skills", tag: "nav", keywords: "skills", action: () => scrollToId("skills") },
    { label: "Go to Projects", tag: "nav", keywords: "projects work", action: () => scrollToId("projects") },
    { label: "Go to Certificates", tag: "nav", keywords: "certificates", action: () => scrollToId("certificates") },
    { label: "Go to Experience", tag: "nav", keywords: "experience journey", action: () => scrollToId("experience") },
    { label: "Go to Contact", tag: "nav", keywords: "contact", action: () => scrollToId("contact") },
    { label: "Toggle Theme", tag: "action", keywords: "theme dark light", action: () => window.FM_THEME?.toggleTheme() },
    {
      label: "Download Resume",
      tag: "action",
      keywords: "resume cv",
      action: () => document.querySelector('[data-resume-link]')?.click(),
    },
  ];

  function scrollToId(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("cmdk-overlay");
    if (!overlay) return;
    const input = overlay.querySelector("input");
    const list = overlay.querySelector(".cmdk-list");
    let active = 0;
    let visible = COMMANDS;

    function render() {
      const q = input.value.trim().toLowerCase();
      visible = COMMANDS.filter(
        (c) => c.label.toLowerCase().includes(q) || c.keywords.includes(q)
      );
      active = 0;
      if (!visible.length) {
        list.innerHTML = `<div class="cmdk-empty">No matching commands.</div>`;
        return;
      }
      list.innerHTML = visible
        .map(
          (c, i) =>
            `<div class="cmdk-item${i === active ? " active" : ""}" data-index="${i}">
               <span>${c.label}</span><span class="tag">${c.tag}</span>
             </div>`
        )
        .join("");
    }

    function highlight() {
      list.querySelectorAll(".cmdk-item").forEach((item, i) => {
        item.classList.toggle("active", i === active);
      });
      list.children[active]?.scrollIntoView({ block: "nearest" });
    }

    function run(index) {
      const cmd = visible[index];
      if (!cmd) return;
      close();
      setTimeout(() => cmd.action(), 150);
    }

    function open() {
      overlay.classList.add("open");
      document.body.classList.add("no-scroll");
      input.value = "";
      render();
      setTimeout(() => input.focus(), 50);
    }
    function close() {
      overlay.classList.remove("open");
      document.body.classList.remove("no-scroll");
    }

    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        overlay.classList.contains("open") ? close() : open();
      }
      if (!overlay.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        active = Math.min(active + 1, visible.length - 1);
        highlight();
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        active = Math.max(active - 1, 0);
        highlight();
      }
      if (e.key === "Enter") {
        e.preventDefault();
        run(active);
      }
    });

    input.addEventListener("input", render);
    list.addEventListener("click", (e) => {
      const item = e.target.closest(".cmdk-item");
      if (item) run(Number(item.dataset.index));
    });
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) close();
    });
    document.querySelector("[data-open-cmdk]")?.addEventListener("click", open);
  });
})();

/**
 * assistant.js — a floating portfolio assistant. Today it answers from a
 * local knowledge base built from data/profile.js and data/projects-data.js
 * — no external AI API is connected. To connect one later, replace
 * getAnswer() with a call to your backend/AI API and keep everything else
 * (UI, message log, suggestions) unchanged.
 */
(function () {
  function knowledgeBase() {
    const projectNames = PROJECTS.map((p) => p.title).join(", ");
    const techList = SKILLS.flatMap((s) => s.skills).slice(0, 12).join(", ");
    return [
      {
        test: /who (is|are) (fady|you)|about (you|fady)/i,
        answer: () =>
          `${PROFILE.name} is a ${PROFILE.role}. ${PROFILE.bio}`,
      },
      {
        test: /project/i,
        answer: () =>
          `Yassa has built ${PROJECTS.length} featured projects: ${projectNames}. Scroll to the Projects section or ask me about one by name.`,
      },
      {
        test: /technolog|stack|tools|language/i,
        answer: () => `Some of the core technologies used: ${techList}.`,
      },
      {
        test: /certificat/i,
        answer: () =>
          CERTIFICATES.length
            ? `There are ${CERTIFICATES.length} certificates listed — check the Certificates section for details.`
            : `No certificates have been added yet — check back soon.`,
      },
      {
        test: /contact|email|reach|hire/i,
        answer: () =>
          `You can reach out through the Contact section, or directly via ${PROFILE.email}.`,
      },
      {
        test: /experience|journey|background/i,
        answer: () =>
          `You'll find the full path in the Experience section — education, training and project work, in order.`,
      },
      {
        test: /resume|cv/i,
        answer: () => `You can download the resume using the button in the navbar or hero section.`,
      },
    ];
  }

  function getAnswer(question) {
    const kb = knowledgeBase();
    const hit = kb.find((entry) => entry.test.test(question));
    if (hit) return hit.answer();
    return "I can answer questions about Fady's projects, technologies, certificates, experience, or how to get in touch — try one of the suggestions below.";
  }

  const SUGGESTIONS = [
    "Who is Fady?",
    "Show me his projects.",
    "What technologies does he use?",
    "How can I contact him?",
  ];

  document.addEventListener("DOMContentLoaded", () => {
    const fab = document.querySelector("[data-assistant-fab]");
    const panel = document.querySelector("[data-assistant-panel]");
    if (!fab || !panel || typeof PROFILE === "undefined") return;

    const body = panel.querySelector(".assistant-body");
    const suggestionsWrap = panel.querySelector(".a-suggestions");
    const input = panel.querySelector("input");
    const sendBtn = panel.querySelector(".assistant-input-row button");

    function addMessage(text, who) {
      const msg = document.createElement("div");
      msg.className = `a-msg ${who}`;
      msg.textContent = text;
      body.appendChild(msg);
      body.scrollTop = body.scrollHeight;
    }

    function renderSuggestions() {
      suggestionsWrap.innerHTML = SUGGESTIONS.map((s) => `<button>${s}</button>`).join("");
      suggestionsWrap.querySelectorAll("button").forEach((btn) => {
        btn.addEventListener("click", () => ask(btn.textContent));
      });
    }

    function ask(question) {
      if (!question.trim()) return;
      addMessage(question, "user");
      input.value = "";
      setTimeout(() => addMessage(getAnswer(question), "bot"), 350);
    }

    let initialized = false;
    function togglePanel() {
      const willOpen = !panel.classList.contains("open");
      panel.classList.toggle("open", willOpen);
      fab.setAttribute("aria-expanded", String(willOpen));
      if (willOpen && !initialized) {
        addMessage(`Hi — I'm a local guide to ${PROFILE.name}'s portfolio. Ask me anything.`, "bot");
        renderSuggestions();
        initialized = true;
      }
    }

    fab.addEventListener("click", togglePanel);
    panel.querySelector(".assistant-close")?.addEventListener("click", togglePanel);
    sendBtn.addEventListener("click", () => ask(input.value));
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") ask(input.value);
    });
  });
})();

/**
 * main.js — app bootstrap: loading screen, scroll progress bar,
 * custom cursor, and the ambient background field.
 */
(function () {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Loading screen ---------------- */
  function initLoader() {
    const screen = document.getElementById("loading-screen");
    if (!screen) return;
    const bar = screen.querySelector(".loading-bar span");
    if (reducedMotion) {
      screen.classList.add("hidden");
      return;
    }
    requestAnimationFrame(() => {
      if (bar) bar.style.width = "100%";
    });
    const hide = () => screen.classList.add("hidden");
    window.addEventListener("load", () => setTimeout(hide, 500));
    setTimeout(hide, 1400); // hard ceiling so visitors never wait long
  }

  /* ---------------- Scroll progress ---------------- */
  function initScrollProgress() {
    const bar = document.getElementById("scroll-progress");
    if (!bar) return;
    function update() {
      const h = document.documentElement;
      const scrolled = h.scrollTop || document.body.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      const pct = height > 0 ? (scrolled / height) * 100 : 0;
      bar.style.width = pct + "%";
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  /* ---------------- Custom cursor ---------------- */
  function initCursor() {
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (isTouch) return;
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    if (!dot || !ring) return;
    document.body.classList.add("cursor-active");

    let mx = 0, my = 0, rx = 0, ry = 0;
    window.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    });

    function loop() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      requestAnimationFrame(loop);
    }
    loop();

    const interactiveSelector = "a, button, .project-card, .cert-card, input, textarea, [data-cursor-hover]";
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(interactiveSelector)) ring.classList.add("hover");
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(interactiveSelector)) ring.classList.remove("hover");
    });
  }

  /* ---------------- Background field ---------------- */
  function initBackgroundField() {
    const canvas = document.getElementById("bg-field");
    if (!canvas || reducedMotion) return;
    const ctx = canvas.getContext("2d");
    let w, h, particles, mouse = { x: -9999, y: -9999 };

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      const count = Math.min(110, Math.floor((w * h) / 12000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        size: Math.random() * 1.6 + 0.4,
        opacity: Math.random() * 0.5 + 0.15,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
      }));
    }
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
    window.addEventListener("mouseleave", () => { mouse.x = -9999; mouse.y = -9999; });

    function isLight() {
      return document.documentElement.getAttribute("data-theme") === "light";
    }

    let raf;
    function tick() {
      ctx.clearRect(0, 0, w, h);
      const light = isLight();
      const accentRgb = light ? "156,95,38" : "201,138,75";
      const blueRgb = light ? "80,80,180" : "100,120,220";
      const connDist = 160;
      const mouseRepulse = 120;

      // Draw nebula-like glowing orbs in background
      const t = Date.now() * 0.0002;
      const orbs = [
        { x: w * 0.75, y: h * 0.4, r: Math.min(w, h) * 0.28, c: accentRgb, a: 0.028 + 0.01 * Math.sin(t) },
        { x: w * 0.15, y: h * 0.7, r: Math.min(w, h) * 0.22, c: blueRgb, a: 0.022 + 0.008 * Math.cos(t * 0.7) },
        { x: w * 0.5, y: h * 0.1, r: Math.min(w, h) * 0.18, c: accentRgb, a: 0.018 + 0.007 * Math.sin(t * 1.3) },
      ];
      orbs.forEach(o => {
        const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
        grad.addColorStop(0, `rgba(${o.c},${o.a})`);
        grad.addColorStop(1, `rgba(${o.c},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fill();
      });

      particles.forEach((p) => {
        p.pulse += p.pulseSpeed;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // Mouse repulsion
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < mouseRepulse) {
          const force = (mouseRepulse - md) / mouseRepulse * 0.4;
          p.vx += (mdx / md) * force;
          p.vy += (mdy / md) * force;
          const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (speed > 1.5) { p.vx = p.vx / speed * 1.5; p.vy = p.vy / speed * 1.5; }
        } else {
          // Gently bring velocity back to normal
          const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (speed > 0.4) { p.vx *= 0.998; p.vy *= 0.998; }
        }
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connDist) {
            const alpha = 0.09 * (1 - dist / connDist);
            // Check mouse proximity for brighter connections
            const mpDist = Math.min(
              Math.sqrt((particles[i].x - mouse.x) ** 2 + (particles[i].y - mouse.y) ** 2),
              Math.sqrt((particles[j].x - mouse.x) ** 2 + (particles[j].y - mouse.y) ** 2)
            );
            const boost = mpDist < 180 ? (1 - mpDist / 180) * 3 : 1;
            ctx.strokeStyle = `rgba(${accentRgb},${alpha * boost})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p, i) => {
        const pulseSize = p.size + 0.4 * Math.sin(p.pulse);
        const mouseClose = Math.sqrt((p.x - mouse.x) ** 2 + (p.y - mouse.y) ** 2) < 200;
        const ao = mouseClose ? Math.min(p.opacity * 2.2, 0.95) : p.opacity;
        const col = i % 5 === 0 ? blueRgb : accentRgb;
        // Glowing halo
        if (ao > 0.3) {
          ctx.fillStyle = `rgba(${col},${ao * 0.15})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, pulseSize * 4, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = `rgba(${col},${ao})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(tick);
    }
    tick();
  }

  /* ---------------- Data-driven content ---------------- */
  function el(tag, cls, html) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  }

  function renderProfileBoundText() {
    document.querySelectorAll("[data-bind]").forEach((node) => {
      const key = node.getAttribute("data-bind");
      const value = key.split(".").reduce((o, k) => (o ? o[k] : undefined), PROFILE);
      if (value !== undefined) {
        if (node.tagName === "A" && node.hasAttribute("data-href-bind")) {
          node.setAttribute("href", value);
        } else {
          node.textContent = value;
        }
      }
    });
    document.querySelectorAll("[data-href-bind]").forEach((node) => {
      const key = node.getAttribute("data-href-bind");
      const value = key.split(".").reduce((o, k) => (o ? o[k] : undefined), PROFILE);
      if (value) node.setAttribute("href", value);
    });
  }

  function renderStats() {
    const wrap = document.querySelector("[data-hero-stats]");
    if (!wrap) return;
    PROFILE.stats.forEach((s) => {
      const item = el("div", "stat");
      item.innerHTML = `<div class="value">${s.value}</div><div class="label">${s.label}</div>`;
      wrap.appendChild(item);
    });
  }

  function renderExploring() {
    const wrap = document.querySelector("[data-exploring]");
    if (!wrap) return;
    PROFILE.exploring.forEach((topic) => {
      wrap.appendChild(el("span", null, topic));
    });
  }

  function renderPhilosophy() {
    const wrap = document.querySelector("[data-philosophy]");
    if (!wrap) return;
    PROFILE.philosophy.forEach((p) => {
      const card = el(
        "div",
        "philosophy-card reveal",
        `<span class="idx">${p.index}</span><h3>${p.title}</h3><p>${p.text}</p>`
      );
      wrap.appendChild(card);
    });
  }

  const SKILL_ICONS = {
    cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>',
    layout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M3 9h18M9 9v11"/></svg>',
    server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="7" rx="1.5"/><rect x="3" y="13" width="18" height="7" rx="1.5"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>',
    database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',
    terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M7 9l3 3-3 3M13 15h4"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  };

  function renderSkills() {
    const wrap = document.querySelector("[data-skills]");
    if (!wrap) return;
    SKILLS.forEach((group) => {
      const tags = group.skills.map((s) => `<span>${s}</span>`).join("");
      const card = el(
        "div",
        "skill-card reveal",
        `<div class="icon">${SKILL_ICONS[group.icon] || ""}</div>
         <h3>${group.category}</h3>
         <div class="skill-tags">${tags}</div>`
      );
      wrap.appendChild(card);
    });
  }

  function renderCapabilities() {
    const wrap = document.querySelector("[data-capabilities]");
    if (!wrap) return;
    PROFILE.capabilities.forEach((cap) => {
      const items = cap.items.map((i) => `<li>${i}</li>`).join("");
      wrap.appendChild(
        el("div", "capability-card reveal", `<h3>${cap.title}</h3><ul>${items}</ul>`)
      );
    });
  }

  function renderTimeline() {
    const wrap = document.querySelector("[data-timeline]");
    if (wrap && typeof EXPERIENCE !== "undefined") {
      EXPERIENCE.forEach((item) => {
        const skills = item.skills.map((s) => `<span>${s}</span>`).join("");
        wrap.appendChild(
          el(
            "div",
            "timeline-item reveal",
            `<span class="date">${item.date}</span>
             <h3>${item.title}</h3>
             <div class="org">${item.organization}</div>
             <p>${item.description}</p>
             <div class="skill-row">${skills}</div>`
          )
        );
      });
    }
    const eduWrap = document.querySelector("[data-education]");
    if (eduWrap && typeof EDUCATION !== "undefined") {
      const achievements = EDUCATION.achievements.map((a) => `<p>${a}</p>`).join("");
      eduWrap.innerHTML = `
        <div>
          <span class="k">Degree</span>
          <h3>${EDUCATION.degree}</h3>
          <div class="inst">${EDUCATION.institution}</div>
        </div>
        <div>
          <span class="k">Focus</span>
          <p>${EDUCATION.focus}</p>
          <span class="k" style="margin-top:14px">Achievements</span>
          ${achievements}
        </div>`;
    }
  }

  function renderAchievements() {
    const wrap = document.querySelector("[data-achievements]");
    if (!wrap || typeof ACHIEVEMENTS === "undefined") return;
    ACHIEVEMENTS.filter((a) => a.featured).forEach((a) => {
      wrap.appendChild(
        el(
          "div",
          "achievement-featured reveal",
          `<div class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l2.4 6.6L21 9l-5 4.6 1.4 7.4L12 17.5 6.6 21 8 13.6 3 9l6.6-.4z"/></svg></div>
           <div>
             <h3>${a.title}</h3>
             <div class="meta">${a.organization} — ${a.date}</div>
             <p>${a.description}</p>
           </div>`
        )
      );
    });
  }

  /* ---------------- Reveal-on-scroll ---------------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (reducedMotion) {
      items.forEach((i) => i.classList.add("in"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((i) => obs.observe(i));
  }

  /* ---------------- Easter egg ---------------- */
  function initEasterEgg() {
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "a") {
        e.preventDefault();
        document.body.style.transition = "filter 0.4s ease";
        document.body.style.filter = "invert(1) hue-rotate(180deg)";
        setTimeout(() => (document.body.style.filter = ""), 900);
        console.log(
          "%cFM // signal received — you found the developer easter egg.",
          "color:#c98a4b;font-family:monospace;font-size:12px;"
        );
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLoader();
    initScrollProgress();
    initCursor();
    initBackgroundField();

    if (typeof PROFILE !== "undefined") {
      renderProfileBoundText();
      renderStats();
      renderExploring();
      renderPhilosophy();
      renderCapabilities();
    }
    if (typeof SKILLS !== "undefined") renderSkills();
    renderTimeline();
    renderAchievements();

    initReveal();
    initEasterEgg();
  });
})();
