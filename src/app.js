// Naman Bhade Portfolio - Interactive Glassical UI Engine

// Accurate Resume Dataset for Naman Bhade
const portfolio = {
  personalInfo: {
    name: "Naman Bhade",
    role: "Python Developer & Data Analytics Specialist",
    tagline: "Bridging Generative AI, Scalable Backends, and Data Analytics into Real-World Impact.",
    email: "Namanbhade09@gmail.com",
    phone: "+91 8767370469",
    location: "Chh. Sambhajinagar, Maharashtra, India",
    availableForWork: true,
    availabilityText: "Available for Python, Data Science & GenAI Roles",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    resumePath: "Naman_Bhade_Resume.pdf",
    bio: `Final-year B.E. (Computer Science & Engineering) student and active Data Analytics Intern with hands-on experience spanning Python development, data analysis, deep packet inspection, and Java/Kotlin Android engineering. 

Passionate about engineering LLM-powered applications using the Groq API (LLaMA 3.3 70B), building robust Flask microservices with real-time WebSockets, and architecting actionable Power BI business dashboards. Seeking a Python/Data Science or Java Full Stack with Generative AI role to apply practical engineering to high-impact products.`,
    stats: [
      { label: "Production & Academic Projects", value: "5+", icon: "fa-diagram-project" },
      { label: "Professional Internships", value: "2", icon: "fa-briefcase" },
      { label: "National Hackathon Competitors", value: "20,119", icon: "fa-trophy" },
      { label: "Core Problem Solving", value: "100%", icon: "fa-code" }
    ]
  },
  specializations: [
    {
      title: "Generative AI & LLMs",
      icon: "fa-brain",
      color: "from-cyan-500 to-blue-600",
      accent: "text-cyan-400",
      description: "Building production LLM pipelines leveraging Groq API (LLaMA 3.3 70B), strict Pydantic schemas, and structured JSON parsing to eliminate hallucinations.",
      tags: ["Groq API", "LLaMA 3.3", "Pydantic", "JSON Schemas"]
    },
    {
      title: "Data Analytics & BI",
      icon: "fa-chart-pie",
      color: "from-amber-500 to-orange-600",
      accent: "text-amber-400",
      description: "Transforming raw multi-source datasets into strategic intelligence with Power BI, advanced DAX modeling, Pandas, and exploratory data analysis (EDA).",
      tags: ["Power BI", "DAX Measures", "Pandas", "EDA"]
    },
    {
      title: "Backend & Systems Security",
      icon: "fa-shield-halved",
      color: "from-emerald-500 to-teal-600",
      accent: "text-emerald-400",
      description: "Developing scalable Flask microservices, real-time WebSockets, and deep packet inspection (DPI) intrusion detection systems with Scapy.",
      tags: ["Flask", "WebSockets", "Scapy DPI", "IDS Rules"]
    },
    {
      title: "Android & Full Stack",
      icon: "fa-mobile-screen-button",
      color: "from-purple-500 to-indigo-600",
      accent: "text-purple-400",
      description: "Crafting responsive native Android applications in Java and Kotlin, featuring custom layouts, SQLite local storage, and reliable REST integrations.",
      tags: ["Java", "Kotlin", "Android SDK", "SQLite"]
    }
  ],
  skills: [
    { category: "Languages", name: "Python", level: 92, badge: "Advanced", desc: "Core Python, Async, OOP, Web Frameworks, Automation" },
    { category: "Languages", name: "Java", level: 85, badge: "Proficient", desc: "OOP, Concurrency, Android Architecture, App Lifecycle" },
    { category: "Languages", name: "Kotlin", level: 80, badge: "Proficient", desc: "Modern Android, Coroutines, Null-safety, ViewBinding" },
    { category: "Languages", name: "SQL", level: 88, badge: "Advanced", desc: "Complex joins, Subqueries, Relational Schema, Indexing" },
    { category: "Languages", name: "C++", level: 78, badge: "Intermediate", desc: "Data Structures, Algorithms, Memory Management" },
    { category: "Languages", name: "JavaScript", level: 82, badge: "Proficient", desc: "ES6+, DOM Manipulation, Async/Await, Canvas, WebSockets" },
    
    { category: "Data Science & BI", name: "Pandas & NumPy", level: 92, badge: "Advanced", desc: "Vectorized transforms, Data cleansing, Merging, Aggregations" },
    { category: "Data Science & BI", name: "Power BI & DAX", level: 90, badge: "Advanced", desc: "Star-schema modeling, DAX calculated measures, KPI dashboards" },
    { category: "Data Science & BI", name: "Matplotlib & Seaborn", level: 86, badge: "Proficient", desc: "Exploratory visualization, Distribution plots, Trend analysis" },
    { category: "Data Science & BI", name: "EDA (Exploratory Analysis)", level: 92, badge: "Advanced", desc: "Outlier detection, Correlation analysis, Actionable insights" },
    { category: "Data Science & BI", name: "Advanced Excel", level: 86, badge: "Proficient", desc: "Pivot tables, VLOOKUP/XLOOKUP, Forecasting, Conditional logic" },

    { category: "Generative AI", name: "Groq Cloud API", level: 92, badge: "Advanced", desc: "Ultra-low latency inference, LLaMA 3.3 70B prompt orchestration" },
    { category: "Generative AI", name: "Pydantic Schemas", level: 90, badge: "Advanced", desc: "Deterministic JSON Schema validation, Strict data modeling" },
    { category: "Generative AI", name: "Structured Data Extraction", level: 88, badge: "Advanced", desc: "Parsing unstructured resumes and documents into typed schemas" },
    { category: "Generative AI", name: "Prompt Engineering", level: 88, badge: "Advanced", desc: "Few-shot prompting, Guardrails, Chain-of-thought workflows" },

    { category: "Backend & Web", name: "Flask & RESTful APIs", level: 90, badge: "Advanced", desc: "Microservices architecture, Blueprint routing, JSON endpoints" },
    { category: "Backend & Web", name: "Flask-SocketIO & WebSockets", level: 86, badge: "Proficient", desc: "Bi-directional real-time event streaming, Room broadcasting" },
    { category: "Backend & Web", name: "HTML5 & CSS3 / Tailwind", level: 88, badge: "Advanced", desc: "Semantic markup, Glassmorphic responsive layouts" },

    { category: "Mobile & DB", name: "Android SDK & Studio", level: 86, badge: "Proficient", desc: "Activities, Fragments, Custom Layouts, Material Design" },
    { category: "Mobile & DB", name: "SQLite & MySQL", level: 90, badge: "Advanced", desc: "Relational persistence, ACID compliance, Migration scripts" },
    { category: "Mobile & DB", name: "MongoDB & Firebase", level: 80, badge: "Proficient", desc: "NoSQL document collections, Realtime DB, Cloud Auth" },

    { category: "Security & Tools", name: "Scapy & DPI", level: 88, badge: "Advanced", desc: "Packet sniffing, Protocol decoding (Link-to-Application layer)" },
    { category: "Security & Tools", name: "Intrusion Detection (IDS)", level: 85, badge: "Proficient", desc: "Heuristic signature rules, SYN flood & port scan detection" },
    { category: "Security & Tools", name: "OpenCV", level: 82, badge: "Proficient", desc: "Computer vision video parsing, Real-time QR decoding" },
    { category: "Security & Tools", name: "Git & GitHub", level: 90, badge: "Advanced", desc: "Branching workflows, Collaboration, Version tracking" }
  ],
  projects: [
    {
      id: "ai-resume-analyzer",
      title: "AI Resume Analyzer & Candidate Matcher",
      category: "Generative AI",
      categoryKey: "genai",
      badge: "LLM / Groq API",
      subtitle: "Automated candidate-job fit scoring with LLaMA 3.3 70B & JSON Schema validation",
      tags: ["Python", "Groq API", "LLaMA 3.3 70B", "Pydantic", "Flask", "JSON Schema"],
      highlights: [
        "Engineered an LLM-powered screening tool parsing unstructured resumes and job descriptions into deterministic schemas.",
        "Created Pydantic data models enforcing strict JSON Schema compliance, completely eliminating hallucinations.",
        "Calculated algorithmic percentage match scores, mapped missing competencies, and generated HR executive summaries.",
        "Achieved ultra-low latency inference via Groq Cloud API running LLaMA 3.3 70B."
      ],
      architecture: "Client Web / REST API ➔ Flask Orchestrator ➔ Groq API (LLaMA 3.3 70B) ➔ Pydantic Schema Validator ➔ Match Scoring Engine ➔ Visual Analytics",
      metrics: "Sub-second inference, 100% structured JSON compliance, automated skill gap mapping"
    },
    {
      id: "weather-analytics-dashboard",
      title: "Weather Analytics & Air Quality Dashboard",
      category: "Data Analytics",
      categoryKey: "data",
      badge: "Power BI / DAX",
      subtitle: "Interactive Power BI dashboard with DAX modeling & multidimensional atmospheric insights",
      tags: ["Power BI", "DAX", "Weather API (JSON)", "Data Modeling", "EDA"],
      highlights: [
        "Built a production-grade Power BI dashboard ingesting real-time JSON feeds from Weather API.",
        "Modeled multi-table relational schema splitting data into current, hourly, daily forecasts, and geospatial location tables.",
        "Visualized temperature, humidity, wind vectors, UV index, and rain probability using custom KPI cards and slicers.",
        "Integrated Air Quality monitoring (PM2.5, PM10, CO, NO2, O3, SO2) with dynamic DAX calculation measures."
      ],
      architecture: "Weather API (JSON) ➔ ETL & Power Query Ingestion ➔ Star Schema ➔ DAX Calculated Measures ➔ Interactive Power BI Visualizations",
      metrics: "Multi-parameter Air Quality tracking, dynamic time-horizon forecasts, interactive slicing"
    },
    {
      id: "packet-pulse",
      title: "PacketPulse – Deep Packet Analyzer & IDS",
      category: "Systems & Security",
      categoryKey: "security",
      badge: "Scapy / DPI",
      subtitle: "Web-based DPI engine & intrusion detection system with Link-to-App protocol decoding",
      tags: ["Python", "Flask", "Scapy", "DPI", "IDS", "HTML5", "CSS3", "JavaScript"],
      highlights: [
        "Engineered a web-based Deep Packet Inspection (DPI) tool decoding Link-to-Application layer network protocols in real-time.",
        "Implemented signature and heuristic IDS rules to flag cyber threats including TCP SYN floods, aggressive port scans, and cleartext credentials.",
        "Integrated Berkeley Packet Filters (BPF) for granular traffic isolation and PCAP export capability for post-incident digital forensics.",
        "Delivered live socket streaming of network metrics and protocol breakdowns to a modern browser UI."
      ],
      architecture: "Network NIC ➔ Scapy Sniffer ➔ BPF Filter ➔ Protocol Parser & Threat Heuristics ➔ Flask WebSocket Emitter ➔ Live Web Dashboard",
      metrics: "Real-time threat alerting, Link-to-App protocol inspection, forensic PCAP generation"
    },
    {
      id: "qr-attendance-system",
      title: "Real-Time QR Attendance & Analytics System",
      category: "Backend & Vision",
      categoryKey: "backend",
      badge: "OpenCV / Python",
      subtitle: "Computer-vision automated attendance tracking with duplicate prevention & multi-location support",
      tags: ["Python", "OpenCV", "Pandas", "SQLite/MySQL", "Flask", "Computer Vision"],
      highlights: [
        "Designed an automated computer-vision attendance scanner with real-time video feed decoding via OpenCV.",
        "Created duplicate-scan prevention algorithms and role-based access control (Admin, Instructor, Student).",
        "Built automated reporting pipelines generating detailed attendance analytics in CSV, Excel, and PDF formats.",
        "Engineered multi-location support allowing geo-distributed tracking with SQLite and MySQL persistence."
      ],
      architecture: "Webcam / Mobile Camera ➔ OpenCV QR Decoding ➔ Anti-Replay Validation ➔ Database Transaction ➔ Real-Time Admin Dashboard & Export Engine",
      metrics: "Instant recognition, 0% duplicate entries, automated PDF/Excel attendance exports"
    },
    {
      id: "collaborative-whiteboard",
      title: "Real-Time Collaborative Whiteboard",
      category: "Full Stack & Web",
      categoryKey: "backend",
      badge: "WebSockets / Flask",
      subtitle: "High-concurrency collaborative canvas supporting 50+ simultaneous peers with WebSockets",
      tags: ["Python", "Flask", "Flask-SocketIO", "WebSockets", "HTML5 Canvas", "Vector Export"],
      highlights: [
        "Engineered an interactive collaborative canvas supporting 50+ concurrent users with sub-millisecond stroke synchronization.",
        "Implemented password-protected private rooms, full undo/redo action stacks, and autosave snapshots.",
        "Supported multi-format vector exports including high-resolution PNG, scalable SVG, and printable PDF documents.",
        "Optimized WebSocket bandwidth using delta-compression and throttled broadcasting."
      ],
      architecture: "HTML5 Canvas ➔ Socket.IO Client ➔ Flask-SocketIO Event Hub ➔ Memory Cache / Session Manager ➔ Broadcast Sync to Room Peers",
      metrics: "50+ concurrent peers per session, lossless SVG/PDF exports, sub-10ms broadcast latency"
    }
  ],
  experience: [
    {
      role: "Data Analytics Intern",
      company: "E-katta Innovators LLP",
      location: "Chh. Sambhajinagar, Maharashtra",
      period: "Aug 2026 – Present",
      current: true,
      badge: "Current Role",
      description: "Spearheading exploratory data analysis, automated data cleaning pipelines, and executive Power BI dashboards to steer strategic business decisions.",
      responsibilities: [
        "Performed data cleaning and exploratory data analysis (EDA) using Python (Pandas, NumPy, Matplotlib).",
        "Built interactive dashboards in Power BI to derive actionable business insights.",
        "Collaborated with cross-functional teams to support data-driven decisions and optimize operational processes."
      ],
      technologies: ["Python", "Pandas", "Power BI", "Matplotlib", "Data Modeling", "EDA"]
    },
    {
      role: "Android Developer Intern",
      company: "Mountrich Solution Pvt. Ltd.",
      location: "Amravati, Maharashtra",
      period: "Sep 2023 – Dec 2023",
      current: false,
      badge: "Completed",
      description: "Built and optimized native Android applications with intuitive user experiences and dependable backend connectivity.",
      responsibilities: [
        "Developed Android applications in Java and Kotlin with responsive UI/UX using layouts and widgets.",
        "Integrated RESTful APIs, third-party libraries, and SQLite local storage to improve functionality and stability.",
        "Conducted code optimizations and UI lifecycle debugging for smooth cross-device performance."
      ],
      technologies: ["Java", "Kotlin", "Android SDK", "Android Studio", "RESTful APIs", "SQLite"]
    }
  ],
  education: [
    {
      degree: "B.E. in Computer Science and Engineering",
      institution: "ICEEM, Chh. Sambhajinagar",
      period: "2024 – Present",
      badge: "Final Year Pursuing",
      description: "Focusing on distributed systems, machine learning architectures, cloud computing, and advanced software engineering."
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Government Polytechnic, Murtizapur",
      period: "Completed May 2024",
      badge: "Graduated with Distinction",
      description: "Built core foundations in Object-Oriented Programming (Java, C++), Data Structures, Relational Database Management Systems, and Software Design."
    }
  ],
  certifications: [
    {
      title: "Paranox 2.0 – National Level Innovation Hackathon",
      issuer: "TechXNinjas",
      date: "Aug–Nov 2025",
      type: "Hackathon",
      badge: "National Level (20,119 participants)",
      icon: "fa-trophy",
      accent: "text-amber-400",
      highlight: "Competed at national level innovation hackathon solving rigorous software engineering challenges among 20,119 student participants across India."
    },
    {
      title: "Master Android Application – Build 3 Apps from Scratch",
      issuer: "Udemy",
      date: "Jan 2025",
      type: "Certification",
      badge: "Mobile Architecture",
      icon: "fa-mobile-screen",
      accent: "text-cyan-400",
      highlight: "Mastered end-to-end native Android application development, layout architectures, REST integrations, and persistent local storage."
    },
    {
      title: "Green Skills and Artificial Intelligence – Foundation Course",
      issuer: "Edunet / AICTE",
      date: "Oct 2025",
      type: "Certification",
      badge: "AI & Sustainability",
      icon: "fa-seedling",
      accent: "text-emerald-400",
      highlight: "Completed foundational curriculum in Artificial Intelligence methodologies, ethical AI workflows, and sustainable computing standards."
    },
    {
      title: "Python Programming – Foundational Concepts, Loops, Functions",
      issuer: "The Angaar Batch",
      date: "2025",
      type: "Certification",
      badge: "Python Mastery",
      icon: "fa-terminal",
      accent: "text-blue-400",
      highlight: "In-depth practical mastery of core Python constructs, algorithmic problem solving, clean functions, and data structures."
    },
    {
      title: "Workshop on Digital Forensics and Investigation",
      issuer: "Slytherin Edutech",
      date: "Jul 2025",
      type: "Workshop",
      badge: "Cyber Forensics",
      icon: "fa-shield-halved",
      accent: "text-purple-400",
      highlight: "Practical hands-on training in network forensics, packet capture analysis, evidence acquisition, and vulnerability investigation."
    }
  ]
};

