import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Characters from './pages/Characters'
import Home from './pages/Home'
import Series from './pages/Series'
import Nav from './components/Nav'
import { Route,Routes } from 'react-router-dom'

function App() {

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/series' element={<Series />} />
        <Route path='/characters' element={< Characters/>} />
       </Routes>
    </div>
  )
}

export default App
