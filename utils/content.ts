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
    label: "Works",
    url: "#work",
  },
  {
    label: "Service",
    url: "/#service",
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
  badge: "Available for freelance",
  headline: `Hey, I'm ${PROFILE.lastname}. I'm a ${PROFILE.role}`,
  subline:
    "I'm a backend-focused software developer with over 4 years of experience in building reliable and efficient server-side applications. " +
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
      name: "Web Development",
      icon: "Scroll",
      description:
        "Creating responsive and interactive web interfaces using modern technologies.",
      thumbnails: "",
    },
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
  ],
};

export const WORK = {
  label: "work",
  headline: "Turning Ideas Into Functional Web Systems.",
  subline:
    "Combining backend performance with frontend simplicity. I create efficient, user-focused solutions that power businesses and enhance digital experiences.",
  works: [
    {
      name: "New BTN Mobile Banking",
      live_demo: "https://play.google.com/store/apps/details?id=id.co.btn.mobilebanking.android&hl=id&pli=1",
      description:
        "Developed main functionalities for Mobile Banking such as Transfer On Us, Transfer BIFAST, Auto Debit, and Blast Notification.",
      thumbnails: "btn-mobile.png",
      type: "Backend Developer - PT. INFOSYS SOLUSI TERPADU",
    },
    {
      name: "Bank BTN Back Office",
      live_demo: "#",
      description:
        "Developed and implemented APIs for CRUD operations to optimize data management within the back-office system.",
      thumbnails: "btn-backoffice.png",
      type: "Backend Developer - PT. INFOSYS SOLUSI TERPADU",
    },
    {
      name: "New BTN Mobile Banking",
      live_demo: "#",
      description:
        "Developed main functionalities for Mobile Banking such as Transfer On Us, Transfer BIFAST, Auto Debit, and Blast Notification.",
      thumbnails: "btn-mobile.png",
      type: "Backend Developer - PT. INFOSYS SOLUSI TERPADU",
    },
    {
      name: "Bank BTN Back Office",
      live_demo: "#",
      description:
        "Developed and implemented APIs for CRUD operations to optimize data management within the back-office system.",
      thumbnails: "btn-backoffice.png",
      type: "Backend Developer - PT. INFOSYS SOLUSI TERPADU",
    },
  ],
};

export const ABOUT = {
  label: "Let me introduce my self",
  introduce: [
    `My name is ${PROFILE.fullname}, and I am a passionate ${PROFILE.role}. Primarily focused on Backend development, I have experience in building scalable and reliable systems using Java Spring Boot.`,
    "I previously worked for 3 years at PT. Infosys Solusi Terpadu, and I’m currently working at PT. IDStar Cipta Teknologi, where I continue to develop and maintain backend services that power business-critical systems.",
    "While my main expertise lies in backend development, I also have a basic understanding of frontend technologies, allowing me to collaborate effectively across the stack.",
    ],
};

export const CTA = {
  label: "Let’s Build Something Great Together",
  description:
    "Need a clean, functional UI? I’m here to help bring your vision to life—simple, responsive, and user-focused.",
};