// Application State
let currentProjectFilter = 'all';
let currentCertFilter = 'all';
let currentSkillSearch = '';
let currentSkillCategory = 'all';
let currentTimelineTab = 'experience'; // 'experience' or 'education'
let radarChartInstance = null;

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMouseSpotlight();
  renderPillars();
  renderSkills();
  renderProjects();
  renderTimeline();
  renderCertifications();
  initRadarChart();
  setupEventListeners();
  initIntersectionObserver();
});

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('nb_theme') || 'dark';
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }
}

function toggleTheme() {
  const isLight = document.documentElement.classList.contains('light');
  if (isLight) {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    localStorage.setItem('nb_theme', 'dark');
    showToast('Switched to Dark Glass Mode', 'info');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    localStorage.setItem('nb_theme', 'light');
    showToast('Switched to Light Glass Mode', 'info');
  }
  updateRadarChart();
}

// Interactive Mouse Spotlight for Glass Cards
function initMouseSpotlight() {
  document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

// Render 4 Core Pillars
function renderPillars() {
  const container = document.getElementById('pillars-grid');
  if (!container) return;

  container.innerHTML = portfolio.specializations.map(p => {
    return `
      <div class="glass-card p-6 flex flex-col justify-between group">
        <div>
          <div class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${p.accent} text-xl mb-4 group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-300">
            <i class="fas ${p.icon}"></i>
          </div>
          <h3 class="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">${p.title}</h3>
          <p class="text-xs text-slate-300/80 leading-relaxed mb-4">${p.description}</p>
        </div>
        <div class="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
          ${p.tags.map(t => `
            <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10">
              ${t}
            </span>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// Render Skills
function renderSkills() {
  const container = document.getElementById('skills-grid');
  const countBadge = document.getElementById('skills-count');
  if (!container) return;

  const query = currentSkillSearch.toLowerCase().trim();
  const filtered = portfolio.skills.filter(s => {
    const matchesCategory = currentSkillCategory === 'all' || s.category.toLowerCase().includes(currentSkillCategory.toLowerCase());
    const matchesSearch = s.name.toLowerCase().includes(query) || s.desc.toLowerCase().includes(query) || s.category.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  if (countBadge) {
    countBadge.textContent = `${filtered.length} of ${portfolio.skills.length} skills`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400 glass-card p-8">
        <i class="fas fa-search-minus text-4xl mb-3 text-cyan-400"></i>
        <p class="text-base font-semibold text-white">No skills match "${query}"</p>
        <p class="text-xs text-slate-400 mt-1">Try keywords like Python, Groq, Power BI, Android, Scapy, or SQL</p>
        <button onclick="resetSkillSearch()" class="mt-4 px-4 py-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold hover:bg-cyan-500/30 transition-colors">
          Reset Filter
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(skill => {
    return `
      <div class="glass-card p-5 group hover:border-cyan-400/50 transition-all">
        <div class="flex items-center justify-between mb-2">
          <span class="font-bold text-white text-sm group-hover:text-cyan-400 transition-colors">${skill.name}</span>
          <span class="text-[11px] px-2 py-0.5 rounded-full font-mono font-semibold ${
            skill.badge === 'Advanced' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 
            skill.badge === 'Proficient' ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30' : 
            'bg-amber-500/10 text-amber-400 border border-amber-500/30'
          }">${skill.badge}</span>
        </div>
        <div class="text-xs text-slate-400 mb-3 line-clamp-2 leading-relaxed">${skill.desc}</div>
        <div class="w-full bg-slate-900/80 rounded-full h-1.5 overflow-hidden border border-white/5">
          <div class="h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000" style="width: ${skill.level}%"></div>
        </div>
        <div class="flex justify-between items-center mt-2 text-[10px] text-slate-400 font-mono">
          <span>${skill.category}</span>
          <span class="text-cyan-400 font-semibold">${skill.level}%</span>
        </div>
      </div>
    `;
  }).join('');
}

function resetSkillSearch() {
  currentSkillSearch = '';
  currentSkillCategory = 'all';
  const input = document.getElementById('skill-search');
  if (input) input.value = '';
  const pills = document.querySelectorAll('[data-skill-cat]');
  pills.forEach(p => {
    if (p.getAttribute('data-skill-cat') === 'all') {
      p.className = 'glass-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 border-cyan-400 transition-all';
    } else {
      p.className = 'glass-pill px-3.5 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white transition-all';
    }
  });
  renderSkills();
}

// Render Projects
function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filtered = portfolio.projects.filter(p => {
    if (currentProjectFilter === 'all') return true;
    return p.categoryKey === currentProjectFilter;
  });

  container.innerHTML = filtered.map(project => {
    return `
      <div class="glass-card flex flex-col justify-between group hover:border-cyan-400/50">
        <div class="p-6">
          <div class="flex items-center justify-between mb-3">
            <span class="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
              ${project.category}
            </span>
            <span class="text-[11px] font-mono text-slate-400">
              ${project.badge}
            </span>
          </div>

          <h3 class="text-xl font-bold text-white mb-2 leading-snug group-hover:text-cyan-400 transition-colors cursor-pointer" onclick="openProjectModal('${project.id}')">
            ${project.title}
          </h3>
          <p class="text-xs text-cyan-300/90 font-medium mb-4">${project.subtitle}</p>

          <!-- Highlights List -->
          <ul class="space-y-2 mb-5">
            ${project.highlights.map(h => `
              <li class="flex items-start text-xs text-slate-300 leading-relaxed">
                <i class="fas fa-check text-cyan-400 text-xs mt-1 mr-2 flex-shrink-0"></i>
                <span>${h}</span>
              </li>
            `).join('')}
          </ul>

          <!-- Architecture Box -->
          <div class="bg-black/40 rounded-xl p-3 border border-white/5 text-[11px] font-mono text-slate-300 mb-4">
            <span class="text-cyan-400 block font-semibold mb-1 uppercase tracking-wider text-[10px]">Dataflow Pipeline:</span>
            <span class="text-slate-400 leading-relaxed">${project.architecture}</span>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5">
            ${project.tags.map(t => `
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10">
                ${t}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Footer -->
        <div class="px-6 py-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
          <button onclick="openProjectModal('${project.id}')" class="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
            <span>Project Deep-Dive</span>
            <i class="fas fa-arrow-right text-[10px]"></i>
          </button>
          <span class="text-[11px] font-mono text-emerald-400/90 flex items-center gap-1">
            <i class="fas fa-circle-check text-[10px]"></i>
            <span>Verified System</span>
          </span>
        </div>
      </div>
    `;
  }).join('');
}

// Interactive Timeline Switcher (Work Experience & Education)
function switchTimelineTab(tab) {
  currentTimelineTab = tab;
  const expBtn = document.getElementById('tab-btn-exp');
  const eduBtn = document.getElementById('tab-btn-edu');

  if (tab === 'experience') {
    expBtn?.classList.add('bg-cyan-500', 'text-slate-950', 'font-semibold');
    expBtn?.classList.remove('text-slate-300');
    eduBtn?.classList.remove('bg-cyan-500', 'text-slate-950', 'font-semibold');
    eduBtn?.classList.add('text-slate-300');
  } else {
    eduBtn?.classList.add('bg-cyan-500', 'text-slate-950', 'font-semibold');
    eduBtn?.classList.remove('text-slate-300');
    expBtn?.classList.remove('bg-cyan-500', 'text-slate-950', 'font-semibold');
    expBtn?.classList.add('text-slate-300');
  }

  renderTimeline();
}

function renderTimeline() {
  const container = document.getElementById('interactive-timeline-content');
  if (!container) return;

  if (currentTimelineTab === 'experience') {
    container.innerHTML = portfolio.experience.map((exp, idx) => {
      return `
        <div class="relative pl-8 md:pl-0 md:flex md:items-start group mb-10 last:mb-0">
          <div class="absolute left-[-9px] md:left-1/2 md:-ml-3 top-2 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center z-10 shadow-lg shadow-cyan-500/50">
            <div class="w-2 h-2 rounded-full ${exp.current ? 'bg-cyan-400 animate-ping' : 'bg-slate-400'}"></div>
          </div>

          <div class="md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'}">
            <div class="glass-card p-6 border-white/10 hover:border-cyan-400/50 transition-all">
              <div class="flex items-center gap-2 mb-2 ${idx % 2 === 0 ? 'md:justify-end' : 'justify-start'}">
                <span class="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full ${exp.current ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-white/10 text-slate-300 border border-white/10'}">
                  ${exp.period}
                </span>
                <span class="text-xs px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 font-semibold border border-cyan-800/40">
                  ${exp.badge}
                </span>
              </div>

              <h3 class="text-xl font-bold text-white">${exp.role}</h3>
              <div class="text-sm font-medium text-cyan-400 mb-1">${exp.company}</div>
              <div class="text-xs text-slate-400 mb-3 flex items-center gap-1 ${idx % 2 === 0 ? 'md:justify-end' : 'justify-start'}">
                <i class="fas fa-location-dot text-slate-500"></i>
                <span>${exp.location}</span>
              </div>

              <p class="text-xs text-slate-300 mb-4 leading-relaxed ${idx % 2 === 0 ? 'md:text-right' : 'text-left'}">${exp.description}</p>

              <ul class="space-y-1.5 text-xs text-slate-300 mb-4 ${idx % 2 === 0 ? 'md:text-right' : 'text-left'}">
                ${exp.responsibilities.map(r => `
                  <li class="flex items-start gap-2 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}">
                    <i class="fas fa-chevron-right text-[10px] text-cyan-400 mt-1 flex-shrink-0"></i>
                    <span>${r}</span>
                  </li>
                `).join('')}
              </ul>

              <div class="flex flex-wrap gap-1.5 ${idx % 2 === 0 ? 'md:justify-end' : 'justify-start'}">
                ${exp.technologies.map(t => `
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                    ${t}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  } else {
    container.innerHTML = portfolio.education.map((edu, idx) => {
      return `
        <div class="relative pl-8 md:pl-0 md:flex md:items-start group mb-10 last:mb-0">
          <div class="absolute left-[-9px] md:left-1/2 md:-ml-3 top-2 w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-400 flex items-center justify-center z-10 shadow-lg shadow-indigo-500/50">
            <div class="w-2 h-2 rounded-full bg-indigo-400"></div>
          </div>

          <div class="md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'}">
            <div class="glass-card p-6 border-white/10 hover:border-indigo-400/50 transition-all">
              <div class="flex items-center gap-2 mb-2 ${idx % 2 === 0 ? 'md:justify-end' : 'justify-start'}">
                <span class="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                  ${edu.period}
                </span>
                <span class="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/10 font-semibold">
                  ${edu.badge}
                </span>
              </div>

              <h3 class="text-xl font-bold text-white mb-1">${edu.degree}</h3>
              <div class="text-sm font-medium text-cyan-400 mb-3 flex items-center gap-1.5 ${idx % 2 === 0 ? 'md:justify-end' : 'justify-start'}">
                <i class="fas fa-graduation-cap text-slate-400"></i>
                <span>${edu.institution}</span>
              </div>

              <p class="text-xs text-slate-300 leading-relaxed ${idx % 2 === 0 ? 'md:text-right' : 'text-left'}">${edu.description}</p>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
}

// Render Certifications & Achievements
function renderCertifications() {
  const container = document.getElementById('certifications-grid');
  if (!container) return;

  const filtered = portfolio.certifications.filter(c => {
    if (currentCertFilter === 'all') return true;
    return c.type.toLowerCase() === currentCertFilter.toLowerCase();
  });

  container.innerHTML = filtered.map(cert => {
    return `
      <div class="glass-card p-5 flex flex-col justify-between group hover:border-amber-400/50 transition-all">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full ${
              cert.type === 'Hackathon' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' :
              cert.type === 'Workshop' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/30' :
              'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
            }">
              ${cert.type}
            </span>
            <span class="text-xs font-mono text-slate-400">${cert.date}</span>
          </div>

          <div class="flex items-start gap-3 mb-2">
            <div class="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${cert.accent} text-sm flex-shrink-0 mt-0.5">
              <i class="fas ${cert.icon}"></i>
            </div>
            <div>
              <h3 class="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">${cert.title}</h3>
              <div class="text-xs text-cyan-400/90 font-medium">${cert.issuer}</div>
            </div>
          </div>

          <p class="text-xs text-slate-300/80 leading-relaxed mb-4 pl-11">${cert.highlight}</p>
        </div>

        <div class="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
          <span class="font-mono text-cyan-400 text-[10px]">${cert.badge}</span>
          <i class="fas fa-circle-check text-emerald-400 text-xs"></i>
        </div>
      </div>
    `;
  }).join('');
}

// Chart.js Radar Visualization
function initRadarChart() {
  const ctx = document.getElementById('skillsRadarChart');
  if (!ctx) return;

  const data = {
    labels: [
      'Generative AI (Groq/LLaMA)',
      'Python & Backend',
      'Data Analytics & Power BI',
      'Android & Mobile',
      'Security & DPI (Scapy)',
      'Databases & SQL'
    ],
    datasets: [{
      label: 'Proficiency (%)',
      data: [92, 90, 92, 86, 88, 88],
      fill: true,
      backgroundColor: 'rgba(56, 189, 248, 0.18)',
      borderColor: '#38bdf8',
      pointBackgroundColor: '#38bdf8',
      pointBorderColor: '#ffffff',
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#38bdf8',
      pointRadius: 4,
      pointHoverRadius: 6,
      borderWidth: 2
    }]
  };

  const isLight = document.documentElement.classList.contains('light');
  const textColor = isLight ? '#475569' : '#94a3b8';
  const gridColor = isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)';

  radarChartInstance = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: { color: gridColor },
          grid: { color: gridColor },
          pointLabels: {
            color: textColor,
            font: { family: 'Outfit', size: 11, weight: '500' }
          },
          ticks: {
            display: false,
            stepSize: 20,
            max: 100
          },
          suggestedMin: 50,
          suggestedMax: 100
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(15, 23, 42, 0.9)',
          titleColor: '#38bdf8',
          bodyColor: '#e2e8f0',
          borderColor: 'rgba(255,255,255,0.15)',
          borderWidth: 1,
          padding: 10,
          callbacks: {
            label: (ctx) => ` Competency: ${ctx.raw}%`
          }
        }
      }
    }
  });
}

function updateRadarChart() {
  if (!radarChartInstance) return;
  const isLight = document.documentElement.classList.contains('light');
  const textColor = isLight ? '#475569' : '#94a3b8';
  const gridColor = isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)';

  radarChartInstance.options.scales.r.pointLabels.color = textColor;
  radarChartInstance.options.scales.r.angleLines.color = gridColor;
  radarChartInstance.options.scales.r.grid.color = gridColor;
  radarChartInstance.update();
}

// Active Nav Highlight on Scroll
function initIntersectionObserver() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-cyan-400');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-cyan-400');
      }
    });
  });
}

