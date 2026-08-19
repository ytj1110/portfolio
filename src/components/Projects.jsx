import { projects } from '../data/projects.js'
import { useReveal } from '../hooks/useReveal.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  const { ref, visible } = useReveal()

  return (
    <section id="projects">
      <div className={`container reveal ${visible ? 'reveal--visible' : ''}`} ref={ref}>
        <div className="section-head">
          <span className="section-head__eyebrow">// 04 — projects</span>
          <h2 className="section-head__title">
            Things I've <span>shipped</span>
          </h2>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
