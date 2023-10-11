import  React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Port2 from './pages/portfolio/port2'
import Contact from './pages/contact/Contact'
import Themes from './components/Themes'



function App() {


  return (
<BrowserRouter>
    <Navbar/>
    <Themes/>
    <Routes>
      <Route path='home' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='portfolio' element={<Portfolio/>} />
      
      <Route path='contact' element={<Contact/>} />
      <Route path='port2' element={<Port2/>} />
    </Routes>
</BrowserRouter>
  )
}

export default App
