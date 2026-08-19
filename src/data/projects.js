// Central source of truth for the Projects section.
// Add a new project by adding an object here — ProjectCard handles the rest.

export const projects = [
  {
    id: 'travel-landing-page',
    name: 'Travel Landing Page',
    description:
      'A responsive travel website designed to showcase tourism services, hotels, and travel experiences with a modern and user-friendly interface.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: '/projects/travel.svg',
    liveUrl: 'https://ytj1110-travel-landing-page.vercel.app/',
    githubUrl: null,
  },
  {
    id: 'crud-website',
    name: 'CRUD Website',
    description:
      'A web-based CRUD application with a clean interface for managing products and data.',
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    image: '/projects/crud.svg',
    liveUrl: 'https://ytj1110.github.io/CRUD/',
    githubUrl: null,
  },
  {
    id: 'dashboard',
    name: 'Dashboard',
    description: 'An admin dashboard with a clean and responsive user interface.',
    tech: ['React', 'JavaScript', 'CSS3'],
    image: '/projects/dashboard.svg',
    liveUrl: null,
    githubUrl: null,
  },
]
