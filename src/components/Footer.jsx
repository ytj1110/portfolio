import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div>
            <div className="footer__name">Youssef Tarek</div>
            <div className="footer__role">Full-Stack Web Developer</div>
          </div>

          <div className="footer__socials">
            <a
              href="https://github.com/ytj1110"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/yousef-tarek-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a href="mailto:ytj111007@gmail.com" className="icon-link" aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="footer__bottom">© 2026 Youssef Tarek. All rights reserved.</div>
      </div>
    </footer>
  )
}
