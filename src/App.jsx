import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom'
import Login from './login'
import User from './pages/user'
import { useContext } from 'react'
import Cookies from 'js-cookie'
import { AuthContext } from './context/AuthContext'


function App() {
  const { user } = useContext(AuthContext)
  console.log("token==>",Cookies.get('token'))
  return (
    <Routes>
      <Route path='/' element={user ? <Navigate to={"/user"} /> : <Login />} />
      <Route path='/user' element={user ? <User /> : <Navigate to={'/'} />} />
    </Routes>
  )
}

export default App
