import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import CaptainSignup from './pages/CaptainSignup.jsx'
import CaptainLogin from './pages/CaptainLogin.jsx'
import UserLogin from './pages/UserLogin.jsx'
import UserSignup from './pages/UserSignup.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user-login' element={<UserLogin/>} />
        <Route path='/user-signup' element={<UserSignup/>} />
        <Route path='/captain-login' element={<CaptainLogin/>} />
        <Route path='/captain-signup' element={<CaptainSignup/>} />
      </Routes>  
    </div>
  )
}

export default App