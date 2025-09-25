import { useState } from 'react'
import Hero from "./Components/HeroSection/Hero"
import About from './Components/About/About'
import Service from "./Components/Services/Services"
import Products from "./Components/Products/ourProducts"
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'

import './App.css'
import Header from './Components/Header/Header'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Service />
              <Products />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/service"
          element={
            <>
              <section id="services" className="pt-20">
                  <Service />
              </section>

              <Footer />
            </>
          }
        />
        <Route
          path="/about-us"
          element={
            <>
              <section id="about">
                  <About />
              </section>
              <Footer />
            </>
          }
        />
        <Route
          path="/contact-us"
          element={
            <>
              <section id="contact" className="pt-20">
                  <Contact />
              </section>
              <Footer />
            </>
          }
        />
        <Route
          path="/our-products"
          element={
            <>
              <section id="product" className="pt-20">
                  <Products/>
              </section>
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App
// className="pt-20"