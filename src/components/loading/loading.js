import React from 'react'
import './loading.css'
import img from "../../assets/pitbullhead.png"

function loading() {
  return (
    <div className='loading-div'>
    <div className='image'>
    <img src={img} alt="Logo" className='logo' />;
    </div>
    </div>
  )
}

export default loading