import { useState } from 'react'
import Hero from "./Components/HeroSection/Hero"
import About from './Components/About/About'
import Service from "./Components/Services/Services"
import Products from "./Components/Products/ourProducts"
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'

import './App.css'
import Header from './Components/Header/Header'
import ServiceDetail from './Components/Services/SeviceDetails'
import PrivacyPolicy from './Components/Pages/PrivecyandPolicy'
import TermsAndConditions from './Components/Pages/TermsandConditions'
import CookiePolicy from './Components/Pages/CookieandPolicy'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './Components/Scroll/Scrolltop'

function App() {
  return (
    <>
    <ScrollToTop />
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
          path="/service/:id"
          element={
           <>
             <section className="pt-20">
                <ServiceDetail />
             </section>
             <Contact />
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
        <Route
          path="/privacy-policy"
          element={
            <>
            <section id="privacy-policy" className="pt-20">
               <PrivacyPolicy />
            </section>
            <Footer />
            </>
          }
        />
        <Route
          path="/terms-conditions"
          element={
            <>
            <section id="privacy-policy" className="pt-20">
               <TermsAndConditions />
            </section>
            <Footer />
            </>
          }
        />
        <Route
          path="/cookie-policy"
          element={
            <>
            <section id="privacy-policy" className="pt-20">
               <CookiePolicy />
            </section>
            <Footer />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App;
