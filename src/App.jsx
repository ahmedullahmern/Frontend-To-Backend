import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './login'
import User from './user'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
