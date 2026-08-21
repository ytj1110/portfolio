import { useState } from "react";
import { useReveal } from "../hooks/useReveal.js";
import { GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from "./Icons.jsx";

const CONTACT_ITEMS = [
  {
    label: "Email",
    value: " :ytj111007@gmail.com",
    href: "mailto:ytj111007@gmail.com",
    icon: MailIcon,
  },
  {
    label: "WhatsApp",
    value: " :01206029306",
    href: "https://wa.me/201206029306",
    icon: WhatsAppIcon,
  },
  {
    label: "GitHub",
    // value: "github.com/ytj1110",
    href: "https://github.com/ytj1110",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    // value: "linkedin.com/in/yousef-tarek-dev",
    href: "https://www.linkedin.com/in/yousef-tarek-dev/",
    icon: LinkedInIcon,
  },
];

export default function Contact() {
  const { ref, visible } = useReveal();
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "201206029306";

    const message = `Hello Yousef,

Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    setStatus("Opening WhatsApp...");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact">
      <div
        className={`container reveal ${visible ? "reveal--visible" : ""}`}
        ref={ref}
      >
        <div className="section-head">
          <span className="section-head__eyebrow">// 05 — contact</span>

          <h2 className="section-head__title">
            Let's <span>build something</span>
          </h2>
        </div>

        <div className="contact__grid">
          <div>
            <p className="contact__lead">
              Have a project in mind or an opportunity to discuss? Reach out
              through whichever channel works best.
            </p>

            <div className="contact__info">
              {CONTACT_ITEMS.map(({ label, value, href, icon: Icon }) => (
                <a
                  href={href}
                  key={label}
                  className="contact__item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact__item-icon">
                    <Icon />
                  </span>

                  <span>
                    <span className="contact__item-label">{label}</span>

                    <span className="contact__item-value">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn--primary">
              Send Message
            </button>

            {status && <p className="form-note">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
