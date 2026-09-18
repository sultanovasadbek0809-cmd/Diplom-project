import { Route, Routes } from 'react-router-dom'
import React from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Anime from "./Anime"
import About from './components/pages/About'
import Exprince from './components/pages/Exprince'
import Projekt from './components/pages/Projekt'
import Siklls from './components/pages/Siklls'
import ProductDetail from './components/pages/ProductDetail'
import Cart from './components/pages/Card'
import Londing from './Londing'

function App() {
  return (
    <>
      <Londing />
      <Anime />
      <Navbar />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/exprince" element={<Exprince />} />
        <Route path="/projekt" element={<Projekt />} />
        <Route path="/skills" element={<Siklls />} />

        <Route path="/products/:id" element={<ProductDetail />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App