// Setup Event Listeners
function setupEventListeners() {
  // Mobile Nav Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
  }

  // Skills Search Input
  const skillSearchInput = document.getElementById('skill-search');
  if (skillSearchInput) {
    skillSearchInput.addEventListener('input', (e) => {
      currentSkillSearch = e.target.value;
      renderSkills();
    });
  }

  // Skill Category Pills
  const skillCatPills = document.querySelectorAll('[data-skill-cat]');
  skillCatPills.forEach(pill => {
    pill.addEventListener('click', () => {
      skillCatPills.forEach(p => {
        p.className = 'glass-pill px-3.5 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white transition-all';
      });
      pill.className = 'glass-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 border-cyan-400 transition-all';
      currentSkillCategory = pill.getAttribute('data-skill-cat');
      renderSkills();
    });
  });

  // Project Filter Pills
  const projectFilters = document.querySelectorAll('[data-project-filter]');
  projectFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      projectFilters.forEach(b => {
        b.className = 'glass-pill px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white transition-all';
      });
      btn.className = 'glass-pill px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 border-cyan-400 transition-all';
      currentProjectFilter = btn.getAttribute('data-project-filter');
      renderProjects();
    });
  });

  // Certifications Filter
  const certFilters = document.querySelectorAll('[data-cert-filter]');
  certFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      certFilters.forEach(b => {
        b.className = 'glass-pill px-3.5 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white transition-all';
      });
      btn.className = 'glass-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-amber-500 text-slate-950 border-amber-400 transition-all';
      currentCertFilter = btn.getAttribute('data-cert-filter');
      renderCertifications();
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill out all fields.', 'error');
        return;
      }

      showToast(`Thank you, ${name}! Opening mail client...`, 'success');
      const mailtoUrl = `mailto:Namanbhade09@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;
      window.open(mailtoUrl, '_blank');
      contactForm.reset();
    });
  }

  // Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn?.classList.remove('opacity-0', 'pointer-events-none');
      backToTopBtn?.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      backToTopBtn?.classList.add('opacity-0', 'pointer-events-none');
      backToTopBtn?.classList.remove('opacity-100', 'pointer-events-auto');
    }
  });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Clipboard Helper
function copyToClipboard(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${label} copied: ${text}`, 'success');
  }).catch(() => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast(`${label} copied: ${text}`, 'success');
  });
}

