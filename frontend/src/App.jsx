import { Route, Routes } from 'react-router-dom'
import Splash from './pages/Splash/Splash.jsx'
import Onboarding from './pages/Onboarding/Onboarding.jsx'
import Login from './pages/Login/Login.jsx'
import Signup from './pages/Signup/Signup.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default App
