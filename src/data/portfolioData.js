// Portfolio Data Model for Naman Bhade
export const personalInfo = {
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
  resumePath: "./Naman_Bhade_Resume Data.pdf",
  bio: `Final-year B.E. (Computer Science & Engineering) student and Data Analytics Intern with hands-on experience spanning Python development, data analysis, deep packet inspection, and Java/Kotlin Android engineering. 
  
Passionate about engineering LLM-powered applications leveraging the Groq API (LLaMA 3.3 70B), building robust Flask microservices with real-time WebSockets, and creating actionable BI business dashboards. Seeking to contribute practical problem-solving and full-stack AI skills to high-impact teams.`,
  stats: [
    { label: "Production & Academic Projects", value: "5+", suffix: "" },
    { label: "Professional Internships", value: "2", suffix: " Roles" },
    { label: "National Hackathon Competitors", value: "20k+", suffix: " TechXNinjas" },
    { label: "Code Dedication & Problem Solving", value: "100%", suffix: "" }
  ]
};

export const specializations = [
  {
    title: "Generative AI & LLM Systems",
    icon: "Cpu",
    color: "from-cyan-500 to-blue-600",
    description: "Architecting LLM workflows using Groq API (LLaMA 3.3 70B), Pydantic data schemas, structured JSON validation, and automated text reasoning pipelines."
  },
  {
    title: "Data Analytics & Business Intelligence",
    icon: "BarChart3",
    color: "from-amber-500 to-orange-600",
    description: "Transforming raw metrics into strategic decisions with Python (Pandas, NumPy, Matplotlib), Power BI, DAX modeling, and exploratory data analysis (EDA)."
  },
  {
    title: "Backend, WebSockets & Security",
    icon: "ShieldAlert",
    color: "from-emerald-500 to-teal-600",
    description: "Building resilient Flask services, RESTful APIs, real-time SocketIO applications, and packet-level network intrusion detection systems with Scapy."
  },
  {
    title: "Native Android & Systems",
    icon: "Smartphone",
    color: "from-purple-500 to-indigo-600",
    description: "Developing responsive native mobile apps in Java and Kotlin, featuring custom layouts, lifecycle stability, SQLite databases, and REST integrations."
  }
];

export const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: 92, badge: "Advanced" },
      { name: "Java", level: 85, badge: "Proficient" },
      { name: "Kotlin", level: 80, badge: "Proficient" },
      { name: "SQL", level: 88, badge: "Advanced" },
      { name: "C++", level: 78, badge: "Intermediate" },
      { name: "JavaScript", level: 82, badge: "Proficient" }
    ]
  },
  {
    category: "Data Science & Analytics",
    skills: [
      { name: "Pandas", level: 90, badge: "Advanced" },
      { name: "NumPy", level: 88, badge: "Advanced" },
      { name: "Matplotlib", level: 85, badge: "Proficient" },
      { name: "Power BI", level: 90, badge: "Advanced" },
      { name: "DAX & Data Modeling", level: 84, badge: "Proficient" },
      { name: "EDA (Exploratory Analysis)", level: 92, badge: "Advanced" },
      { name: "Excel Advanced", level: 86, badge: "Proficient" }
    ]
  },
  {
    category: "Generative AI & LLMs",
    skills: [
      { name: "Groq API", level: 90, badge: "Advanced" },
      { name: "LLaMA 3.3 70B", level: 88, badge: "Advanced" },
      { name: "Pydantic", level: 86, badge: "Proficient" },
      { name: "JSON Schema Validation", level: 92, badge: "Advanced" },
      { name: "Prompt Engineering", level: 88, badge: "Advanced" },
      { name: "Structured Data Extraction", level: 90, badge: "Advanced" }
    ]
  },
  {
    category: "Backend & Web Architecture",
    skills: [
      { name: "Flask", level: 90, badge: "Advanced" },
      { name: "Flask-SocketIO", level: 85, badge: "Proficient" },
      { name: "RESTful APIs", level: 92, badge: "Advanced" },
      { name: "WebSockets", level: 84, badge: "Proficient" },
      { name: "HTML5 & CSS3", level: 90, badge: "Advanced" },
      { name: "Responsive UI/UX", level: 85, badge: "Proficient" }
    ]
  },
  {
    category: "Mobile & Databases",
    skills: [
      { name: "Android SDK", level: 85, badge: "Proficient" },
      { name: "Android Studio", level: 88, badge: "Proficient" },
      { name: "MySQL", level: 86, badge: "Proficient" },
      { name: "SQLite", level: 90, badge: "Advanced" },
      { name: "MongoDB", level: 78, badge: "Intermediate" },
      { name: "Firebase", level: 82, badge: "Proficient" }
    ]
  },
  {
    category: "Security & DevOps Tools",
    skills: [
      { name: "Scapy", level: 88, badge: "Advanced" },
      { name: "Deep Packet Inspection (DPI)", level: 86, badge: "Proficient" },
      { name: "Intrusion Detection (IDS)", level: 85, badge: "Proficient" },
      { name: "BPF Filters & PCAP", level: 82, badge: "Proficient" },
      { name: "OpenCV", level: 80, badge: "Proficient" },
      { name: "Git & GitHub", level: 90, badge: "Advanced" }
    ]
  }
];

