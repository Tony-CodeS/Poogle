import React from 'react'
import { useEffect } from 'react';
import {motion, spring} from 'framer-motion'
import Aos from 'aos';
import "aos/dist/aos.css"
import logo from '../../assets/Poogle.png'
import './home.css'

function Home() {

  useEffect(() => {
    Aos.init({duration:2000})
   }, []);

  return (
   <div className='mainHeroDiv'>
    <div className='SecondMainHeroDiv'>
      <div className='Nav'>
        <div id='logo'>
          <img src={logo} width='100px' height='100px' alt='imggg' data-aos="zoom-in"/>
          <h1 className='poogle'>Poogle</h1>
        </div>
        <div className='Links'>
          <ul className='directory'>
            <li className='li'> Tokenomics</li>
            <li className='li'> Community</li>
          </ul>
          <button className='launchBtn' data-aos="zoom-in"> Launch App</button>
        </div>
      </div>

      
    <div className='heroDes'>
    <h1 className='heroH1' data-aos="fade-up"> A COMMUNITY DRIVEN <h1 className='herocolored'> AI MEME</h1> TOKEN</h1>
    <div className='btns'>
      <motion.button
       whileHover={{
        scale:1.1,
        originX:0,

    }}

    transition={{
        type:spring,
        stiffness:200
    }}
       className='whitelistBtn' data-aos="zoom-in"> Whitelist</motion.button>
      <motion.button 
           whileHover={{
            scale:0.9,
            originX:0,
    
        }}
    
        transition={{
            type:spring,
            stiffness:300
        }}
      className='whitepaperBtn' data-aos="zoom-in"> Whitepaper</motion.button>
    </div>
    </div>
    </div>
   </div>
  )
}

export default Home