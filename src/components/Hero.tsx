import { profile } from "../data/portfolio";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="welcome" className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__inner">
        <h1 className="hero__title">
          <span className="hero__title-underline">Software</span> Developer
        </h1>
        <p className="hero__accent">{profile.accent}</p>

        <div className="hero__name-row">
          <span className="hero__name-label">_Name</span>
          <span className="hero__name-line" aria-hidden="true" />
          <p className="hero__name">
            {profile.firstName}
            <br />
            {profile.lastName}
          </p>
        </div>
      </div>
    </section>
  );
}
