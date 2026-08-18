import { education } from "../data/portfolio";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="edu">
      <div className="edu__inner">
        <h2 className="edu__title">
          About Me - <span className="edu__title-accent">Education</span>
        </h2>

        <div className="edu__timeline" role="list">
          <span className="edu__rail" aria-hidden="true" />
          {education.map((item) => (
            <div className={`edu__item ${item.highlight ? "edu__item--current" : ""}`} key={item.school} role="listitem">
              <span className="edu__drop" aria-hidden="true" />
              <span className="edu__period">{item.period}</span>
              <span className="edu__school">{item.school}</span>
              <div className="edu__card">
                <p className="edu__summary">{item.summary}</p>
                {item.CGPA && (
                  <p className="edu__cgpa">CGPA: {item.CGPA}</p>
                )}
                <p className="edu__course-label">Course:</p>
                <ul className="edu__courses">
                  {item.courses.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
