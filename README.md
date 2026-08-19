# Yousef Tarek — Portfolio

Personal portfolio built with React + Vite.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Project structure

```
src/
  components/   Navbar, Hero, About, Skills, Projects, ProjectCard, Contact, Footer, Icons
  data/         skills.js, projects.js — edit these to update content
  hooks/        useReveal.js — scroll-reveal animation hook
  index.css     design tokens + all section styles
  App.jsx       composes the page from the sections above
  main.jsx      React entry point
public/
  projects/     placeholder cover images for each project card
```

## Notes for future edits

- To add or edit a project, edit `src/data/projects.js`. Leave `liveUrl` / `githubUrl` as
  `null` to show a disabled button until a real link is ready (this is used for the Dashboard
  project right now).
- To add or edit a skill category, edit `src/data/skills.js`.
- Colors, fonts, and spacing all live as CSS variables at the top of `src/index.css`.
- Replace the SVG placeholders in `public/projects/` with real screenshots whenever you like —
  same filenames, just swap the files.
