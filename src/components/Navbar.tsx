import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { nav, profile } from "../data/portfolio";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <Link className="navbar__badge" to={onHome ? "#welcome" : "/#welcome"}>
          <span aria-hidden="true">★</span> {profile.country} <span aria-hidden="true">★</span>
        </Link>

        <button
          className="navbar__toggle"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar__code" aria-hidden="true">
            {"</>"}
          </span>
        </button>

        <nav className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          <span className="navbar__code navbar__code--desktop" aria-hidden="true">
            {"</>"}
          </span>
          {nav.map((item) => (
            <Link
              key={item.href}
              to={onHome ? item.href : `/${item.href}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
