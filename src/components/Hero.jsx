import { useEffect, useState } from 'react'
import { GitHubIcon, LinkedInIcon } from './Icons.jsx'

const ROLES = ['Full-Stack Web Developer', 'React & Vue Developer', 'Laravel + PHP Developer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const fullText = ROLES[roleIndex]
    const speed = deleting ? 35 : 65
    const pause = 1600

    if (!deleting && text === fullText) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % ROLES.length)
      return
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? fullText.slice(0, prev.length - 1) : fullText.slice(0, prev.length + 1)
      )
    }, speed)
    return () => clearTimeout(t)
  }, [text, deleting, roleIndex])

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div>
          <span className="hero__kicker">available for new opportunities</span>
          <h1 className="hero__name">Yousef Tarek</h1>
          <p className="hero__role">
            {text}
            <span className="cursor" />
          </p>
          <p className="hero__desc">
            I build responsive, modern, and user-friendly web applications with modern
            technologies — from the interface a user touches to the backend that runs it.
          </p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn--ghost">
              Contact Me
            </a>
          </div>

          <div className="hero__socials">
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
          </div>
        </div>

        <div className="hero__panel" aria-hidden="true">
          <div className="hero__panel-bar">
            <span className="hero__panel-dot" />
            <span className="hero__panel-dot" />
            <span className="hero__panel-dot" />
            <span className="hero__panel-name">developer.js</span>
          </div>
          <div className="hero__panel-body">
            <div>
              <span className="ln">1</span>
              <span className="kw">const</span> <span className="prop">developer</span> = {'{'}
            </div>
            <div>
              <span className="ln">2</span>&nbsp;&nbsp;<span className="prop">name</span>:{' '}
              <span className="str">'Yousef Tarek'</span>,
            </div>
            <div>
              <span className="ln">3</span>&nbsp;&nbsp;<span className="prop">role</span>:{' '}
              <span className="str">'Full-Stack Developer'</span>,
            </div>
            <div>
              <span className="ln">4</span>&nbsp;&nbsp;<span className="prop">stack</span>: [
              <span className="str">'React'</span>, <span className="str">'Laravel'</span>],
            </div>
            <div>
              <span className="ln">5</span>&nbsp;&nbsp;<span className="fn">buildSomething</span>
              (){' => '}
              <span className="str">'clean & scalable'</span>,
            </div>
            <div>
              <span className="ln">6</span>
              {'}'};
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
