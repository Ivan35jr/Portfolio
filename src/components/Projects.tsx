import { Link } from "react-router-dom";
import { projects } from "../data/portfolio";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <p className="projects__eyebrow">_Selected Work</p>
        <h2 className="projects__title">Projects</h2>

        <div className="projects__grid">
          {projects.map((p) => (
            <Link className="project-card" to={`/projects/${p.slug}`} key={p.slug}>
              <div className="project-card__top">
                <span className="project-card__index">{p.index}</span>
                <span className="project-card__arrow" aria-hidden="true">
                  →
                </span>
              </div>
              <h3 className="project-card__name">{p.name}</h3>
              <p className="project-card__desc">{p.description}</p>
              <ul className="project-card__stack">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <span className="project-card__cta">View details</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
