import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Onboarding.css'

const SLIDES = [
  {
    id: 'coach',
    lines: ['Meet your coach,', 'start your journey'],
    image:
      'https://plus.unsplash.com/premium_photo-1661580282598-6883482b4c8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYWwlMjB0cmFpbmVyfGVufDB8fDB8fHww',
  },
  {
    id: 'plan',
    lines: ['Create a workout plan', 'to stay fit'],
    image:
      'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbmFsJTIwdHJhaW5lcnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 'action',
    lines: ['Action is the', 'key to all success'],
    cta: true,
    image:
      'https://plus.unsplash.com/premium_photo-1674059549221-e2943b475f62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29uYWwlMjB0cmFpbmVyfGVufDB8fDB8fHww',
  },
]

function Onboarding() {
  const [active, setActive] = useState(0)
  const slide = SLIDES[active]
  const isLast = active === SLIDES.length - 1

  function goNext() {
    setActive((i) => Math.min(i + 1, SLIDES.length - 1))
  }

  return (
    <div className="onboarding">
      <div
        className="onboarding-bg"
        style={{ '--photo': `url(${slide.image})` }}
        role={!isLast ? 'button' : undefined}
        tabIndex={!isLast ? 0 : undefined}
        onClick={!isLast ? goNext : undefined}
      />
      <div className="onboarding-scrim" />
      <div className="onboarding-content">
        <div className="onboarding-headline">
          {slide.lines[0]}
          <br />
          <strong>{slide.lines[1]}</strong>
        </div>
        {slide.cta && (
          <Link className="onboarding-cta" to="/login">
            Start Now ›
          </Link>
        )}
        <div className="onboarding-dots">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              className={`onboarding-dot${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Onboarding
