import React from 'react'
import Nav from '../components/navbar/nav'          
import Home from '../components/home/home'
import Tokenomics from '../components/tokenomics/tokenomics'
import Footer from '../components/footer/footer'
import About from '../components/About/about'
import RoadMap from '../components/Roadmap/RoadMap'


function landing() {
  return (
    <div>
        <Nav/>
        <Home/>
        <About/>
        <Tokenomics/>
        <RoadMap/>
        <Footer/>
       
    </div>
  )
}

export default landing