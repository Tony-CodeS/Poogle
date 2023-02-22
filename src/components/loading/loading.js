import React from 'react'
import './loading.css'
import img from "../../assets/Poogle.png"

function loading() {
  return (
    <div className='loading-div'>
  <div className='secondLoadingDiv'>
  <div className='image'>
    <img src={img} alt="Logo" className='logo' />

    </div>
    <p className='loadingText'>Poogle - The AI Dog, Future of Reputation 
</p>
  </div>
    </div>
  )
}

export default loading