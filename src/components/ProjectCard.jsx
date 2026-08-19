import { GitHubIcon, ExternalLinkIcon } from './Icons.jsx'

export default function ProjectCard({ project }) {
  const { name, description, tech, image, liveUrl, githubUrl } = project

  return (
    <article className="project-card">
      <div className="project-card__image">
        <img src={image} alt={`${name} preview`} loading="lazy" />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{name}</h3>
        <p className="project-card__desc">{description}</p>

        <div className="project-card__tech">
          {tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <div className="project-card__actions">
          {liveUrl ? (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              <ExternalLinkIcon /> Live Demo
            </a>
          ) : (
            <span className="btn btn--primary btn--disabled">
              <ExternalLinkIcon /> Live Demo
            </span>
          )}

          {githubUrl ? (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              <GitHubIcon /> Code
            </a>
          ) : (
            <span className="btn btn--ghost btn--disabled">
              <GitHubIcon /> Code
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
