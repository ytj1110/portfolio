// Central source of truth for the Projects section.
// Add a new project by adding an object here — ProjectCard handles the rest.

export const projects = [
  {
    id: "travel-landing-page",

    name: "Travel Landing Page",

    category: "Travel & Tourism",

    type: "Full Stack",

    description:
      "A responsive travel website designed to showcase tourism services, hotels, and travel experiences with a modern and user-friendly interface.",

    features: [
      "Responsive design for all devices",
      "Interactive UI with smooth animations",
      "Hotels and tourism services showcase",
    ],

    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "AOS" , "PHP" , "API"],

    image: "./1.png",

    liveUrl: "https://ytj1110-travel-landing-page.vercel.app/",

    githubUrl: null,
  },

  {
    id: "crud-website",

    name: "CRUD Website",

    category: "Web Application",

    type: "Front End",

    description:
      "A web-based CRUD application with a clean interface for managing products and data.",

    features: [
      "Create, Read, Update, Delete operations",
      "Form validation and error handling",
      "Dynamic and responsive UI",
    ],

    tech: ["JavaScript", "HTML5", "CSS3", "JSON Server", "Bootstrap"],

    image: "./2.png",

    liveUrl: "https://ytj1110.github.io/CRUD/",

    githubUrl: null,
  },

  {
    id: "dashboard",

    name: "Dashboard",

    category: "Dashboard / Admin",

    type: "Front End",

    description:
      "An admin dashboard with a clean and responsive user interface for managing data and monitoring application statistics.",

    features: [
      "Analytics charts and statistics",
      "Responsive admin interface",
      "Interactive dashboard components",
    ],

    tech: ["React", "JavaScript", "CSS3", "Recharts", "Axios"],

    image: "./3.png",

    liveUrl: "https://pento-travel-jnvm.vercel.app/",

    githubUrl: null,
  },
];
