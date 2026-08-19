import { useReveal } from '../hooks/useReveal.js'

const FOCUS_AREAS = [
  {
    index: '01',
    title: 'Responsive interfaces',
    desc: 'Layouts that hold up cleanly across mobile, tablet, and desktop.',
  },
  {
    index: '02',
    title: 'End-to-end builds',
    desc: 'Comfortable owning a feature from the React UI down to the Laravel API.',
  },
  {
    index: '03',
    title: 'Structured code',
    desc: 'OOP fundamentals and clean component design that stay easy to extend.',
  },
]

export default function About() {
  const { ref, visible } = useReveal()

  return (
    <section id="about">
      <div className={`container reveal ${visible ? 'reveal--visible' : ''}`} ref={ref}>
        <div className="section-head">
          <span className="section-head__eyebrow">// 02 — about</span>
          <h2 className="section-head__title">
            Who's <span>writing the code</span>
          </h2>
        </div>

        <div className="about__grid">
          <div>
            <p className="about__lead">
              I'm a web developer who enjoys turning ideas into applications people actually
              want to use.
            </p>
            <p className="about__body">
              My focus is on building responsive, modern, and user-friendly web applications —
              interfaces that feel considered, and the backend logic that supports them. I work
              comfortably across the stack, from React and Vue on the frontend to PHP and
              Laravel on the backend, backed by MySQL for data and Git for keeping it all in
              order.
            </p>
            <p className="about__body">
              I care about writing code that's easy to hand off: clear structure, sensible
              naming, and components that don't fight the next developer who opens the file.
            </p>

            <div className="about__stats">
              <div className="about__stat">
                <div className="about__stat-value">Full-Stack</div>
                <div className="about__stat-label">Frontend + backend ownership</div>
              </div>
              <div className="about__stat">
                <div className="about__stat-value">OOP</div>
                <div className="about__stat-label">Structured, maintainable code</div>
              </div>
            </div>
          </div>

          <div className="about__list">
            {FOCUS_AREAS.map((item) => (
              <div className="about__list-item" key={item.index}>
                <span className="about__list-index mono">{item.index}</span>
                <div>
                  <div className="about__list-title">{item.title}</div>
                  <div className="about__list-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
