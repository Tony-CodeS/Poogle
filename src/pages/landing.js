import React from 'react'
import Nav from '../components/navbar/nav'
import Home from '../components/home/home'
import Tokenomics from '../components/tokenomics/tokenomics'
import Faq from '../components/FAQS/faq'
import Footer from '../components/footer/footer'

function landing() {
  return (
    <div>
        <Nav/>
        <Home/>
        <Tokenomics/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default landing