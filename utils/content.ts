export const NAVLINKS = [
  {
    label: "Home",
    url: "#hero",
  },
  {
    label: "About",
    url: "#about",
  },
  {
    label: "Projects",
    url: "#work",
  },
  {
    label: "Service",
    url: "/#service",
  },
  {
    label: "Stacks",
    url: "/#stacks",
  },
];

export const PROFILE = {
  firstname: "",
  lastname: "Elvin Dwi Hendrawan",
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  },
  role: "Software Developer",
  avatar: "/images/pp.png",
};

export const HERO = {
  badge: "Open To Work",
  headline: `Hey, I'm ${PROFILE.lastname}. I'm a ${PROFILE.role}`,
  subline:
    "A Backend-focused software developer with over 4 years of experience in building reliable and efficient server-side applications. " +
    "I specialize in developing RESTful APIs, managing databases, and designing backend architectures for modern web applications.",
};

export const SERVICE = {
  label: "service",
  headline: "Reliable backend solutions for your business needs.",
  subline:
    "I specialize in building secure, scalable, and high-performance backend systems using Java Spring Boot and other stack. " +
    "With a focus on clean architecture and efficient data handling, I help turn complex ideas into reliable digital products.",
  services: [
    {
      name: "API Development",
      icon: "LinkCircle",
      description:
        "Designing and building robust RESTful APIs with Spring Boot to ensure seamless communication between services and clients. I focus on scalability, security, and performance optimization.",
      thumbnails:
        "https://cdn.dribbble.com/userupload/36796487/file/original-436c64a72733941273f9fd1f4d994883.jpg?resize=752x&vertical=center",
    },
    {
      name: "Database Design & Optimization",
      icon: "Data",
      description:
        "Experienced in working with PostgreSQL and other relational databases, from schema design to query optimization for better data performance and reliability.",
      thumbnails: "",
    },
    {
      name: "Web Development",
      icon: "Scroll",
      description:
        "Creating responsive and interactive web interfaces using modern technologies.",
      thumbnails: "",
    },
  ],
};

