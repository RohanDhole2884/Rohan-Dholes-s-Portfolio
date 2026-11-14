// ═════════════════════════════════════════════════════════════════════
//  Rohan Dhole — Portfolio Data
// ═════════════════════════════════════════════════════════════════════

export const personalInfo = {
  name: "Rohan Dhole",
  firstName: "Rohan",
  location: "Kolhapur, Maharashtra, India",
  email: "dholerohan18@gmail.com",
  phone: "+91 7720922519",
  linkedin: "https://www.linkedin.com/in/rohan-dhole-2ab618328/",
  github: "https://github.com/RohanDhole3345",
  website: "https://rohandhole.in",
  resumeUrl: "/Rohan_Dhole_Resume.pdf",
  roles: [
    "Software Developer",
    "AI & Data Science Enthusiast",
    "Full Stack Developer",
    "Data Analyst",
  ],
  heroGreeting: "Hello, I'm",
  heroBio:
    "AI and Data Science student with strong foundations in Software Development. Skilled in Java, Python, and SQL. Turning vision into reality through elegant code, intelligent systems, and scalable full-stack applications.",
  aboutBio:
    "I build scalable, modern applications with a strong focus on clean architecture, delightful UX, and performance. My toolkit spans Java, Python, SQL, React, Spring Boot, FastAPI, MySQL, and Cloud DevOps — bringing ideas to life from concept to production with robust APIs and smooth interfaces.",
  stats: [
    { value: "6+ Months", label: "Experience" },
    { value: "Full Stack, Data Analytics, Database", label: "Specialty" },
    { value: "Full Stack", label: "Focus" },
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const skillsRow1 = [
  { name: "Java", category: "Core / Backend", icon: "☕" },
  { name: "Python", category: "Language / AI", icon: "🐍" },
  { name: "SQL & RDBMS", category: "Database", icon: "📋" },
  { name: "MySQL", category: "Database", icon: "🗄️" },
  { name: "React.js", category: "Frontend", icon: "⚛️" },
  { name: "Spring Boot", category: "Backend", icon: "🍃" },
  { name: "FastAPI", category: "AI / APIs", icon: "⚡" },
  { name: "JavaScript", category: "Language", icon: "✨" },
];

export const skillsRow2 = [
  { name: "AWS (EC2, S3, IAM)", category: "Cloud", icon: "☁️" },
  { name: "Docker", category: "DevOps", icon: "🐳" },
  { name: "Kubernetes", category: "DevOps", icon: "⎈" },
  { name: "Git & GitHub", category: "Version Control", icon: "🔀" },
  { name: "Power BI", category: "Data Analytics", icon: "📊" },
  { name: "Tailwind CSS", category: "UI / Styling", icon: "🎨" },
  { name: "Postman", category: "API Testing", icon: "📬" },
  { name: "DeepFace & ML", category: "Computer Vision", icon: "🤖" },
  { name: "Vercel", category: "Deployment", icon: "▲" },
  { name: "Excel", category: "Data Analytics", icon: "📈" },
  { name: "Jira", category: "Project Mgmt", icon: "📌" },
  { name: "OOP Principles", category: "Architecture", icon: "🧱" },
];

export const skillCategories = [
  { count: "20+", title: "Technologies", desc: "Full-stack, AI, Cloud & Databases" },
  { count: "4+", title: "Languages", desc: "Java, Python, SQL, JavaScript" },
  { count: "5+", title: "Frameworks", desc: "FastAPI, Spring Boot, React, Tailwind, Leaflet" },
  { count: "8+", title: "Tools & Cloud", desc: "AWS, Docker, K8s, Power BI, Git, MySQL, Vercel" },
];

export const projects = [
  {
    id: 1,
    tag: "Full Stack & ML Platform",
    title: "AASA – Aadhaar for Stray Animals",
    description:
      "A full-stack role-based web platform (Citizens, Volunteer, NGO, Admin portals) designed to streamline stray animal reporting, rescue operations, and campaign management across cities.",
    features: [
      "Role-based multi-portal architecture (Citizen, Volunteer, NGO, Admin)",
      "ML model integration for animal breed & medical health identification",
      "Interactive GPS pin-drop location reporting via React Leaflet",
      "Real-time rescue tracking workflow (Pending → In Progress → Resolved)",
      "Live analytics dashboards powered by Recharts & Tailwind CSS",
    ],
    techStack: ["React", "Spring Boot", "MySQL", "ML Model", "Tailwind CSS", "Leaflet"],
    liveUrl: "https://buildshade-rentals.vercel.app/",
    githubUrl: "https://github.com/RohanDhole3345",
    accentColor: "#00d2ef",
    tagColor: "border-cyan-400/40 text-cyan-400 bg-cyan-400/10",
  },
  {
    id: 2,
    tag: "AI & Computer Vision",
    title: "AI-Powered Attendance with Geofencing",
    description:
      "A high-precision, automated attendance platform leveraging FastAPI and DeepFace AI to automate check-ins through real-time facial recognition and high-accuracy geofencing.",
    features: [
      "Real-time facial detection & recognition using DeepFace AI",
      "6-decimal high-precision coordinate geofencing to prevent proxy check-in",
      "FastAPI asynchronous REST API endpoints for sub-second verification",
      "Robust relational database design with MySQL ensuring strict data integrity",
      "Automated attendance logs, reporting, and anomaly alerts",
    ],
    techStack: ["Python", "FastAPI", "DeepFace AI", "MySQL", "OpenCV", "Docker"],
    liveUrl: "https://github.com/RohanDhole3345",
    githubUrl: "https://github.com/RohanDhole3345",
    accentColor: "#818cf8",
    tagColor: "border-indigo-500/40 text-indigo-400 bg-indigo-500/10",
  },
  {
    id: 3,
    tag: "Data Analytics & BI",
    title: "Amazon Sales Data Analysis",
    description:
      "An end-to-end business intelligence and data analytics pipeline evaluating high-volume sales records using SQL and Power BI to uncover revenue metrics and profitability trends.",
    features: [
      "Interactive Power BI dashboard with Sales, Profit, Revenue & Regional KPIs",
      "Complex SQL aggregation queries to analyze seasonal & product trends",
      "Automated data cleaning, transformation, and ETL pipeline in Python",
      "Interactive slicing by customer segment, delivery zones, and product categories",
      "Data-driven strategic recommendations for inventory and margin optimization",
    ],
    techStack: ["MySQL", "Python", "Power BI", "SQL", "Pandas", "Excel"],
    liveUrl: "https://github.com/RohanDhole3345",
    githubUrl: "https://github.com/RohanDhole3345",
    accentColor: "#f59e0b",
    tagColor: "border-amber-500/40 text-amber-400 bg-amber-500/10",
  },
];

export const timelineItems = [
  {
    type: "exp",
    label: "Work Experience",
    title: "Software Developer",
    subtitle: "Connexis Software",
    url: "https://www.connexissoftwares.com/",
    period: "Jul 2026 – Present",
    location: "Pune (Onsite)",
    points: [
      "Working as a Software Developer building scalable web applications and enterprise solutions.",
      "Developing full-stack features, integrating RESTful services, and optimizing system performance.",
      "Collaborating with cross-functional teams to engineer high-impact software products.",
    ],
    tags: ["Software Developer", "Full Stack", "Enterprise Solutions"],
    accent: "#10b981",
  },
  {
    type: "exp",
    label: "Work Experience",
    title: "Software Developer Intern",
    subtitle: "UvXcel IT Solutions Pvt. Ltd.",
    url: "https://uvxcel.com/",
    period: "Dec 2025 – May 2026",
    location: "Remote",
    points: [
      "Worked as Software Developer Intern handling individual projects involving Data Analytics, Java, Python, and MySQL.",
      "Engineered the AI-Powered Attendance System with Face Verification and Geofencing using FastAPI & DeepFace ML Model.",
      "Designed and deployed scalable RESTful APIs, maintaining sub-second query response times with optimized MySQL schemas.",
    ],
    tags: ["FastAPI", "Python", "DeepFace", "MySQL", "Java", "REST APIs"],
    accent: "#818cf8",
  },
  {
    type: "edu",
    label: "Education",
    title: "B.Tech in Artificial Intelligence & Data Science",
    subtitle: "DKTE Society's Textile & Engineering Institute",
    period: "2022 – 2026",
    location: "Ichalkaranji, Maharashtra",
    points: [
      "Current CGPA: 7.56",
      "Core Coursework: Data Structures & Algorithms, Database Management Systems (RDBMS), Machine Learning, Cloud DevOps, Software Engineering (SDLC).",
      "Actively led technical seminars and data-driven problem solving sessions.",
    ],
    tags: ["AI & Data Science", "CGPA: 7.56", "DKTE"],
    accent: "#38bdf8",
  },
  {
    type: "lead",
    label: "Leadership & Responsibility",
    title: "Data Manager",
    subtitle: "Data Science Students Association (DSSA)",
    period: "2024 – 2025",
    location: "DKTE Campus",
    points: [
      "Managed all data repositories, student registrations, and tech logistics for university-wide AI & Data Science events.",
      "Coordinated coding competitions, hackathons, and guest lectures on emerging tech.",
    ],
    tags: ["Leadership", "Event Management", "DSSA"],
    accent: "#f43f5e",
  },
  {
    type: "edu",
    label: "Education",
    title: "Higher Secondary Certificate (HSC 12th)",
    subtitle: "Lord Jiveshwar Highschool & Jr. College",
    period: "2022",
    location: "Ichalkaranji, Maharashtra",
    points: [
      "Completed 12th Grade with 78.33% aggregate in Science stream.",
      "Built strong foundational expertise in Mathematics, Physics, and Computer Sciences.",
    ],
    tags: ["Score: 78.33%", "Science Stream"],
    accent: "#34d399",
  },
  {
    type: "edu",
    label: "Education",
    title: "Secondary School Certificate (SSC 10th)",
    subtitle: "Manere Highschool, Ichalkaranji",
    period: "2020",
    location: "Ichalkaranji, Maharashtra",
    points: [
      "Completed 10th Grade with 81.40% aggregate marks.",
      "Excellence across Mathematics, Science, and Analytical foundations.",
    ],
    tags: ["Score: 81.40%", "Manere Highschool"],
    accent: "#f59e0b",
  },
];

export const testimonials = [
  {
    quote:
      "Rohan's project execution and dedication are phenomenal. His implementation of the AI attendance platform with geofencing solved real operational challenges with exceptional accuracy.",
    name: "Tech Mentor",
    role: "UvXcel IT Solutions",
    initials: "TM",
    gradientFrom: "#6366f1",
    gradientTo: "#818cf8",
    glowColor: "rgba(99,102,241,0.15)",
    quoteColor: "text-indigo-400",
  },
  {
    quote:
      "Rohan builds the cleanest architectures in our department. From Spring Boot and React to Python ML models, his full-stack apps feel production-ready from day one.",
    name: "Batchmate & Collaborator",
    role: "DKTE AI & DS Dept",
    initials: "BC",
    gradientFrom: "#7c3aed",
    gradientTo: "#a78bfa",
    glowColor: "rgba(167,139,250,0.15)",
    quoteColor: "text-violet-400",
  },
  {
    quote:
      "His grasp of database normalization, SQL queries, and data analytics dashboards is remarkable. Always goes beyond requirements with passion and discipline.",
    name: "Faculty Guide",
    role: "Dept. of Computer Science & AI",
    initials: "FG",
    gradientFrom: "#d97706",
    gradientTo: "#fbbf24",
    glowColor: "rgba(245,158,11,0.15)",
    quoteColor: "text-amber-400",
  },
  {
    quote:
      "Working with Rohan in the DSSA team was seamless. He takes complete ownership of tasks and communicates ideas with clarity and leadership.",
    name: "DSSA Committee Member",
    role: "Student Association",
    initials: "DC",
    gradientFrom: "#0284c7",
    gradientTo: "#38bdf8",
    glowColor: "rgba(56,189,248,0.15)",
    quoteColor: "text-cyan-400",
  },
];
