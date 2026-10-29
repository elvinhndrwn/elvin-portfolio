export const LINKS = {
  linkedin: "https://www.linkedin.com/in/elvin-dwi-hendrawan-3314121b5/",
  github: "https://github.com/elvinhndrwn",
  whatsapp: "https://wa.me/6282146120284",
  cv: "/cv/CV - [2026] ELVIN DWI HENDRAWAN - BACKEND ENGINEER.pdf",
};

export const NAVLINKS = [
  {
    label: "About",
    url: "#about",
  },
  {
    label: "Work",
    url: "#work",
  },
  {
    label: "Expertise",
    url: "#expertise",
  },
  {
    label: "Stack",
    url: "#stack",
  },
];

export const PROFILE = {
  name: "Elvin Dwi Hendrawan",
  role: "Software Developer",
  avatar: "/images/pp.png",
};

export const HERO = {
  badge: "Open to work",
  headline: "Building the backend behind seamless digital experiences.",
  subline:
    "A backend-focused software developer with over 5 years of experience building reliable server-side applications — from RESTful APIs and database design to backend architecture for modern products.",
};

export const ABOUT = {
  label: "About",
  headline: "The engineer behind reliable, high-availability systems.",
  introduce: [
    `My name is ${PROFILE.name}, and I am a passionate ${PROFILE.role}. Primarily focused on Backend development, I have experience in building scalable and reliable systems using Java Spring Boot.`,
    "Currently at OLX Indonesia, I focus on bug fixing and performance optimization to ensure the high availability and stability of our automotive e-commerce platforms. Previously, I worked for PT IDStar (assigned to Bank CIMB Niaga) and PT Infosys Solusi Terpadu (assigned to Bank BTN), delivering scalable banking solutions.",
    "While my main expertise lies in backend development, I also have a basic understanding of frontend technologies, allowing me to collaborate effectively across the stack.",
  ],
};

export const SERVICE = {
  label: "Expertise",
  headline: "Reliable backend solutions for your business needs.",
  subline:
    "I specialize in building secure, scalable, and high-performance backend systems using Java Spring Boot and other stacks. " +
    "With a focus on clean architecture and efficient data handling, I help turn complex ideas into reliable digital products.",
  services: [
    {
      name: "API Development",
      icon: "LinkCircle",
      description:
        "Designing and building robust RESTful APIs with Spring Boot to ensure seamless communication between services and clients. I focus on scalability, security, and performance optimization.",
    },
    {
      name: "Database Design & Optimization",
      icon: "Data",
      description:
        "Experienced in working with PostgreSQL and other relational databases, from schema design to query optimization for better data performance and reliability.",
    },
    {
      name: "Web Development",
      icon: "Scroll",
      description:
        "Creating responsive and interactive web interfaces using modern technologies.",
    },
  ],
};

