import { skillGroups } from '../data/skills.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Skills() {
  const { ref, visible } = useReveal()

  return (
    <section id="skills">
      <div className={`container reveal ${visible ? 'reveal--visible' : ''}`} ref={ref}>
        <div className="section-head">
          <span className="section-head__eyebrow">// 03 — skills</span>
          <h2 className="section-head__title">
            Tools I <span>build with</span>
          </h2>
        </div>

        <div className="skills__groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.id}>
              <h3 className="skill-group__label">{group.label}</h3>
              <span className="skill-group__comment">{group.comment}</span>
              <div className="skill-group__badges">
                {group.skills.map((skill) => (
                  <span className="badge" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