export const projectsData = [
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer & Candidate Matcher",
    category: "Generative AI",
    subtitle: "Automated candidate-job fit scoring with LLaMA 3.3 70B & JSON Schema validation",
    tags: ["Python", "Groq API", "LLaMA 3.3 70B", "Pydantic", "Flask", "JSON Schema"],
    featured: true,
    highlights: [
      "Built an LLM-powered screening tool parsing unstructured resumes and job descriptions into deterministic schemas.",
      "Engineered Pydantic data models for strict JSON Schema validation, eliminating hallucinated output.",
      "Computed algorithmic percentage match scores, highlighted missing/matched competencies, and generated HR executive summaries.",
      "Reduced candidate pre-screening overhead with ultra-low latency inference via Groq Cloud API."
    ],
    architecture: "Client Web / REST API -> Flask Orchestrator -> Groq API (LLaMA 3.3 70B) -> Pydantic Schema Validator -> Match Scoring Engine -> Visual Analytics Output",
    metrics: "Sub-second inference, 100% structured JSON compliance, automated skill gap mapping"
  },
  {
    id: "weather-analytics-dashboard",
    title: "Weather Analytics & Air Quality Dashboard",
    category: "Data Analytics",
    subtitle: "Interactive Power BI BI dashboard with DAX modeling & multidimensional atmospheric insights",
    tags: ["Power BI", "DAX", "Weather API (JSON)", "Data Modeling", "EDA"],
    featured: true,
    highlights: [
      "Engineered a production-ready Power BI dashboard consuming real-time JSON feeds from Weather API.",
      "Architected relational data models splitting data into current, hourly, daily forecasts, and geospatial location tables.",
      "Visualized micro-climate metrics: temperature, humidity, wind vectors, UV index, and rain probability.",
      "Tracked comprehensive Air Quality indices: PM2.5, PM10, CO, NO2, O3, and SO2 using KPI cards, trend donuts, and interactive location slicers."
    ],
    architecture: "Weather API (JSON) -> ETL & Power Query Ingestion -> Star/Snowflake Data Schema -> DAX Calculated Measures -> Interactive Power BI Visualizations",
    metrics: "Multi-parameter Air Quality tracking, dynamic time-horizon forecasts, interactive slicing"
  },
  {
    id: "packet-pulse",
    title: "PacketPulse – Deep Packet Analyzer & IDS",
    category: "Systems & Security",
    subtitle: "Web-based DPI engine & intrusion detection system with protocol decoding",
    tags: ["Python", "Flask", "Scapy", "DPI", "IDS", "HTML5", "CSS3", "JavaScript"],
    featured: true,
    highlights: [
      "Engineered a web-based Deep Packet Inspection (DPI) tool decoding Link-to-Application layer network protocols in real-time.",
      "Integrated signature and heuristic IDS rules to flag cyber threats including TCP SYN floods, aggressive port scans, and cleartext credentials.",
      "Implemented Berkeley Packet Filters (BPF) for granular traffic isolation and PCAP export capability for post-incident digital forensics.",
      "Delivered live socket streaming of network metrics and protocol breakdowns to an intuitive browser interface."
    ],
    architecture: "Network NIC -> Scapy Sniffer -> BPF Filter -> Protocol Parser & Threat Heuristics -> Flask WebSocket Emitter -> Live Web Dashboard",
    metrics: "Real-time threat alerting, Link-to-App protocol inspection, forensic PCAP generation"
  },
  {
    id: "qr-attendance-system",
    title: "Real-Time QR Attendance & Analytics System",
    category: "Backend & Vision",
    subtitle: "Computer-vision automated attendance tracking with duplicate prevention & multi-location support",
    tags: ["Python", "OpenCV", "Pandas", "SQLite/MySQL", "Flask", "Computer Vision"],
    featured: false,
    highlights: [
      "Designed an automated computer-vision attendance scanner with real-time video feed decoding via OpenCV.",
      "Created duplicate-scan prevention algorithms and role-based access control (Admin, Instructor, Student).",
      "Built automated reporting pipelines generating detailed attendance analytics in CSV, Excel, and PDF formats.",
      "Engineered multi-location support allowing geo-distributed tracking with SQLite and MySQL persistence."
    ],
    architecture: "Webcam / Mobile Camera -> OpenCV QR Decoding -> Anti-Replay Validation -> Database Transaction -> Real-Time Admin Dashboard & Export Engine",
    metrics: "Instant recognition, 0% duplicate entries, automated PDF/Excel attendance exports"
  },
  {
    id: "collaborative-whiteboard",
    title: "Real-Time Collaborative Whiteboard",
    category: "Full Stack & Web",
    subtitle: "High-concurrency collaborative canvas supporting 50+ simultaneous peers with WebSockets",
    tags: ["Python", "Flask", "Flask-SocketIO", "WebSockets", "HTML5 Canvas", "Vector Export"],
    featured: false,
    highlights: [
      "Engineered an interactive collaborative canvas supporting 50+ concurrent users with sub-millisecond stroke synchronization.",
      "Implemented password-protected private rooms, full undo/redo action stacks, and autosave snapshots.",
      "Supported multi-format vector exports including high-resolution PNG, scalable SVG, and printable PDF documents.",
      "Optimized WebSocket bandwidth using delta-compression and throttled broadcasting."
    ],
    architecture: "HTML5 Canvas -> Socket.IO Client -> Flask-SocketIO Event Hub -> Memory Cache / Session Manager -> Broadcast Sync to Room Peers",
    metrics: "50+ concurrent peers per session, lossless SVG/PDF exports, sub-10ms broadcast latency"
  }
];

