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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={handleLinkClick}>
          <span className="navbar__brand-mark">YT</span>
          <span>Yousef Tarek</span>
        </a>

        <nav className="navbar__links">
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

        <button
          type="button"
          className="navbar__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span
            style={{
              transform: open
                ? "translateY(7px) rotate(45deg)"
                : "translateY(0) rotate(0)",
            }}
          />

          <span
            style={{
              opacity: open ? 0 : 1,
            }}
          />

          <span
            style={{
              transform: open
                ? "translateY(-7px) rotate(-45deg)"
                : "translateY(0) rotate(0)",
            }}
          />
        </button>
      </div>

      <nav className={`navbar__mobile ${open ? "navbar__mobile--open" : ""}`}>
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
    </header>
  );
}
