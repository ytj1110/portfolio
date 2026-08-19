import { useEffect, useState } from "react";

const LINKS = [
  { label: "Home", href: "#home", index: "01" },
  { label: "About", href: "#about", index: "02" },
  { label: "Skills", href: "#skills", index: "03" },
  { label: "Projects", href: "#projects", index: "04" },
  { label: "Contact", href: "#contact", index: "05" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand">
          <span className="navbar__brand-mark">YT</span>
          Yousef Tarek
        </a>

        <nav className="navbar__links">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              data-index={link.index}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            style={{
              transform: open ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span
            style={{
              transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {open && (
        <nav className="navbar__mobile">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              data-index={link.index}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
