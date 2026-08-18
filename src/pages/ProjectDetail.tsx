import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../data/portfolio";
import ProjectImageCarousel from "../components/ProjectImageCarousel";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const index = projects.findIndex((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="pdetail">
      <div className="pdetail__inner">
        <Link to="/#projects" className="pdetail__back">
          ← Back to all projects
        </Link>

        <div className="pdetail__head">
          <span className="pdetail__index">{project.index}</span>
          <h1 className="pdetail__title">{project.name}</h1>
          <p className="pdetail__summary">{project.summary}</p>

          <ul className="pdetail__stack">
            {project.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <div className="pdetail__actions">
            {project.link && project.link !== "#" && (
              <a className="pdetail__btn pdetail__btn--primary" href={project.link} target="_blank" rel="noreferrer">
                View live ↗
              </a>
            )}
            {project.repo && project.repo !== "#" && (
              <a className="pdetail__btn" href={project.repo} target="_blank" rel="noreferrer">
                View code ↗
              </a>
            )}
          </div>
        </div>

        <div className="pdetail__meta">
          <div>
            <p className="pdetail__meta-label">Timeline</p>
            <p className="pdetail__meta-value">{project.timeline}</p>
          </div>
          <div>
            <p className="pdetail__meta-label">Role</p>
            <p className="pdetail__meta-value">{project.role}</p>
          </div>
        </div>

        <ProjectImageCarousel images={project.images ?? []} alt={project.name} />


        <div className="pdetail__body">
          <section>
            <h2>The Problem</h2>
            <p>{project.problem}</p>
          </section>

          <section>
            <h2>Approach</h2>
            <p>{project.approach}</p>
          </section>

          <section>
            <h2>Highlights</h2>
            <ul className="pdetail__highlights">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Outcome</h2>
            <p>{project.outcome}</p>
          </section>
        </div>

        <nav className="pdetail__pagination">
          <Link to={`/projects/${prev.slug}`} className="pdetail__pagination-link">
            <span>← Previous</span>
            <strong>{prev.name}</strong>
          </Link>
          <Link to={`/projects/${next.slug}`} className="pdetail__pagination-link pdetail__pagination-link--right">
            <span>Next →</span>
            <strong>{next.name}</strong>
          </Link>
        </nav>
      </div>
    </main>
  );
}
