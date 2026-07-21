import './Splash.css'
import { useEffect } from 'react';
import{useNavigate} from 'react-router-dom';
function Splash() {
const navigate = useNavigate()
useEffect(() => {
  const timer = setTimeout(() => navigate('/onboarding'), 1500)
  return() => clearTimeout(timer)
}, [])

return (<div className='splash'>

          <div className='splash-logo'>F</div>
          <div className='splash-title'>FitFlow</div>
          <div className='splash-tagline'>your journey to a stronger you</div>


</div>);

}

export default Splash
