import { GitHubIcon, ExternalLinkIcon } from "./Icons.jsx";

export default function ProjectCard({ project }) {
  const {
    name,
    description,
    tech = [],
    image,
    liveUrl,
    githubUrl,
    category,
    type = "Full Stack",
    features = [],
  } = project;

  // Project images
  const projectImages = {
    "Travel Landing Page": "/1.png",
    "CRUD Website": "/2.png",
    Dashboard: "/3.png",
  };

  // Use the matching image automatically
  const projectImage = image || projectImages[name];

  // Dashboard live website
  const finalLiveUrl =
    name === "Dashboard"
      ? "https://pento-travel-jnvm.vercel.app/"
      : liveUrl;

  return (
    <article className="project-card">
      {/* Project Image */}
      <div className="project-card__image">
        {projectImage ? (
          <img
            src={projectImage}
            alt={`${name} preview`}
            loading="lazy"
          />
        ) : (
          <div className="project-card__image-placeholder">
            <span>&lt;/&gt;</span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="project-card__body">

        {/* Project Meta */}
        <div className="project-card__meta">
          <span className="project-card__category">
            {category}
          </span>

          <span className="project-card__type">
            {type}
          </span>
        </div>

        {/* Title */}
        <h3 className="project-card__title">
          {name}
        </h3>

        {/* Description */}
        <p className="project-card__desc">
          {description}
        </p>

        {/* Features */}
        {features.length > 0 && (
          <ul className="project-card__features">
            {features.map((feature) => (
              <li key={feature}>
                <span className="project-card__check">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Technologies */}
        {tech.length > 0 && (
          <div className="project-card__tech">
            {tech.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="project-card__actions">

          {finalLiveUrl ? (
            <a
              href={finalLiveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              <ExternalLinkIcon />
              Live Demo
            </a>
          ) : (
            <span className="btn btn--primary btn--disabled">
              <ExternalLinkIcon />
              Live Demo
            </span>
          )}

          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              <GitHubIcon />
              Code
            </a>
          ) : (
            <span className="btn btn--ghost btn--disabled">
              <GitHubIcon />
              Code
            </span>
          )}

        </div>
      </div>
    </article>
  );
}