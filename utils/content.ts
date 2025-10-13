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
  headline: "Custom design solutions for your requirements.",
  subline:
    "I specialize in crafting user-centered solutions for businesses and individuals. Let’s create something extraordinary together.",
  services: [
    {
      name: "Web Development",
      icon: "Scroll",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores!",
      thumbnails: "",
    },
    {
      name: "Mobile Development",
      icon: "MobileProgramming",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores!",
      thumbnails:
        "https://cdn.dribbble.com/userupload/36796487/file/original-436c64a72733941273f9fd1f4d994883.jpg?resize=752x&vertical=center",
    },
    {
      name: "UI/UX Designer",
      icon: "PenTool2",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores!",
      thumbnails: "",
    },
  ],
};

export const WORK = {
  label: "work",
  headline: "Custom design solutions for your requirements.",
  subline:
    "I specialize in crafting user-centered solutions for businesses and individuals. Let’s create something extraordinary together.",
  works: [
    {
      name: "New BTN Mobile Banking",
      live_demo: "#",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores.",
      thumbnails: "btn-mobile.png",
      type: "landing page",
    },
    {
      name: "Bank BTN Back Office",
      live_demo: "#",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores.",
      thumbnails: "btn-backoffice.png",
      type: "landing page",
    },
    {
      name: "New BTN Mobile Banking",
      live_demo: "#",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores.",
      thumbnails: "btn-mobile.png",
      type: "landing page",
    },
    {
      name: "Bank BTN Back Office",
      live_demo: "#",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores.",
      thumbnails: "btn-backoffice.png",
      type: "landing page",
    },
  ],
};

export const ABOUT = {
  label: "Let me introduce my self",
  introduce: [
    `My name is ${PROFILE.fullname}, and I am a passionate ${PROFILE.role}. Primarily focused on Backend development, I have experience in building scalable and reliable systems using Java Spring Boot.`,
    "While my main expertise lies in backend development, I also have a basic understanding of frontend technologies, allowing me to collaborate effectively across the stack.",
    "I’m passionate about solving complex problems through clean, efficient code — and I’m always eager to learn new technologies to adapt to project needs and deliver impactful solutions.",
  ],
};

export const CTA = {
  label: "Let’s Build Something Great Together",
  description:
    "Need a clean, functional UI? I’m here to help bring your vision to life—simple, responsive, and user-focused.",
};
