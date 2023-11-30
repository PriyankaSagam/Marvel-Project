import './App.css'
import Characters from './pages/Characters'
import Home from './pages/Home'
import Series from './pages/Series'
import Nav from './components/Nav'
import { Route,Routes } from 'react-router-dom'
import Footer from './components/Footer'
  function App() {

    return (
    <div>
        <div>
            <Nav/>
           <Routes>
               <Route path='/home' element={<Home />} />
               <Route path='/series' element={<Series />} />
               <Route path='/characters' element={< Characters/>} />
           </Routes>
        </div>
         <div>
            <Footer/>
        </div>
    </div>
  )
}

export default App