// Toast Notifications
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const bg = type === 'success' ? 'bg-emerald-950/90 border-emerald-500/50 text-emerald-200' :
             type === 'error' ? 'bg-rose-950/90 border-rose-500/50 text-rose-200' :
             'bg-slate-900/90 border-cyan-500/50 text-cyan-200';
  const icon = type === 'success' ? 'fa-circle-check text-emerald-400' :
               type === 'error' ? 'fa-circle-exclamation text-rose-400' :
               'fa-circle-info text-cyan-400';

  toast.className = `toast glass-panel px-4 py-3 border flex items-center gap-3 text-xs font-medium shadow-2xl backdrop-blur-xl ${bg}`;
  toast.innerHTML = `
    <i class="fas ${icon} text-sm"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px) scale(0.95)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Project Modal Handler
function openProjectModal(projectId) {
  const project = portfolio.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const content = document.getElementById('modal-project-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="flex items-center justify-between mb-4">
      <span class="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
        ${project.category}
      </span>
      <span class="text-xs text-slate-400 font-mono">${project.badge}</span>
    </div>

    <h2 class="text-2xl font-bold text-white mb-2 font-heading">${project.title}</h2>
    <p class="text-xs text-cyan-300 font-medium mb-6">${project.subtitle}</p>

    <div class="mb-5">
      <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">Architecture & Dataflow Pipeline</h4>
      <div class="p-3.5 bg-black/50 rounded-xl border border-white/10 text-xs font-mono text-cyan-300 leading-relaxed">
        ${project.architecture}
      </div>
    </div>

    <div class="mb-5">
      <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">Key Architectural Innovations</h4>
      <ul class="space-y-2">
        ${project.highlights.map(h => `
          <li class="flex items-start text-xs text-slate-200">
            <i class="fas fa-check text-cyan-400 text-xs mt-1 mr-2 flex-shrink-0"></i>
            <span>${h}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <div class="mb-5">
      <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">Performance & Impact Metrics</h4>
      <div class="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
        <i class="fas fa-bolt text-emerald-400"></i>
        <span>${project.metrics}</span>
      </div>
    </div>

    <div>
      <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">Technologies Used</h4>
      <div class="flex flex-wrap gap-2">
        ${project.tags.map(t => `
          <span class="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 text-slate-200 border border-white/10">
            ${t}
          </span>
        `).join('')}
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// Resume Modal Handler
function openResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}
