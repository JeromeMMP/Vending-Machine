import { useState } from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './home'
import Drinks from './Drinks'
import Snacks from './Snacks'
import Sardines from './Sardines'

function App() {
 
  return (
    <>
      <div className="App">
        <BrowserRouter>
          {/* <Navbar/> */}
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Drinks" element={<Drinks/>}/>
            <Route path="/Snacks" element={<Snacks/>}/>
            <Route path="/Sardines" element={<Sardines/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
