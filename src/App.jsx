import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './login'
import User from './pages/user'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/user' element={<User />} />
    </Routes>
  )
}

export default App
