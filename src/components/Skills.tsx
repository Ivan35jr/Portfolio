import { experience, skillGroups } from "../data/portfolio";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__inner">
        <h2 className="skills__title">
          Works <span className="skills__title-accent">&amp; Skills</span>
        </h2>

        <div className="skills__grid">
          <div className="skills__col">
            <p className="skills__label">_Experience</p>
            <ul className="skills__timeline">
              {experience.map((e) => (
                <li key={e.role}>
                  <span className="skills__period">{e.period}</span>
                  <div>
                    <p className="skills__role">{e.role}</p>
                    <p className="skills__org">{e.org}</p>
                    <ul className="skills__summary">
                      {e.summary.map((point, index) => (
                        <li key={index}>
                          <p>{point}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="skills__col">
            <p className="skills__label">_Skills</p>
            <div className="skills__groups">
              {skillGroups.map((group) => (
                <div className="skills__group" key={group.title}>
                  <p className="skills__group-title">{group.title}</p>
                  <ul className="skills__tags">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
