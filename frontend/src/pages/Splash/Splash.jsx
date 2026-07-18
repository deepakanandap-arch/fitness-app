import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Splash.css'

function Splash() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/onboarding'), 1500)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="splash">
      <div className="splash-logo">F</div>
      <div className="splash-title">FitFlow</div>
      <div className="splash-tagline">your journey to a stronger you</div>
    </div>
  )
}

export default Splash
