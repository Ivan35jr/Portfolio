import { profile, socials } from "../data/portfolio";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__name">{profile.fullName}</p>
        <ul className="footer__socials">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="footer__note">
          Built with React, Vite &amp; TypeScript · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