export const WORK = {
  label: "Projects",
  headline: "Turning Ideas Into Functional Web Systems.",
  subline:
    "Combining backend performance with frontend simplicity. I create efficient, user-focused solutions that power businesses and enhance digital experiences.",
  works: [
    {
      name: "New BTN Mobile Banking",
      live_demo:
        "https://play.google.com/store/apps/details?id=id.co.btn.mobilebanking.android&hl=id&pli=1",
      description:
        "Developed main functionalities for Mobile Banking such as Transfer On Us, Transfer BIFAST, Auto Debit, and Blast Notification.",
      thumbnails: "btn-mobile.png",
      type: "PT. INFOSYS SOLUSI TERPADU",
      details: `
        <p><strong>Project Background:</strong> AA mobile banking app designed to help Bank BTN customers easily check balances, make transactions, view promotions, open accounts online, and manage payment or purchase histories.</p>
        <p><strong>Project Objective:</strong> To provide customers with a secure, fast, and convenient digital banking experience.</p>
        <p><strong>My Role:</strong> As a Backend Developer, I developed APIs using Java 11 and Spring Boot, implemented JWT-based authentication for secure requests, and focused mainly on fund transfer Auto-debit and QRIS.</p>
      `,
    },
    {
      name: "Bank BTN Back Office",
      live_demo: "#",
      description:
        "Developed and implemented APIs for CRUD operations to optimize data management within the back-office system.",
      thumbnails: "btn-backoffice.png",
      type: "PT. INFOSYS SOLUSI TERPADU",
      details: `
        <p><strong>Project Background:</strong> A web-based back office app for managing mobile banking operations — including notification blasts, user account control, parameter setup, transaction analytics, and loan approvals.</p>
        <p><strong>Project Objective:</strong> The main goal of this project is to improve operational efficiency and provide centralized control over mobile banking features and user management, ensuring smooth communication between internal systems and the core banking platform.</p>
        <p><strong>My Role:</strong> As a Backend Developer, I built APIs with JAVA 11 and Spring Boot, for data exchange with the core banking system, handled data validation, and implemented scheduled notification blasts.</p>
      `,
    },
    {
      name: "URL Shortener",
      live_demo: "https://url-shortener.elvinhendrawan.dev/",
      description:
        "Create a URL shortener app that converts long URLs into shorter, more readable and shareable links.",
      thumbnails: "url-short.png",
      type: "Personal Project",
      details: `
          <p><strong>Project Background:</strong> This project demonstrates a backend-focused web app where users can convert long URLs into short, shareable links.</p>
          <p><strong>Project Objective:</strong> To provide a lightweight and efficient URL shortening service, while showcasing my backend development skills using Express.js and PostgreSQL.</p>
          <p><strong>Future Improvements:</strong> Adding Redis caching for faster redirects and checking for duplicate URLs to improve efficiency.</p>
      `,
    },
    {
      name: "New BTN Mobile Banking",
      live_demo:
        "https://play.google.com/store/apps/details?id=id.co.btn.mobilebanking.android&hl=id&pli=1",
      description:
        "Developed main functionalities for Mobile Banking such as Transfer On Us, Transfer BIFAST, Auto Debit, and Blast Notification.",
      thumbnails: "1.jpeg",
      type: "PT. INFOSYS SOLUSI TERPADU",
      details: `
        <p><strong>Project Background:</strong> AA mobile banking app designed to help Bank BTN customers easily check balances, make transactions, view promotions, open accounts online, and manage payment or purchase histories.</p>
        <p><strong>Project Objective:</strong> To provide customers with a secure, fast, and convenient digital banking experience.</p>
        <p><strong>My Role:</strong> As a Backend Developer, I developed APIs using Java 11 and Spring Boot, implemented JWT-based authentication for secure requests, and focused mainly on fund transfer Auto-debit and QRIS.</p>
      `,
    },
    {
      name: "Bank BTN Back Office",
      live_demo: "#",
      description:
        "Developed and implemented APIs for CRUD operations to optimize data management within the back-office system.",
      thumbnails: "2.jpeg",
      type: "PT. INFOSYS SOLUSI TERPADU",
      details: `
        <p><strong>Project Background:</strong> A web-based back office app for managing mobile banking operations — including notification blasts, user account control, parameter setup, transaction analytics, and loan approvals.</p>
        <p><strong>Project Objective:</strong> The main goal of this project is to improve operational efficiency and provide centralized control over mobile banking features and user management, ensuring smooth communication between internal systems and the core banking platform.</p>
        <p><strong>My Role:</strong> As a Backend Developer, I built APIs with JAVA 11 and Spring Boot, for data exchange with the core banking system, handled data validation, and implemented scheduled notification blasts.</p>
      `,
    },
    {
      name: "URL Shortener",
      live_demo: "https://url-shortener.elvinhendrawan.dev/",
      description:
        "Create a URL shortener app that converts long URLs into shorter, more readable and shareable links.",
      thumbnails: "3.jpeg",
      type: "Personal Project",
      details: `
          <p><strong>Project Background:</strong> This project demonstrates a backend-focused web app where users can convert long URLs into short, shareable links.</p>
          <p><strong>Project Objective:</strong> To provide a lightweight and efficient URL shortening service, while showcasing my backend development skills using Express.js and PostgreSQL.</p>
          <p><strong>Future Improvements:</strong> Adding Redis caching for faster redirects and checking for duplicate URLs to improve efficiency.</p>
      `,
    },
  ],
};

export const ABOUT = {
  label: "Let me introduce my self",
  introduce: [
    `My name is ${PROFILE.fullname}, and I am a passionate ${PROFILE.role}. Primarily focused on Backend development, I have experience in building scalable and reliable systems using Java Spring Boot.`,
    "I previously worked for 3 years at PT. Infosys Solusi Terpadu and assigned to Bank BTN Projects, and I’m currently working at PT. IDStar Cipta Teknologi, where I continue to develop and maintain backend services at Bank CIMB Niaga.",
    "While my main expertise lies in backend development, I also have a basic understanding of frontend technologies, allowing me to collaborate effectively across the stack.",
  ],
};

export const CTA = {
  label: "Let’s Build Something Great Together",
  description:
    "Looking for a reliable backend developer? I specialize in building scalable APIs and efficient systems that power seamless digital experiences.",
};

export const STACKS = {
  label: "Tech Stacks",
  headline: "Tools and technologies that I use.",
  subline:
    "In my development process, I rely on a set of modern, reliable, and secure technologies that support building efficient and maintainable systems. " +
    "These are the tools and frameworks I frequently use in delivering high-quality backend solutions.",
  services: [
    { name: "Java", image: "/images/stack/java.png" },
    { name: "Spring Boot", image: "/images/stack/springboot.png" },
    { name: "PHP", image: "/images/stack/php.png" },
    { name: "PostgreSQL", image: "/images/stack/postgresql.png" },
    { name: "Docker", image: "/images/stack/docker.png" },
    { name: "Laravel", image: "/images/stack/laravel.png" },
    { name: "Express JS", image: "/images/stack/express.png" },
    { name: "Redis", image: "/images/stack/redis.png" },
  ],
};
