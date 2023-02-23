import React from 'react'
import { useEffect } from 'react';
import Aos from 'aos';
import './loading.css'
import "aos/dist/aos.css" 
import img from "../../assets/Poogle.png"

function Loading() {
  useEffect(() => {
    Aos.init({duration:2000})
   }, []);
  return (
    <div className='loading-div'>
  <div className='secondLoadingDiv'>
  <div className='image'>
    <img src={img} alt="Logo" className='logo' data-aos="flip-left"/>

    </div>
    <p className='loadingText' data-aos="fade-up">Poogle - The AI Dog, Future of Reputation 
</p>
  </div>
    </div>
  )
}

export default Loading