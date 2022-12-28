import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Homepage from './components/Homepage'
import Aboutus from './components/Aboutus'
import Services from './components/services'
import Products from './components/products'
import Contact from './components/contact'

import './style.css'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={< Homepage/>}/>
        <Route path='/Aboutus' element={< Aboutus/>}/>
        <Route path='/services' element={< Services/>}/>
        <Route path='/products' element={< Products/>}/>
        <Route path='/contact' element={< Contact/>}/>
      </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
