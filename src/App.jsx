import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import Lowongan from './pages/Lowongan'
import Register from './pages/Register'

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/job' element={<Lowongan />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