export const WORK = {
  label: "Selected work",
  headline: "Turning ideas into functional web systems.",
  subline:
    "Combining backend performance with frontend simplicity. I create efficient, user-focused solutions that power businesses and enhance digital experiences.",
  // Set `visible: false` to hide a project from the whole site
  // (hero marquee, selected work list, and featured-projects stat).
  works: [
    {
      visible: true,
      name: "New BTN Mobile Banking",
      live_demo:
        "https://play.google.com/store/apps/details?id=id.co.btn.mobilebanking.android&hl=id&pli=1",
      description:
        "Developed main functionalities for Mobile Banking such as Transfer On Us, Transfer BIFAST, Auto Debit, and Blast Notification.",
      thumbnails: "btn-mobile.png",
      type: "PT. Infosys Solusi Terpadu",
      details: [
        {
          label: "Project Background",
          text: "A mobile banking app designed to help Bank BTN customers easily check balances, make transactions, view promotions, open accounts online, and manage payment or purchase histories.",
        },
        {
          label: "Project Objective",
          text: "To provide customers with a secure, fast, and convenient digital banking experience.",
        },
        {
          label: "My Role",
          text: "As a Backend Developer, I developed APIs using Java 11 and Spring Boot, implemented JWT-based authentication for secure requests, and focused mainly on fund transfer, auto-debit, and QRIS.",
        },
      ],
    },
    {
      visible: true,
      name: "Bank BTN Back Office",
      live_demo: "#",
      description:
        "Developed and implemented APIs for CRUD operations to optimize data management within the back-office system.",
      thumbnails: "btn-backoffice.png",
      type: "PT. Infosys Solusi Terpadu",
      details: [
        {
          label: "Project Background",
          text: "A web-based back office app for managing mobile banking operations — including notification blasts, user account control, parameter setup, transaction analytics, and loan approvals.",
        },
        {
          label: "Project Objective",
          text: "To improve operational efficiency and provide centralized control over mobile banking features and user management, ensuring smooth communication between internal systems and the core banking platform.",
        },
        {
          label: "My Role",
          text: "As a Backend Developer, I built APIs with Java 11 and Spring Boot for data exchange with the core banking system, handled data validation, and implemented scheduled notification blasts.",
        },
      ],
    },
    {
      visible: true,
      name: "QAPM - Quality Assurance Performance Monitoring",
      live_demo: "#",
      description:
        "A quality assurance performance monitoring platform for Bank CIMB Niaga to track, measure, and evaluate QA performance across teams.",
      thumbnails: "",
      type: "PT IDstar Cipta Teknologi",
      details: [
        {
          label: "Project Background",
          text: "An internal platform for Bank CIMB Niaga that centralizes quality assurance performance data, helping teams monitor assessment results, scoring, and performance trends in one place.",
        },
        {
          label: "Project Objective",
          text: "To provide QA and business teams with a single source of performance insights so gaps can be identified faster and service quality can be improved.",
        },
        {
          label: "My Role",
          text: "As a Backend Developer, I built APIs with Java and Spring Boot, handled data processing and validation, and integrated the platform with internal CIMB Niaga services.",
        },
      ],
    },
    {
      visible: true,
      name: "HRIS Payroll - AMK Group",
      live_demo: "#",
      description:
        "An HRIS platform for AMK Group covering employee data management and payroll registration (PKS) with Bank CIMB Niaga.",
      thumbnails: "",
      type: "PT IDstar Cipta Teknologi",
      details: [
        {
          label: "Project Background",
          text: "Built for AMK Group to manage employee data and register company payroll through a PKS (Perjanjian Kerja Sama) with Bank CIMB Niaga, covering employee records, payroll details, and the registration workflow.",
        },
        {
          label: "Project Objective",
          text: "To digitalize and streamline the payroll registration process, reducing manual paperwork and making it easier for partner companies to register their employees.",
        },
        {
          label: "My Role",
          text: "As a Backend Developer, I developed APIs for the registration and employee data workflows, handled validation, and ensured the process stayed secure and auditable.",
        },
      ],
    },
    {
      visible: false,
      name: "Webgis - Toll Gate Jawa Bali Indonesia",
      live_demo: "https://tollgate.elvinhendrawan.dev/",
      description:
        "A static web app built with Express JS and Leaflet to show the location of toll gates in Jawa Bali, Indonesia.",
      thumbnails: "toll-gate.png",
      type: "Personal Project",
      details: [
        {
          label: "Project Background",
          text: "A monolithic web app that demonstrates how to show the location of toll gates in Jawa-Bali.",
        },
        {
          label: "Project Objective",
          text: "To provide an interactive map of toll gates in Jawa-Bali.",
        },
        {
          label: "Future Improvements",
          text: "Adding dynamic GeoJSON upload via the UI.",
        },
      ],
    },
    {
      visible: false,
      name: "URL Shortener",
      live_demo: "https://url-shortener.elvinhendrawan.dev/",
      description:
        "A URL shortener app that converts long URLs into shorter, more readable and shareable links.",
      thumbnails: "url-short.png",
      type: "Personal Project",
      details: [
        {
          label: "Project Background",
          text: "A backend-focused web app where users can convert long URLs into short, shareable links.",
        },
        {
          label: "Project Objective",
          text: "To provide a lightweight and efficient URL shortening service, while showcasing my backend development skills using Express.js and PostgreSQL.",
        },
        {
          label: "Future Improvements",
          text: "Adding Redis caching for faster redirects and duplicate URL checking to improve efficiency.",
        },
      ],
    },
  ],
  get visibleWorks() {
    return this.works.filter((item) => item.visible);
  },
};

export const STATS = [
  { value: "5+", label: "Years of experience" },
  { value: String(WORK.visibleWorks.length), label: "Featured projects" },
  { value: "8", label: "Core technologies" },
  { value: "3", label: "Enterprise teams" },
];

export const STACKS = {
  label: "Tech Stack",
  headline: "Tools and technologies that I use.",
  subline:
    "In my development process, I rely on a set of modern, reliable, and secure technologies that support building efficient and maintainable systems. " +
    "These are the tools and frameworks I frequently use in delivering high-quality backend solutions.",
  services: [
    { name: "Java", image: "/images/stack/java.png" },
    { name: "Spring Boot", image: "/images/stack/springboot.png" },
    { name: "Rust", image: "/images/stack/rust.png" },
    { name: "PostgreSQL", image: "/images/stack/postgresql.png" },
    { name: "Docker", image: "/images/stack/docker.png" },
    { name: "Cloud", image: "/images/stack/cloud.png" },
    { name: "Express JS", image: "/images/stack/express.png" },
    { name: "Redis", image: "/images/stack/redis.png" },
  ],
};

export const CTA = {
  label: "Let’s build something great together.",
  description:
    "Looking for a reliable backend developer? I specialize in building scalable APIs and efficient systems that power seamless digital experiences.",
};

export const FOOTER = {
  tagline:
    "Backend-focused software developer crafting reliable, scalable systems for modern products.",
};
