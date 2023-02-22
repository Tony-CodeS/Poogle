import React from 'react'
import logo from '../../assets/Poogle.png'
import './home.css'

function home() {
  return (
   <div className='mainHeroDiv'>
    <div className='SecondMainHeroDiv'>
      <div className='Nav'>
        <div id='logo'>
          <img src={logo} width='100px' height='100px' alt='imggg'/>
          <h1 className='poogle'>Poogle</h1>
        </div>
        <div className='Links'>
          <ul className='directory'>
            <li> Tokenomics</li>
            <li> Community</li>
          </ul>
          <button className='launchBtn'> Launch App</button>
        </div>
      </div>

      
    <div className='heroDes'>
    <h1 className='heroH1'> A COMMUNITY DRIVEN <h1 className='herocolored'> AI MEME</h1> TOKEN</h1>
    <div className='btns'>
      <button className='whitelistBtn'> Whitelist</button>
      <button className='whitepaperBtn'> Whitepaper</button>
    </div>
    </div>
    </div>
   </div>
  )
}

export default home