export const experienceData = [
  {
    role: "Data Analytics Intern",
    company: "E-katta Innovators LLP",
    location: "Chh. Sambhajinagar, Maharashtra",
    period: "Aug 2026 – Present",
    current: true,
    type: "Internship",
    description: "Spearheading exploratory data analysis, automated data cleaning pipelines, and executive Power BI dashboards to steer strategic business decisions.",
    responsibilities: [
      "Performed automated data cleaning and exploratory data analysis (EDA) using Python (Pandas, NumPy, Matplotlib).",
      "Architected interactive dashboards in Power BI providing actionable operational insights to leadership.",
      "Collaborated closely with cross-functional engineering and product teams to optimize data-driven business processes."
    ],
    technologies: ["Python", "Pandas", "Power BI", "Matplotlib", "Data Modeling", "EDA"]
  },
  {
    role: "Android Developer Intern",
    company: "Mountrich Solution Pvt. Ltd.",
    location: "Amravati, Maharashtra",
    period: "Sep 2023 – Dec 2023",
    current: false,
    type: "Internship",
    description: "Built and optimized native Android applications with intuitive user experiences and dependable backend connectivity.",
    responsibilities: [
      "Developed robust Android applications in Java and Kotlin featuring modern responsive UI/UX using custom layouts and widgets.",
      "Integrated RESTful APIs, third-party libraries, and SQLite local storage to enhance application stability and offline performance.",
      "Participated in agile code reviews, debugging sessions, and performance profiling."
    ],
    technologies: ["Java", "Kotlin", "Android SDK", "Android Studio", "RESTful APIs", "SQLite"]
  }
];

export const educationData = [
  {
    degree: "B.E. in Computer Science and Engineering",
    institution: "ICEEM, Chh. Sambhajinagar",
    period: "2024 – Present",
    status: "Final Year Pursuing",
    description: "Focusing on advanced algorithms, distributed systems, machine learning, and software architecture."
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Government Polytechnic, Murtizapur",
    period: "Completed May 2024",
    status: "Graduated with Distinction",
    description: "Built strong foundations in core computing, object-oriented programming (C++, Java), data structures, and database management."
  }
];

export const certificationsData = [
  {
    title: "Paranox 2.0 – National Level Innovation Hackathon",
    issuer: "TechXNinjas",
    date: "Aug–Nov 2025",
    highlight: "Top echelon competitor in nationwide hackathon with 20,119 participants across India.",
    type: "Achievement",
    badge: "National Hackathon"
  },
  {
    title: "Master Android Application – Build 3 Apps from Scratch",
    issuer: "Udemy",
    date: "Jan 2025",
    highlight: "Comprehensive native Android application development spanning architecture, lifecycle, and network layers.",
    type: "Certification",
    badge: "Mobile Dev"
  },
  {
    title: "Green Skills and Artificial Intelligence – Foundation Course",
    issuer: "Edunet Foundation / AICTE",
    date: "Oct 2025",
    highlight: "Authorized certification on AI principles, sustainable computing, and ethical technology practices.",
    type: "Certification",
    badge: "AI & Sustainability"
  },
  {
    title: "Python Programming – Concepts, Loops & Functions",
    issuer: "The Angaar Batch",
    date: "2025",
    highlight: "Deep-dive practical mastery in Python foundational algorithms, modular coding, and data manipulation.",
    type: "Certification",
    badge: "Python Mastery"
  },
  {
    title: "Workshop on Digital Forensics and Cyber Investigation",
    issuer: "Slytherin Edutech",
    date: "Jul 2025",
    highlight: "Hands-on packet analysis, incident response, evidence preservation, and network intrusion forensics.",
    type: "Workshop",
    badge: "Cyber Forensics"
  }
];
