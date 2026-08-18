import { profile } from "../data/portfolio";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <p className="about__eyebrow">About Me</p>
        <h2 className="about__name">{profile.fullName}</h2>

        <div className="about__grid">
          <div className="about__image" role="img" aria-label={`Photo of ${profile.fullName}`}>
            <span><img src="images/Profile.jpeg"></img></span>
          </div>

          <div className="about__content">
            <p className="about__tagline">
              {profile.tagline} {profile.bio}
            </p>

            <ul className="about__facts">
              {profile.facts.map((fact) => (
                <li key={fact.label}>
                  <span className="about__fact-label">{fact.label}:</span> {fact.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
